import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";

export function useAuth() {
  const store = useAuthStore();

  const { user, isAuth, isGuest, initialized, loading, error, success } =
    storeToRefs(store);

  return {
    user,
    isAuth,
    isGuest,
    initialized,
    loading,
    error,
    success,

    login: store.login.bind(store),
    register: store.register.bind(store),
    logout: store.logout.bind(store),
    fetchUser: store.fetchUser.bind(store),
    forgotPassword: store.forgotPassword.bind(store),
    resetPassword: store.resetPassword.bind(store),
    changePassword: store.changePassword.bind(store),
    clearError: store.clearError.bind(store),
  };
}
