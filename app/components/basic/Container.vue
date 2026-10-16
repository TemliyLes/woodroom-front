<template>
  <div class="mx-auto w-full" :style="{ maxWidth: CONTAINER_WIDTH }">
    <slot />
  </div>
</template>

<script setup>
import { useLayout } from "~/composables/useLayout";

const { CONTAINER_WIDTH } = useLayout();
</script>
