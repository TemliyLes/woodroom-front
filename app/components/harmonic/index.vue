<template>
  <div class="accordion flex h-full w-5/6 min-h-0 flex-col gap-5">
    <div v-for="item in items" :key="item.id">
      <button
        type="button"
        class="flex w-full items-center justify-between border-b border-gray pb-3 cursor-pointer"
        :aria-expanded="active === item.id"
        @click="active = item.id"
      >
        <Header level="h4" tag="span">
          {{ item.title }}
        </Header>

        <span
          class="transition-transform duration-300"
          :class="{ 'rotate-180': active === item.id }"
        >
          <Chevron />
        </span>
      </button>

      <Collapsed :active="active === item.id">
        <div class="flex flex-wrap gap-3 py-5">
          <Tag v-for="tag in item.tags" :key="tag">
            {{ tag }}
          </Tag>
        </div>
      </Collapsed>
    </div>
  </div>
</template>

<script setup>
import Collapsed from "../basic/Collapsed.vue";
import Tag from "./Tag.vue";
import Chevron from "./Chevron.vue";
import Header from "../typography/Header.vue";

const active = ref(1);

const items = [
  {
    id: 1,
    title: "Дизайнеру",
    tags: [
      "Сотрудничество",
      "Бренды",
      "Решения",
      "Материалы",
      "Личный кабинет",
    ],
  },
  {
    id: 2,
    title: "Мастеру/компании",
    tags: [
      "Сотрудничество",
      "Каталог продукции",
      "Бренды",
      "Материалы",
      "Заказы",
      "Личный кабинет",
    ],
  },
  {
    id: 3,
    title: "Покупателю",
    tags: [
      "Каталог",
      "Готовые решения",
      "Где купить",
      "Доставка и оплата",
      "Гарантия",
      "Контакты",
    ],
  },
];
</script>

<style scoped>
.accordion {
  contain: layout paint size;
}
</style>
