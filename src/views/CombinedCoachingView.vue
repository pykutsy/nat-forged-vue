<script setup>
import SectionShell          from '@/components/ui/SectionShell.vue'
import ImageSlot             from '@/components/ui/ImageSlot.vue'
import BrandButton           from '@/components/ui/BrandButton.vue'
import AccountabilitySection from '@/components/sections/AccountabilitySection.vue'
import FinalCtaSection       from '@/components/sections/FinalCtaSection.vue'

const benefits = [
  'Nutrition and training designed to complement each other — not exist in silos',
  'Coordinated approach to fueling workouts and supporting recovery',
  'One coach who sees the full picture of your health and habits',
  'Faster, more sustainable progress than tackling each separately',
  'Simplified check-ins — one conversation covers everything',
]
</script>

<template>
  <!-- Page hero -->
  <section class="bg-forest py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <p class="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-bronze mb-3">The complete package</p>
      <h1 class="font-display text-5xl md:text-6xl font-medium text-ivory mb-4">Nutrition + Fitness</h1>
      <p class="font-sans text-sm text-ivory/70 max-w-lg leading-relaxed">
        Both programs. One coordinated approach. Maximum results.
      </p>
    </div>
  </section>

  <SectionShell bg="bg-cream">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
      <div>
        <p class="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-bronze mb-3">Why combined?</p>
        <h2 class="font-display text-3xl md:text-4xl font-medium text-charcoal mb-5">
          Nutrition and training are better together
        </h2>
        <p class="font-sans text-sm text-charcoal/70 leading-relaxed mb-7">
          When your nutrition supports your training — and your training is programmed with your nutrition in mind —
          everything compounds. You recover faster, build more, and see results that actually stick.
          The combined program is the most complete version of what Naturally Forged offers.
        </p>

        <ul class="space-y-3 mb-8">
          <li v-for="item in benefits" :key="item" class="flex gap-3 items-start">
            <span class="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-bronze/15 flex items-center justify-center">
              <svg class="w-3 h-3 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <p class="font-sans text-sm text-charcoal/80 leading-snug">{{ item }}</p>
          </li>
        </ul>

        <BrandButton to="/apply">Apply for Combined Coaching</BrandButton>
      </div>

      <div class="aspect-[4/5]">
        <ImageSlot label="Combined coaching — active lifestyle or transformation photo" />
      </div>
    </div>
  </SectionShell>

  <!-- Individual inclusions summary -->
  <SectionShell bg="bg-parchment">
    <div class="text-center mb-10">
      <h2 class="font-display text-3xl md:text-4xl font-medium text-charcoal">Everything in One Program</h2>
      <p class="font-sans text-sm text-charcoal/60 mt-3">Includes everything from both Nutrition Coaching and Fitness Coaching.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-ivory p-7">
        <h3 class="font-display text-xl font-semibold text-charcoal mb-4">Nutrition Coaching Includes</h3>
        <p class="font-sans text-sm text-charcoal/70 leading-relaxed">
          Personalized meal framework, protein and fiber focus, food freedom approach,
          weekly adjustments, supplement guidance, and education-based coaching.
        </p>
        <RouterLink to="/coaching/nutrition" class="inline-block mt-4 font-sans text-xs text-bronze uppercase tracking-widest underline underline-offset-4 hover:text-forest transition-colors">
          See full details →
        </RouterLink>
      </div>
      <div class="bg-ivory p-7">
        <h3 class="font-display text-xl font-semibold text-charcoal mb-4">Fitness Coaching Includes</h3>
        <p class="font-sans text-sm text-charcoal/70 leading-relaxed">
          Custom 3, 4, or 5-day program, gym or home options, progressive strength training,
          form guidance, tracking templates, and periodic deloads.
        </p>
        <RouterLink to="/coaching/fitness" class="inline-block mt-4 font-sans text-xs text-bronze uppercase tracking-widest underline underline-offset-4 hover:text-forest transition-colors">
          See full details →
        </RouterLink>
      </div>
    </div>
  </SectionShell>

  <AccountabilitySection />
  <FinalCtaSection />
</template>
