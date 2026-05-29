<script setup>
defineProps({
  label: { type: String, required: true },
  src:   { type: String, default: null },
  alt:   { type: String, default: '' },
})
</script>

<template>
  <div class="relative w-full h-full overflow-hidden">
    <img v-if="src" :src="src" :alt="alt" class="absolute inset-0 w-full h-full object-cover" />
    <div v-else class="absolute inset-0 bg-parchment/60 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-bronze/25">
      <svg class="w-7 h-7 text-bronze/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span class="text-[10px] font-sans text-bronze/60 uppercase tracking-widest text-center px-4 max-w-[180px] leading-snug">{{ label }}</span>
    </div>
  </div>
</template>
