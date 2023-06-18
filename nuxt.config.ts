// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/content"],

  css: ["~/assets/styles/global.scss", "basilcss/basil.css"],
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
})
