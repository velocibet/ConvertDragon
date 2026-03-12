<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ? `${title} - ConvertDragon` : 'ConvertDragon - 무료 이미지 변환기',
  meta: [
    { name: 'description', content: '서버 업로드 없이 브라우저에서 즉시 변환하는 가장 빠른 이미지 변환 도구입니다.' }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>