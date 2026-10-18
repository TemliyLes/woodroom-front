export default defineNuxtRouteMiddleware((to) => {
  if (to.path === "/404") return;

  const router = useRouter();
  const resolved = router.resolve(to.fullPath);

  if (!resolved.matched.length) {
    return navigateTo("/404", { replace: true });
  }
});
