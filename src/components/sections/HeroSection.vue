<script setup>
import BrandButton from '@/components/ui/BrandButton.vue'
import ImageSlot from '@/components/ui/ImageSlot.vue'
import mainImg from '@/assets/Main.jpg'
</script>

<template>
  <section class="bg-forest overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-2 md:min-h-[92vh]">
      <!-- Content -->
      <div class="flex items-center px-6 sm:px-10 lg:px-16 py-20 md:py-16">
        <div class="max-w-xl">
          <p class="font-sans text-xs font-medium uppercase tracking-[0.35em] text-bronze mb-5">
            Nutrition &amp; Strength Coaching
          </p>
          <h1 class="font-display text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-medium text-ivory leading-[1.05] mb-6">
            Nutrition.<br />Strength.<br />Transformation.
          </h1>
          <p class="font-sans text-base md:text-lg text-ivory/75 max-w-md mb-10 leading-relaxed">
            Real food. Real workouts. Real results — built around your life, for sustainable change.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <BrandButton to="/apply">Apply for Coaching</BrandButton>
            <BrandButton variant="light" to="#coaching-paths">Explore Coaching Paths</BrandButton>
          </div>
        </div>
      </div>

      <!-- Photo -->
      <div class="h-72 sm:h-96 md:h-full">
        <ImageSlot
          label="Hero lifestyle photo — woman training or meal prep, warm tones"
          :src="mainImg"
          alt="Naturally Forged — nutrition and strength coaching"
        />
      </div>
    </div>
  </section>
</template>
