<template>
  <article class="group flex h-full min-w-0 flex-col text-main">
    <div class="relative aspect-square overflow-hidden rounded-xl bg-beige">
      <NuxtLink :to="to" class="block h-full w-full">
        <img
          :src="imageSrc"
          :alt="title"
          class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
          @error="onImageError"
        />
      </NuxtLink>

      <button
        type="button"
        class="absolute right-3 top-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-colors"
        :aria-label="favorite ? 'Убрать из избранного' : 'В избранное'"
        :aria-pressed="favorite"
        @click="toggleFavorite"
      >
        <Star />
      </button>
    </div>

    <div class="flex flex-1 flex-col pt-3 px-3">
      <NuxtLink :to="to" class="block">
        <Paragraph class="mb-1 text-[12px] leading-[1.2] text-grey">
          {{ category }}
        </Paragraph>

        <Paragraph class="text-[14px] font-semibold leading-[16px]">
          {{ title }}
        </Paragraph>
      </NuxtLink>

      <Paragraph class="mt-1 text-[12px] leading-[1.2] text-grey">
        {{ brand }} · арт. {{ article }}
      </Paragraph>

      <div class="mt-auto pt-3">
        <Paragraph class="text-[16px] font-semibold leading-[18px]">
          {{ priceLabel }}
        </Paragraph>

        <Paragraph class="mt-1 text-[12px] leading-[1.2] text-grey">
          {{ priceDescription }}
        </Paragraph>
      </div>
    </div>
    <Minibutton class="mt-4" to="#">В корзину</Minibutton>
  </article>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import Star from "../products/Star.vue";
import Paragraph from "~/components/typography/Paragraph.vue";
import Minibutton from "../products/Minibutton.vue";

const props = defineProps({
  id: {
    type: [String, Number],
    default: null,
  },
  title: {
    type: String,
    default: "Профиль вертикальный MS 110",
  },
  category: {
    type: String,
    default: "Системы для шкафов",
  },
  brand: {
    type: String,
    default: "MODUS",
  },
  article: {
    type: String,
    default: "MS 110",
  },
  image: {
    type: String,
    default: "",
  },
  to: {
    type: String,
    default: "/catalog",
  },
  priceLabel: {
    type: String,
    default: "По запросу",
  },
  priceDescription: {
    type: String,
    default: "Уточняется после расчёта",
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["add-to-cart", "toggle-favorite"]);

const favorite = ref(props.isFavorite);
const imageError = ref(false);
const placeholder = "/imgs/no-img-full.png";

const imageSrc = computed(() =>
  imageError.value || !props.image ? placeholder : props.image,
);

const productData = computed(() => ({
  id: props.id,
  title: props.title,
  article: props.article,
  brand: props.brand,
}));

const onImageError = () => {
  if (imageSrc.value !== placeholder) {
    imageError.value = true;
  }
};

const toggleFavorite = () => {
  favorite.value = !favorite.value;
  emit("toggle-favorite", {
    ...productData.value,
    isFavorite: favorite.value,
  });
};

watch(
  () => props.image,
  () => {
    imageError.value = false;
  },
);

watch(
  () => props.isFavorite,
  (value) => {
    favorite.value = value;
  },
);
</script>
