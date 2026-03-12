<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
    <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <img 
                src="/favicon.ico" 
                alt="변환해용 로고" 
                class="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 group-active:scale-90"
            />
          <span class="text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500">
            CONVERT DRAGON
          </span>
        </NuxtLink>

        <nav class="hidden md:flex gap-8 font-medium text-slate-600">
          <div class="relative group py-4">
            <button class="flex items-center gap-1 hover:text-blue-600 transition">
              이미지 변환
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div class="absolute left-0 top-full hidden group-hover:block w-48 bg-white border border-slate-100 shadow-xl rounded-2xl overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <NuxtLink to="/convert/jpg-to-png" class="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition">JPG to PNG</NuxtLink>
              <NuxtLink to="/convert/jpg-to-webp" class="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition">JPG to WebP</NuxtLink>
              <NuxtLink to="/convert/png-to-jpg" class="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition">PNG to JPG</NuxtLink>
              <NuxtLink to="/convert/png-to-webp" class="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition">PNG to WebP</NuxtLink>
              <div class="border-t border-slate-50 my-1"></div>
              <NuxtLink to="/convert/jpg-to-avif" class="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition font-bold">JPG to AVIF ✨</NuxtLink>
            </div>
          </div>

          <NuxtLink to="/compress" class="py-4 hover:text-blue-600 transition">이미지 압축</NuxtLink>
        </nav>
      </div>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.router-link-active:not(header a) {
  @apply text-blue-600 font-bold;
}
</style>