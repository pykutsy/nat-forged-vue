<script setup>
import SectionShell from '@/components/ui/SectionShell.vue'
import BrandButton from '@/components/ui/BrandButton.vue'

const paths = [
  {
    title: 'Nutrition Coaching',
    description:
      'Personalized nutrition guidance that works with real food, real life, and real results. Small adjustments, one step at a time, for lifelong change.',
    icon: 'apple',
    to: '/coaching/nutrition',
    highlight: false,
  },
  {
    title: 'Fitness Coaching',
    description:
      'Custom strength programs for the gym or home, designed to fit your schedule, abilities, and goals. Progressive training built to make you stronger — and actually enjoy it.',
    icon: 'barbell',
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
        <span :class="['mb-5', path.highlight ? 'text-ivory' : 'text-charcoal']">
          <svg v-if="path.icon === 'apple'" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
            <path d="M12.7 6.3c.3-1.4 1.4-2.5 2.8-2.8.1.9-.2 1.9-.9 2.6-.6.7-1.5 1-2.4.9.1-.3.3-.5.5-.7z" />
            <path d="M12.5 8.5c-1 0-1.7.4-2.2.6-.5.2-1 .2-1.5-.1-.5-.3-1.3-.6-2.2-.6-2 0-3.6 1.6-3.6 4.8 0 4 2.6 8.3 4.6 8.3.9 0 1.3-.4 1.9-.4s.9.4 1.9.4c1.9 0 4.5-4.3 4.5-8.3 0-3.2-1.6-4.8-3.4-4.7z" />
          </svg>
          <svg v-else-if="path.icon === 'barbell'" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
            <rect x="2" y="10.75" width="20" height="2.5" rx="1.25" />
            <rect x="3.5" y="7" width="2.5" height="10" rx="1" />
            <rect x="6.5" y="8.5" width="2" height="7" rx="1" />
            <rect x="18" y="7" width="2.5" height="10" rx="1" />
            <rect x="15.5" y="8.5" width="2" height="7" rx="1" />
          </svg>
          <span v-else class="text-2xl">{{ path.icon }}</span>
        </span>
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
