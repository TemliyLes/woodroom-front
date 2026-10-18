<template>
  <div
    v-if="visible"
    ref="overlay"
    class="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
    role="status"
    aria-label="Загрузка страницы"
  >
    <div ref="logoWrapper" class="relative w-[220px] sm:w-[280px]">
      <Logo class="block h-auto w-full opacity-20" />

      <div
        ref="logoFill"
        class="absolute inset-0"
        style="clip-path: inset(0 100% 0 0)"
      >
        <Logo class="block h-auto w-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";
import Logo from "~/assets/icons/Logo.vue";

const emit = defineEmits(["reveal"]);

const visible = ref(true);

const overlay = ref(null);
const logoWrapper = ref(null);
const logoFill = ref(null);

let timeline;

onMounted(() => {
  gsap.set(overlay.value, {
    yPercent: 0,
    force3D: true,
  });

  timeline = gsap.timeline({
    onComplete: () => {
      visible.value = false;
    },
  });

  timeline
    .to(
      logoFill.value,
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.1,
        ease: "power2.inOut",
      },
      0.15,
    )
    .to(
      logoWrapper.value,
      {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
      },
      1.45,
    )

    .to(
      overlay.value,
      {
        yPercent: -100,
        duration: 1.25,
        ease: "power3.inOut",
        onStart: () => emit("reveal"),
      },
      1.75,
    );
});

onBeforeUnmount(() => {
  timeline?.kill();
});
</script>
