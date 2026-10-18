<template>
  <component
    :is="to ? NuxtLink : 'span'"
    :to="to || undefined"
    class="cursor-pointer hover:bg-accent inline-flex w-fit items-center justify-center rounded-full border border-main hover:border-accent px-5 py-2 text-sm leading-5 text-main transition-colors duration-200"
    :class="[
      active ? 'bg-main text-white' : 'bg-transparent',
      to && !active ? 'hover:bg-main hover:text-white' : '',
    ]"
  >
    <slot />
  </component>
</template>

<script setup>
import { NuxtLink } from "#components";

defineProps({
  to: {
    type: String,
    default: "",
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>
