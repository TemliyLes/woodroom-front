<template>
  <NuxtLink
    :to="to"
    class="group flex h-full min-h-[380px] flex-col overflow-hidden rounded-2xl p-5 text-main transition-colors duration-300"
    :class="variant === 'beige' ? 'bg-beige' : 'bg-white'"
  >
    <div class="flex flex-1 items-center justify-center">
      <NuxtImg
        :src="image"
        :alt="title"
        class="aspect-square w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <div class="mt-auto flex items-end justify-between gap-4">
      <p class="max-w-[80%] text-[16px] font-semibold leading-[1.2]">
        {{ title }}
      </p>

      <svg
        class="h-7 w-7 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
        viewBox="0 0 40 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 16H35M24 3L37 16L24 29"
          stroke="currentColor"
          stroke-width="4"
        />
      </svg>
    </div>
  </NuxtLink>
</template>

<script setup>
import { NuxtImg } from "#components";
defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "white",
    validator: (value) => ["white", "beige"].includes(value),
  },
});
</script>
