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
        :accept="acceptTypes"
        multiple
        @change="handleFileChange"
      />
      
      <div v-if="!isProcessing" class="space-y-4 pointer-events-none">
        <div class="text-5xl transition-transform duration-300" :class="{ 'scale-110': isDragging }">
          {{ isDragging ? '📥' : '🖼️' }}
        </div>
        <div>
          <p class="text-slate-700 font-bold text-lg">
            {{ isDragging ? t('imageConverter.dropHint') : t('imageConverter.dragPlaceholder') }}
          </p>
          <p class="text-slate-400 text-sm mt-1 uppercase">
            {{ t('imageConverter.multiSelect', { format: from.toUpperCase() }) }}
          </p>
        </div>
      </div>

      <div v-else class="py-4">
        <div class="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p class="text-blue-600 font-bold">{{ t('imageConverter.processing') }}</p>
      </div>
    </div>

    <button 
      v-if="resultBlob" 
      @click="download"
      class="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-slate-800 shadow-xl transition-all flex items-center justify-center gap-2"
    >
      <span>{{ resultFileName.endsWith('.zip') ? t('imageConverter.downloadAll') : t('imageConverter.downloadReady') }}</span>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';

interface Props {
  from: string;
  to: string;
}
const props = defineProps<Props>();
const { t } = useI18n();

const { convert, download, isProcessing, resultBlob, resultFileName } = useImageConverter();
const fileInput = ref<HTMLInputElement | null>(null);
const isDragging = ref(false);

const acceptTypes = computed(() => {
  const f = props.from.toLowerCase();
  if (f === 'jpg' || f === 'jpeg') return '.jpg,.jpeg';
  if (f === 'png') return '.png';
  if (f === 'webp') return '.webp';
  if (f === 'avif') return '.avif';
  if (f === 'heic') return '.heic,.heif';
  if (f === 'svg') return '.svg';
  if (f === 'pdf') return '.pdf';
  if (f === 'ico') return '.ico';
  if (f === 'gif') return '.gif';
  if (f === 'bmp') return '.bmp';
  if (f === 'tiff' || f === 'tif') return '.tiff,.tif';
  return `image/${f}`;
});

const validateFile = (file: File) => {
  const extension = file.name.split('.').pop()?.toLowerCase() || '';
  const f = props.from.toLowerCase();

  if (f === 'jpg' || f === 'jpeg') return ['jpg', 'jpeg'].includes(extension);
  if (f === 'heic') return ['heic', 'heif'].includes(extension);
  if (f === 'tiff') return ['tiff', 'tif'].includes(extension);
  
  return extension === f;
};

const processFiles = async (files: FileList | File[]) => {
  const validFiles = Array.from(files).filter(validateFile);
  
  if (validFiles.length === 0) {
    alert(t('imageConverter.invalidType', { format: props.from.toUpperCase() }));
    return;
  }

  await convert(validFiles, props.to);
  $fetch('/api/log', {
    method: 'POST',
    body: {
      from: props.from,
      to: props.to
    }
  });
};

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    processFiles(target.files);
    target.value = '';
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
  if (files && files.length > 0) {
    processFiles(files);
  }
};

watch(() => [props.from, props.to], () => {
  resultBlob.value = null;
  resultFileName.value = '';
});
</script>