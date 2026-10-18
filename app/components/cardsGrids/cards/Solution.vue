<template>
  <component
    :is="to ? NuxtLink : 'article'"
    v-bind="to ? { to } : {}"
    class="group flex h-full flex-col overflow-hidden rounded-2xl border border-overlight bg-white p-2 text-main"
  >
    <div class="aspect-[4/3] w-full overflow-hidden rounded-xl bg-beige">
      <img
        src="https://images.unsplash.com/photo-1757524625335-0b7f62089dd2?w=900&auto=format&fit=crop&q=80"
        :alt="title"
        class="block h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        loading="eager"
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
import { computed, ref, watch } from "vue";
import { NuxtLink } from "#components";
import Header from "~/components/typography/Header.vue";

const props = defineProps({
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

const imageError = ref(false);

const imageSrc = computed(() => {
  return imageError.value || !props.image ? placeholder : props.image;
});

watch(
  () => props.image,
  () => {
    imageError.value = false;
  },
);

const onImageError = () => {
  if (imageSrc.value !== placeholder) {
    imageError.value = true;
  }
};
</script>
