<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
    <AudienceCard v-for="item in cards" :key="item.number" v-bind="item" />
  </div>
</template>

<script setup>
import AudienceCard from "~/components/cardsGrids/cards/Task.vue";

const cards = [
  {
    number: "01",
    title: "Мастерам и мебельным компаниям",
    description:
      "Быстрее рассчитывать проекты, подбирать совместимые позиции, оформлять и повторять заказы",
    to: "/masters",
  },
  {
    number: "02",
    title: "Дизайнерам",
    description:
      "Находить материалы, сохранять подборки и обсуждать их с клиентами",
    to: "/designers",
  },
  {
    number: "03",
    title: "Покупателям",
    description:
      "Подбирать решения для своего интерьера и находить подходящие товары",
    to: "/customers",
  },
];
</script>
