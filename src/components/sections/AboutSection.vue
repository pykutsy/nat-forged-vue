<script setup>
import SectionShell from '@/components/ui/SectionShell.vue'
import ImageSlot from '@/components/ui/ImageSlot.vue'
import BrandButton from '@/components/ui/BrandButton.vue'

const credentials = [
  'Registered Nurse (RN, BSN)',
  'Functional Nutrition Training',
  'Certified Strength Coach',
  'Mom — the credential that matters most',
]
</script>

<template>
  <SectionShell bg="bg-cream">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
      <div class="aspect-[3/4]">
        <ImageSlot label="Alyssa headshot or lifestyle photo — warm, approachable" />
      </div>

      <div>
        <p class="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-bronze mb-3">Your coach</p>
        <h2 class="font-display text-4xl md:text-5xl font-medium text-charcoal mb-5">Meet Alyssa</h2>
        <p class="font-sans text-sm text-charcoal/70 leading-relaxed mb-4">
          Hi, I'm Alyssa — a registered nurse, certified coach, and mom who got tired of seeing women (including myself)
          spin their wheels with unsustainable approaches that prioritize extremes over real life.
        </p>
        <p class="font-sans text-sm text-charcoal/70 leading-relaxed mb-8">
          My clinical background informs everything — from how I think about hormones and recovery to how I build
          programs that actually fit into the chaos of a full life. Coaching isn't one-size-fits-all.
          Your plan won't be either.
        </p>

        <ul class="space-y-2 mb-8">
          <li v-for="c in credentials" :key="c" class="flex gap-2 items-center text-sm font-sans text-charcoal/80">
            <span class="w-1.5 h-1.5 rounded-full bg-bronze flex-shrink-0" />
            {{ c }}
          </li>
        </ul>

        <BrandButton to="/about">More About Alyssa</BrandButton>
      </div>
    </div>
  </SectionShell>
</template>
