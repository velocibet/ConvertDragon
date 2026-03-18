<template>
  <div class="max-w-4xl mx-auto py-20 px-6">
    <h1 class="text-3xl font-black text-slate-900 mb-10 tracking-tighter uppercase">
      {{ t('terms.title') }}
    </h1>

    <div class="prose prose-slate max-w-none space-y-10">

      <section>
        <h2 class="text-lg font-bold text-slate-800 mb-3 italic">
          {{ t('terms.sections.intro.title') }}
        </h2>
        <p class="text-slate-600 text-sm leading-relaxed">
          {{ t('terms.sections.intro.text') }}
        </p>
      </section>

      <section>
        <h2 class="text-lg font-bold text-slate-800 mb-3 italic">
          {{ t('terms.sections.usage.title') }}
        </h2>
        <p class="text-slate-600 text-sm leading-relaxed">
          {{ t('terms.sections.usage.text') }}
        </p>

        <ul class="text-slate-600 text-sm mt-3 list-disc pl-5">
          <li>{{ t('terms.sections.usage.list.0') }}</li>
          <li>{{ t('terms.sections.usage.list.1') }}</li>
          <li>{{ t('terms.sections.usage.list.2') }}</li>
        </ul>
      </section>

      <section>
        <h2 class="text-lg font-bold text-slate-800 mb-3 italic">
          {{ t('terms.sections.responsibility.title') }}
        </h2>
        <p class="text-slate-600 text-sm leading-relaxed">
          {{ t('terms.sections.responsibility.text') }}
        </p>

        <ul class="text-slate-600 text-sm mt-3 list-disc pl-5">
          <li>{{ t('terms.sections.responsibility.list.0') }}</li>
          <li>{{ t('terms.sections.responsibility.list.1') }}</li>
          <li>{{ t('terms.sections.responsibility.list.2') }}</li>
        </ul>

        <p class="text-slate-600 text-sm mt-3">
          {{ t('terms.sections.responsibility.note') }}
        </p>
      </section>

      <section class="bg-amber-50 p-6 rounded-3xl border border-amber-100">
        <h2 class="text-lg font-bold text-amber-900 mb-3 italic">
          {{ t('terms.sections.liability.title') }}
        </h2>
        <p class="text-amber-800 text-sm leading-relaxed">
          {{ t('terms.sections.liability.text') }}
        </p>
      </section>

      <section>
        <h2 class="text-lg font-bold text-slate-800 mb-3 italic">
          {{ t('terms.sections.changes.title') }}
        </h2>
        <p class="text-slate-600 text-sm leading-relaxed">
          {{ t('terms.sections.changes.text') }}
        </p>
      </section>

      <section>
        <h2 class="text-lg font-bold text-slate-800 mb-3 italic">
          {{ t('terms.sections.updates.title') }}
        </h2>
        <p class="text-slate-600 text-sm leading-relaxed">
          {{ t('terms.sections.updates.text') }}
        </p>
      </section>

      <section>
        <h2 class="text-lg font-bold text-slate-800 mb-3 italic">
          {{ t('terms.sections.contact.title') }}
        </h2>
        <p class="text-slate-600 text-sm leading-relaxed">
          {{ t('terms.sections.contact.text') }}
        </p>

        <p class="text-slate-600 text-sm mt-2">
          {{ t('terms.sections.contact.emailUser') }}@{{ t('terms.sections.contact.emailDomain') }}
        </p>
      </section>

    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>