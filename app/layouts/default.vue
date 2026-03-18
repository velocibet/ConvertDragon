<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">

    <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        <NuxtLink :to="locale === 'en' ? '/en' : '/'" class="flex items-center gap-2 group">
          <img 
            src="/favicon.ico" 
            alt="ConvertDragon Logo"
            class="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
          />
          <span class="text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500">
            {{ t('site.name') }}
          </span>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-8 font-medium text-slate-600">

          <div class="relative group py-4">
            <button class="flex items-center gap-1 hover:text-blue-600 transition">
              {{ t('nav.imageConversion') }}
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div class="absolute left-0 top-full hidden group-hover:block w-56 bg-white border border-slate-100 shadow-xl rounded-2xl overflow-hidden py-2">
              <div class="px-4 pt-2 pb-1 text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                {{ t('nav.popular') }}
              </div>
              <NuxtLink v-for="route in convertRoutes" :key="route.path" :to="`${locale === 'en' ? '/en' : ''}${route.path}`" class="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600">
                {{ route.label }}
              </NuxtLink>
            </div>
          </div>

          <NuxtLink :to="locale === 'en' ? '/en/compress' : '/compress'" class="py-4 hover:text-blue-600 transition">
            {{ t('nav.imageCompress') }}
          </NuxtLink>

          <div class="flex items-center gap-2">
            <span class="text-xs text-slate-400">{{ t('nav.language') }}</span>
            <select v-model="locale" class="text-sm bg-white border border-slate-200 rounded-xl px-3 py-1">
              <option value="ko">KO</option>
              <option value="en">EN</option>
            </select>
          </div>

        </nav>

        <button class="md:hidden flex items-center" @click="mobileMenu = !mobileMenu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>

      <div v-if="mobileMenu" class="md:hidden border-t border-slate-200 bg-white">
        <div class="px-4 py-4 space-y-3 text-sm">
          <NuxtLink v-for="route in convertRoutes" :key="route.path" :to="`${locale === 'en' ? '/en' : ''}${route.path}`" class="block">
            {{ route.label }}
          </NuxtLink>
          <div class="border-t border-slate-200 pt-3">
            <NuxtLink :to="locale === 'en' ? '/en/compress' : '/compress'" class="block font-bold text-blue-600">
              {{ t('nav.imageCompress') }}
            </NuxtLink>
          </div>
          <div class="pt-3">
            <label class="flex items-center gap-2 text-sm">
              <span class="text-slate-500">{{ t('nav.language') }}</span>
              <select v-model="locale" class="text-sm bg-white border border-slate-200 rounded-xl px-3 py-1">
                <option value="ko">KO</option>
                <option value="en">EN</option>
              </select>
            </label>
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
import { ref, watch } from "vue"
import { useI18n } from "vue-i18n"
import { useRoute, useRouter } from "vue-router"

const mobileMenu = ref(false)
const { t } = useI18n()
const route = useRoute()
const router = useRouter()

const locale = ref(route.path.startsWith("/en") ? "en" : "ko")

const convertRoutes = [
  { path: '/convert/jpg-to-png', label: 'JPG → PNG' },
  { path: '/convert/jpg-to-webp', label: 'JPG → WebP' },
  { path: '/convert/png-to-jpg', label: 'PNG → JPG' },
  { path: '/convert/png-to-webp', label: 'PNG → WebP' },
  { path: '/convert/heic-to-jpg', label: 'HEIC → JPG' },
  { path: '/convert/heic-to-png', label: 'HEIC → PNG' },
  { path: '/convert/jpg-to-avif', label: 'JPG → AVIF ✨' },
  { path: '/convert/webp-to-png', label: 'WebP → PNG' },
]

watch(locale, (newLang) => {
  const currentPath = route.fullPath
  const pathWithoutEn = currentPath.replace(/^\/en/, "")
  const targetPath = newLang === "en" ? `/en${pathWithoutEn}` : pathWithoutEn || "/"
  if (targetPath !== currentPath) {
    router.push({ path: targetPath, query: route.query, hash: route.hash })
  }
})

watch(() => route.path, (newPath) => {
  const nextLang = newPath.startsWith("/en") ? "en" : "ko"
  if (locale.value !== nextLang) {
    locale.value = nextLang
  }
})
</script>

<style scoped>
.router-link-active:not(header a) {
  @apply text-blue-600 font-bold;
}
</style>