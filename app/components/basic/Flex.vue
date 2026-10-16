<template>
  <div :class="flexClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  direction: {
    type: String,
    default: "row",
  },
  justify: {
    type: String,
    default: "between",
  },
  align: {
    type: String,
    default: "center",
  },
  gap: {
    type: [String, Number],
    default: 4,
  },
  wrap: {
    type: Boolean,
    default: false,
  },
  inline: {
    type: Boolean,
    default: false,
  },
  full: {
    type: Boolean,
    default: false,
  },
});

const directions = {
  row: "flex-row",
  col: "flex-col",
  "row-reverse": "flex-row-reverse",
  "col-reverse": "flex-col-reverse",
};

const justifyValues = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const alignValues = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const gaps = {
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
  16: "gap-16",
};

const flexClasses = computed(() => [
  props.inline ? "inline-flex" : "flex",
  directions[props.direction] || directions.row,
  justifyValues[props.justify] || justifyValues.between,
  alignValues[props.align] || alignValues.center,
  gaps[props.gap] || "gap-4",
  props.wrap ? "flex-wrap" : "flex-nowrap",
  props.full && "w-full",
]);
</script>
