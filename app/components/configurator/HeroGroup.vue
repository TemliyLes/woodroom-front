<template>
  <Flex class="mt-6">
    <Button
      title="Конфигуратор"
      description="Рамочные фасады"
      to="/configurators/frame"
      accent
    ></Button>
    <Button
      title="Конфигуратор"
      description="Двери-купе"
      to="/configurators/doors"
    ></Button>
  </Flex>
</template>

<script setup>
import Flex from "../basic/Flex.vue";
import Button from "./Button.vue";
</script>
