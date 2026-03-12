import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    'nuxt-gtag'
  ],

  site: {
    url: 'https://convertdragon.com', 
    name: 'ConvertDragon'
  },

  gtag: {
    id: 'G-VD30H2Q9MM' 
  }

  // css: ['./app/assets/css/main.css'],
});