<template>
  <Container class="mt-4">
    <Flex :gap="4" align="stretch">
      <div class="flex-1 min-w-0"><Harmonic /></div>
      <div class="flex-1 min-w-[768px]"><Slider /></div>
    </Flex>
    <HeroGroup />
    <Block title="Один продукт — разные задачи">
      <Tasks />
    </Block>
    <Block title="Материалы и системы для мебельных решений">
      <template #bar>
        <Button variant="black-outline">Перейти в каталог</Button>
      </template>
      <Categorys />
    </Block>
  </Container>
  <Screen animated class="mt-16">
    <Block
      collapsed
      black
      description="Примеры использования мебельных систем и материалов. Сохраняйте подходящие идеи, изучайте состав и находите специалистов."
      title="Реализованные решения"
    >
      <template #bar>
        <Button variant="white-outline">Перейти в каталог</Button>
      </template>
      <Solutions />
    </Block>
  </Screen>
  <Container>
    <Block title="Бренды">
      <template #bar>
        <Button variant="black-outline">Все бренды</Button>
      </template>
      <Brands />
    </Block>
  </Container>
  <div class="h-[2000px]"></div>
</template>

<script setup>
import Container from "~/components/basic/Container.vue";
import Slider from "~/components/slider/index.vue";
import Flex from "~/components/basic/Flex.vue";
import HeroGroup from "~/components/configurator/HeroGroup.vue";
import Harmonic from "~/components/harmonic/index.vue";
import Block from "~/components/basic/Block.vue";
import Tasks from "~/components/cardsGrids/grids/Tasks.vue";
import Button from "~/components/ui/Button.vue";
import Categorys from "~/components/cardsGrids/grids/Categorys.vue";
import Screen from "~/components/basic/Screen.vue";
import Solutions from "~/components/cardsGrids/grids/Solutions.vue";
import Brands from "~/components/brands/Wrapper.vue";
</script>
