<template>
  <div class="space-y-6">
    <div 
      class="relative border-2 border-dashed rounded-3xl p-10 text-center transition-all cursor-pointer group"
      :class="[
        isDragging 
          ? 'border-emerald-500 bg-emerald-50/50 scale-[1.02]' 
          : 'border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50'
      ]"
      @click="fileInput?.click()"
      @dragover.prevent="isDragging = true"
      @dragleave.prevent="isDragging = false"
      @drop.prevent="handleDrop"
    >
      <input 
        type="file" 
        ref="fileInput" 
        class="hidden" 
        accept="image/jpeg,image/png,image/webp"
        @change="handleFileChange"
      />
      
      <div v-if="!isProcessing && !resultInfo" class="space-y-4">
        <div class="text-5xl">📉</div>
        <div>
          <p class="text-slate-700 font-bold text-lg">압축할 이미지를 놓아주세요</p>
          <p class="text-slate-400 text-sm mt-1 uppercase">JPG, PNG, Webp 지원</p>
        </div>
      </div>

      <div v-else-if="isProcessing" class="py-4">
        <div class="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p class="text-emerald-600 font-bold">최적화 중...</p>
      </div>

      <div v-else-if="resultInfo" class="flex flex-col items-center gap-4">
        <div class="flex items-center gap-8">
          <div class="text-center">
            <p class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Before</p>
            <p class="text-lg font-bold text-slate-600">{{ formatSize(resultInfo.originalSize) }}</p>
          </div>
          <div class="text-emerald-500 animate-bounce">➡️</div>
          <div class="text-center">
            <p class="text-[10px] text-emerald-500 uppercase font-bold tracking-wider">After</p>
            <p class="text-2xl font-black text-emerald-600">{{ formatSize(resultInfo.compressedSize) }}</p>
          </div>
        </div>
        <div class="bg-emerald-100 px-4 py-1 rounded-full text-emerald-700 text-sm font-bold">
          {{ resultInfo.reduction }}% 절감 완료!
        </div>
      </div>
    </div>

    <div v-if="originalFile" class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
      <div class="flex justify-between items-center">
        <label class="text-sm font-bold text-slate-700">압축 강도 (Quality)</label>
        <span class="text-sm font-black text-emerald-600">{{ quality }}%</span>
      </div>
      <input 
        type="range" 
        v-model="quality" 
        min="10" 
        max="100" 
        step="1"
        class="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-500"
        @change="reCompress"
      />
      <p class="text-[11px] text-slate-400 leading-relaxed text-center">
        값이 낮을수록 용량은 줄어들지만 화질이 저하될 수 있습니다. (권장: 60-70%)
      </p>
    </div>

    <button 
      v-if="resultBlob" 
      @click="download"
      class="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold hover:bg-emerald-700 shadow-xl shadow-emerald-100 transition-all flex items-center justify-center gap-2"
    >
      <span>압축 파일 다운로드</span>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
const quality = ref(80);
const isDragging = ref(false);
const isProcessing = ref(false);
const originalFile = ref<File | null>(null);
const resultBlob = ref<Blob | null>(null);
const resultInfo = ref<{ originalSize: number, compressedSize: number, reduction: number } | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);

const formatSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const compressImage = async (file: File) => {
  isProcessing.value = true;
  originalFile.value = file;
  
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();

  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx?.drawImage(img, 0, 0);

    canvas.toBlob((blob) => {
      if (blob) {
        resultBlob.value = blob;
        const reduction = Math.round(((file.size - blob.size) / file.size) * 100);
        resultInfo.value = {
          originalSize: file.size,
          compressedSize: blob.size,
          reduction: reduction > 0 ? reduction : 0
        };
      }
      isProcessing.value = false;
    }, 'image/jpeg', quality.value / 100);
  };

  img.src = URL.createObjectURL(file);
};

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files?.[0]) compressImage(target.files[0]);
};

const handleDrop = (e: DragEvent) => {
  isDragging.value = false;
  if (e.dataTransfer?.files?.[0]) compressImage(e.dataTransfer.files[0]);
};

const reCompress = () => {
  if (originalFile.value) compressImage(originalFile.value);
};

const download = () => {
  if (!resultBlob.value) return;
  const url = URL.createObjectURL(resultBlob.value);
  const link = document.createElement('a');
  link.href = url;
  link.download = `compressed_${originalFile.value?.name.split('.')[0]}.jpg`;
  link.click();
};
</script>