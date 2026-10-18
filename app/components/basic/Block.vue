<template>
  <div
    :class="[collapsed ? 'mt-0' : 'mt-15', black ? 'text-white' : 'text-main']"
  >
    <div class="flex gap-4 justify-between">
      <div :class="slots.bar ? 'min-w-0 flex-1' : 'w-full'">
        <Header level="h2">
          {{ title }}
        </Header>

        <Paragraph v-if="description" class="mt-4">
          {{ description }}
        </Paragraph>
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
import Paragraph from "../typography/Paragraph.vue";
const slots = useSlots();

defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  collapsed: {
    type: Boolean,
    default: false,
  },
  black: {
    type: Boolean,
    default: false,
  },
});
</script>
