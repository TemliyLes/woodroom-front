<template>
  <div class="flex shrink-0 items-center gap-2">
    <NuxtLink
      v-for="item in data"
      :key="item.name"
      :to="item.link"
      :aria-label="item.name"
      class="flex items-center group justify-center border border-gray hover:border-accent w-11 h-11 rounded-full"
    >
      <component class="text-dark group-hover:text-accent" :is="item.icon" />
    </NuxtLink>
  </div>
</template>

<script setup>
import Sale from "~/assets/icons/bar/Sale.vue";
import Search from "~/assets/icons/bar/Search.vue";
import Star from "~/assets/icons/bar/Star.vue";
import User from "~/assets/icons/bar/User.vue";

const data = [
  {
    name: "Акции",
    icon: Sale,
    link: "/sale",
  },
  {
    name: "Поиск",
    icon: Search,
    link: "/search",
  },
  {
    name: "Избранное",
    icon: Star,
    link: "/favorites",
  },
  {
    name: "Личный кабинет",
    icon: User,
    link: "/account",
  },
];
</script>
