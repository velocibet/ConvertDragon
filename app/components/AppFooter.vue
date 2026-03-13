<template>
  <footer class="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">

        <div>
          <h4 class="text-white font-bold mb-5 uppercase text-xs tracking-[0.2em]">JPG 변환</h4>
          <ul class="space-y-3 text-sm">
            <li><NuxtLink to="/convert/jpg-to-png" class="hover:text-blue-400 transition-colors">JPG to PNG</NuxtLink></li>
            <li><NuxtLink to="/convert/jpg-to-webp" class="hover:text-blue-400 transition-colors">JPG to WebP</NuxtLink></li>
            <li><NuxtLink to="/convert/jpg-to-avif" class="hover:text-blue-400 transition-colors">JPG to AVIF</NuxtLink></li>
            <li><NuxtLink to="/convert/jpg-to-pdf" class="hover:text-blue-400 transition-colors">JPG to PDF</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-5 uppercase text-xs tracking-[0.2em]">PNG / WebP 변환</h4>
          <ul class="space-y-3 text-sm">
            <li><NuxtLink to="/convert/png-to-jpg" class="hover:text-emerald-400 transition-colors">PNG to JPG</NuxtLink></li>
            <li><NuxtLink to="/convert/png-to-webp" class="hover:text-emerald-400 transition-colors">PNG to WebP</NuxtLink></li>
            <li><NuxtLink to="/convert/webp-to-jpg" class="hover:text-orange-400 transition-colors">WebP to JPG</NuxtLink></li>
            <li><NuxtLink to="/convert/webp-to-png" class="hover:text-orange-400 transition-colors">WebP to PNG</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-5 uppercase text-xs tracking-[0.2em]">HEIC / AVIF</h4>
          <ul class="space-y-3 text-sm">
            <li><NuxtLink to="/convert/heic-to-jpg" class="hover:text-purple-400 transition-colors">HEIC to JPG</NuxtLink></li>
            <li><NuxtLink to="/convert/heic-to-png" class="hover:text-purple-400 transition-colors">HEIC to PNG</NuxtLink></li>
            <li><NuxtLink to="/convert/avif-to-jpg" class="hover:text-purple-400 transition-colors">AVIF to JPG</NuxtLink></li>
            <li><NuxtLink to="/convert/avif-to-png" class="hover:text-purple-400 transition-colors">AVIF to PNG</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-5 uppercase text-xs tracking-[0.2em]">Tools & Policy</h4>
          <ul class="space-y-3 text-sm">
            <li><NuxtLink to="/compress" class="hover:text-emerald-400 font-bold transition-colors underline underline-offset-4">이미지 압축 도구</NuxtLink></li>
            <li><NuxtLink to="/guide/web-performance" class="hover:text-white transition-colors">웹 성능 최적화 가이드</NuxtLink></li>
            <li><NuxtLink to="/guide/heic-guide" class="hover:text-white transition-colors">아이폰 HEIC 가이드</NuxtLink></li>
            <li><NuxtLink to="/privacy" class="hover:text-white transition-colors">개인정보처리방침</NuxtLink></li>
            <li><NuxtLink to="/terms" class="hover:text-white transition-colors">이용약관</NuxtLink></li>
            <li class="pt-4">
              <span class="block text-[10px] text-slate-500 uppercase mb-1">광고 및 제휴 문의</span>
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
            All files are processed in your browser.
          </p>
        </div>
        <p class="text-[10px] opacity-40 uppercase tracking-widest font-bold">
          © 2026 ConvertDragon. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>