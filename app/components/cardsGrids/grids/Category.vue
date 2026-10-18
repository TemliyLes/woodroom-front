<template>
  <Grid
    :items="categories"
    :mobile="2"
    :tablet="3"
    :desktop="5"
    :max="10"
    :gap="4"
  >
    <template #default="{ item }">
      <CategoryCard
        :title="item.title"
        :image="item.image"
        :to="item.to"
        :variant="item.variant"
      />
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
    image: "/images/categories/profiles.png",
    to: "/catalog/profiles",
    variant: "white",
  },
  {
    id: 2,
    title: "Мебельная фурнитура",
    image: "/images/categories/furniture.png",
    to: "/catalog/furniture",
    variant: "beige",
  },
];
</script>
