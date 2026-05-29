<script setup>
import SectionShell from '@/components/ui/SectionShell.vue'
</script>

<template>
  <section class="bg-forest py-16 px-6 text-center">
    <div class="max-w-3xl mx-auto">
      <h1 class="font-display text-5xl font-medium text-ivory">Terms of Use</h1>
      <p class="font-sans text-sm text-ivory/60 mt-2">Last updated: {{ new Date().getFullYear() }}</p>
    </div>
  </section>

  <SectionShell bg="bg-cream" narrow>
    <div class="font-sans text-charcoal/80 space-y-5 leading-relaxed text-sm">
      <p class="text-xs text-charcoal/50 italic">
        [This is a placeholder terms of use. Replace with terms reviewed by legal counsel before publishing.]
      </p>

      <h2 class="font-display text-2xl font-semibold text-charcoal">Acceptance of Terms</h2>
      <p>By accessing this website, you agree to be bound by these terms of use and all applicable laws and regulations.</p>

      <h2 class="font-display text-2xl font-semibold text-charcoal">Use of Content</h2>
      <p>All content on this website — including text, images, and branding — is the property of Naturally Forged. You may not reproduce or distribute any content without written permission.</p>

      <h2 class="font-display text-2xl font-semibold text-charcoal">Coaching Services</h2>
      <p>Coaching services are personal and non-transferable. Results described or shown are not guaranteed. Individual results vary based on effort, adherence, and individual factors.</p>

      <h2 class="font-display text-2xl font-semibold text-charcoal">Contact</h2>
      <p>Questions? Email <a href="mailto:hello@naturallyforged.com" class="text-bronze underline hover:text-forest">hello@naturallyforged.com</a>.</p>
    </div>
  </SectionShell>
</template>
