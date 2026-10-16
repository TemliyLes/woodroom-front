<template>
  <section
    class="relative w-full overflow-hidden"
    aria-label="Главный баннер"
    @mouseenter="pause"
    @mouseleave="resume"
    @focusin="pause"
    @focusout="onFocusOut"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
  >
    <div class="relative h-[420px] md:h-[444px] rounded-xl overflow-hidden">
      <div
        v-for="(slide, index) in items"
        :key="slide.id ?? index"
        class="absolute inset-0 transition-opacity duration-700 ease-in-out"
        :class="
          index === activeIndex
            ? 'z-10 opacity-100'
            : 'pointer-events-none z-0 opacity-0'
        "
        :aria-hidden="index !== activeIndex"
        :inert="index !== activeIndex"
      >
        <img
          :src="slide.image"
          :alt="slide.alt || ''"
          :loading="index === 0 ? 'eager' : 'lazy'"
          class="absolute inset-0 h-full w-full object-cover"
        />

        <div
          class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"
        />

        <div
          class="relative z-10 mx-auto flex h-full max-w-7xl items-center px-12 md:px-24"
        >
          <div class="max-w-2xl text-white">
            <Header class="mb-2">
              {{ slide.title }}
            </Header>

            <p
              v-if="slide.description"
              class="max-w-xl text-base leading-relaxed text-white/85 md:text-xl"
            >
              {{ slide.description }}
            </p>

            <NuxtLink v-if="slide.link" :to="slide.link" class="mt-8">
              <div class="flex flex-wrap gap-5 mt-8">
                <Button
                  variant="white"
                  class="min-h-15 px-10"
                  @click="navigateTo('/catalog')"
                >
                  Перейти в каталог
                </Button>

                <Button
                  variant="white-outline"
                  class="min-h-15 px-10"
                  @click="openCalculation"
                >
                  Начать расчет
                </Button>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <template v-if="items.length > 1 && navigation">
      <button
        type="button"
        class="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/30 md:left-6"
        aria-label="Предыдущий слайд"
        @click="prev"
      >
        <span aria-hidden="true" class="text-2xl">‹</span>
      </button>

      <button
        type="button"
        class="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/30 md:right-6"
        aria-label="Следующий слайд"
        @click="next"
      >
        <span aria-hidden="true" class="text-2xl">›</span>
      </button>
    </template>

    <div
      v-if="pagination && items.length > 1"
      class="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-2"
      aria-label="Навигация по слайдам"
    >
      <button
        v-for="(_, index) in items"
        :key="index"
        type="button"
        :aria-label="`Перейти к слайду ${index + 1}`"
        :aria-current="activeIndex === index ? 'true' : undefined"
        class="h-2 rounded-full transition-all duration-300"
        :class="
          activeIndex === index
            ? 'w-8 bg-white'
            : 'w-2 bg-white/40 hover:bg-white/70'
        "
        @click="goTo(index)"
      />
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import Header from "../typography/Header.vue";
import Button from "../ui/Button.vue";
const props = defineProps({
  slides: {
    type: Array,
    default: () => [
      {
        id: 1,
        title: "Современная мебель на заказ",
        description:
          "Создаём функциональную мебель по индивидуальным размерам для вашего дома.",
        image: "https://picsum.photos/id/1068/1920/1080",
        alt: "Современный интерьер",
        link: "/catalog",
        buttonText: "Смотреть каталог",
      },
      {
        id: 2,
        title: "Продуманные решения для кухни",
        description:
          "Эстетика, эргономика и качественные материалы в каждой детали.",
        image: "https://picsum.photos/id/1081/1920/1080",
        alt: "Современная кухня",
        link: "/kitchens",
        buttonText: "Наши кухни",
      },
      {
        id: 3,
        title: "Мебель, созданная для вас",
        description:
          "Реализуем индивидуальные проекты с учётом вашего пространства и пожеланий.",
        image: "https://picsum.photos/id/1067/1920/1080",
        alt: "Интерьер жилого пространства",
        link: "/projects",
        buttonText: "Наши проекты",
      },
    ],
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  interval: {
    type: Number,
    default: 5000,
  },
  navigation: {
    type: Boolean,
    default: true,
  },
  pagination: {
    type: Boolean,
    default: true,
  },
});

const items = computed(() => props.slides ?? []);
const activeIndex = ref(0);

let timer = null;
let touchStartX = 0;

const stopAutoplay = () => {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
};

const startAutoplay = () => {
  stopAutoplay();

  if (!props.autoplay || items.value.length <= 1) return;

  timer = setInterval(
    () => {
      activeIndex.value = (activeIndex.value + 1) % items.value.length;
    },
    Math.max(1000, props.interval),
  );
};

const goTo = (index) => {
  if (!items.value.length) return;

  activeIndex.value = (index + items.value.length) % items.value.length;

  startAutoplay();
};

const next = () => goTo(activeIndex.value + 1);
const prev = () => goTo(activeIndex.value - 1);

const pause = () => stopAutoplay();
const resume = () => startAutoplay();

const onFocusOut = (event) => {
  if (!event.currentTarget.contains(event.relatedTarget)) {
    resume();
  }
};

const onTouchStart = (event) => {
  touchStartX = event.changedTouches[0]?.screenX ?? 0;
  pause();
};

const onTouchEnd = (event) => {
  const endX = event.changedTouches[0]?.screenX ?? touchStartX;
  const diff = touchStartX - endX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) next();
    else prev();
  } else {
    resume();
  }
};

watch(
  () => [props.interval, props.autoplay, items.value.length],
  () => {
    if (activeIndex.value >= items.value.length) {
      activeIndex.value = 0;
    }
    startAutoplay();
  },
);

onMounted(startAutoplay);
onUnmounted(stopAutoplay);

const openCalculation = () => {
  console.log(1111);
};
</script>
