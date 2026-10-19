import { watch, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";

export function usePageReveal(callback, scope) {
  const { isPageReady } = usePageTransition();

  let context = null;
  let stopWatch = null;
  let initialized = false;

  onMounted(() => {
    stopWatch = watch(
      isPageReady,
      (ready) => {
        if (!ready || initialized) return;

        initialized = true;

        context = gsap.context(() => {
          callback();
        }, scope);
      },
      { immediate: true },
    );
  });

  onBeforeUnmount(() => {
    stopWatch?.();
    context?.revert();
  });
}
