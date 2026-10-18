<template>
  <div :class="collapsed ? 'mt-0' : 'mt-15'">
    <div class="flex gap-4 justify-between">
      <div :class="slots.bar ? 'w-1/2' : 'w-full'">
        <Header level="h2">{{ title }}</Header>
      </div>

      <div
        v-if="slots.bar"
        class="flex min-w-0 flex-1 items-center justify-end"
      >
        <slot name="bar" />
      </div>
    </div>

    <div class="mt-6">
      <slot />
    </div>
  </div>
</template>

<script setup>
import Header from "../typography/Header.vue";

const slots = useSlots();

defineProps({
  title: {
    type: String,
    default: "",
  },
  collapsed: {
    type: Boolean,
    default: false,
  },
});
</script>
