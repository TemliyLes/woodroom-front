<template>
  <NuxtLink
    :to="to"
    class="group flex min-h-[84px] transition transition-all duration-500 w-full items-center justify-between gap-4 rounded-[10px] px-4 py-3 transition-colors duration-300"
    :class="
      accent
        ? 'bg-accent text-black hover:bg-haccent'
        : 'bg-dark text-white hover:bg-black'
    "
  >
    <div class="flex flex-col gap-1">
      <span class="text-[20px] leading-[24px] font-semibold">
        {{ title }}
      </span>

      <span class="text-[14px] leading-[18px]">
        {{ description }}
      </span>
    </div>

    <Chevron
      class="size-6 shrink-0"
      :class="accent ? 'text-black' : 'text-white'"
    />
  </NuxtLink>
</template>

<script setup>
import Chevron from "./Chevron.vue";

defineProps({
  title: {
    type: String,
    default: "Конфигуратор",
  },
  description: {
    type: String,
    default: "",
  },
  to: {
    type: String,
    default: "/configurators",
  },
  accent: {
    type: Boolean,
    default: false,
  },
});
</script>
