// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "./client"),
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@pinia/nuxt"],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
})
