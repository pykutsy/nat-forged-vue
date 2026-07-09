<script setup>
import SectionShell from '@/components/ui/SectionShell.vue'
import BrandButton from '@/components/ui/BrandButton.vue'

const items = [
  'Moms who want realistic solutions that actually fit into a busy, full life',
  'Women working toward body composition goals without crash dieting or extreme restriction',
  'Anyone craving real accountability — someone in your corner, not just a PDF plan',
  'Those ready to build strength, learn to lift, and stop fearing the gym',
  'Women who want to eat nourishing, satisfying food and feel good in their bodies',
  'Beginners and intermediates who want structure, guidance, and a real plan',
]
</script>

<template>
  <SectionShell bg="bg-parchment">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <p class="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-bronze mb-3">Designed for women</p>
        <h2 class="font-display text-4xl md:text-5xl font-medium text-charcoal mb-6">Who This Is For</h2>
        <p class="font-sans text-sm text-charcoal/70 leading-relaxed mb-8">
          Built for women — especially busy moms — juggling full schedules and limited time, ready to feel like
          themselves again. This is about nourishing your body, building real strength, and making space for you,
          after a life spent caring for everyone else.
        </p>
        <BrandButton to="/apply">Apply for Coaching</BrandButton>
      </div>

      <ul class="space-y-4">
        <li
          v-for="item in items"
          :key="item"
          class="flex gap-3 items-start"
        >
          <span class="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-bronze/15 flex items-center justify-center">
            <svg class="w-3 h-3 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <p class="font-sans text-sm text-charcoal/80 leading-snug">{{ item }}</p>
        </li>
      </ul>
    </div>
  </SectionShell>
</template>
