<template>
  <div>
    <header><Menu /></header>

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
</template>

<script setup>
import { useLayout } from "./composables/useLayout";
import Menu from "~/components/menu/index.vue";
import Container from "./components/basic/Container.vue";

const { width, height, ready, isMobile, isTablet, isDesktop } = useLayout();
</script>
