<script setup>
import SectionShell from '@/components/ui/SectionShell.vue'
import BrandButton from '@/components/ui/BrandButton.vue'

const paths = [
  {
    title: 'Nutrition Coaching',
    description:
      'Personalized nutrition guidance that works with real food, real life, and real results. No macro-obsessing — just sustainable habits that stick.',
    icon: '🥗',
    to: '/coaching/nutrition',
    highlight: false,
  },
  {
    title: 'Fitness Coaching',
    description:
      'Custom 3, 4, or 5-day strength programs for the gym or home. Progressive training built to make you stronger — and actually enjoy it.',
    icon: '🏋️',
    to: '/coaching/fitness',
    highlight: true,
  },
  {
    title: 'Nutrition + Fitness',
    description:
      'The complete package — coordinated nutrition and training programs that amplify each other for faster, more lasting transformation.',
    icon: '✦',
    to: '/coaching/combined',
    highlight: false,
  },
]
</script>

<template>
  <SectionShell id="coaching-paths" bg="bg-cream">
    <div class="text-center mb-14">
      <p class="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-bronze mb-3">Where do you want to start?</p>
      <h2 class="font-display text-4xl md:text-5xl font-medium text-charcoal">Choose Your Coaching Path</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="path in paths"
        :key="path.title"
        :class="[
          'flex flex-col p-8 transition-shadow duration-200',
          path.highlight
            ? 'bg-forest text-ivory ring-2 ring-forest'
            : 'bg-ivory border border-parchment hover:shadow-md',
        ]"
      >
        <span class="text-2xl mb-5">{{ path.icon }}</span>
        <h3 :class="['font-display text-2xl font-semibold mb-3', path.highlight ? 'text-ivory' : 'text-charcoal']">
          {{ path.title }}
        </h3>
        <p :class="['font-sans text-sm leading-relaxed mb-8 flex-1', path.highlight ? 'text-ivory/80' : 'text-charcoal/70']">
          {{ path.description }}
        </p>
        <BrandButton
          :to="path.to"
          :variant="path.highlight ? 'light' : 'secondary'"
          class="self-start"
        >
          Learn More
        </BrandButton>
      </div>
    </div>
  </SectionShell>
</template>
