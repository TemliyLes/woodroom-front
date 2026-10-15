import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    loading: false,
    error: null,
  }),

  getters: {
    isAuth: (state) => !!state.user,
  },

  actions: {
    async fetchUser() {
      const config = useRuntimeConfig();

      this.loading = true;
      this.error = null;

      try {
        //       const data = await $fetch("/user", {
        //   baseURL: config.public.apiBase,
        //   credentials: "include",
        // });
        const data = await $fetch("/faq-tags", {
          baseURL: config.public.apiBase,
          // credentials: "include",
        });

        this.user = data;

        return data;
      } catch (error) {
        this.user = null;
        this.error = error.data?.message || error.message;

        return null;
      } finally {
        this.loading = false;
      }
    },

    clearUser() {
      this.user = null;
      this.error = null;
    },
  },
});
