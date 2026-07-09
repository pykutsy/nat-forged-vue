<script setup>
import SectionShell          from '@/components/ui/SectionShell.vue'
import BrandButton           from '@/components/ui/BrandButton.vue'
import AccountabilitySection from '@/components/sections/AccountabilitySection.vue'
import FinalCtaSection       from '@/components/sections/FinalCtaSection.vue'

const included = [
  'Personalized nutrition framework built around your food preferences and lifestyle',
  'No meal plans that ignore real life — flexible, sustainable food structure',
  'Protein and fiber focus for energy, satiety, and body composition support',
  'Functional Nutrition approach — looking at root causes like hormones, gut health, stress, and sleep, not just symptoms',
  'CGM-guided insights — using continuous glucose monitors to tailor meals and lifestyle changes to how your body actually responds',
  'Weekly check-ins with adjustments as needed',
  'Educational approach so you understand the why, not just the what',
  'Support for eating out, travel, and real-life situations',
  'Guidance on supplements (when warranted and evidence-based)',
]

const forWho = [
  'Women who\'ve tried every diet and are ready for something sustainable',
  'Moms who need nutrition guidance that works with a busy family schedule',
  'Anyone who wants to understand food, not fear it',
  'Women focused on body composition without extreme restriction',
]
</script>

<template>
  <!-- Page hero -->
  <section class="bg-forest py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <p class="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-bronze mb-3">Coaching</p>
      <h1 class="font-display text-5xl md:text-6xl font-medium text-ivory mb-4">Nutrition Coaching</h1>
      <p class="font-sans text-sm text-ivory/70 max-w-lg leading-relaxed">
        A sustainable, education-first approach to nutrition that actually fits into your life.
      </p>
    </div>
  </section>

  <!-- Overview -->
  <SectionShell bg="bg-cream">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
      <div>
        <h2 class="font-display text-3xl md:text-4xl font-medium text-charcoal mb-5">What's Included</h2>
        <ul class="space-y-3 mb-8">
          <li v-for="item in included" :key="item" class="flex gap-3 items-start">
            <span class="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-bronze/15 flex items-center justify-center">
              <svg class="w-3 h-3 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <p class="font-sans text-sm text-charcoal/80 leading-snug">{{ item }}</p>
          </li>
        </ul>
        <BrandButton to="/apply">Apply for Nutrition Coaching</BrandButton>
      </div>

      <div>
        <div class="bg-parchment p-6">
          <h3 class="font-display text-xl font-semibold text-charcoal mb-3">Who This Is For</h3>
          <ul class="space-y-2">
            <li v-for="item in forWho" :key="item" class="flex gap-2 items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-bronze flex-shrink-0 mt-1.5" />
              <p class="font-sans text-sm text-charcoal/75">{{ item }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </SectionShell>

  <AccountabilitySection />
  <FinalCtaSection />
</template>
