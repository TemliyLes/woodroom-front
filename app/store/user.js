import { defineStore } from "pinia";

const endpoints = {
  me: "/auth/me",
  login: "/auth/login",
  register: "/auth/register",
  logout: "/auth/logout",
  forgotPassword: "/auth/forgot-password",
  resetPassword: "/auth/reset-password",
  changePassword: "/auth/change-password",
};

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    initialized: false,
    loading: false,
    error: null,
    success: null,
  }),

  getters: {
    isAuth: (state) => !!state.user,
    isGuest: (state) => !state.user,
  },

  actions: {
    clearError() {
      this.error = null;
      this.success = null;
    },

    getErrorMessage(error) {
      const data = error?.data;

      if (typeof data?.message === "string") {
        return data.message;
      }

      if (typeof data?.error === "string") {
        return data.error;
      }

      return error?.message || "Произошла ошибка. Попробуйте ещё раз.";
    },

    async request(endpoint, options = {}) {
      const config = useRuntimeConfig();

      const baseURL = config.public.apiBase?.replace(/\/$/, "");

      const path = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;

      const url = `${baseURL || ""}${path}`;

      const fetcher = import.meta.server ? useRequestFetch() : $fetch;

      return await fetcher(url, {
        credentials: "include",
        ...options,
      });
    },

    async execute(action) {
      this.loading = true;
      this.clearError();

      try {
        return await action();
      } catch (error) {
        this.error = this.getErrorMessage(error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async fetchUser(force = false) {
      if (this.initialized && !force) {
        return this.user;
      }

      try {
        const data = await this.request(endpoints.me);

        this.user = data.user ?? data;
        return this.user;
      } catch (error) {
        this.user = null;

        if (error?.statusCode !== 401 && error?.status !== 401) {
          this.error = this.getErrorMessage(error);
        }

        return null;
      } finally {
        this.initialized = true;
      }
    },

    async login({ email, password }) {
      return this.execute(async () => {
        const data = await this.request(endpoints.login, {
          method: "POST",
          body: { email, password },
        });

        this.user = data.user ?? null;

        if (!this.user) {
          await this.fetchUser(true);
        }

        if (!this.user) {
          throw new Error("Не удалось получить данные пользователя");
        }

        this.initialized = true;
        this.success = "Вы успешно вошли в аккаунт";

        return data;
      });
    },

    async register({ name, email, password, passwordConfirmation }) {
      return this.execute(async () => {
        const data = await this.request(endpoints.register, {
          method: "POST",
          body: {
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
          },
        });

        if (data.user) {
          this.user = data.user;
          this.initialized = true;
        }

        this.success = data.message || "Регистрация прошла успешно";

        return data;
      });
    },

    async logout() {
      return this.execute(async () => {
        await this.request(endpoints.logout, {
          method: "POST",
        });

        this.user = null;
        this.initialized = true;
        this.success = "Вы вышли из аккаунта";
      });
    },

    async forgotPassword(email) {
      return this.execute(async () => {
        const data = await this.request(endpoints.forgotPassword, {
          method: "POST",
          body: { email },
        });

        this.success =
          data.message ||
          "Если аккаунт существует, мы отправим письмо для восстановления";

        return data;
      });
    },

    async resetPassword({ token, email, password, passwordConfirmation }) {
      return this.execute(async () => {
        const data = await this.request(endpoints.resetPassword, {
          method: "POST",
          body: {
            token,
            email,
            password,
            password_confirmation: passwordConfirmation,
          },
        });

        this.success = data.message || "Пароль успешно изменён";

        return data;
      });
    },

    async changePassword({ currentPassword, password, passwordConfirmation }) {
      return this.execute(async () => {
        const data = await this.request(endpoints.changePassword, {
          method: "POST",
          body: {
            current_password: currentPassword,
            password,
            password_confirmation: passwordConfirmation,
          },
        });

        this.success = data.message || "Пароль успешно изменён";

        return data;
      });
    },

    resetState() {
      this.user = null;
      this.initialized = false;
      this.loading = false;
      this.error = null;
      this.success = null;
    },
  },
});
