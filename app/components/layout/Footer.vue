<template>
  <footer class="w-full bg-gray py-16 text-main">
    <Container>
      <Flex
        :gap="8"
        align="start"
        justify="between"
        class="flex-col md:flex-row"
      >
        <div class="w-full md:w-[32%]">
          <NuxtLink to="/" class="inline-block">
            <span
              class="text-[40px] font-bold italic leading-none tracking-[-2px]"
            >
              woodroom
            </span>
          </NuxtLink>

          <div class="mt-4 flex flex-col gap-1 text-[12px]">
            <p>г. Саратов, ул. Б. Садовая, д. 141, оф. 327</p>
            <p>пн–пт 10:00–17:00</p>

            <a href="tel:+78452682325" class="w-fit hover:underline">
              +7 (8452) 68-23-25
            </a>

            <a href="mailto:help@woodroom.pro" class="w-fit hover:underline">
              help@woodroom.pro
            </a>
          </div>
        </div>

        <nav
          v-for="group in navigation"
          :key="group.title"
          class="w-full min-w-0 flex-1"
          :aria-label="group.title"
        >
          <p class="mb-2 text-[16px] font-semibold">
            {{ group.title }}
          </p>

          <ul class="flex flex-col gap-2">
            <li v-for="link in group.links" :key="link.title">
              <NuxtLink
                :to="link.to"
                class="text-[14px] transition-colors duration-200 hover:text-accent"
              >
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </Flex>

      <div class="mt-12 border-t border-main/15 pt-5">
        <Flex
          :gap="4"
          justify="between"
          align="center"
          class="flex-col md:flex-row"
        >
          <span class="text-[12px]"> © 2026 Woodroom </span>

          <NuxtLink
            v-for="link in legalLinks"
            :key="link.title"
            :to="link.to"
            class="text-[12px] transition-colors duration-200 hover:text-accent"
          >
            {{ link.title }}
          </NuxtLink>
        </Flex>
      </div>
    </Container>
  </footer>
  <div class="h-16"></div>
</template>

<script setup>
import Container from "~/components/basic/Container.vue";
import Flex from "~/components/basic/Flex.vue";

const navigation = [
  {
    title: "Сервис",
    links: [
      { title: "Каталог", to: "/catalog" },
      { title: "Конфигуратор фасадов", to: "/configurator/facades" },
      { title: "Конфигуратор шкафов-купе", to: "/configurator/wardrobes" },
      { title: "Бренды и производители", to: "/brands" },
    ],
  },
  {
    title: "Возможности",
    links: [
      { title: "Готовые решения", to: "/solutions" },
      { title: "Подбор специалиста", to: "/specialists" },
      { title: "Для профессионалов", to: "/professionals" },
      { title: "Для дизайнеров", to: "/designers" },
    ],
  },
  {
    title: "Информация",
    links: [
      { title: "О сервисе", to: "/about" },
      { title: "Документы и сертификаты", to: "/documents" },
      { title: "Оплата и доставка", to: "/delivery" },
      { title: "FAQ и поддержка", to: "/faq" },
      { title: "Гарантии и возврат", to: "/warranty" },
      { title: "Контакты", to: "/contacts" },
    ],
  },
];

const legalLinks = [
  { title: "Публичная оферта", to: "/offer" },
  {
    title: "Согласие на обработку персональных данных",
    to: "/personal-data-consent",
  },
  {
    title: "Политика конфиденциальности",
    to: "/privacy",
  },
];
</script>
