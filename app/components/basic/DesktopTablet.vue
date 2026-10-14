<template>
  <component
    :is="isTablet || isMobile ? props.mobile : props.desktop"
    v-bind="isTablet || isMobile ? props.mobileProps : props.desktopProps"
  />
</template>

<script setup>
import { useLayout } from "../../composables/useLayout";
const { isTablet, isDesktop, isMobile } = useLayout();
const props = defineProps({
  tablet: {
    type: Object,
  },
  desktop: {
    type: Object,
  },
  tabletProps: {
    type: Object,
  },
  desktopProps: {
    type: Object,
  },
});
</script>
