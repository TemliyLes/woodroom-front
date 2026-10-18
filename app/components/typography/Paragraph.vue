<template>
  <component
    :is="tag"
    class="font-involve text-[16px] font-normal leading-normal tracking-normal"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    default: "p",
  },
});
</script>
