<script setup>
import SectionShell from '@/components/ui/SectionShell.vue'
</script>

<template>
  <section class="bg-forest py-16 px-6 text-center">
    <div class="max-w-3xl mx-auto">
      <h1 class="font-display text-5xl font-medium text-ivory">Disclaimer</h1>
      <p class="font-sans text-sm text-ivory/60 mt-2">Please read carefully.</p>
    </div>
  </section>

  <SectionShell bg="bg-cream" narrow>
    <div class="font-sans text-charcoal/80 space-y-5 leading-relaxed text-sm">
      <h2 class="font-display text-2xl font-semibold text-charcoal">Not Medical Advice</h2>
      <p>
        The content on this website and within coaching programs is for educational and informational purposes only.
        It is not intended to be, and should not be construed as, medical advice, diagnosis, or treatment.
        Always consult a qualified healthcare provider before beginning any new nutrition or exercise program.
      </p>

      <h2 class="font-display text-2xl font-semibold text-charcoal">Individual Results</h2>
      <p>
        Testimonials and results shared on this site reflect individual experiences. Results vary based on individual
        effort, consistency, adherence, starting point, and other personal factors. Nothing presented here constitutes
        a guarantee of any specific outcome.
      </p>

      <h2 class="font-display text-2xl font-semibold text-charcoal">Registered Nurse Scope</h2>
      <p>
        Alyssa holds an RN, BSN credential. Coaching services are provided in a coaching capacity — not in a
        clinical nursing or medical capacity. No client–patient relationship is formed through coaching engagement.
      </p>

      <h2 class="font-display text-2xl font-semibold text-charcoal">Contact</h2>
      <p>Questions? Email <a href="mailto:hello@naturallyforged.com" class="text-bronze underline hover:text-forest">hello@naturallyforged.com</a>.</p>
    </div>
  </SectionShell>
</template>
