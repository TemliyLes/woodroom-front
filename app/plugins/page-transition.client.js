import { gsap } from "gsap";
import { nextTick } from "vue";

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();
  const { isPageReady } = usePageTransition();

  let transitioning = false;
  let finishing = false;
  let overlay = null;

  const getOverlay = () => {
    overlay ??= document.querySelector("#route-overlay");
    return overlay;
  };

  function animate(el, from, to) {
    if (!el) return Promise.resolve();

    gsap.killTweensOf(el);

    return new Promise((resolve) => {
      gsap.fromTo(el, from, {
        ...to,
        onComplete: resolve,
      });
    });
  }

  async function cover() {
    const el = getOverlay();
    if (!el) return;

    el.style.pointerEvents = "auto";

    await animate(
      el,
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 0.65,
        ease: "power3.inOut",
      },
    );
  }

  async function cover() {
    const el = document.getElementById("route-overlay");

    if (!el) {
      console.error("Overlay не найден");
      return;
    }

    el.style.pointerEvents = "auto";

    await new Promise((resolve) => {
      gsap.fromTo(
        el,
        {
          yPercent: 100,
          autoAlpha: 1,
        },
        {
          yPercent: 0,
          duration: 0.8,
          ease: "power3.inOut",
          onComplete: resolve,
        },
      );
    });
  }

  async function uncover() {
    const el = document.getElementById("route-overlay");
    if (!el) return;

    await new Promise((resolve) => {
      gsap.to(el, {
        yPercent: -100,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: resolve,
      });
    });

    gsap.set(el, {
      yPercent: 100,
      autoAlpha: 0,
    });

    el.style.pointerEvents = "none";
  }

  async function finish() {
    if (!transitioning || finishing) return;

    finishing = true;

    try {
      await nextTick();

      const smoother = nuxtApp.$ScrollSmoother?.get();

      // Сбрасываем позицию скролла
      if (smoother) {
        smoother.scrollTop(0);
      } else {
        window.scrollTo(0, 0);
      }

      // Дожидаемся обновления DOM
      await nextTick();

      // Обновляем геометрию
      nuxtApp.$ScrollTrigger?.refresh(true);

      // Показываем новую страницу
      await uncover();
    } finally {
      transitioning = false;
      finishing = false;

      // Разрешаем анимации новой страницы
      isPageReady.value = true;
    }
  }

  router.beforeEach(async (to, from) => {
    if (to.fullPath === from.fullPath) return;

    // Не повторяем анимацию при перенаправлении
    if (transitioning) return;

    transitioning = true;
    isPageReady.value = false;

    await cover();
  });

  // Nuxt завершил отображение страницы
  nuxtApp.hook("page:finish", async () => {
    await finish();
  });

  // Если навигация отменена
  router.afterEach(async (to, from, failure) => {
    if (failure) {
      await finish();
    }
  });

  router.onError(async () => {
    await finish();
  });
});
