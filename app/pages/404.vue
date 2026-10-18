<template>
  <Teleport to="#teleports">
    <main
      class="fixed inset-0 z-[99999] flex h-dvh w-full flex-col items-center justify-center overflow-hidden bg-beige px-4 text-main"
    >
      <div class="flex flex-col items-center text-center">
        <span
          class="select-none font-involve text-[clamp(120px,25vw,300px)] font-semibold leading-none tracking-[-0.08em]"
        >
          404
        </span>

        <Header level="h2" tag="h1" class="mt-4"> Страница не найдена </Header>

        <Paragraph class="mt-4 max-w-[420px] text-grey">
          Возможно, страница была удалена или её адрес изменился. Вернитесь на
          главную страницу WoodRoom.
        </Paragraph>

        <Button class="mt-8 !w-auto" @click="goHome"> На главную </Button>
      </div>
    </main>
  </Teleport>
</template>

<script setup>
import Header from "~/components/typography/Header.vue";
import Paragraph from "~/components/typography/Paragraph.vue";
import Button from "~/components/ui/Button.vue";

function goHome() {
  return navigateTo("/");
}
</script>
