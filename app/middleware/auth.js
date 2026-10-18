export default defineNuxtRouteMiddleware(async (to) => {
  const auth = useAuthStore();

  if (!auth.initialized) {
    await auth.fetchUser();
  }

  if (!auth.isAuth) {
    return navigateTo({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  }
});
