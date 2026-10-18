<template>
  <Brands :brands="brands" />
</template>

<script setup>
import Brands from "~/components/brands/Brands.vue";

const brands = [
  {
    id: "modus",
    name: "MODUS",
    logo: "/imgs/brands/modus.svg",
    categories: "Профили · фасады · шкафы · кухни · интерьерные системы",
    title:
      "Алюминиевые профили и системы для изготовления мебели и интерьерных конструкций",
    features: [
      {
        title: "Дизайнерские решения",
        description:
          "Создавайте мебель, которая соответствует современной эстетике",
      },
      {
        title: "Качество и надёжность",
        description: "Материалы, рассчитанные на долгосрочное использование",
      },
      {
        title: "Функциональность и продуманность систем",
        description:
          "Профили подходят под разное наполнение — ЛДСП, МДФ, стекло, зеркало, массив",
      },
    ],
    productsUrl: "/catalog?brand=modus",
    documentsUrl: "/brands/modus/documents",
  },
  {
    id: "blum",
    name: "BLUM",
    logo: "/imgs/brands/blum.svg",
    categories: "Петли · подъёмные механизмы · выдвижные системы",
    title: "Мебельная фурнитура и системы движения",
    features: [
      {
        title: "Комфорт в использовании",
        description: "Решения для удобного открывания и закрывания мебели",
      },
      {
        title: "Продуманные механизмы",
        description: "Функциональная фурнитура для кухонь и систем хранения",
      },
      {
        title: "Разнообразие решений",
        description: "Механизмы для разных типов мебельных конструкций",
      },
    ],
    productsUrl: "/catalog?brand=blum",
    documentsUrl: "/brands/blum/documents",
  },
];
</script>
