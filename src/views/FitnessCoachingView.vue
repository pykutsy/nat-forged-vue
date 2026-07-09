<script setup>
import SectionShell          from '@/components/ui/SectionShell.vue'
import BrandButton           from '@/components/ui/BrandButton.vue'
import AccountabilitySection from '@/components/sections/AccountabilitySection.vue'
import FinalCtaSection       from '@/components/sections/FinalCtaSection.vue'

const trainingAreas = [
  {
    title: 'Gym Equipment',
    body: 'Guidance on using machines, free weights, and everything in between — so you walk in with confidence and never feel lost on the floor.',
  },
  {
    title: 'At-Home Workouts',
    body: 'Full programs built around minimal or bodyweight-only equipment, so a home gym (or no gym) is never an excuse.',
  },
  {
    title: 'Lifting Programming',
    body: 'Structured, progressive programming that builds real strength over time — no random workouts, no guesswork.',
  },
]

const included = [
  'Custom program designed for your goals, schedule, and equipment',
  'Gym or home equipment options — no excuses, no limitations',
  'Progressive overload built in from week one',
  'Form cues and video references for key lifts',
  'Programming built within your current ability to promote strength while avoiding injury',
  'Tracking templates so you always know your numbers',
  'Periodic deload weeks for sustainable long-term progress',
  'Weekly check-ins and program adjustments',
]
</script>

<template>
  <!-- Page hero -->
  <section class="bg-forest py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <p class="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-bronze mb-3">Coaching</p>
      <h1 class="font-display text-5xl md:text-6xl font-medium text-ivory mb-4">Fitness Coaching</h1>
      <p class="font-sans text-sm text-ivory/70 max-w-lg leading-relaxed">
        Custom strength programs that build real results — whether you train in a gym or at home.
      </p>
    </div>
  </section>

  <!-- Training areas -->
  <SectionShell bg="bg-parchment">
    <div class="text-center mb-12">
      <h2 class="font-display text-3xl md:text-4xl font-medium text-charcoal">How We Build Your Program</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="area in trainingAreas" :key="area.title" class="bg-ivory border border-parchment p-7">
        <h3 class="font-display text-xl font-semibold text-charcoal mb-3">{{ area.title }}</h3>
        <p class="font-sans text-sm text-charcoal/70 leading-relaxed">{{ area.body }}</p>
      </div>
    </div>
  </SectionShell>

  <!-- Program details -->
  <SectionShell bg="bg-cream">
    <div class="max-w-2xl">
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
      <BrandButton to="/apply">Apply for Fitness Coaching</BrandButton>
    </div>
  </SectionShell>

  <AccountabilitySection />
  <FinalCtaSection />
</template>
