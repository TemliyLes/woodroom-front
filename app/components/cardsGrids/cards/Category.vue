<template>
  <NuxtLink
    :to="to"
    class="mt-6 shadow-sm transition-all duration-500 group flex h-full min-h-[320px] flex-col overflow-hidden rounded-2xl bg-milk p-5 text-main transition-colors duration-300 hover:bg-beige"
  >
    <div class="flex shrink-0 items-center justify-center">
      <img
        :src="imageSrc"
        :alt="hasImage ? title : ''"
        class="h-full w-full object-contain"
        loading="lazy"
        @error="onImageError"
      />
    </div>

    <div class="mt-auto flex items-end justify-between gap-4">
      <Header level="h5">
        {{ title }}
      </Header>

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
import { computed, ref, watch } from "vue";
import Header from "~/components/typography/Header.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  to: {
    type: String,
    required: true,
  },
});

const placeholder = "/imgs/no-img.png";
const imageError = ref(false);

const hasImage = computed(
  () => Boolean(props.image?.trim()) && !imageError.value,
);

const imageSrc = computed(() => (hasImage.value ? props.image : placeholder));

watch(
  () => props.image,
  () => {
    imageError.value = false;
  },
);

const onImageError = () => {
  if (hasImage.value) {
    imageError.value = true;
  }
};
</script>
