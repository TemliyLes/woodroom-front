<template>
  <div>
    <header><Menu />1</header>
    <div>WOODROOM - проверка русского ШРИФТА</div>
    <NuxtPage />
    <div>isMobile {{ isMobile }}</div>
    <div>isTablet {{ isTablet }}</div>
    <div>isDesktop {{ isDesktop }}</div>
    <div>Width/Height {{ width }} / {{ height }}</div>
    <div>ready {{ ready }}</div>
  </div>
</template>

<script setup>
import { useLayout } from "./composables/useLayout";
import Menu from "~/components/menu/index.vue";

const { width, height, ready, isMobile, isTablet, isDesktop } = useLayout();
</script>
