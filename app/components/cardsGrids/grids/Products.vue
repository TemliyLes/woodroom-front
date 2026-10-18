<template>
  <Grid
    :items="products"
    :mobile="2"
    :tablet="3"
    :desktop="5"
    :max="max"
    :gap="8"
  >
    <template #default="{ item }">
      <Product
        v-bind="item"
        @add-to-cart="onAddToCart"
        @toggle-favorite="onToggleFavorite"
      />
    </template>
  </Grid>
</template>

<script setup>
import Grid from "~/components/basic/Grid.vue";
import Product from "../cards/Product.vue";

defineProps({
  max: {
    type: Number,
    default: 10,
  },
});

const emit = defineEmits(["add-to-cart", "toggle-favorite"]);

const onAddToCart = (product) => emit("add-to-cart", product);
const onToggleFavorite = (product) => emit("toggle-favorite", product);

const products = [
  {
    id: 1,
    title: "Профиль вертикальный MS 110",
    category: "Системы для шкафов",
    brand: "MODUS",
    article: "MS 110",
    to: "/catalog/ms-110",
  },
  {
    id: 2,
    title: "Профиль вертикальный MS 110",
    category: "Системы для шкафов",
    brand: "MODUS",
    article: "MS 110",
    to: "/catalog/ms-110",
  },
  {
    id: 3,
    title: "Профиль вертикальный MS 110",
    category: "Системы для шкафов",
    brand: "MODUS",
    article: "MS 110",
    to: "/catalog/ms-110",
  },
  {
    id: 4,
    title: "Профиль вертикальный MS 120",
    category: "Системы для шкафов",
    brand: "MODUS",
    article: "MS 120",
    to: "/catalog/ms-120",
  },
  {
    id: 5,
    title: "Профиль вертикальный MS 125",
    category: "Системы для шкафов",
    brand: "MODUS",
    article: "MS 125",
    to: "/catalog/ms-125",
  },
  {
    id: 6,
    title: "Профиль вертикальный MS 110",
    category: "Системы для шкафов",
    brand: "MODUS",
    article: "MS 110",
    to: "/catalog/ms-110",
  },
  {
    id: 7,
    title: "Профиль вертикальный MS 110",
    category: "Системы для шкафов",
    brand: "MODUS",
    article: "MS 110",
    to: "/catalog/ms-110",
  },
  {
    id: 8,
    title: "Профиль вертикальный MS 110",
    category: "Системы для шкафов",
    brand: "MODUS",
    article: "MS 110",
    to: "/catalog/ms-110",
  },
  {
    id: 9,
    title: "Профиль вертикальный MS 120",
    category: "Системы для шкафов",
    brand: "MODUS",
    article: "MS 120",
    to: "/catalog/ms-120",
  },
  {
    id: 10,
    title: "Профиль вертикальный MS 125",
    category: "Системы для шкафов",
    brand: "MODUS",
    article: "MS 125",
    to: "/catalog/ms-125",
  },
];
</script>
