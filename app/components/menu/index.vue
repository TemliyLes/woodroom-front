<template>
  <Container> <DesktopTablet :tablet="Mobile" :desktop="Desktop" /></Container>
</template>

<script setup>
import DesktopTablet from "../basic/DesktopTablet.vue";
import Desktop from "./Desktop.vue";
import Mobile from "./Mobile.vue";
import Container from "../basic/Container.vue";
</script>
