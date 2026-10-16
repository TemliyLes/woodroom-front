<template>
  <div ref="header" class="relative" :style="{ width }">
    <div class="flex items-center justify-between gap-8 py-4">
      <div class="flex shrink-0 items-center">
        <NuxtLink to="/">
          <Logo class="-mt-2" />
        </NuxtLink>
      </div>

      <nav class="min-w-0 flex-1">
        <ul class="mx-4 flex items-center justify-between gap-3">
          <li v-for="item in menu" :key="item.to">
            <Item :item="item" />
          </li>
        </ul>
      </nav>

      <Icons />
    </div>

    <!-- Линия -->
    <div
      ref="line"
      class="absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-gray w-full"
    ></div>

    <!-- Тень -->
    <div
      ref="shadow"
      class="pointer-events-none absolute top-full left-1/2 h-4 w-full -translate-x-1/2 bg-gradient-to-b from-black/10 to-transparent opacity-0"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";

import Item from "./Item.vue";
import Icons from "./Icons.vue";
import Logo from "~/assets/icons/Logo.vue";

defineProps({
  height: String,
  width: String,
});

const header = ref(null);
const line = ref(null);
const shadow = ref(null);

const menu = [
  { title: "Каталог", to: "/catalog" },
  { title: "Конфигураторы", to: "/configurators" },
  { title: "Решения", to: "/solutions" },
  { title: "Бренды", to: "/brands" },
  { title: "Оплата и доставка", to: "/delivery" },
  { title: "Контакты", to: "/contacts" },
];
useScrollAnimation(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      start: 0,
      end: 180,
      scrub: 0.5,
      invalidateOnRefresh: true,
    },
  });

  // Линия расширяется до ширины экрана
  tl.to(line.value, {
    width: () => window.innerWidth,
    duration: 0.7,
    ease: "none",
  });

  // Затем появляется тень на всю ширину экрана
  tl.to(shadow.value, {
    width: () => window.innerWidth,
    opacity: 1,
    duration: 0.3,
    ease: "none",
  });
}, header);
</script>
