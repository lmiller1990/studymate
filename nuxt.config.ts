// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@pinia/nuxt", "@sidebase/nuxt-auth"],
  // extends: ["@nuxt/ui-pro"],
  auth: {
    provider: {
      type: "authjs",
    },
  },
  nitro: {
    experimental: {
      websocket: true,
    },
  },
});
