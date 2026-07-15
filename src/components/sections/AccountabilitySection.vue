<script setup>
import SectionShell from '@/components/ui/SectionShell.vue'

const pillars = [
  {
    title: 'Weekly Check-ins',
    body: 'Regular touchpoints to review progress, troubleshoot challenges, and stay focused — so you\'re never guessing what to do next.',
  },
  {
    title: 'Program Adjustments',
    body: 'Life changes. Your plan should too. Workouts and nutrition get updated as your goals, schedule, or results evolve.',
  },
  {
    title: 'Progress Tracking',
    body: 'Comprehensive tracking beyond the scale — strength numbers, energy, habits, and body measurements all tell the story. You can share your Levels data with me too, so we can look at food, glucose and sleep together and see what\'s actually working.',
  },
  {
    title: 'Ongoing Support',
    body: 'Questions between check-ins? Your plans, scheduling, and messages all live in one private client portal, so reaching me is simple. Real support from a real person who knows your journey.',
  },
]
</script>

<template>
  <SectionShell bg="bg-forest">
    <div class="text-center mb-14">
      <p class="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-bronze mb-3">You won't do this alone</p>
      <h2 class="font-display text-4xl md:text-5xl font-medium text-ivory mb-4">Accountability That Actually Works</h2>
      <p class="font-sans text-sm text-ivory/70 max-w-xl mx-auto leading-relaxed">
        The difference between knowing what to do and actually doing it is having someone genuinely in your corner.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="p in pillars"
        :key="p.title"
        class="bg-ivory/5 border border-ivory/10 p-6"
      >
        <h3 class="font-display text-xl font-semibold text-ivory mb-3">{{ p.title }}</h3>
        <p class="font-sans text-sm text-ivory/65 leading-relaxed">{{ p.body }}</p>
      </div>
    </div>
  </SectionShell>
</template>
