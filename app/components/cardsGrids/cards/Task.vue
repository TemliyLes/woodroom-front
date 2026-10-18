<template>
  <NuxtLink
    :to="to"
    class="group relative isolate flex h-full min-h-[260px] flex-col overflow-hidden rounded-2xl bg-beige p-5 text-main"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-haccent opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
      aria-hidden="true"
    />

    <span class="relative z-10 text-[16px] leading-normal">
      {{ number }}
    </span>

    <div class="relative z-10 mt-auto">
      <Header level="h4" tag="h4">
        {{ title }}
      </Header>

      <p class="mt-2 text-[16px] leading-[1.25]">
        {{ description }}
      </p>
    </div>

    <div class="relative z-10 mt-4">
      <svg
        class="h-8 w-8 transition-transform duration-300 ease-in-out group-hover:translate-x-2"
        viewBox="0 0 40 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 16H35M24 3L37 16L24 29"
          stroke="currentColor"
          stroke-width="4"
          stroke-linejoin="miter"
        />
      </svg>
    </div>
  </NuxtLink>
</template>

<script setup>
import Header from "~/components/typography/Header.vue";

defineProps({
  number: {
    type: String,
    default: "01",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});
</script>
