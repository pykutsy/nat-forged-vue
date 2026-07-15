<script setup>
import { RouterLink } from 'vue-router'
import logoMark from '@/assets/logo-mark.webp'

const year = new Date().getFullYear()

const coachingLinks = [
  { label: 'Nutrition Coaching',  to: '/coaching/nutrition' },
  { label: 'Fitness Coaching',    to: '/coaching/fitness' },
  { label: 'Combined Coaching',   to: '/coaching/combined' },
  { label: 'Apply for Coaching',  to: '/apply' },
]

// `href` entries are external and open in a new tab; `to` entries are routes.
const siteLinks = [
  { label: 'Home',          to: '/' },
  { label: 'About Alyssa',  to: '/about' },
  { label: 'Resources',     to: '/resources' },
  { label: 'Client Login',  href: 'https://my.practicebetter.io/#/login' },
]

// Privacy Policy and Terms of Use are now sections on this same page.
const legalLinks = [
  { label: 'Disclaimer', to: '/disclaimer' },
]
</script>

<template>
  <footer class="bg-charcoal text-ivory/75">
    <div class="max-w-6xl mx-auto px-6 pt-14 pb-8">

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        <!-- Brand -->
        <div class="lg:col-span-1">
          <img :src="logoMark" alt="Naturally Forged" class="h-14 w-14 object-contain mb-3" />
          <p class="font-display text-xl text-ivory font-semibold mb-1">Naturally Forged</p>
          <p class="font-sans text-[10px] uppercase tracking-[0.2em] text-bronze mb-4">Nutrition &amp; Strength Coaching</p>
          <p class="font-sans text-sm text-ivory/55 leading-relaxed">
            Realistic, sustainable coaching for women — built by a nurse who gets it.
          </p>
        </div>

        <!-- Coaching links -->
        <div>
          <h3 class="font-sans text-[10px] font-semibold uppercase tracking-widest text-ivory/35 mb-4">Coaching</h3>
          <ul class="space-y-2.5 text-sm font-sans">
            <li v-for="link in coachingLinks" :key="link.to">
              <RouterLink :to="link.to" class="hover:text-bronze transition-colors">{{ link.label }}</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Site links -->
        <div>
          <h3 class="font-sans text-[10px] font-semibold uppercase tracking-widest text-ivory/35 mb-4">Site</h3>
          <ul class="space-y-2.5 text-sm font-sans">
            <li v-for="link in siteLinks" :key="link.label">
              <RouterLink v-if="link.to" :to="link.to" class="hover:text-bronze transition-colors">{{ link.label }}</RouterLink>
              <a v-else :href="link.href" target="_blank" rel="noopener" class="hover:text-bronze transition-colors">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Connect -->
        <div>
          <h3 class="font-sans text-[10px] font-semibold uppercase tracking-widest text-ivory/35 mb-4">Connect</h3>
          <a href="mailto:hello@naturallyforged.com" class="block text-sm font-sans hover:text-bronze transition-colors mb-4">
            hello@naturallyforged.com
          </a>
          <div class="flex gap-4 text-sm font-sans">
            <a href="https://www.instagram.com/realwellmom/" target="_blank" rel="noopener" aria-label="Instagram" class="hover:text-bronze transition-colors">Instagram</a>
            <a href="https://www.tiktok.com/@realwellmom" target="_blank" rel="noopener" aria-label="TikTok" class="hover:text-bronze transition-colors">TikTok</a>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-ivory/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-xs font-sans text-ivory/35">&copy; {{ year }} Naturally Forged, LLC. All rights reserved.</p>
        <nav class="flex flex-wrap justify-center gap-x-5 gap-y-1">
          <RouterLink
            v-for="link in legalLinks"
            :key="link.to"
            :to="link.to"
            class="text-xs font-sans text-ivory/35 hover:text-bronze transition-colors"
          >
            {{ link.label }}
          </RouterLink>
        </nav>
      </div>
    </div>
  </footer>
</template>
