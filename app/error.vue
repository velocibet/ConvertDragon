<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center">
    <div class="max-w-md w-full">
      <div class="mb-8">
        <span class="text-8xl inline-block animate-pulse">💤</span>
      </div>
      
      <h1 class="text-6xl font-black text-slate-900 mb-4">{{ error.statusCode }}</h1>
      
      <h2 class="text-2xl font-bold text-slate-800 mb-4">
        {{ is404 ? '길을 잃은 드래곤을 발견했습니다!' : '드래곤이 잠시 쉬고 있어요' }}
      </h2>
      
      <p class="text-slate-500 mb-10 leading-relaxed">
        {{ is404 
          ? '요청하신 페이지가 존재하지 않거나 잘못된 변환 경로입니다. 주소를 다시 확인해 주세요.' 
          : '서비스 이용 중 예기치 못한 문제가 발생했습니다.' 
        }}
      </p>

      <div class="space-y-3">
        <button 
          @click="handleError"
          class="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all"
        >
          홈으로 돌아가기
        </button>
        
        <button 
          @click="router.back()"
          class="w-full bg-white text-slate-600 py-4 rounded-2xl font-bold hover:bg-slate-100 border border-slate-200 transition-all"
        >
          이전 페이지로
        </button>
      </div>

      <p class="mt-8 text-xs text-slate-400">Error ID: {{ error.statusMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object as any
});

const router = useRouter();
const is404 = computed(() => props.error.statusCode === 404);

const handleError = () => {
  clearError({ redirect: '/' });
};
</script>