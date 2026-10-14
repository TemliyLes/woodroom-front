<template>
  <div>
    <div>WOODROOM</div>
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
const { width, height, ready, isMobile, isTablet, isDesktop } = useLayout();
</script>
