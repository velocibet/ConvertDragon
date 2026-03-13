<template>
  <ClientOnly>
    <div class="py-12 md:py-20 px-4 space-y-20">
      <section class="max-w-2xl mx-auto">
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-4">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            SECURE LOCAL CONVERSION
          </div>
          
          <h1 class="text-3xl md:text-5xl font-black text-slate-900 flex flex-wrap items-center justify-center gap-3 uppercase tracking-tighter">
            <div class="relative inline-block">
              <select 
                :value="fromFormat"
                @change="handleFromChange"
                class="appearance-none bg-slate-100 border-2 border-transparent px-4 py-1 rounded-2xl outline-none cursor-pointer hover:bg-slate-200 transition-all text-slate-600"
              >
                <option v-for="fmt in fromOptions" :key="fmt" :value="fmt">
                  {{ fmt.toUpperCase() }}
                </option>
              </select>
            </div>

            <div class="text-slate-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>

            <div class="relative inline-block">
              <select 
                :value="toFormat"
                @change="handleToChange"
                class="appearance-none bg-white border-2 border-blue-600 text-blue-600 pl-4 pr-10 py-1 rounded-2xl outline-none cursor-pointer hover:bg-blue-50 transition-all shadow-sm"
              >
                <option v-for="fmt in toOptions" :key="fmt" :value="fmt">
                  {{ fmt.toUpperCase() }}
                </option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-3 flex items-center text-blue-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </h1>
          <p class="text-slate-500 mt-6 text-lg font-medium">
            {{ fromFormat.toUpperCase() }} 파일을 {{ toFormat.toUpperCase() }} 포맷으로 즉시 변환
          </p>
        </div>

        <ImageConverter :from="fromFormat" :to="toFormat" />

        <div class="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <div class="flex items-center gap-1">
            <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            No Server Upload
          </div>
          <div class="flex items-center gap-1">
            <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            Private & Anonymous
          </div>
        </div>
      </section>

      <section class="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 border-t border-slate-100 pt-20">
        <div class="space-y-4">
          <h3 class="text-xl font-black text-slate-800 uppercase">{{ fromFormat }}란 무엇인가요?</h3>
          <p class="text-slate-600 leading-relaxed text-sm">
            {{ fromFormat.toUpperCase() }} 형식은 디지털 그래픽 환경에서 널리 사용되는 데이터 규격입니다. 각 포맷은 압축률과 투명도 지원 여부 등 고유한 특성을 가지고 있습니다. Convert Dragon은 원본의 손상을 최소화하면서 사용자가 원하는 {{ toFormat.toUpperCase() }} 규격으로 완벽하게 재구성합니다.
          </p>
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-black text-slate-800 uppercase">왜 {{ toFormat }}로 변환하나요?</h3>
          <p class="text-slate-600 leading-relaxed text-sm">
            {{ toFormat.toUpperCase() }} 포맷은 현대적인 웹 환경이나 특정 소프트웨어 호환성을 위해 필수적인 경우가 많습니다. 특히 용량 최적화가 필요하거나 레이어 투명도를 유지해야 할 때 {{ toFormat }} 변환은 가장 효과적인 솔루션이 됩니다.
          </p>
        </div>
      </section>

      <section class="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100">
        <h2 class="text-2xl font-black text-slate-900 mb-8 text-center">변환 프로세스 상세 가이드</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center space-y-3">
            <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto text-xl font-bold">1</div>
            <h4 class="font-bold text-slate-800">로컬 파일 로드</h4>
            <p class="text-xs text-slate-500 leading-relaxed">선택한 이미지는 브라우저 내부 메모리에 즉시 할당됩니다. 서버로 전송되는 과정이 없어 유출 위험이 제로입니다.</p>
          </div>
          <div class="text-center space-y-3">
            <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto text-xl font-bold">2</div>
            <h4 class="font-bold text-slate-800">GPU 가속 연산</h4>
            <p class="text-xs text-slate-500 leading-relaxed">Web Worker 기술을 사용하여 기기의 자원을 활용합니다. 캔버스 API를 통해 {{ toFormat.toUpperCase() }} 픽셀 데이터를 재배열합니다.</p>
          </div>
          <div class="text-center space-y-3">
            <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto text-xl font-bold">3</div>
            <h4 class="font-bold text-slate-800">즉시 다운로드</h4>
            <p class="text-xs text-slate-500 leading-relaxed">변환이 완료된 데이터는 즉시 로컬 저장소로 다운로드 링크를 생성합니다. 모든 과정은 1초 내외로 완료됩니다.</p>
          </div>
        </div>
      </section>

      <section class="max-w-4xl mx-auto text-center space-y-6 pb-20">
        <h2 class="text-2xl font-black text-slate-900 tracking-tight">다른 변환 도구가 필요하신가요?</h2>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink v-for="fmt in allOptions" :key="fmt" :to="`/convert/${fromFormat}-to-${fmt}`" class="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-all uppercase">
            {{ fromFormat }} to {{ fmt }}
          </NuxtLink>
        </div>
      </section>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

// 12개 포맷으로 확장된 리스트
const supportedFormats = [
  'png', 'jpg', 'jpeg', 'webp', 'avif', 'heic', 
  'svg', 'pdf', 'ico', 'gif', 'bmp', 'tiff'
];

const fromFormat = computed(() => (route.params.from as string || '').toLowerCase());
const toFormat = computed(() => (route.params.to as string || '').toLowerCase());

const fromOptions = computed(() => supportedFormats.filter(fmt => fmt !== toFormat.value));
const toOptions = computed(() => supportedFormats.filter(fmt => fmt !== fromFormat.value));
const allOptions = computed(() => supportedFormats.filter(fmt => fmt !== fromFormat.value));

const handleFromChange = (e: Event) => {
  const target = e.target as HTMLSelectElement;
  router.push(`/convert/${target.value}-to-${toFormat.value}`);
};

const handleToChange = (e: Event) => {
  const target = e.target as HTMLSelectElement;
  router.push(`/convert/${fromFormat.value}-to-${target.value}`);
};

onMounted(() => {
  if (!supportedFormats.includes(fromFormat.value) || !supportedFormats.includes(toFormat.value) || fromFormat.value === toFormat.value) {
    router.push('/');
  }
});

useHead({
  title: `${fromFormat.value.toUpperCase()} to ${toFormat.value.toUpperCase()} 변환기 - Convert Dragon`,
  meta: [
    { name: 'description', content: `가장 빠른 ${fromFormat.value} to ${toFormat.value} 온라인 변환기. 개인정보 보호를 위해 서버 업로드 없이 브라우저에서 즉시 처리됩니다.` }
  ]
});
</script>