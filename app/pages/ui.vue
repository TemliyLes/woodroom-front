<template>
  <div>
    <h1>COMPONENTS</h1>
    <div v-for="item in components" :key="item.title">
      <h4>{{ item.title }}</h4>
      <component :is="item.component" v-bind="item.props"></component>
    </div>
    <div>user: {{ user }}</div>
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

import { storeToRefs } from "pinia";
import { useUserStore } from "~/store/user";
const userStore = useUserStore();
const { user, loading } = storeToRefs(userStore);
onMounted(() => {
  console.log("Component mounted");
  userStore.fetchUser();
});
</script>
