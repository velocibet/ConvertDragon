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
            {{ t('convert.secureBadge') }}
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
            {{ t('convert.subtitle', { from: fromFormat.toUpperCase(), to: toFormat.toUpperCase() }) }}
          </p>
        </div>

        <ImageConverter :from="fromFormat" :to="toFormat" />

        <div class="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <div class="flex items-center gap-1">
            <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            {{ t('convert.info.noServer') }}
          </div>
          <div class="flex items-center gap-1">
            <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            {{ t('convert.info.private') }}
          </div>
        </div>
      </section>

      <section class="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 border-t border-slate-100 pt-20">
        <div class="space-y-4">
          <h3 class="text-xl font-black text-slate-800 uppercase">{{ t('convert.section.whatIs', { format: fromFormat }) }}</h3>
          <p class="text-slate-600 leading-relaxed text-sm">
            {{ t('convert.section.whatIsDescription', { format: fromFormat.toUpperCase(), to: toFormat.toUpperCase() }) }}
          </p>
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-black text-slate-800 uppercase">{{ t('convert.section.whyConvert', { format: toFormat }) }}</h3>
          <p class="text-slate-600 leading-relaxed text-sm">
            {{ t('convert.section.whyConvertDescription', { format: toFormat.toUpperCase() }) }}
          </p>
        </div>
      </section>

      <section class="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100">
        <h2 class="text-2xl font-black text-slate-900 mb-8 text-center">{{ t('convert.section.processTitle') }}</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center space-y-3">
            <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto text-xl font-bold">1</div>
            <h4 class="font-bold text-slate-800">{{ t('convert.section.steps.load.title') }}</h4>
            <p class="text-xs text-slate-500 leading-relaxed">{{ t('convert.section.steps.load.description') }}</p>
          </div>
          <div class="text-center space-y-3">
            <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto text-xl font-bold">2</div>
            <h4 class="font-bold text-slate-800">{{ t('convert.section.steps.gpu.title') }}</h4>
            <p class="text-xs text-slate-500 leading-relaxed">{{ t('convert.section.steps.gpu.description', { to: toFormat.toUpperCase() }) }}</p>
          </div>
          <div class="text-center space-y-3">
            <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto text-xl font-bold">3</div>
            <h4 class="font-bold text-slate-800">{{ t('convert.section.steps.download.title') }}</h4>
            <p class="text-xs text-slate-500 leading-relaxed">{{ t('convert.section.steps.download.description') }}</p>
          </div>
        </div>
      </section>

      <section class="max-w-4xl mx-auto text-center space-y-6 pb-20">
        <h2 class="text-2xl font-black text-slate-900 tracking-tight">{{ t('convert.section.otherTools.title') }}</h2>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink v-for="fmt in allOptions" :key="fmt" :to="`/convert/${fromFormat}-to-${fmt}`" class="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-all uppercase">
            {{ t('convert.section.otherTools.cta', { from: fromFormat, to: fmt }) }}
          </NuxtLink>
        </div>
      </section>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const route = useRoute();
const router = useRouter();
const { t } = useI18n();

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