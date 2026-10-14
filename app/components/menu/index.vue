<template>
  <DesktopMobile :mobile="Mobile" :desktop="Desktop" />
</template>

<script setup>
import DesktopMobile from "../basic/DesktopMobile.vue";
import Desktop from "./Desktop.vue";
import Mobile from "./Mobile.vue";
</script>
