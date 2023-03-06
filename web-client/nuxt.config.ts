// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/default.scss";',
        },
      },
    },
    server: {
      proxy: {
        '/apis': {
          target: 'http://127.0.0.1:9527',
          changeOrigin: true,
        },
      },
    },
  },
})
