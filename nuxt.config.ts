import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15", // 현재 날짜에 맞춤
  devtools: { enabled: true },
  
  // 모듈만 딱 선언 (Nuxt가 알아서 Tailwind v3를 로드합니다)
  modules: ['@nuxtjs/tailwindcss'],

  // css 경로는 유지하되, 파일이 없다면 일단 주석 처리해도 됩니다.
  // css: ['./app/assets/css/main.css'],
});