<template>
  <component
    :is="isMobile ? props.mobile : props.desktop"
    v-bind="isMobile ? props.mobileProps : props.desktopProps"
  />
</template>

<script setup>
import { useLayout } from "../../composables/useLayout";
const { isMobile, isTablet, isDesktop } = useLayout();
const props = defineProps({
  mobile: {
    type: Object,
  },
  desktop: {
    type: Object,
  },
  mobileProps: {
    type: Object,
  },
  desktopProps: {
    type: Object,
  },
});
</script>
