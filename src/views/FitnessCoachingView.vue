<script setup>
import SectionShell          from '@/components/ui/SectionShell.vue'
import ImageSlot             from '@/components/ui/ImageSlot.vue'
import BrandButton           from '@/components/ui/BrandButton.vue'
import AccountabilitySection from '@/components/sections/AccountabilitySection.vue'
import FinalCtaSection       from '@/components/sections/FinalCtaSection.vue'

const programOptions = [
  { days: '3-Day', best: 'Best for beginners or those with limited time. Full-body focus, maximum efficiency.' },
  { days: '4-Day', best: 'Upper/lower split. Strong balance of volume and recovery for consistent progress.' },
  { days: '5-Day', best: 'Push/pull/legs structure. Ideal for intermediates ready to increase volume and specialization.' },
]

const included = [
  'Custom program designed for your goals, schedule, and equipment',
  'Gym or home equipment options — no excuses, no limitations',
  'Progressive overload built in from week one',
  'Form cues and video references for key lifts',
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

  <!-- Program options -->
  <SectionShell bg="bg-cream">
    <div class="text-center mb-12">
      <h2 class="font-display text-3xl md:text-4xl font-medium text-charcoal">Choose Your Program Structure</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
      <div v-for="p in programOptions" :key="p.days" class="bg-ivory border border-parchment p-7">
        <p class="font-display text-3xl font-semibold text-bronze mb-2">{{ p.days }}</p>
        <p class="font-sans text-xs font-medium uppercase tracking-widest text-charcoal/50 mb-3">Program</p>
        <p class="font-sans text-sm text-charcoal/70 leading-relaxed">{{ p.best }}</p>
      </div>
    </div>

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
        <BrandButton to="/apply">Apply for Fitness Coaching</BrandButton>
      </div>
      <div class="aspect-[4/5]">
        <ImageSlot label="Fitness coaching — gym, lifting, or workout photo" />
      </div>
    </div>
  </SectionShell>

  <AccountabilitySection />
  <FinalCtaSection />
</template>
