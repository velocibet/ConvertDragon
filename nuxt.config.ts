const formats = [
  'png', 'jpg', 'jpeg', 'webp', 'avif', 'heic', 
  'svg', 'pdf', 'ico', 'gif', 'bmp', 'tiff'
];

const convertUrls = [];

for (const from of formats) {
  for (const to of formats) {
    if (from !== to) {
      const url = `/convert/${from}-to-${to}`
      convertUrls.push(url)
      convertUrls.push(`/en${url}`)
    }
  }
}

import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // devServer: {
  //   https: true
  // },
  routeRules: {
    '/video/**': {
      headers: {
        'Cross-Origin-Embedder-Policy': 'require-corp',
        'Cross-Origin-Opener-Policy': 'same-origin',
      },
    },
  },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
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
  },

  i18n: {
    locales: [
      { code: 'ko', iso: 'ko-KR', name: '한국어', file: 'ko.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'ko',
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true
    }
  }

  // css: ['./app/assets/css/main.css'],
});