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
            별도의 회원가입이나 소프트웨어 설치 없이, 지금 바로 브라우저에서 작업을 시작하세요.
          </p>
          <div class="space-y-4">
            <div class="flex gap-4">
              <div class="flex-none w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 class="font-bold text-slate-800">파일 업로드</h4>
                <p class="text-sm text-slate-500">변환을 원하는 JPG, PNG, WebP 파일을 선택하거나 드래그 앤 드롭 하세요.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex-none w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 class="font-bold text-slate-800">포맷 선택 및 자동 변환</h4>
                <p class="text-sm text-slate-500">목표 형식을 선택하면 웹 워커(Web Worker)가 백그라운드에서 즉시 변환을 시작합니다.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex-none w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 class="font-bold text-slate-800">결과물 다운로드</h4>
                <p class="text-sm text-slate-500">변환이 완료된 파일을 확인하고 즉시 내 컴퓨터로 저장하세요.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-slate-200 aspect-video rounded-[3rem] overflow-hidden flex items-center justify-center text-slate-400 font-bold border-8 border-white shadow-2xl">
          <img 
              src="/description.png" 
              alt="이미지 변환 가이드" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
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
              가장 대중적인 손실 압축 포맷입니다. 사진 촬영 결과물에 최적화되어 있으며, 용량이 작아 웹사이트 업로드나 이메일 전송에 유리합니다.
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
              무손실 압축 포맷으로 투명 배경을 지원합니다. 로고, 아이콘, 텍스트가 포함된 그래픽 작업물에 가장 적합하며 화질 저하가 없습니다.
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
              구글의 차세대 표준입니다. JPG보다 작은 용량으로 비슷한 화질을 제공하며 투명 배경까지 지원합니다. 웹 성능 최적화의 필수 요소입니다.
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
              최신 기술이 집약된 고효율 포맷입니다. WebP보다 더 뛰어난 압축률을 자랑하며 고화질 이미지를 초저용량으로 저장할 수 있습니다.
            </p>
          </div>
          <NuxtLink to="/convert/jpg-to-avif" class="w-full py-3 px-4 bg-purple-50 text-purple-600 rounded-xl text-sm font-bold text-center hover:bg-purple-500 hover:text-white transition-all">
            AVIF로 변환하기
          </NuxtLink>
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
            네, 당연합니다! Convert Dragon은 클라이언트 측 변환(Client-side Conversion) 기술을 사용합니다. 선택하신 파일은 서버로 전송되지 않고 오직 사용자의 웹 브라우저 메모리 안에서만 처리됩니다. 작업을 마치고 탭을 닫으면 모든 데이터는 즉시 삭제됩니다.
          </div>
        </details>
        <details class="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <summary class="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-slate-800">
            변환 횟수나 용량에 제한이 있나요?
          </summary>
          <div class="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
            아니요, 어떠한 제한도 없습니다. 수백 장의 이미지를 변환하더라도 모두 무료이며, 사용자의 기기 성능이 허용하는 한 대용량 파일도 처리가 가능합니다. (일반적으로 20MB 이하 권장)
          </div>
        </details>
        <details class="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <summary class="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-slate-800">
            아이폰의 HEIC 파일도 변환이 가능한가요?
          </summary>
          <div class="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
            현재 JPG, PNG, WebP 간의 상호 변환을 지원하고 있습니다. HEIC 포맷은 Apple 기기 전용 라이브러리가 필요하여 현재 업데이트 준비 중입니다. 조만간 추가될 예정이니 많은 기대 부탁드립니다!
          </div>
        </details>
      </div>
    </section>
  </div>
</template>