// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  imports: {
    dirs: ["types/*.ts", "types/**/*.ts"],
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
