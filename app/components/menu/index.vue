<template>
  <Container>
    <DesktopTablet
      :tablet="Mobile"
      :desktop-props="({ height: height }, { width: width })"
      :desktop="Desktop"
  /></Container>
</template>

<script setup>
import DesktopTablet from "../basic/DesktopTablet.vue";
import Desktop from "./Desktop.vue";
import Mobile from "./Mobile.vue";
import Container from "../basic/Container.vue";
defineProps({
  height: {
    type: String,
  },
  width: {
    type: String,
  },
});
</script>
