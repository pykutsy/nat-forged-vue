<script setup>
import SectionShell from '@/components/ui/SectionShell.vue'

const testimonials = [
  {
    quote:
      "I've tried every diet out there. Working with Alyssa is the first time I've actually felt like I'm learning — not just following rules until I burn out.",
    name: 'Sarah M.',
    detail: 'Lost 18 lbs in 4 months',
  },
  {
    quote:
      "I was completely intimidated by the gym. Now I'm deadlifting and genuinely loving strength training. I never thought I'd say that about myself.",
    name: 'Jamie T.',
    detail: '3-month fitness program',
  },
  {
    quote:
      "As a mom of two, I needed something realistic. Alyssa gets it. The check-ins keep me accountable without adding stress to my week.",
    name: 'Rachel K.',
    detail: '6-month coaching client',
  },
]
</script>

<template>
  <SectionShell bg="bg-parchment">
    <div class="text-center mb-14">
      <p class="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-bronze mb-3">Results from real women</p>
      <h2 class="font-display text-4xl md:text-5xl font-medium text-charcoal">What Clients Are Saying</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div
        v-for="t in testimonials"
        :key="t.name"
        class="bg-ivory p-8 flex flex-col"
      >
        <svg class="w-7 h-7 text-bronze/40 mb-5 flex-shrink-0" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p class="font-sans text-sm text-charcoal/75 leading-relaxed flex-1 mb-6 italic">
          "{{ t.quote }}"
        </p>
        <div>
          <p class="font-sans text-sm font-semibold text-charcoal">{{ t.name }}</p>
          <p class="font-sans text-xs text-bronze mt-0.5">{{ t.detail }}</p>
        </div>
      </div>
    </div>

    <p class="text-center font-sans text-xs text-charcoal/40 italic">
      Testimonials used with permission. Results vary based on individual effort and starting point.
    </p>
  </SectionShell>
</template>
