<template>
  <Container>
    <Flex :gap="4" align="stretch" class="mt-4">
      <div class="flex-1 min-w-0"><Harmonic /></div>

      <div class="flex-1 min-w-[768px]"><Slider /></div>
    </Flex>
    <HeroGroup />
    <Block title="Один продукт — разные задачи">
      <Task />
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
import Task from "~/components/cardsGrids/grids/Task.vue";
</script>
