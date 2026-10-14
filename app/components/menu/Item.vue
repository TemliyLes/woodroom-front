<template>
  <NuxtLink
    :to="item.to"
    class="transition-colors hover:text-accent"
    :class="isActive(item.to) ? 'text-accent font-semibold' : 'text-black'"
    :aria-current="isActive(item.to) ? 'page' : undefined"
  >
    {{ item.title }}
  </NuxtLink>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
  },
});
const route = useRoute();
const isActive = (path) => {
  return route.path === path || route.path.startsWith(path + "/");
};
</script>
