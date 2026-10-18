<template>
  <Grid :items="solutions" :mobile="1" :tablet="2" :desktop="4" :gap="4">
    <template #default="{ item }">
      <Solution v-bind="item" />
    </template>
  </Grid>
</template>

<script setup>
import Grid from "~/components/basic/Grid.vue";
import Solution from "~/components/cardsGrids/cards/Solution.vue";

const solutions = [
  {
    id: 1,
    title: "Гардеробная в нише",
    description: "Система MODI · тёмный профиль",
    image: "/imgs/solutions/wardrobe.jpg",
    to: "/solutions/wardrobe",
  },
  {
    id: 2,
    title: "Светлая кухня",
    description: "Фасады серии MZ · стекло",
    image: "/imgs/solutions/kitchen.jpg",
    to: "/solutions/kitchen",
  },
  {
    id: 3,
    title: "Современная гардеробная",
    description: "Система хранения · алюминиевый профиль",
    image: "/imgs/solutions/dressing-room.jpg",
    to: "/solutions/dressing-room",
  },
  {
    id: 4,
    title: "Кухня в современном стиле",
    description: "Фасадные профили · стеклянные вставки",
    image: "/imgs/solutions/modern-kitchen.jpg",
    to: "/solutions/modern-kitchen",
  },
];
</script>
