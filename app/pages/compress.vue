<template>
  <div class="py-12 md:py-20 px-4 space-y-24">
    <section class="max-w-3xl mx-auto text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold mb-6">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        LOCAL GPU ACCELERATED
      </div>
      <h1 class="text-4xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-none">
        이미지 용량 <br class="hidden md:block" /><span class="text-emerald-600">초간편 다이어트</span>
      </h1>
      <p class="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
        눈에 보이는 화질 차이 없이 용량만 획기적으로 줄이세요.<br class="hidden md:block" />
        서버 업로드 없는 100% 안전한 브라우저 압축 기술입니다.
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
        <h3 class="text-xl font-black text-slate-800 mb-3">스마트 알고리즘</h3>
        <p class="text-sm text-slate-500 leading-relaxed">색상 최적화 기술을 통해 화질 저하 없이 불필요한 메타데이터와 픽셀 데이터를 제거합니다.</p>
      </div>
      <div class="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🚀</div>
        <h3 class="text-xl font-black text-slate-800 mb-3">웹 성능 최적화</h3>
        <p class="text-sm text-slate-500 leading-relaxed">가벼워진 이미지는 웹사이트의 LCP 지표를 개선하고 검색 엔진 최적화(SEO)에 직접적인 도움을 줍니다.</p>
      </div>
      <div class="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div class="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🔒</div>
        <h3 class="text-xl font-black text-slate-800 mb-3">강력한 보안</h3>
        <p class="text-sm text-slate-500 leading-relaxed">이미지가 외부 서버로 한 바이트도 전송되지 않습니다. 모든 작업은 오직 사용자의 기기에서만 끝납니다.</p>
      </div>
    </section>

    <section class="max-w-5xl mx-auto bg-slate-900 rounded-[4rem] p-10 md:p-20 text-white overflow-hidden relative">
      <div class="relative z-10 md:w-2/3 space-y-8">
        <h2 class="text-4xl font-black italic tracking-tighter">Why Convert Dragon?</h2>
        <p class="text-lg text-slate-400 leading-relaxed">
          대부분의 온라인 압축기는 파일을 서버로 업로드하여 분석합니다. 하지만 우리는 다릅니다. 사용자의 개인정보를 최우선으로 생각하며, 최신 웹 API를 활용해 즉각적인 결과물을 제공합니다. 더 빠르고, 더 안전하며, 더 가볍습니다.
        </p>
        <div class="flex gap-10">
          <div>
            <p class="text-4xl font-black text-emerald-400">80%</p>
            <p class="text-xs text-slate-500 uppercase mt-2 font-bold tracking-widest">Max Reduction</p>
          </div>
          <div>
            <p class="text-4xl font-black text-emerald-400">0ms</p>
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
      <h2 class="text-3xl font-black text-center text-slate-900 mb-12">압축 가이드</h2>
      <div class="space-y-4">
        <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <h4 class="font-bold text-slate-800 mb-2">어떤 포맷이 가장 압축률이 좋은가요?</h4>
          <p class="text-sm text-slate-500 leading-relaxed text-balance">일반적으로 WebP와 JPG가 가장 높은 압축률을 보입니다. PNG는 무손실 특성상 압축률이 낮을 수 있으니 용량이 중요하다면 WebP 변환 후 압축을 권장합니다.</p>
        </div>
        <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <h4 class="font-bold text-slate-800 mb-2">권장하는 압축 강도(Quality)는?</h4>
          <p class="text-sm text-slate-500 leading-relaxed text-balance">대부분의 웹 이미지에는 75% ~ 85% 사이의 값을 추천합니다. 이 범위에서는 육안으로 화질 저하를 느끼기 매우 어렵습니다.</p>
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