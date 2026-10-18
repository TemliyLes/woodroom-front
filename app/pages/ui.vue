<template>
  <div>
    <h1>COMPONENTS</h1>
    <div v-for="item in components" :key="item.title">
      <h4>{{ item.title }}</h4>
      <component :is="item.component" v-bind="item.props"></component>
    </div>
  </div>
</template>

<script setup>
import Input from "~/components/ui/Input.vue";
const components = [
  {
    title: "Текстовое поле",
    component: Input,
    props: {},
  },
];
</script>
