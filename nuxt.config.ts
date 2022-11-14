// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Andika's Dungeon",
    },
  },
  typescript: {
    shim: false,
  },
  css: ["@/assets/scss/styles.scss", "bulma"],
});
