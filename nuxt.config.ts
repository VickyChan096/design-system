// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/design-system/' : '/'
  },

  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/test-utils', '@nuxt/scripts'],
  css: ['@/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/preprocess.scss" as *;'
        }
      }
    }
  }
})
