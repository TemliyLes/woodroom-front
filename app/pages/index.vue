<template>
  <Container>
    <Flex :gap="4" align="stretch" class="mt-8">
      <div class="flex-1 min-w-0">Первый блок</div>

      <div class="flex-1 min-w-[768px]"><Slider /></div>
    </Flex>
  </Container>
</template>

<script setup>
import Container from "~/components/basic/Container.vue";
import Slider from "~/components/slider/index.vue";
import Flex from "~/components/basic/Flex.vue";
</script>
