<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-2 flex items-center gap-2">
      <span class="text-indigo-600">Base64</span> 변환해용
    </h1>
    <p class="text-gray-600 mb-8">텍스트를 Base64로 인코딩하거나 디코딩해보세용. 모든 처리는 브라우저에서 안전하게 이루어집니다.</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="flex flex-col gap-2">
        <label class="font-semibold text-gray-700">텍스트 입력</label>
        <textarea
          v-model="inputText"
          rows="10"
          class="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none"
          placeholder="여기에 텍스트를 입력하세용..."
        ></textarea>
        <div class="flex gap-2 mt-2">
          <button @click="encode" class="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">인코딩 🔒</button>
          <button @click="decode" class="flex-1 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition">디코딩 🔓</button>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-center">
          <label class="font-semibold text-gray-700">결과 화면</label>
          <button 
            v-if="outputText"
            @click="copyToClipboard" 
            class="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded border transition"
          >
            {{ copied ? '복사됨! ✅' : '클립보드 복사' }}
          </button>
        </div>
        <textarea
          v-model="outputText"
          readonly
          rows="10"
          class="p-4 bg-gray-50 border border-gray-300 rounded-xl text-indigo-900 font-mono resize-none"
          placeholder="결과가 여기에 표시됩니다..."
        ></textarea>
        <button @click="clearAll" class="mt-2 text-sm text-gray-400 hover:text-red-500 underline transition">전체 삭제</button>
      </div>
    </div>

    <div class="mt-12 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
      <h3 class="font-bold text-indigo-900 mb-1">🛡️ 보안 안내</h3>
      <p class="text-sm text-indigo-800">
        ConvertDragon의 Base64 변환기는 서버로 데이터를 전송하지 않습니다. 모든 작업은 사장님의 브라우저(Client-side) 내에서 처리되므로 개인정보나 비밀번호를 입력해도 안전해용!
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const inputText = ref('')
const outputText = ref('')
const copied = ref(false)

const encode = () => {
  try {
    if (!inputText.value) return
    const bytes = new TextEncoder().encode(inputText.value)
    const binString = String.fromCodePoint(...bytes)
    outputText.value = btoa(binString)
  } catch (e) {
    alert('인코딩 중 오류가 발생했습니다.')
  }
}

const decode = () => {
  try {
    if (!inputText.value) return
    const binString = atob(inputText.value)
    const bytes = Uint8Array.from(binString, (m) => m.codePointAt(0))
    outputText.value = new TextDecoder().decode(bytes)
  } catch (e) {
    alert('올바른 Base64 형식이 아닙니다. 다시 확인해주세용!')
  }
}

const clearAll = () => {
  inputText.value = ''
  outputText.value = ''
}

const copyToClipboard = async () => {
  await navigator.clipboard.writeText(outputText.value)
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}

useSeoMeta({
  title: 'Base64 변환기 - ConvertDragon',
  description: '텍스트를 Base64로 간편하게 인코딩/디코딩하세요. 서버 저장 없는 안전한 변환 도구입니다.',
})
</script>