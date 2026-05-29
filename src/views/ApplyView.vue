<script setup>
import SectionShell from '@/components/ui/SectionShell.vue'
import ApplyForm    from '@/components/ui/ApplyForm.vue'

const steps = [
  { title: 'Application reviewed', body: "Alyssa personally reviews every application within 48 hours." },
  { title: 'Intro conversation',   body: "If it looks like a good fit, you'll be invited to a brief call to discuss your goals and ask questions." },
  { title: 'Program begins',       body: "Once you're onboarded, your custom program is built and coaching officially starts." },
]
</script>

<template>
  <!-- Page hero -->
  <section class="bg-forest py-20 px-6 text-center">
    <div class="max-w-3xl mx-auto">
      <p class="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-bronze mb-3">Ready to begin?</p>
      <h1 class="font-display text-5xl md:text-6xl font-medium text-ivory mb-4">Apply for Coaching</h1>
      <p class="font-sans text-sm text-ivory/70 leading-relaxed">
        Fill out the form below and Alyssa will be in touch within 48 hours to discuss next steps.
        Spots are limited — applications are reviewed on a rolling basis.
      </p>
    </div>
  </section>

  <SectionShell bg="bg-cream" narrow>
    <div class="max-w-xl mx-auto">
      <ApplyForm />
    </div>
  </SectionShell>

  <!-- Reassurance -->
  <SectionShell bg="bg-parchment" narrow>
    <div class="text-center">
      <h2 class="font-display text-2xl font-medium text-charcoal mb-3">What Happens After You Apply</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-left">
        <div v-for="(step, i) in steps" :key="i" class="bg-ivory p-6">
          <p class="font-display text-3xl font-light text-bronze mb-2">{{ i + 1 }}</p>
          <h3 class="font-sans text-sm font-semibold text-charcoal mb-1">{{ step.title }}</h3>
          <p class="font-sans text-xs text-charcoal/65 leading-relaxed">{{ step.body }}</p>
        </div>
      </div>
    </div>
  </SectionShell>
</template>

