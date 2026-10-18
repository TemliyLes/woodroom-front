<template>
  <div class="w-full">
    <div class="mb-6 flex flex-wrap gap-3">
      <button
        v-for="brand in brands"
        :key="brand.id"
        type="button"
        class="rounded-full transition-all duration-500 cursor-pointer border border-main px-4 py-2 text-[16px] leading-none transition-colors duration-200"
        :class="
          active === brand.id
            ? 'border-accent bg-accent text-white'
            : 'bg-white text-main hover:bg-beige'
        "
        :aria-pressed="active === brand.id"
        @click="changeBrand(brand.id)"
      >
        {{ brand.name }}
      </button>
    </div>

    <div ref="wrapper" class="relative overflow-hidden">
      <div ref="content">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-[145px_minmax(0,1fr)]">
          <div class="flex h-[100px] items-center justify-center bg-white">
            <!-- <img
              v-if="currentBrand.logo"
              :src="currentBrand.logo"
              :alt="currentBrand.name"
              class="max-h-full max-w-full object-contain"
            />
            <span v-else class="text-[20px] font-semibold">
              {{ currentBrand.name }}
            </span> -->
            <Modus />
          </div>

          <div class="min-w-0">
            <div
              class="flex flex-col gap-4 border-b border-gray pb-5 lg:flex-row lg:items-end lg:justify-between"
            >
              <div class="min-w-0">
                <p class="mb-3 text-[12px] text-grey">
                  {{ currentBrand.categories }}
                </p>

                <Header level="h4" tag="h3">
                  {{ currentBrand.title }}
                </Header>
              </div>

              <NuxtLink
                v-if="currentBrand.productsUrl"
                :to="currentBrand.productsUrl"
                class="inline-flex shrink-0 items-center justify-center rounded-xl bg-main px-5 py-3 text-[14px] text-white transition-colors hover:bg-grey"
              >
                Смотреть товары
              </NuxtLink>
            </div>

            <div
              class="grid grid-cols-1 gap-5 border-b border-gray py-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              <div
                v-for="(feature, index) in currentBrand.features"
                :key="index"
                class="flex flex-col gap-4"
              >
                <p class="text-[14px] font-semibold leading-[17px]">
                  {{ feature.title }}
                </p>

                <p class="text-[14px] leading-[1.25]">
                  {{ feature.description }}
                </p>
              </div>
            </div>

            <div class="flex flex-wrap items-center justify-between gap-4 py-4">
              <p class="text-[14px]">Документы и технические материалы</p>

              <NuxtLink
                v-if="currentBrand.documentsUrl"
                :to="currentBrand.documentsUrl"
                class="text-[14px] underline underline-offset-2 transition-opacity hover:opacity-60"
              >
                Перейти к документам
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onUnmounted } from "vue";
import { gsap } from "gsap";
import Header from "~/components/typography/Header.vue";
import Modus from "./Modus.vue";

const props = defineProps({
  brands: {
    type: Array,
    default: () => [],
  },
});

const active = ref(props.brands[0]?.id ?? null);
const wrapper = ref(null);
const content = ref(null);

const currentBrand = computed(
  () => props.brands.find((brand) => brand.id === active.value) ?? {},
);

let timeline = null;
let switching = false;

const changeBrand = async (id) => {
  if (active.value === id || switching || !content.value || !wrapper.value)
    return;

  switching = true;

  timeline?.kill();

  const oldHeight = wrapper.value.offsetHeight;

  gsap.set(wrapper.value, {
    height: oldHeight,
  });

  await gsap.to(content.value, {
    opacity: 0,
    y: -5,
    duration: 0.45,
    ease: "power1.inOut",
  });

  active.value = id;

  await nextTick();

  if (!wrapper.value || !content.value) {
    switching = false;
    return;
  }

  const newHeight = content.value.scrollHeight;

  gsap.set(content.value, {
    opacity: 0,
    y: 5,
  });

  timeline = gsap.timeline({
    onComplete: () => {
      gsap.set(wrapper.value, {
        clearProps: "height",
      });

      gsap.set(content.value, {
        clearProps: "opacity,transform",
      });

      switching = false;
      timeline = null;
    },
  });

  timeline
    .to(
      wrapper.value,
      {
        height: newHeight,
        duration: 0.35,
        ease: "power2.inOut",
      },
      0,
    )
    .to(
      content.value,
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out",
      },
      0,
    );
};

onUnmounted(() => {
  timeline?.kill();
});
</script>
