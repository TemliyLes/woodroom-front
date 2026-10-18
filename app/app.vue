<template>
  <div class="relative w-full">
    <div id="teleports"></div>
    <header class="fixed top-0 z-80 grid w-full place-items-center bg-white">
      <Menu class="m-auto" :width="CONTAINER_WIDTH" :height="HEADER_HEIGHT" />
    </header>

    <div ref="smoothWrapper" :style="{ paddingTop: HEADER_HEIGHT }">
      <div ref="smoothContent">
        <div ref="pageMotion">
          <NuxtPage />
          <Footer />
        </div>
      </div>
    </div>

    <ClientOnly>
      <PageLoader @reveal="revealSite" />
    </ClientOnly>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";
import { useLayout } from "./composables/useLayout";
import Menu from "~/components/menu/index.vue";
import PageLoader from "~/components/basic/PageLoader.vue";
import Footer from "~/components/layout/Footer.vue";

const smoothWrapper = ref(null);
const smoothContent = ref(null);
const pageMotion = ref(null);

const { HEADER_HEIGHT, CONTAINER_WIDTH } = useLayout();
const { $ScrollSmoother, $ScrollTrigger } = useNuxtApp();

let smoother;
let revealTween;

function revealSite() {
  if (!pageMotion.value) return;

  revealTween?.kill();

  revealTween = gsap.to(pageMotion.value, {
    y: 0,
    duration: 1.25,
    ease: "power3.inOut",
    onComplete: () => {
      gsap.set(pageMotion.value, { clearProps: "transform" });
      $ScrollTrigger.refresh();
    },
  });
}

onMounted(() => {
  gsap.set(pageMotion.value, { y: 80 });

  smoother = $ScrollSmoother.create({
    wrapper: smoothWrapper.value,
    content: smoothContent.value,
    smooth: 1.5,
    effects: true,
    smoothTouch: 0,
  });

  $ScrollTrigger.refresh();
});

onBeforeUnmount(() => {
  revealTween?.kill();
  smoother?.kill();
});
</script>
