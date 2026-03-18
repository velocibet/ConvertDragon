<template>
  <div class="max-w-4xl mx-auto py-16 px-6">
    <header class="mb-16">
      <NuxtLink to="/" class="text-slate-400 hover:text-slate-600 text-sm font-bold flex items-center gap-2 mb-8 transition-all group">
        <span class="group-hover:-translate-x-1 transition-transform">←</span> BACK TO HOME
      </NuxtLink>
      <div class="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-black w-fit mb-4 tracking-widest uppercase">Deep Dive: 이미지 포맷</div>
      <h1 class="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
        아이폰 HEIC 파일, <br class="hidden md:block" />
        <span class="text-blue-600">완벽 가이드와 해결법</span>
      </h1>
      <p class="text-xl text-slate-500 leading-relaxed max-w-2xl font-medium">
        성능은 뛰어나지만 호환성은 까다로운 HEIC. <br class="hidden md:block" />
        애플이 이 포맷을 선택한 이유부터 윈도우에서 열람하는 방법까지 모두 정리했습니다.
      </p>
    </header>

    <article class="space-y-24">
      <section class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <h2 class="text-3xl font-black text-slate-800 tracking-tight">01. HEIC란 무엇인가?</h2>
          <div class="prose prose-slate text-slate-600 leading-relaxed">
            <p>
              <strong>HEIC(High Efficiency Image Coding)</strong>는 고효율 비디오 코덱인 HEVC(H.265) 기술을 기반으로 한 이미지 컨테이너 형식입니다. 애플은 2017년 iOS 11부터 이 포맷을 기본값으로 채택했습니다.
            </p>
            <p>
              가장 큰 특징은 <strong>'압축 효율'</strong>입니다. 고화질 데이터는 그대로 유지하면서, 기존 파일 형식인 JPEG 대비 용량을 50% 이하로 줄일 수 있습니다. 수천 장의 사진을 찍는 현대 스마트폰 사용자들에게는 축복과 같은 기술입니다.
            </p>
          </div>
        </div>
        <div class="bg-blue-50 rounded-[3rem] p-10 border border-blue-100 space-y-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-xl">💎</div>
            <h4 class="font-bold text-blue-900">HEIC만의 장점</h4>
          </div>
          <ul class="space-y-4 text-sm text-blue-800">
            <li class="flex items-start gap-3">
              <span class="font-bold text-blue-500">·</span>
              <span><strong>16비트 컬러 지원:</strong> 8비트 JPG보다 훨씬 풍부한 색조 표현 가능</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="font-bold text-blue-500">·</span>
              <span><strong>멀티 이미지 저장:</strong> 라이브 포토나 버스트샷을 하나의 파일에 담음</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="font-bold text-blue-500">·</span>
              <span><strong>비파괴 편집:</strong> 회전/크롭 정보 별도 저장으로 원본 복구 가능</span>
            </li>
          </ul>
        </div>
      </section>

      <section class="space-y-10">
        <h2 class="text-3xl font-black text-slate-800 tracking-tight text-center">02. 왜 윈도우에서는 안 보일까?</h2>
        <div class="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
          <div class="grid md:grid-cols-2 gap-12 relative z-10">
            <div class="space-y-6">
              <p class="text-slate-400 leading-relaxed">
                HEIC는 기술적으로 뛰어나지만, <strong>라이선스 비용과 로열티 문제</strong>로 인해 윈도우나 구형 안드로이드 환경에서 기본 지원이 늦었습니다. 마이크로소프트는 별도의 유료 확장 프로그램을 설치해야만 사진 앱에서 HEIC를 볼 수 있습니다.
              </p>
              <p class="text-slate-400 leading-relaxed">
                또한 대부분의 웹 브라우저(Chrome, Edge, Safari 제외 일부)나 오래된 디자인 툴에서도 HEIC는 여전히 '알 수 없는 파일'로 분류됩니다.
              </p>
            </div>
            <div class="space-y-6">
              <div class="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <h4 class="font-bold mb-2 text-white italic">주요 증상</h4>
                <ul class="text-sm text-slate-500 space-y-2">
                  <li>- 파일 아이콘이 흰색 종이 모양으로 표시</li>
                  <li>- "지원되지 않는 파일 형식입니다" 메시지</li>
                  <li>- 카카오톡 PC 버전 등에서 전송 불가</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-12">
        <h2 class="text-3xl font-black text-slate-800 tracking-tight">03. 지금 바로 해결하는 3가지 방법</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="space-y-4">
            <div class="text-2xl">⚙️</div>
            <h4 class="font-bold text-slate-900">아이폰 설정 변경</h4>
            <p class="text-sm text-slate-500 leading-relaxed">
              [설정 > 카메라 > 포맷]에서 <strong>'가장 호환성 높음'</strong> 선택. 이후 찍는 사진은 자동 JPG 저장
            </p>
          </div>
          <div class="space-y-4">
            <div class="text-2xl">💻</div>
            <h4 class="font-bold text-slate-900">윈도우 확장 설치</h4>
            <p class="text-sm text-slate-500 leading-relaxed">
              Microsoft Store에서 'HEIF 이미지 확장' 검색 후 설치 (일부 환경에서 유료 가능)
            </p>
          </div>
          <div class="space-y-4">
            <div class="text-2xl">🐉</div>
            <h4 class="font-bold text-slate-900">온라인 변환 도구</h4>
            <p class="text-sm text-slate-500 leading-relaxed">
              설치 없이 즉시 JPG/PNG 변환 가능
            </p>
          </div>
        </div>
      </section>

      <section class="bg-blue-600 rounded-[4rem] p-12 md:p-20 text-center text-white">
        <h3 class="text-3xl md:text-4xl font-black mb-8 leading-tight">
          HEIC 변환 기능, <br/>곧 준비 완료!
        </h3>
        <p class="text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          Convert Dragon은 <strong>브라우저 자체 가속 HEIC 변환 엔진</strong>을 개발 중입니다. 별도 앱 설치나 유료 결제 없이 안전하게 사진 변환 가능
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/" class="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-xl">
            다른 변환 도구 사용하기
          </NuxtLink>
        </div>
      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '아이폰 HEIC 가이드: 원인부터 변환 방법까지 - Convert Dragon',
  meta: [
    { name: 'description', content: '아이폰 HEIC 포맷이 윈도우에서 안 열리는 이유와 해결법을 상세히 안내합니다. JPG 변환 설정 팁 포함.' }
  ]
});
</script>