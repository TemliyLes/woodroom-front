export default defineNuxtPlugin((nuxtApp) => {
  const width = useState("layout-width", () => 0);
  const height = useState("layout-height", () => 0);
  const ready = useState("layout-ready", () => false);

  const updateSize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
    ready.value = true;
  };

  nuxtApp.hook("app:mounted", () => {
    updateSize();

    window.addEventListener("resize", updateSize, {
      passive: true,
    });
  });

  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      window.removeEventListener("resize", updateSize);
    });
  }
});
