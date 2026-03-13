<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">

    <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        <NuxtLink to="/" class="flex items-center gap-2 group">
          <img 
            src="/favicon.ico" 
            alt="ConvertDragon Logo"
            class="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
          />
          <span class="text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500">
            CONVERT DRAGON
          </span>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-8 font-medium text-slate-600">

          <div class="relative group py-4">
            <button class="flex items-center gap-1 hover:text-blue-600 transition">
              이미지 변환
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div class="absolute left-0 top-full hidden group-hover:block w-56 bg-white border border-slate-100 shadow-xl rounded-2xl overflow-hidden py-2">

              <div class="px-4 pt-2 pb-1 text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                Popular
              </div>

              <NuxtLink to="/convert/jpg-to-png" class="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600">JPG → PNG</NuxtLink>
              <NuxtLink to="/convert/jpg-to-webp" class="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600">JPG → WebP</NuxtLink>
              <NuxtLink to="/convert/png-to-jpg" class="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600">PNG → JPG</NuxtLink>
              <NuxtLink to="/convert/png-to-webp" class="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600">PNG → WebP</NuxtLink>

              <div class="border-t border-slate-100 my-2"></div>

              <div class="px-4 pb-1 text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                Modern Formats
              </div>

              <NuxtLink to="/convert/heic-to-jpg" class="block px-4 py-2 text-sm hover:bg-purple-50 hover:text-purple-600">
                HEIC → JPG
              </NuxtLink>

              <NuxtLink to="/convert/heic-to-png" class="block px-4 py-2 text-sm hover:bg-purple-50 hover:text-purple-600">
                HEIC → PNG
              </NuxtLink>

              <NuxtLink to="/convert/jpg-to-avif" class="block px-4 py-2 text-sm hover:bg-purple-50 hover:text-purple-600 font-bold">
                JPG → AVIF ✨
              </NuxtLink>

              <NuxtLink to="/convert/webp-to-png" class="block px-4 py-2 text-sm hover:bg-purple-50 hover:text-purple-600">
                WebP → PNG
              </NuxtLink>

            </div>
          </div>

          <NuxtLink to="/compress" class="py-4 hover:text-blue-600 transition">
            이미지 압축
          </NuxtLink>

        </nav>

        <button
          class="md:hidden flex items-center"
          @click="mobileMenu = !mobileMenu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>

      <div v-if="mobileMenu" class="md:hidden border-t border-slate-200 bg-white">
        <div class="px-4 py-4 space-y-3 text-sm">

          <NuxtLink to="/convert/jpg-to-png" class="block">JPG → PNG</NuxtLink>
          <NuxtLink to="/convert/jpg-to-webp" class="block">JPG → WebP</NuxtLink>
          <NuxtLink to="/convert/png-to-jpg" class="block">PNG → JPG</NuxtLink>
          <NuxtLink to="/convert/png-to-webp" class="block">PNG → WebP</NuxtLink>
          <NuxtLink to="/convert/heic-to-jpg" class="block">HEIC → JPG</NuxtLink>

          <div class="border-t border-slate-200 pt-3">
            <NuxtLink to="/compress" class="block font-bold text-blue-600">
              이미지 압축
            </NuxtLink>
          </div>

        </div>
      </div>

    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <AppFooter />

  </div>
</template>

<script setup>
import { ref } from "vue"
const mobileMenu = ref(false)
</script>

<style scoped>
.router-link-active:not(header a) {
  @apply text-blue-600 font-bold;
}
</style>