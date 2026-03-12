<template>
  <div class="max-w-4xl mx-auto py-16 px-6">
    <header class="mb-20 text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold mb-6 tracking-widest">
        WEB OPTIMIZATION MASTERCLASS
      </div>
      <h1 class="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
        느린 웹사이트의 주범, <br class="hidden md:block" />
        <span class="text-emerald-600 underline decoration-emerald-200 underline-offset-8">이미지 최적화</span>로 2배 빨라지기
      </h1>
      <p class="text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto font-medium">
        단 1초의 지연이 이탈률을 32% 증가시킨다는 사실을 알고 계셨나요? <br class="hidden md:block" />
        전문적인 이미지 관리 전략으로 검색 순위와 사용자 경험을 동시에 잡으세요.
      </p>
    </header>

    <article class="space-y-20">
      <section class="space-y-8">
        <div class="flex items-center gap-4">
          <span class="text-4 font-black text-emerald-100 leading-none">01</span>
          <h2 class="text-3xl font-black text-slate-800 tracking-tight">이미지 용량이 SEO와 매출에 미치는 영향</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="prose prose-slate text-slate-600 leading-relaxed">
            <p>
              구글은 2021년부터 Core Web Vitals(코어 웹 바이탈)를 검색 순위의 핵심 요소로 도입했습니다. 그중 가장 비중이 큰 항목이 바로 <strong>LCP(Largest Contentful Paint)</strong>입니다. 이는 페이지 방문 시 가장 큰 콘텐츠가 화면에 나타나는 속도를 측정하며, 대부분의 경우 '이미지'가 그 주인공입니다.
            </p>
            <p>
              이미지 최적화는 단순히 용량을 줄이는 작업이 아닙니다. 서버의 응답 속도를 높이고, 브라우저가 픽셀을 렌더링하는 시간을 단축하여 최종적으로 <strong>검색 상단 노출</strong>을 이끌어내는 고도의 SEO 전략입니다.
            </p>
          </div>
          <div class="bg-emerald-50 p-8 rounded-[2.5rem] border border-emerald-100">
            <h4 class="font-bold text-emerald-900 mb-4 flex items-center gap-2">
              📊 최적화 후 기대 효과
            </h4>
            <ul class="space-y-4 text-sm text-emerald-800">
              <li class="flex items-start gap-2">
                <span class="mt-1">✅</span>
                <span><strong>이탈률 감소:</strong> 3초 이상 로딩 시 모바일 사용자의 53%가 이탈합니다.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1">✅</span>
                <span><strong>전환율 상승:</strong> 로딩 속도가 1초 개선될 때마다 전자상거래 전환율은 최대 20% 상승합니다.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1">✅</span>
                <span><span><strong>크롤링 효율:</strong> 서버 부하가 줄어들어 검색 엔진 로봇이 더 자주, 더 깊게 사이트를 수집합니다.</span></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="space-y-12">
        <div class="flex items-center gap-4">
          <span class="text-4xl font-black text-emerald-100 leading-none">02</span>
          <h2 class="text-3xl font-black text-slate-800 tracking-tight">전문가가 제안하는 3단계 이미지 전략</h2>
        </div>
        
        <div class="space-y-6">
          <div class="flex flex-col md:flex-row gap-8 p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-md transition-shadow">
            <div class="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl flex-none">📏</div>
            <div class="space-y-3">
              <h3 class="text-xl font-bold text-slate-900">Step 1. 물리적 차원의 리사이징 (Resizing)</h3>
              <p class="text-slate-600 leading-relaxed">
                4K 해상도의 고화질 사진을 블로그 썸네일로 사용하고 있지는 않으신가요? 화면에 표시될 크기보다 큰 이미지를 사용하는 것은 엄청난 자원 낭비입니다. 모바일 환경이라면 가로 800px 내외, 일반적인 웹 콘텐츠라면 1200px 정도면 충분합니다. 실제 픽셀 규격에 맞추는 것만으로도 용량의 70% 이상을 즉시 절감할 수 있습니다.
              </p>
            </div>
          </div>

          <div class="flex flex-col md:flex-row gap-8 p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-md transition-shadow">
            <div class="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-3xl flex-none">📦</div>
            <div class="space-y-3">
              <h3 class="text-xl font-bold text-slate-900">Step 2. 차세대 포맷 도입 (WebP & AVIF)</h3>
              <p class="text-slate-600 leading-relaxed">
                전통적인 JPG나 PNG는 이제 구식입니다. 구글이 개발한 WebP 포맷은 JPG와 동일한 화질에서 용량을 25~35% 더 줄여줍니다. 또한 투명 배경이 필요한 경우 PNG 대신 WebP 무손실 모드를 사용하면 품질 손상 없이 파일을 가볍게 유지할 수 있습니다. 최근에는 더 진보된 AVIF 포맷도 등장하여 웹의 표준을 바꾸고 있습니다.
              </p>
            </div>
          </div>

          <div class="flex flex-col md:flex-row gap-8 p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-md transition-shadow">
            <div class="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl flex-none">📉</div>
            <div class="space-y-3">
              <h3 class="text-xl font-bold text-slate-900">Step 3. 알고리즘 기반 무손실 압축</h3>
              <p class="text-slate-600 leading-relaxed">
                마지막 단계는 메타데이터와 불필요한 색상 정보를 제거하는 압축 과정입니다. 인간의 눈으로는 구별할 수 없는 미세한 영역을 수학적으로 정리하여 용량을 극단적으로 낮춥니다. 이 과정은 반드시 서버 업로드 전, 혹은 빌드 과정에서 자동화하여 수행해야 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="border-y border-slate-100 py-16">
        <h2 class="text-2xl font-black text-slate-800 mb-8">💡 실전에서 바로 쓰는 최적화 체크리스트</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="flex gap-4 items-start">
            <div class="w-6 h-6 rounded-full bg-emerald-500 text-white flex-none flex items-center justify-center text-[10px]">✓</div>
            <p class="text-sm text-slate-600 font-medium">Lazy Loading 속성을 사용하여 스크롤 시 이미지가 로드되게 하세요.</p>
          </div>
          <div class="flex gap-4 items-start">
            <div class="w-6 h-6 rounded-full bg-emerald-500 text-white flex-none flex items-center justify-center text-[10px]">✓</div>
            <p class="text-sm text-slate-600 font-medium">이미지 태그에 width, height 값을 명시하여 레이아웃 시프트를 방지하세요.</p>
          </div>
          <div class="flex gap-4 items-start">
            <div class="w-6 h-6 rounded-full bg-emerald-500 text-white flex-none flex items-center justify-center text-[10px]">✓</div>
            <p class="text-sm text-slate-600 font-medium">로고나 아이콘 같은 단순 그래픽은 비트맵 대신 SVG 형식을 사용하세요.</p>
          </div>
          <div class="flex gap-4 items-start">
            <div class="w-6 h-6 rounded-full bg-emerald-500 text-white flex-none flex items-center justify-center text-[10px]">✓</div>
            <p class="text-sm text-slate-600 font-medium">중요한 히어로 이미지는 사전 로드(Preload)를 설정하여 가장 먼저 뜨게 하세요.</p>
          </div>
        </div>
      </section>

      <section class="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-10 pointer-events-none">
          <svg class="w-full h-full" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100" stroke="white" stroke-width="0.5" />
          </svg>
        </div>
        <div class="relative z-10">
          <h3 class="text-3xl md:text-4xl font-black mb-8 leading-tight">준비되셨나요? <br/>당신의 사이트를 가볍게 만드세요.</h3>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <NuxtLink to="/compress" class="bg-emerald-500 hover:bg-emerald-600 px-10 py-5 rounded-2xl font-black transition-all shadow-xl shadow-emerald-500/20">
              이미지 즉시 압축하기
            </NuxtLink>
            <NuxtLink to="/convert/jpg-to-webp" class="bg-white/10 hover:bg-white/20 px-10 py-5 rounded-2xl font-black transition-all border border-white/20 backdrop-blur-sm">
              차세대 포맷 변환
            </NuxtLink>
          </div>
          <p class="mt-8 text-slate-500 text-sm font-medium italic">
            *모든 작업은 서버 업로드 없이 브라우저에서 100% 안전하게 진행됩니다.
          </p>
        </div>
      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '웹 성능 최적화: 이미지 용량과 SEO 가이드 - Convert Dragon',
  meta: [
    { name: 'description', content: '구글 상단 노출을 위한 이미지 최적화 전략. LCP 개선법, WebP 도입의 중요성, 리사이징 팁을 상세히 알아보세요.' }
  ]
});
</script>