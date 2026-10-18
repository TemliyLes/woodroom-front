<template>
  <button
    :type="type"
    :disabled="disabled"
    @click="$emit('click', $event)"
    :class="[
      'inline-flex items-center justify-center gap-2',
      'rounded-xl border px-6 py-3',
      'text-base font-medium leading-6',
      'transition-colors duration-200',
      'cursor-pointer',
      'disabled:cursor-not-allowed',
      variants[variant] || variants.accent,
    ]"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "accent",
    validator: (value) =>
      ["white-outline", "black-outline", "accent", "white", "black"].includes(
        value,
      ),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "button",
  },
});
defineEmits(["click"]);
const variants = {
  "white-outline": [
    "border-white bg-transparent text-white",
    "hover:border-white hover:bg-white/10",
    "disabled:border-gray disabled:bg-transparent disabled:text-gray",
  ].join(" "),

  "black-outline": [
    "border-black bg-transparent text-black",
    "hover:border-black hover:bg-black/10",
    "disabled:border-gray disabled:bg-transparent disabled:text-dark",
  ].join(" "),

  accent: [
    "border-accent bg-accent text-black",
    "hover:border-accent hover:bg-accent/80",
    "disabled:border-dark disabled:bg-dark disabled:text-gray",
  ].join(" "),

  white: [
    "border-white bg-white text-black",
    "hover:border-white hover:bg-white/80",
    "disabled:border-transparent disabled:bg-transparent disabled:text-dark",
  ].join(" "),

  black: [
    "border-black bg-black text-white",
    "hover:border-accent hover:bg-accent hover:text-black",
    "disabled:border-dark disabled:bg-dark disabled:text-gray",
  ].join(" "),
};
</script>
