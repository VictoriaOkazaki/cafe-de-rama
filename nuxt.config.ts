// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  routeRules: {
    // Admin dashboard renders only on client-side
    "/admin/**": { ssr: false },
  },
  css: ["@/assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_vars.scss" as *;',
        },
      },
    },
  },
  modules: ["@invictus.codes/nuxt-vuetify"],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,

      /* vite-plugin-vuetify options */
      styles: "sass",
      autoImport: true,
      useVuetifyLabs: true,
    },
  },
});
