<template>
  <div
    class="grid pb-12"
    :class="[
      mobileClasses[mobile],
      tabletClasses[tablet],
      desktopClasses[desktop],
      gapClasses[gap],
    ]"
  >
    <template v-for="(item, index) in visibleItems" :key="item.id ?? index">
      <slot :item="item" :index="index" />
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  mobile: {
    type: Number,
    default: 1,
  },
  tablet: {
    type: Number,
    default: 2,
  },
  desktop: {
    type: Number,
    default: 4,
  },
  max: {
    type: Number,
    default: null,
  },
  gap: {
    type: Number,
    default: 4,
  },
});

const mobileClasses = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
};

const tabletClasses = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
  6: "md:grid-cols-6",
};

const desktopClasses = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
};

const gapClasses = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
};

const visibleItems = computed(() =>
  props.max === null
    ? props.items
    : props.items.slice(0, Math.max(0, props.max)),
);
</script>
