<template>
  <Flex
    :gap="8"
    align="center"
    justify="between"
    class="w-full max-md:flex-col max-md:items-start"
  >
    <div class="flex min-w-0 flex-1 flex-col items-start">
      <Paragraph class="mb-3 text-white"> Профессионалам </Paragraph>

      <Header level="h3" tag="h2" class="max-w-[480px] text-white">
        Превратите сервис
        <br />
        в рабочий инструмент
      </Header>

      <Paragraph class="mt-4 max-w-[580px] text-white">
        Создайте профессиональный аккаунт, чтобы сохранять проекты, видеть
        историю расчётов и быстрее оформлять повторные заказы.
      </Paragraph>

      <div class="mt-5 flex flex-wrap items-center gap-3">
        <Button @click="$emit('create-account')"> Создать аккаунт </Button>

        <Button variant="white-outline" @click="$emit('learn-more')">
          Узнать подробнее
        </Button>
      </div>
    </div>

    <div class="w-full min-w-0 flex-1">
      <div
        v-for="(item, index) in benefits"
        :key="index"
        class="flex items-center gap-5 border-t border-white/40 py-4 text-white last:border-b"
      >
        <span class="w-6 shrink-0 text-[14px] text-white/60">
          {{ String(index + 1).padStart(2, "0") }}
        </span>

        <Paragraph class="text-white">
          {{ item }}
        </Paragraph>
      </div>
    </div>
  </Flex>
</template>

<script setup>
import Flex from "~/components/basic/Flex.vue";
import Header from "~/components/typography/Header.vue";
import Paragraph from "~/components/typography/Paragraph.vue";
import Button from "../ui/Button.vue";

defineEmits(["create-account", "learn-more"]);

const benefits = [
  "Персональные условия после подтверждения профиля",
  "10 завершённых расчётов в неделю бесплатно",
  "Проекты, спецификации и история заказов",
  "Дополнительные расчёты при достижении лимита",
];
</script>
