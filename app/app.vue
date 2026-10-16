<template>
  <div class="relative w-full">
    <header class="max-w-full relative">
      <Menu :width="CONTAINER_WIDTH" :height="HEADER_HEIGHT" />
    </header>
    <div id="smooth-wrapper" :style="{ paddingTop: HEADER_HEIGHT }">
      <div id="smooth-content">
        <NuxtPage />
        <Container>
          <div>WOODROOM - проверка русского ШРИФТА</div>
          <div>isMobile {{ isMobile }}</div>
          <div>isTablet {{ isTablet }}</div>
          <div>isDesktop {{ isDesktop }}</div>
          <div>Width/Height {{ width }} / {{ height }}</div>
          <div>ready {{ ready }}</div>
        </Container>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLayout } from "./composables/useLayout";
import Menu from "~/components/menu/index.vue";
import Container from "./components/basic/Container.vue";

const {
  width,
  height,
  ready,
  isMobile,
  isTablet,
  isDesktop,
  HEADER_HEIGHT,
  CONTAINER_WIDTH,
} = useLayout();
const { $ScrollSmoother, $ScrollTrigger } = useNuxtApp();

let smoother;

onMounted(() => {
  smoother = $ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5,
    effects: true,
    smoothTouch: 0,
  });

  $ScrollTrigger.refresh();
});

onBeforeUnmount(() => {
  smoother?.kill();
});
</script>
