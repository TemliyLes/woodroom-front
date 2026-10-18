import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "v-gsap-nuxt", "@nuxt/image"],

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2025-07-15",

  devtools: {
    enabled: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      apiBase: "",
    },
  },
});
