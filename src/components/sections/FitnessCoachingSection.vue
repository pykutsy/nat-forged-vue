<script setup>
import SectionShell from '@/components/ui/SectionShell.vue'
import ImageSlot from '@/components/ui/ImageSlot.vue'
import BrandButton from '@/components/ui/BrandButton.vue'
import weightsImg from '@/assets/weights.webp'

const features = [
  { label: 'Built to fit your schedule', desc: 'Structured around your time, energy, and recovery needs.' },
  { label: 'Gym or home equipment', desc: 'Full programs available for both — no fancy setup required.' },
  { label: 'Progressive strength training', desc: 'Built to make you measurably stronger over time.' },
  { label: 'Compound movement focus', desc: 'Train efficiently with moves that give you the most return.' },
  { label: 'Progress tracking built in', desc: 'Know exactly what to do, how to track it, and when to push.' },
]
</script>

<template>
  <SectionShell bg="bg-parchment">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <p class="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-bronze mb-3">Build your strength</p>
        <h2 class="font-display text-4xl md:text-5xl font-medium text-charcoal mb-4">Fitness Coaching</h2>
        <p class="font-sans text-sm text-charcoal/70 leading-relaxed mb-7">
          Whether you're new to lifting or ready to level up, custom programming removes the guesswork.
          Every session is purposeful, every week builds on the last, and every program is designed for you.
        </p>

        <div class="space-y-4 mb-8">
          <div v-for="f in features" :key="f.label" class="flex gap-3 items-start">
            <span class="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-bronze/15 flex items-center justify-center">
              <svg class="w-3 h-3 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <div>
              <p class="font-sans text-sm font-medium text-charcoal">{{ f.label }}</p>
              <p class="font-sans text-xs text-charcoal/60 mt-0.5">{{ f.desc }}</p>
            </div>
          </div>
        </div>

        <BrandButton to="/coaching/fitness">Full Fitness Details</BrandButton>
      </div>

      <div class="aspect-[4/5]">
        <ImageSlot
          label="Fitness coaching — strength training or gym photo"
          :src="weightsImg"
          alt="Weights"
        />
      </div>
    </div>
  </SectionShell>
</template>
