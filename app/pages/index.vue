<template>
  <div class="py-16 px-4 space-y-32">

    <section class="max-w-5xl mx-auto">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <h2 class="text-4xl font-black text-slate-900 leading-tight">
            {{ $t('home.hero.titleLine1') }}<br/>
            <span class="text-blue-600">{{ $t('home.hero.titleLine2') }}</span>
          </h2>
          <p class="text-slate-600 leading-relaxed">
            {{ $t('home.hero.subtitle') }}
          </p>
          <div class="space-y-4">
            <div class="flex gap-4">
              <div class="flex-none w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
              <h4 class="font-bold text-slate-800">{{ $t('home.hero.steps.upload.title') }}</h4>
              <p class="text-sm text-slate-500">{{ $t('home.hero.steps.upload.description') }}</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex-none w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 class="font-bold text-slate-800">{{ $t('home.hero.steps.chooseFormat.title') }}</h4>
                <p class="text-sm text-slate-500">{{ $t('home.hero.steps.chooseFormat.description') }}</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex-none w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 class="font-bold text-slate-800">{{ $t('home.hero.steps.download.title') }}</h4>
                <p class="text-sm text-slate-500">{{ $t('home.hero.steps.download.description') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-slate-200 aspect-video rounded-[3rem] overflow-hidden flex items-center justify-center text-slate-400 font-bold border-8 border-white shadow-2xl">
          <img src="/description.png" alt="이미지 변환 가이드" class="w-full h-full object-cover"/>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto bg-white rounded-[3rem] p-12 border border-slate-100 shadow-sm">
      <div class="text-center mb-16">
          <h2 class="text-3xl font-black text-slate-900 mb-4">{{ $t('home.formats.title') }}</h2>
          <p class="text-slate-500">{{ $t('home.formats.subtitle') }}</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div class="flex flex-col h-full space-y-4">
          <div class="space-y-3 flex-grow">
            <div class="text-blue-600 font-black text-xl italic">{{ $t('home.formats.jpg.name') }}</div>
            <p class="text-sm text-slate-600 leading-relaxed">
              {{ $t('home.formats.jpg.description') }}
            </p>
          </div>
          <NuxtLink to="/convert/png-to-jpg" class="w-full py-3 px-4 bg-blue-50 text-blue-600 rounded-xl text-sm font-bold text-center hover:bg-blue-600 hover:text-white transition-all">
            {{ $t('home.formats.jpg.cta') }}
          </NuxtLink>
        </div>

        <div class="flex flex-col h-full space-y-4">
          <div class="space-y-3 flex-grow">
            <div class="text-emerald-500 font-black text-xl italic">{{ $t('home.formats.png.name') }}</div>
            <p class="text-sm text-slate-600 leading-relaxed">
              {{ $t('home.formats.png.description') }}
            </p>
          </div>
          <NuxtLink to="/convert/jpg-to-png" class="w-full py-3 px-4 bg-emerald-50 text-emerald-600 rounded-xl text-sm font-bold text-center hover:bg-emerald-500 hover:text-white transition-all">
            {{ $t('home.formats.png.cta') }}
          </NuxtLink>
        </div>

        <div class="flex flex-col h-full space-y-4">
          <div class="space-y-3 flex-grow">
            <div class="text-orange-500 font-black text-xl italic">{{ $t('home.formats.webp.name') }}</div>
            <p class="text-sm text-slate-600 leading-relaxed">
              {{ $t('home.formats.webp.description') }}
            </p>
          </div>
          <NuxtLink to="/convert/jpg-to-webp" class="w-full py-3 px-4 bg-orange-50 text-orange-600 rounded-xl text-sm font-bold text-center hover:bg-orange-500 hover:text-white transition-all">
            {{ $t('home.formats.webp.cta') }}
          </NuxtLink>
        </div>

        <div class="flex flex-col h-full space-y-4">
          <div class="space-y-3 flex-grow">
            <div class="text-purple-500 font-black text-xl italic">{{ $t('home.formats.avif.name') }}</div>
            <p class="text-sm text-slate-600 leading-relaxed">
              {{ $t('home.formats.avif.description') }}
            </p>
          </div>
          <NuxtLink to="/convert/jpg-to-avif" class="w-full py-3 px-4 bg-purple-50 text-purple-600 rounded-xl text-sm font-bold text-center hover:bg-purple-500 hover:text-white transition-all">
            {{ $t('home.formats.avif.cta') }}
          </NuxtLink>
        </div>

      </div>
    </section>

    <section class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-black text-slate-900 mb-4">{{ $t('home.why.title') }}</h2>
        <p class="text-slate-500">{{ $t('home.why.subtitle') }}</p>
      </div>

      <div class="grid md:grid-cols-3 gap-10">

        <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center space-y-4">
          <div class="text-4xl">⚡</div>
          <h3 class="font-bold text-lg text-slate-800">{{ $t('home.why.features.speed.title') }}</h3>
          <p class="text-sm text-slate-600 leading-relaxed">
            {{ $t('home.why.features.speed.description') }}
          </p>
        </div>

        <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center space-y-4">
          <div class="text-4xl">🔒</div>
          <h3 class="font-bold text-lg text-slate-800">{{ $t('home.why.features.security.title') }}</h3>
          <p class="text-sm text-slate-600 leading-relaxed">
            {{ $t('home.why.features.security.description') }}
          </p>
        </div>

        <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center space-y-4">
          <div class="text-4xl">💻</div>
          <h3 class="font-bold text-lg text-slate-800">{{ $t('home.why.features.noInstall.title') }}</h3>
          <p class="text-sm text-slate-600 leading-relaxed">
            {{ $t('home.why.features.noInstall.description') }}
          </p>
        </div>

      </div>
    </section>

    <section class="max-w-4xl mx-auto pb-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-black text-slate-900">{{ $t('home.faq.title') }}</h2>
      </div>

      <div class="space-y-4">

        <details class="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm" open>
          <summary class="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-slate-800">
            {{ $t('home.faq.items.safe.question') }}
            <span class="transition group-open:rotate-180">▼</span>
          </summary>
          <div class="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
            {{ $t('home.faq.items.safe.answer') }}
          </div>
        </details>

        <details class="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <summary class="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-slate-800">
            {{ $t('home.faq.items.limits.question') }}
          </summary>
          <div class="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
            {{ $t('home.faq.items.limits.answer') }}
          </div>
        </details>

        <details class="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <summary class="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-slate-800">
            {{ $t('home.faq.items.heic.question') }}
          </summary>
          <div class="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
            {{ $t('home.faq.items.heic.answer') }}
          </div>
        </details>

      </div>
    </section>

  </div>
</template>