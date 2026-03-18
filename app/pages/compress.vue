<template>
  <div class="py-12 md:py-20 px-4 space-y-24">
    <section class="max-w-3xl mx-auto text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold mb-6">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        {{ $t('compress.hero.badge') }}
      </div>
      <h1 class="text-4xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-none">
        {{ $t('compress.hero.titleLine1') }} <br class="hidden md:block" /><span class="text-emerald-600">{{ $t('compress.hero.titleLine2') }}</span>
      </h1>
      <p class="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
        {{ $t('compress.hero.subtitle') }}
      </p>
    </section>

    <section class="max-w-xl mx-auto relative">
      <div class="absolute -top-10 -right-10 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      
      <ImageCompressor />
      
      <div class="mt-10 flex items-center justify-center gap-8 text-xs text-slate-400 font-bold uppercase tracking-widest">
        <div class="flex items-center gap-2">
          <div class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
          No Quality Loss
        </div>
        <div class="flex items-center gap-2">
          <div class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
          Fast & Private
        </div>
      </div>
    </section>

    <section class="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
      <div class="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div class="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">📉</div>
          <h3 class="text-xl font-black text-slate-800 mb-3">{{ $t('compress.features.smart.title') }}</h3>
          <p class="text-sm text-slate-500 leading-relaxed">{{ $t('compress.features.smart.description') }}</p>
      </div>
      <div class="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🚀</div>
          <h3 class="text-xl font-black text-slate-800 mb-3">{{ $t('compress.features.performance.title') }}</h3>
          <p class="text-sm text-slate-500 leading-relaxed">{{ $t('compress.features.performance.description') }}</p>
      </div>
      <div class="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div class="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🔒</div>
          <h3 class="text-xl font-black text-slate-800 mb-3">{{ $t('compress.features.security.title') }}</h3>
          <p class="text-sm text-slate-500 leading-relaxed">{{ $t('compress.features.security.description') }}</p>
      </div>
    </section>

    <section class="max-w-5xl mx-auto bg-slate-900 rounded-[4rem] p-10 md:p-20 text-white overflow-hidden relative">
      <div class="relative z-10 md:w-2/3 space-y-8">
        <h2 class="text-4xl font-black italic tracking-tighter">{{ $t('compress.why.title') }}</h2>
        <p class="text-lg text-slate-400 leading-relaxed">
          {{ $t('compress.why.description') }}
        </p>
        <div class="flex gap-10">
          <div>
            <p class="text-4xl font-black text-emerald-400">{{ $t('compress.why.stats.maxReduction') }}</p>
            <p class="text-xs text-slate-500 uppercase mt-2 font-bold tracking-widest">Max Reduction</p>
          </div>
          <div>
            <p class="text-4xl font-black text-emerald-400">{{ $t('compress.why.stats.serverLatency') }}</p>
            <p class="text-xs text-slate-500 uppercase mt-2 font-bold tracking-widest">Server Latency</p>
          </div>
        </div>
      </div>
      <div class="absolute right-[-5%] bottom-[-5%] opacity-10 pointer-events-none transform rotate-12">
        <svg class="w-96 h-96" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    </section>

    <section class="max-w-3xl mx-auto pb-20">
      <h2 class="text-3xl font-black text-center text-slate-900 mb-12">{{ $t('compress.guide.title') }}</h2>
      <div class="space-y-4">
        <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <h4 class="font-bold text-slate-800 mb-2">{{ $t('compress.guide.items.bestFormat.q') }}</h4>
          <p class="text-sm text-slate-500 leading-relaxed text-balance">{{ $t('compress.guide.items.bestFormat.a') }}</p>
        </div>
        <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <h4 class="font-bold text-slate-800 mb-2">{{ $t('compress.guide.items.quality.q') }}</h4>
          <p class="text-sm text-slate-500 leading-relaxed text-balance">{{ $t('compress.guide.items.quality.a') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '이미지 압축기 - Convert Dragon',
  meta: [
    { name: 'description', content: '화질 저하 없이 온라인에서 즉시 이미지 용량을 줄이세요. PNG, JPG, WebP 압축 지원.' }
  ]
});
</script>