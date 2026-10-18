<template>
  <component
    :is="to ? NuxtLink : 'article'"
    v-bind="to ? { to } : {}"
    class="group flex h-full flex-col overflow-hidden rounded-2xl border border-overlight bg-white p-2 text-main"
  >
    <div class="aspect-[4/3] w-full overflow-hidden rounded-xl bg-beige">
      <img
        :src="image || placeholder"
        :alt="title"
        class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        loading="lazy"
        decoding="async"
        @error="onImageError"
      />
    </div>

    <div class="flex flex-1 flex-col gap-3 px-2 pb-4 pt-5">
      <Header level="h5" tag="h4" class="text-black">
        {{ title }}
      </Header>

      <p class="text-[16px] leading-[1.25] text-black">
        {{ description }}
      </p>
    </div>
  </component>
</template>

<script setup>
import { NuxtLink } from "#components";
import Header from "~/components/typography/Header.vue";

defineProps({
  title: {
    type: String,
    default: "Гардеробная в нише",
  },
  description: {
    type: String,
    default: "Система MODI · тёмный профиль",
  },
  image: {
    type: String,
    default: "",
  },
  to: {
    type: String,
    default: "",
  },
});

const placeholder =
  "https://images.unsplash.com/photo-1757524625335-0b7f62089dd2?w=900&auto=format&fit=crop&q=80";

const onImageError = (event) => {
  const img = event.currentTarget;

  if (img.src !== placeholder) {
    img.src = placeholder;
  }
};
</script>
