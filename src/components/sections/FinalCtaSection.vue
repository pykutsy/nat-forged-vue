<script setup>
import SectionShell from '@/components/ui/SectionShell.vue'
import BrandButton from '@/components/ui/BrandButton.vue'
</script>

<template>
  <SectionShell bg="bg-parchment" narrow>
    <div class="text-center py-8">
      <p class="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-bronze mb-4">Take the first step</p>
      <h2 class="font-display text-4xl md:text-6xl font-medium text-charcoal mb-5 leading-tight">
        Ready to Get Started?
      </h2>
      <p class="font-sans text-sm text-charcoal/70 max-w-lg mx-auto leading-relaxed mb-10">
        Spots are limited. Apply for coaching today and take the first step toward the body, energy,
        and confidence you've been working toward.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <BrandButton to="/apply">Apply for Coaching</BrandButton>
        <BrandButton variant="ghost" to="/about">Learn More About Alyssa</BrandButton>
      </div>
    </div>
  </SectionShell>
</template>
