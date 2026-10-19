export const usePageTransition = () => {
  const isPageReady = useState("page-transition-ready", () => true);

  return {
    isPageReady,
  };
};
