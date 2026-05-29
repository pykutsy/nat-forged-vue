<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  variant: { type: String, default: 'primary' },
  to:      { type: [String, Object], default: null },
  href:    { type: String, default: null },
  type:    { type: String, default: 'button' },
  disabled:{ type: Boolean, default: false },
})

const base = 'inline-block px-7 py-3 text-xs font-sans font-medium tracking-widest uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze'

const variants = {
  primary:   'bg-forest text-ivory hover:bg-bronze',
  secondary: 'border-2 border-bronze text-bronze hover:bg-bronze hover:text-ivory',
  light:     'border-2 border-ivory text-ivory hover:bg-ivory hover:text-charcoal',
  ghost:     'text-bronze underline underline-offset-4 hover:text-forest px-0',
}

const classes = computed(() => [
  base,
  variants[props.variant] ?? variants.primary,
  props.disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
])
</script>

<template>
  <RouterLink v-if="to" :to="to" :class="classes"><slot /></RouterLink>
  <a v-else-if="href" :href="href" :class="classes"><slot /></a>
  <button v-else :type="type" :disabled="disabled" :class="classes"><slot /></button>
</template>
