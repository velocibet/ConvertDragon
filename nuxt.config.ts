const formats = ['png', 'jpg', 'webp', 'avif'];

const convertUrls = [];

for (const from of formats) {
  for (const to of formats) {
    if (from !== to) {
      convertUrls.push(`/convert/${from}-to-${to}`)
    }
  }
}

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

  sitemap: {
    urls: convertUrls
  },

  gtag: {
    id: 'G-VD30H2Q9MM' 
  }

  // css: ['./app/assets/css/main.css'],
});