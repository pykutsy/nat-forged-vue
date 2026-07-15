<script setup>
import SectionShell      from '@/components/ui/SectionShell.vue'
import ImageSlot         from '@/components/ui/ImageSlot.vue'
import BrandButton       from '@/components/ui/BrandButton.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import FinalCtaSection   from '@/components/sections/FinalCtaSection.vue'
import headshotImg       from '@/assets/Headshot.webp'

const values = [
  { title: 'Education over rules', body: 'You should understand why you\'re eating and training the way you are. Knowledge is the real goal — not blind compliance to a plan.' },
  { title: 'Sustainability over perfection', body: 'An 80% plan you actually stick to will outperform a 100% plan you abandon in 3 weeks every single time.' },
  { title: 'Compassion over criticism', body: 'You will miss workouts. You will have off days. That\'s part of the process. Guilt has no place in a sustainable approach.' },
  { title: 'Real life first', body: 'Plans are built around your actual schedule, your actual budget, and your actual preferences — not a fantasy version of your week.' },
]
</script>

<template>
  <!-- Page hero -->
  <section class="bg-forest py-20 px-6 text-center">
    <div class="max-w-3xl mx-auto">
      <p class="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-bronze mb-3">Your coach</p>
      <h1 class="font-display text-5xl md:text-6xl font-medium text-ivory mb-4">Meet Alyssa</h1>
      <p class="font-sans text-sm text-ivory/70 leading-relaxed">
        RN, BSN · Functional Nutrition · Coach · Mom
      </p>
    </div>
  </section>

  <!-- Story -->
  <SectionShell bg="bg-cream">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
      <div class="aspect-[3/4]">
        <ImageSlot
          label="Alyssa — professional headshot or candid lifestyle photo"
          :src="headshotImg"
          alt="Alyssa headshot"
        />
      </div>
      <div>
        <h2 class="font-display text-3xl md:text-4xl font-medium text-charcoal mb-5">My Story</h2>
        <div class="space-y-4 font-sans text-sm text-charcoal/75 leading-relaxed">
          <p>
            I spent years as a registered nurse, seeing firsthand how closely nutrition and lifestyle are tied to our
            long-term health — and how often that cycle of poor nutrition and growing medical needs goes unaddressed.
            At the same time, I was personally cycling through every trending diet, never quite finding an approach
            that felt sustainable or joyful.
          </p>
          <p>
            After becoming a mom, the stakes changed. I needed something that fit into real life — not the highlight
            reel version of it. That search led me to functional nutrition training and strength coaching, and eventually
            to building Naturally Forged.
          </p>
          <p>
            My clinical background shapes everything I do. I understand body composition, hormones, sleep, and recovery
            in ways that go beyond surface-level wellness advice. And my experience as a mom keeps me grounded in what
            "realistic" actually means.
          </p>
          <p>
            If you've been told you just need more willpower, a stricter plan, or to want it badly enough — I'm here
            to offer a different perspective.
          </p>
        </div>
        <div class="mt-8">
          <BrandButton to="/apply">Work with Alyssa</BrandButton>
        </div>
      </div>
    </div>
  </SectionShell>

  <!-- Values -->
  <SectionShell bg="bg-parchment">
    <div class="text-center mb-12">
      <p class="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-bronze mb-3">The foundation</p>
      <h2 class="font-display text-4xl md:text-5xl font-medium text-charcoal">Coaching Philosophy</h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div v-for="v in values" :key="v.title" class="bg-ivory p-7">
        <h3 class="font-display text-xl font-semibold text-charcoal mb-2">{{ v.title }}</h3>
        <p class="font-sans text-sm text-charcoal/70 leading-relaxed">{{ v.body }}</p>
      </div>
    </div>
  </SectionShell>

  <TestimonialsSection />
  <FinalCtaSection />
</template>
