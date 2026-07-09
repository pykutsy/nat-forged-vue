<script setup>
import logoMark from '@/assets/logo-mark.png'
</script>

<template>
  <div class="flex items-center gap-2.5">
    <img :src="logoMark" alt="Naturally Forged" class="h-12 w-12 flex-shrink-0 object-contain" />
    <div class="flex flex-col leading-tight">
      <span class="font-display text-2xl font-semibold text-charcoal tracking-wider">Naturally Forged</span>
      <span class="font-sans text-[9px] font-medium uppercase tracking-[0.18em] text-bronze mt-0.5">
        Nutrition &amp; Strength Coaching
      </span>
    </div>
  </div>
</template>
