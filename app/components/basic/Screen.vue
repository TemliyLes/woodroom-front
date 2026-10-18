<template>
  <div ref="section" class="relative w-full">
    <div ref="visual" class="relative overflow-hidden bg-black">
      <div ref="content" class="py-15">
        <Container>
          <slot />
        </Container>
      </div>
    </div>

    <div
      v-if="animated"
      ref="shadow"
      class="pointer-events-none absolute inset-x-0 z-20 h-[40px] -translate-y-full bg-gradient-to-t from-black/25 via-black/10 to-transparent"
      aria-hidden="true"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./Container.vue";

const props = defineProps({
  animated: {
    type: Boolean,
    default: false,
  },
});

const section = ref(null);
const visual = ref(null);
const content = ref(null);
const shadow = ref(null);

let ctx;

onMounted(async () => {
  if (!props.animated) return;

  await nextTick();

  gsap.registerPlugin(ScrollTrigger);

  ctx = gsap.context(() => {
    gsap.set(visual.value, {
      maskImage:
        "linear-gradient(to bottom, black calc(100% - 1px), transparent 100%)",
      maskSize: "100% 100%",
      maskRepeat: "no-repeat",
    });

    gsap.set(shadow.value, {
      top: "100%",
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section.value,
        start: "bottom bottom-=150",
        end: "+=1100",
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    timeline
      .to(
        content.value,
        {
          yPercent: 12,
          opacity: 0,
          ease: "power1.in",
          duration: 0.65,
        },
        0,
      )
      .to(
        visual.value,
        {
          maskSize: "100% 0%",
          ease: "none",
          duration: 1,
        },
        0,
      )
      .to(
        shadow.value,
        {
          top: "0%",
          ease: "none",
          duration: 1,
        },
        0,
      );
  }, section.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>
