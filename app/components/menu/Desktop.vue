<template>
  <header class="w-full bg-white">
    <div class="flex items-center justify-between gap-8 py-4">
      <div class="flex shrink-0 items-center">
        <Logo class="-mt-2" />
      </div>

      <nav class="flex-1 min-w-0">
        <ul class="flex items-center justify-between gap-3 mx-4">
          <li v-for="item in menu" :key="item.to">
            <Item :item="item" />
          </li>
        </ul>
      </nav>

      <Icons />
    </div>
    <div class="bg-gray h-px w-full"></div>
  </header>
</template>

<script setup>
import Item from "./Item.vue";
import Icons from "./Icons.vue";
import Logo from "~/assets/icons/Logo.vue";
const menu = [
  { title: "Каталог", to: "/catalog" },
  { title: "Конфигураторы", to: "/configurators" },
  { title: "Решения", to: "/solutions" },
  { title: "Бренды", to: "/brands" },
  { title: "Оплата и доставка", to: "/delivery" },
  { title: "Контакты", to: "/contacts" },
];
</script>
