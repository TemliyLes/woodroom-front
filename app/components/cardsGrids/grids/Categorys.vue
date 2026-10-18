<template>
  <Grid
    :items="categories"
    :mobile="2"
    :tablet="3"
    :desktop="4"
    :max="8"
    :gap="4"
  >
    <template #default="{ item }">
      <CategoryCard v-bind="item" />
    </template>
  </Grid>
</template>

<script setup>
import Grid from "~/components/basic/Grid.vue";
import CategoryCard from "~/components/cardsGrids/cards/Category.vue";

const categories = [
  {
    id: 1,
    title: "Профили и системы для шкафов",
    to: "/catalog/profili-i-sistemy-dlya-shkafov",
  },
  {
    id: 2,
    title: "Кухонные профили",
    to: "/catalog/kuhonnye-profili",
  },
  {
    id: 3,
    title: "Фасадные профили",
    to: "/catalog/fasadnye-profili",
  },
  {
    id: 4,
    title: "Гардеробная система",
    to: "/catalog/garderobnaya-sistema",
  },
  {
    id: 5,
    title: "Открытые интерьерные системы",
    to: "/catalog/otkrytye-interernye-sistemy",
  },
  {
    id: 6,
    title: "Системы межкомнатных перегородок",
    to: "/catalog/sistemy-mezhkomnatnyh-peregorodok",
  },
  {
    id: 7,
    title: "Мебельные ручки",
    to: "/catalog/mebelnye-ruchki",
  },
  {
    id: 8,
    title: "Профили для светодиодной подсветки",
    to: "/catalog/profili-dlya-svetodiodnoy-podsvetki",
  },
];
</script>
