<template>
  <component :is="tag || level" :class="[styles[level], $attrs.class]">
    <slot />
  </component>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  level: {
    type: String,
    default: "h2",
    validator: (value) => ["h1", "h2", "h3", "h4", "h5"].includes(value),
  },
  tag: {
    type: String,
    default: "",
  },
});

const styles = {
  h1: "text-[24px] leading-[1.1] font-bold md:text-[40px] md:leading-[44px]",
  h2: "text-[22px] leading-[1.1] font-bold md:text-[40px] md:leading-[40px]",
  h3: "text-[18px] leading-normal font-bold md:text-[24px]",
  h4: "text-[18px] leading-normal font-semibold md:text-[20px] md:leading-[25.5px]",
  h5: "text-[16px] leading-[19px] font-semibold md:text-[18px] md:leading-normal",
};
</script>
