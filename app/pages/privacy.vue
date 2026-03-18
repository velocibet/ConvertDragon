<template>
  <div class="max-w-4xl mx-auto py-20 px-6">
    <h1 class="text-3xl font-black text-slate-900 mb-10 tracking-tighter uppercase">
      {{ t('privacy.title') }}
    </h1>

    <div class="prose prose-slate max-w-none space-y-10">

      <section>
        <h2 class="text-lg font-bold text-slate-800 mb-3 italic">
          {{ t('privacy.sections.purpose.title') }}
        </h2>
        <p class="text-slate-600 text-sm leading-relaxed">
          {{ t('privacy.sections.purpose.text1') }}
        </p>
        <p class="text-slate-600 text-sm leading-relaxed mt-3">
          {{ t('privacy.sections.purpose.text2') }}
        </p>
      </section>

      <section>
        <h2 class="text-lg font-bold text-slate-800 mb-3 italic">
          {{ t('privacy.sections.collected.title') }}
        </h2>
        <p class="text-slate-600 text-sm leading-relaxed">
          {{ t('privacy.sections.collected.text1') }}
        </p>

        <p class="text-slate-600 text-sm leading-relaxed mt-3">
          {{ t('privacy.sections.collected.text2') }}
        </p>

        <ul class="text-slate-600 text-sm mt-3 list-disc pl-5">
          <li>{{ t('privacy.sections.collected.list.ipAddress') }}</li>
          <li>{{ t('privacy.sections.collected.list.browserTypeVersion') }}</li>
          <li>{{ t('privacy.sections.collected.list.accessTime') }}</li>
          <li>{{ t('privacy.sections.collected.list.visitedPages') }}</li>
          <li>{{ t('privacy.sections.collected.list.cookies') }}</li>
        </ul>
      </section>

      <section class="bg-blue-50 p-6 rounded-3xl border border-blue-100">
        <h2 class="text-lg font-bold text-blue-900 mb-3 italic">
          {{ t('privacy.sections.security.title') }}
        </h2>
        <p class="text-blue-800 text-sm leading-relaxed">
          {{ t('privacy.sections.security.text1') }}
        </p>
        <p class="text-blue-800 text-sm leading-relaxed mt-2">
          {{ t('privacy.sections.security.text2') }}
        </p>
      </section>

      <section>
        <h2 class="text-lg font-bold text-slate-800 mb-3 italic">
          {{ t('privacy.sections.cookies.title') }}
        </h2>
        <p class="text-slate-600 text-sm leading-relaxed">
          {{ t('privacy.sections.cookies.text1') }}
        </p>

        <p class="text-slate-600 text-sm leading-relaxed mt-3">
          {{ t('privacy.sections.cookies.text2') }}
        </p>
      </section>

      <section>
        <h2 class="text-lg font-bold text-slate-800 mb-3 italic">
          {{ t('privacy.sections.retention.title') }}
        </h2>
        <p class="text-slate-600 text-sm leading-relaxed">
          {{ t('privacy.sections.retention.text1') }}
        </p>

        <p class="text-slate-600 text-sm leading-relaxed mt-3">
          {{ t('privacy.sections.retention.text2') }}
        </p>
      </section>

      <section>
        <h2 class="text-lg font-bold text-slate-800 mb-3 italic">
          {{ t('privacy.sections.contact.title') }}
        </h2>
        <p class="text-slate-600 text-sm leading-relaxed">
          {{ t('privacy.sections.contact.text1') }}
        </p>

        <p class="text-slate-600 text-sm mt-2">
          {{ t('privacy.sections.contact.contact') }}
        </p>
      </section>

      <section>
        <h2 class="text-lg font-bold text-slate-800 mb-3 italic">
          {{ t('privacy.sections.changes.title') }}
        </h2>
        <p class="text-slate-600 text-sm leading-relaxed">
          {{ t('privacy.sections.changes.text1') }}
        </p>
      </section>

    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>