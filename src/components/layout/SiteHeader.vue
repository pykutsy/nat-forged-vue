<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import BrandLogo from '@/components/ui/BrandLogo.vue'

const mobileOpen = ref(false)

const navLinks = [
  { label: 'Nutrition',  to: '/coaching/nutrition' },
  { label: 'Fitness',    to: '/coaching/fitness' },
  { label: 'Combined',   to: '/coaching/combined' },
  { label: 'About',      to: '/about' },
  { label: 'Resources',  to: '/resources' },
]
</script>

<template>
  <header class="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-parchment">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

      <RouterLink to="/" aria-label="Naturally Forged home">
        <BrandLogo />
      </RouterLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-8">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-xs font-sans font-medium uppercase tracking-widest text-charcoal/70 hover:text-bronze transition-colors"
          active-class="text-bronze"
        >
          {{ link.label }}
        </RouterLink>
        <RouterLink
          to="/apply"
          class="px-5 py-2.5 bg-forest text-ivory text-xs font-sans font-medium uppercase tracking-widest hover:bg-bronze transition-colors"
        >
          Apply for Coaching
        </RouterLink>
      </nav>

      <!-- Mobile hamburger -->
      <button
        @click="mobileOpen = !mobileOpen"
        class="md:hidden p-2 -mr-2"
        :aria-expanded="mobileOpen"
        aria-label="Toggle navigation menu"
      >
        <span class="block w-5 h-px bg-charcoal mb-1.5 transition-all duration-200" :class="{ 'rotate-45 translate-y-[7px]': mobileOpen }" />
        <span class="block w-5 h-px bg-charcoal mb-1.5 transition-all duration-200" :class="{ 'opacity-0': mobileOpen }" />
        <span class="block w-5 h-px bg-charcoal transition-all duration-200" :class="{ '-rotate-45 -translate-y-[7px]': mobileOpen }" />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition-all duration-200"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav v-if="mobileOpen" class="md:hidden bg-cream border-t border-parchment px-6 py-5 space-y-4">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          @click="mobileOpen = false"
          class="block text-sm font-sans font-medium uppercase tracking-widest text-charcoal/70 hover:text-bronze transition-colors"
        >
          {{ link.label }}
        </RouterLink>
        <RouterLink
          to="/apply"
          @click="mobileOpen = false"
          class="block text-sm font-sans font-semibold uppercase tracking-widest text-bronze hover:text-forest transition-colors"
        >
          Apply for Coaching
        </RouterLink>
      </nav>
    </Transition>
  </header>
</template>
