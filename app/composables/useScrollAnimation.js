import { onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";

export function useScrollAnimation(callback, scope) {
  let ctx;
  let frame;

  onMounted(() => {
    frame = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        if (!scope || scope.value) {
          callback();
        }
      }, scope);
    });
  });

  onBeforeUnmount(() => {
    cancelAnimationFrame(frame);
    ctx?.revert();
  });
}
