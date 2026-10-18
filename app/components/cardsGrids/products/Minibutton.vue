<template>
  <button
    type="button"
    class="inline-flex h-[31px] w-[220px] shrink-0 cursor-pointer items-center justify-center gap-[10px] rounded-[6px] border border-black bg-transparent px-3 py-[6px] text-black transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-main"
    :class="{ '!w-full': full }"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  full: {
    type: Boolean,
    default: false,
  },
});
</script>
