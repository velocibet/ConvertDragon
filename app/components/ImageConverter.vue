<template>
  <div class="space-y-4">
    <div 
      class="relative border-2 border-dashed rounded-3xl p-12 text-center transition-all cursor-pointer group"
      :class="[
        isDragging 
          ? 'border-blue-500 bg-blue-50/50 scale-[1.02]' 
          : 'border-slate-200 hover:border-blue-400 hover:bg-blue-50/50'
      ]"
      @click="fileInput?.click()"
      @dragover.prevent="handleDragOver"
      @dragleave.prevent="handleDragLeave"
      @drop.prevent="handleDrop"
    >
      <input 
        type="file" 
        ref="fileInput" 
        class="hidden" 
        :accept="`image/${from === 'jpg' ? 'jpeg' : from}`"
        @change="handleFileChange"
      />
      
      <div v-if="!isProcessing" class="space-y-4 pointer-events-none">
        <div class="text-5xl transition-transform duration-300" :class="{ 'scale-110': isDragging }">
          {{ isDragging ? '📥' : '🖼️' }}
        </div>
        <div>
          <p class="text-slate-700 font-bold text-lg">
            {{ isDragging ? '여기에 놓으세요!' : '파일을 끌어다 놓거나 클릭' }}
          </p>
          <p class="text-slate-400 text-sm mt-1 uppercase">{{ from }} 파일을 선택해주세요</p>
        </div>
      </div>

      <div v-else class="py-4">
        <div class="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p class="text-blue-600 font-bold">변환 중...</p>
      </div>
    </div>

    <button 
      v-if="resultBlob" 
      @click="download"
      class="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-slate-800 shadow-xl transition-all flex items-center justify-center gap-2"
    >
      <span>다운로드 완료 (.{{ to }})</span>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  from: string;
  to: string;
}
const props = defineProps<Props>();

const { convert, download, isProcessing, resultBlob } = useImageConverter();
const fileInput = ref<HTMLInputElement | null>(null);
const isDragging = ref(false);

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    convert(target.files[0], props.to);
  }
};

const handleDragOver = () => {
  isDragging.value = true;
};

const handleDragLeave = () => {
  isDragging.value = false;
};

const handleDrop = (e: DragEvent) => {
  isDragging.value = false;
  const files = e.dataTransfer?.files;
  if (files && files[0]) {
    const file = files[0];
    const extension = file.name.split('.').pop()?.toLowerCase();
    const validFrom = props.from === 'jpg' ? ['jpg', 'jpeg'] : [props.from];
    
    if (extension && validFrom.includes(extension)) {
      convert(file, props.to);
    } else {
      alert(`${props.from.toUpperCase()} 파일만 변환 가능합니다.`);
    }
  }
};

watch(() => [props.from, props.to], () => {
  resultBlob.value = null;
});
</script>