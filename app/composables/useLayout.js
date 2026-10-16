import { computed } from "vue";

export const useLayout = () => {
  const HEADER_HEIGHT = "88px";
  const CONTAINER_WIDTH = "1200px";
  const width = useState("layout-width", () => 0);
  const height = useState("layout-height", () => 0);
  const ready = useState("layout-ready", () => false);

  const isMobile = computed(() => ready.value && width.value < 768);

  const isTablet = computed(
    () => ready.value && width.value >= 768 && width.value < 1024,
  );

  const isDesktop = computed(() => ready.value && width.value >= 1024);

  return {
    width,
    height,
    ready,
    isMobile,
    isTablet,
    isDesktop,
    HEADER_HEIGHT,
    CONTAINER_WIDTH,
  };
};
