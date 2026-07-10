<script setup>
import BrandButton from '@/components/ui/BrandButton.vue'
</script>

<template>
  <section class="bg-forest py-24 px-6 text-center">
    <div class="max-w-3xl mx-auto">
      <p class="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-bronze mb-3">404</p>
      <h1 class="font-display text-5xl md:text-6xl font-medium text-ivory mb-4">Page Not Found</h1>
      <p class="font-sans text-sm md:text-base text-ivory/75 leading-relaxed max-w-xl mx-auto">
        The page you requested does not exist or may have moved.
        Use the button below to return to the homepage.
      </p>
      <div class="mt-10">
        <BrandButton to="/">Back to Home</BrandButton>
      </div>
    </div>
  </section>
</template>
