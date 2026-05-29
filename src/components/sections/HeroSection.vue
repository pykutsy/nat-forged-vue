<script setup>
import BrandButton from '@/components/ui/BrandButton.vue'
import ImageSlot from '@/components/ui/ImageSlot.vue'
</script>

<template>
  <section class="relative min-h-[92vh] flex items-center overflow-hidden bg-forest">
    <!-- Background image slot -->
    <div class="absolute inset-0">
      <ImageSlot label="Hero lifestyle photo — woman training or meal prep, warm tones" />
      <div class="absolute inset-0 bg-forest/65" />
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto px-6 py-28 md:py-36">
      <p class="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-bronze mb-5">
        Nutrition &amp; Strength Coaching
      </p>
      <h1 class="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-ivory leading-[1.05] mb-6">
        Nutrition.<br />Strength.<br />Transformation.
      </h1>
      <p class="font-sans text-base md:text-lg text-ivory/75 max-w-md mb-10 leading-relaxed">
        Real food. Real workouts. Real results — built around your life, not despite it.
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <BrandButton to="/apply">Apply for Coaching</BrandButton>
        <BrandButton variant="light" to="#coaching-paths">Explore Coaching Paths</BrandButton>
      </div>
    </div>
  </section>
</template>
