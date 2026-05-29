<script setup>
import SectionShell from '@/components/ui/SectionShell.vue'
import EmailSignupForm from '@/components/ui/EmailSignupForm.vue'

const freebies = [
  {
    title: 'Balanced Plate Guide',
    desc: 'Learn to build every meal for sustained energy, real satiety, and results that last.',
  },
  {
    title: 'Protein + Fiber Cheat Sheet',
    desc: 'The two nutrients that will change how full and energized you feel — with simple swaps and go-to foods.',
  },
]
</script>

<template>
  <SectionShell id="freebie" bg="bg-forest" narrow>
    <div class="text-center mb-10">
      <p class="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-bronze mb-3">Free resources</p>
      <h2 class="font-display text-4xl md:text-5xl font-medium text-ivory mb-4">Grab Your Free Guides</h2>
      <p class="font-sans text-sm text-ivory/70 max-w-lg mx-auto leading-relaxed">
        Join the email list and get two practical guides delivered straight to your inbox — no fluff, just actionable tools.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
      <div v-for="f in freebies" :key="f.title" class="bg-ivory/10 border border-ivory/15 p-6">
        <h3 class="font-display text-xl font-semibold text-ivory mb-2">{{ f.title }}</h3>
        <p class="font-sans text-xs text-ivory/65 leading-relaxed">{{ f.desc }}</p>
      </div>
    </div>

    <EmailSignupForm />
  </SectionShell>
</template>
