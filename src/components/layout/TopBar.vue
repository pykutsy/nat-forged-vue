<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const dismissed = ref(false)
</script>

<template>
  <div v-if="!dismissed" class="bg-forest text-ivory py-2 px-4 relative">
    <p class="text-center text-xs font-sans tracking-wider">
      Free recipes &amp; wellness tips — join the email list.
      <RouterLink to="/#freebie" class="underline underline-offset-2 hover:text-bronze transition-colors ml-1">
        Sign up here →
      </RouterLink>
    </p>
    <button
      @click="dismissed = true"
      class="absolute right-4 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity text-base leading-none"
      aria-label="Dismiss announcement"
    >
      ×
    </button>
  </div>
</template>
