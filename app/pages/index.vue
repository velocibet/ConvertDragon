<template>
  <div class="py-16 px-4 space-y-32">

    <section class="max-w-5xl mx-auto">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <h2 class="text-4xl font-black text-slate-900 leading-tight">
            단 3단계로 끝내는<br/>
            <span class="text-blue-600">스마트한 이미지 변환</span>
          </h2>
          <p class="text-slate-600 leading-relaxed">
            Convert Dragon은 복잡한 설정 없이 누구나 전문가 수준의 이미지 변환 결과물을 얻을 수 있도록 설계되었습니다.
            별도의 회원가입이나 소프트웨어 설치 없이 지금 바로 브라우저에서 작업을 시작할 수 있습니다.
          </p>
          <div class="space-y-4">
            <div class="flex gap-4">
              <div class="flex-none w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 class="font-bold text-slate-800">파일 업로드</h4>
                <p class="text-sm text-slate-500">변환을 원하는 JPG, PNG, WebP, AVIF 파일을 선택하거나 드래그 앤 드롭 하세요.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex-none w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 class="font-bold text-slate-800">포맷 선택 및 자동 변환</h4>
                <p class="text-sm text-slate-500">원하는 포맷을 선택하면 브라우저가 즉시 이미지를 변환합니다.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex-none w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 class="font-bold text-slate-800">결과물 다운로드</h4>
                <p class="text-sm text-slate-500">변환된 이미지를 바로 다운로드하고 원하는 곳에 사용할 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-slate-200 aspect-video rounded-[3rem] overflow-hidden flex items-center justify-center text-slate-400 font-bold border-8 border-white shadow-2xl">
          <img src="/description.png" alt="이미지 변환 가이드" class="w-full h-full object-cover"/>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto bg-white rounded-[3rem] p-12 border border-slate-100 shadow-sm">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-black text-slate-900 mb-4">나에게 맞는 이미지 포맷은?</h2>
        <p class="text-slate-500">각 포맷의 특징을 이해하고 즉시 변환을 시작해보세요.</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div class="flex flex-col h-full space-y-4">
          <div class="space-y-3 flex-grow">
            <div class="text-blue-600 font-black text-xl italic">JPG / JPEG</div>
            <p class="text-sm text-slate-600 leading-relaxed">
              가장 널리 사용되는 이미지 포맷으로 사진 이미지에 최적화되어 있습니다.
              파일 크기가 작고 대부분의 웹사이트와 프로그램에서 완벽하게 지원됩니다.
            </p>
          </div>
          <NuxtLink to="/convert/png-to-jpg" class="w-full py-3 px-4 bg-blue-50 text-blue-600 rounded-xl text-sm font-bold text-center hover:bg-blue-600 hover:text-white transition-all">
            JPG로 변환하기
          </NuxtLink>
        </div>

        <div class="flex flex-col h-full space-y-4">
          <div class="space-y-3 flex-grow">
            <div class="text-emerald-500 font-black text-xl italic">PNG</div>
            <p class="text-sm text-slate-600 leading-relaxed">
              무손실 압축 이미지 포맷으로 투명 배경을 지원합니다.
              로고, 아이콘, UI 디자인 등 그래픽 작업에 적합합니다.
            </p>
          </div>
          <NuxtLink to="/convert/jpg-to-png" class="w-full py-3 px-4 bg-emerald-50 text-emerald-600 rounded-xl text-sm font-bold text-center hover:bg-emerald-500 hover:text-white transition-all">
            PNG로 변환하기
          </NuxtLink>
        </div>

        <div class="flex flex-col h-full space-y-4">
          <div class="space-y-3 flex-grow">
            <div class="text-orange-500 font-black text-xl italic">WebP</div>
            <p class="text-sm text-slate-600 leading-relaxed">
              구글에서 개발한 차세대 웹 이미지 포맷으로 JPG보다 작은 용량과 높은 화질을 제공합니다.
            </p>
          </div>
          <NuxtLink to="/convert/jpg-to-webp" class="w-full py-3 px-4 bg-orange-50 text-orange-600 rounded-xl text-sm font-bold text-center hover:bg-orange-500 hover:text-white transition-all">
            WebP로 변환하기
          </NuxtLink>
        </div>

        <div class="flex flex-col h-full space-y-4">
          <div class="space-y-3 flex-grow">
            <div class="text-purple-500 font-black text-xl italic">AVIF</div>
            <p class="text-sm text-slate-600 leading-relaxed">
              최신 이미지 압축 기술을 사용하는 포맷으로 WebP보다도 더 높은 압축률을 제공합니다.
            </p>
          </div>
          <NuxtLink to="/convert/jpg-to-avif" class="w-full py-3 px-4 bg-purple-50 text-purple-600 rounded-xl text-sm font-bold text-center hover:bg-purple-500 hover:text-white transition-all">
            AVIF로 변환하기
          </NuxtLink>
        </div>

      </div>
    </section>

    <section class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-black text-slate-900 mb-4">왜 Convert Dragon을 선택해야 할까요?</h2>
        <p class="text-slate-500">빠르고 안전한 이미지 변환 경험을 제공합니다.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-10">

        <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center space-y-4">
          <div class="text-4xl">⚡</div>
          <h3 class="font-bold text-lg text-slate-800">초고속 변환</h3>
          <p class="text-sm text-slate-600 leading-relaxed">
            모든 변환은 서버가 아닌 브라우저에서 처리되기 때문에 매우 빠르게 완료됩니다.
          </p>
        </div>

        <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center space-y-4">
          <div class="text-4xl">🔒</div>
          <h3 class="font-bold text-lg text-slate-800">완벽한 보안</h3>
          <p class="text-sm text-slate-600 leading-relaxed">
            업로드된 파일은 서버로 전송되지 않고 사용자의 기기 안에서만 처리됩니다.
          </p>
        </div>

        <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center space-y-4">
          <div class="text-4xl">💻</div>
          <h3 class="font-bold text-lg text-slate-800">설치 필요 없음</h3>
          <p class="text-sm text-slate-600 leading-relaxed">
            브라우저만 있으면 어디서든 바로 사용할 수 있습니다.
          </p>
        </div>

      </div>
    </section>

    <section class="max-w-4xl mx-auto pb-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-black text-slate-900">자주 묻는 질문 (FAQ)</h2>
      </div>

      <div class="space-y-4">

        <details class="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm" open>
          <summary class="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-slate-800">
            내 이미지는 안전하게 보호되나요?
            <span class="transition group-open:rotate-180">▼</span>
          </summary>
          <div class="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
            Convert Dragon은 클라이언트 측 이미지 처리 방식을 사용합니다.
            모든 파일은 브라우저 안에서 처리되며 서버로 전송되지 않습니다.
          </div>
        </details>

        <details class="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <summary class="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-slate-800">
            변환 횟수나 용량에 제한이 있나요?
          </summary>
          <div class="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
            제한 없이 무료로 사용할 수 있습니다. 다만 브라우저 환경에 따라 매우 큰 파일은 처리 시간이 길어질 수 있습니다.
          </div>
        </details>

        <details class="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <summary class="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-slate-800">
            아이폰 HEIC 파일도 지원하나요?
          </summary>
          <div class="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
            현재 HEIC 지원 기능은 준비 중이며 향후 업데이트에서 추가될 예정입니다.
          </div>
        </details>

      </div>
    </section>

  </div>
</template>