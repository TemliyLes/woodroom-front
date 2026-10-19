<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[1000] flex items-center justify-center p-4"
        @mousedown.self="close"
      >
        <div
          class="absolute inset-0 bg-main/60 backdrop-blur-sm"
          aria-hidden="true"
        />

        <div
          ref="modalRef"
          role="dialog"
          aria-modal="true"
          :aria-label="title || 'Модальное окно'"
          tabindex="-1"
          class="relative z-10 max-h-[calc(100dvh-32px)] w-full overflow-y-auto rounded-2xl bg-beige p-6 text-main shadow-xl md:p-8"
          :class="widthClasses"
          @mousedown.stop
        >
          <button
            type="button"
            class="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-trace transition-colors hover:bg-main hover:text-white"
            aria-label="Закрыть"
            @click="close"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <div v-if="title" class="mb-6 pr-12">
            <h3 class="text-[24px] font-bold leading-tight">
              {{ title }}
            </h3>
          </div>

          <slot :close="close" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, nextTick, onBeforeUnmount } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "md",
  },
  closeOnOverlay: {
    type: Boolean,
    default: true,
  },
  closeOnEsc: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["update:modelValue", "close"]);

const modalRef = ref(null);

const widths = {
  sm: "max-w-[400px]",
  md: "max-w-[560px]",
  lg: "max-w-[800px]",
  xl: "max-w-[1100px]",
  full: "max-w-none",
};

const widthClasses = computed(() => widths[props.width] || widths.md);

let previousOverflow = "";
let previousFocus = null;

function close() {
  if (!props.modelValue) return;

  emit("update:modelValue", false);
  emit("close");
}

function onKeydown(event) {
  if (!props.modelValue) return;

  if (event.key === "Escape" && props.closeOnEsc) {
    close();
  }

  if (event.key !== "Tab" || !modalRef.value) return;

  const elements = [
    ...modalRef.value.querySelectorAll(
      'a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])',
    ),
  ].filter((el) => el.getClientRects().length);

  if (!elements.length) {
    event.preventDefault();
    modalRef.value.focus();
    return;
  }

  const first = elements[0];
  const last = elements[elements.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  } else if (!modalRef.value.contains(document.activeElement)) {
    event.preventDefault();
    first.focus();
  }
}

function onOverlayMouseDown(event) {
  if (props.closeOnOverlay && event.target === event.currentTarget) {
    close();
  }
}

watch(
  () => props.modelValue,
  async (open) => {
    if (!import.meta.client) return;

    if (open) {
      previousFocus = document.activeElement;
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKeydown);

      await nextTick();
      modalRef.value?.focus();
    } else {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeydown);
      previousFocus?.focus?.();
    }
  },
  { immediate: true },
);

onBeforeUnmount(() => {
  if (!import.meta.client) return;

  document.body.style.overflow = previousOverflow;
  document.removeEventListener("keydown", onKeydown);
});
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active > [role="dialog"],
.modal-leave-active > [role="dialog"] {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > [role="dialog"],
.modal-leave-to > [role="dialog"] {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}
</style>
