<template>
  <footer class="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">

        <div>
          <h4 class="text-white font-bold mb-5 uppercase text-xs tracking-[0.2em]">{{ t('footer.jpgConversion') }}</h4>
          <ul class="space-y-3 text-sm">
            <li><NuxtLink :to="`${locale === 'en' ? '/en' : ''}/convert/jpg-to-png`" class="hover:text-blue-400 transition-colors">{{ t('footer.jpgToPng') }}</NuxtLink></li>
            <li><NuxtLink :to="`${locale === 'en' ? '/en' : ''}/convert/jpg-to-webp`" class="hover:text-blue-400 transition-colors">{{ t('footer.jpgToWebp') }}</NuxtLink></li>
            <li><NuxtLink :to="`${locale === 'en' ? '/en' : ''}/convert/jpg-to-avif`" class="hover:text-blue-400 transition-colors">{{ t('footer.jpgToAvif') }}</NuxtLink></li>
            <li><NuxtLink :to="`${locale === 'en' ? '/en' : ''}/convert/jpg-to-pdf`" class="hover:text-blue-400 transition-colors">{{ t('footer.jpgToPdf') }}</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-5 uppercase text-xs tracking-[0.2em]">{{ t('footer.pngWebpConversion') }}</h4>
          <ul class="space-y-3 text-sm">
            <li><NuxtLink :to="`${locale === 'en' ? '/en' : ''}/convert/png-to-jpg`" class="hover:text-emerald-400 transition-colors">{{ t('footer.pngToJpg') }}</NuxtLink></li>
            <li><NuxtLink :to="`${locale === 'en' ? '/en' : ''}/convert/png-to-webp`" class="hover:text-emerald-400 transition-colors">{{ t('footer.pngToWebp') }}</NuxtLink></li>
            <li><NuxtLink :to="`${locale === 'en' ? '/en' : ''}/convert/webp-to-jpg`" class="hover:text-orange-400 transition-colors">{{ t('footer.webpToJpg') }}</NuxtLink></li>
            <li><NuxtLink :to="`${locale === 'en' ? '/en' : ''}/convert/webp-to-png`" class="hover:text-orange-400 transition-colors">{{ t('footer.webpToPng') }}</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-5 uppercase text-xs tracking-[0.2em]">{{ t('footer.heicAvif') }}</h4>
          <ul class="space-y-3 text-sm">
            <li><NuxtLink :to="`${locale === 'en' ? '/en' : ''}/convert/heic-to-jpg`" class="hover:text-purple-400 transition-colors">{{ t('footer.heicToJpg') }}</NuxtLink></li>
            <li><NuxtLink :to="`${locale === 'en' ? '/en' : ''}/convert/heic-to-png`" class="hover:text-purple-400 transition-colors">{{ t('footer.heicToPng') }}</NuxtLink></li>
            <li><NuxtLink :to="`${locale === 'en' ? '/en' : ''}/convert/avif-to-jpg`" class="hover:text-purple-400 transition-colors">{{ t('footer.avifToJpg') }}</NuxtLink></li>
            <li><NuxtLink :to="`${locale === 'en' ? '/en' : ''}/convert/avif-to-png`" class="hover:text-purple-400 transition-colors">{{ t('footer.avifToPng') }}</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-5 uppercase text-xs tracking-[0.2em]">{{ t('footer.toolsPolicy') }}</h4>
          <ul class="space-y-3 text-sm">
            <li><NuxtLink :to="`${locale === 'en' ? '/en' : ''}/compress`" class="hover:text-emerald-400 font-bold transition-colors underline underline-offset-4">{{ t('footer.imageCompressTool') }}</NuxtLink></li>
            <li><NuxtLink :to="`${locale === 'en' ? '/en' : ''}/guide/web-performance`" class="hover:text-white transition-colors">{{ t('footer.webPerfGuide') }}</NuxtLink></li>
            <li><NuxtLink :to="`${locale === 'en' ? '/en' : ''}/guide/heic-guide`" class="hover:text-white transition-colors">{{ t('footer.heicGuide') }}</NuxtLink></li>
            <li><NuxtLink :to="`${locale === 'en' ? '/en' : ''}/privacy`" class="hover:text-white transition-colors">{{ t('footer.privacy') }}</NuxtLink></li>
            <li><NuxtLink :to="`${locale === 'en' ? '/en' : ''}/terms`" class="hover:text-white transition-colors">{{ t('footer.terms') }}</NuxtLink></li>
            <li class="pt-4">
              <span class="block text-[10px] text-slate-500 uppercase mb-1">{{ t('footer.contact') }}</span>
              <a href="mailto:dev.velocibet@gmail.com" class="text-blue-400 hover:text-blue-300 transition-colors text-xs font-medium border-b border-blue-400/30 pb-0.5">
                dev.velocibet@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div class="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-3">
          <span class="text-white font-black italic tracking-tighter text-lg">
            CONVERT <span class="text-blue-500">DRAGON</span>
          </span>
          <span class="h-4 w-px bg-slate-700 hidden md:block"></span>
          <p class="text-[11px] font-medium tracking-wide">
            {{ t('footer.allFilesProcessed') }}
          </p>
        </div>
        <p class="text-[10px] opacity-40 uppercase tracking-widest font-bold">
          © 2026 ConvertDragon. {{ t('footer.rightsReserved') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()
const locale = computed(() => (route.path.startsWith('/en') ? 'en' : 'ko'))
</script>