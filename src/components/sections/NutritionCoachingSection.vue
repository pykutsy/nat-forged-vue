<script setup>
import SectionShell from '@/components/ui/SectionShell.vue'
import ImageSlot from '@/components/ui/ImageSlot.vue'
import BrandButton from '@/components/ui/BrandButton.vue'
import appleImg from '@/assets/Apple.webp'

const includes = [
  'Personalized meal structure built around your preferences and lifestyle',
  'No eliminating food groups — flexible, food-freedom focused approach',
  'Emphasis on protein and fiber to support energy, satiety, and body composition',
  'CGM-guided insights — using continuous glucose monitors to tailor meals and lifestyle changes to how your body actually responds',
  'Education-based: you learn the why so you\'re never dependent on a plan',
  'Ongoing adjustments as your life and goals evolve',
]
</script>

<template>
  <SectionShell bg="bg-cream">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="order-2 md:order-1 aspect-[4/5]">
        <ImageSlot
          label="Nutrition coaching — food prep or balanced meal photo"
          :src="appleImg"
          alt="Fresh apple"
        />
      </div>

      <div class="order-1 md:order-2">
        <p class="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-bronze mb-3">Nourish your body</p>
        <h2 class="font-display text-4xl md:text-5xl font-medium text-charcoal mb-4">Nutrition Coaching</h2>
        <p class="font-sans text-sm text-charcoal/70 leading-relaxed mb-7">
          Forget calorie jail and restrictive meal plans. Nutrition coaching with Naturally Forged is about
          building a sustainable relationship with food — one that supports your goals without consuming your life.
          Using a Functional Nutrition approach, we look at the root causes behind how you feel and function —
          not just calories in, calories out.
        </p>

        <ul class="space-y-3 mb-8">
          <li v-for="item in includes" :key="item" class="flex gap-3 items-start">
            <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-bronze mt-2" />
            <p class="font-sans text-sm text-charcoal/75 leading-snug">{{ item }}</p>
          </li>
        </ul>

        <BrandButton to="/coaching/nutrition">Full Nutrition Details</BrandButton>
      </div>
    </div>
  </SectionShell>
</template>
