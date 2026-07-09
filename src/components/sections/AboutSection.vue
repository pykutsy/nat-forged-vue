<script setup>
import SectionShell from '@/components/ui/SectionShell.vue'
import ImageSlot from '@/components/ui/ImageSlot.vue'
import BrandButton from '@/components/ui/BrandButton.vue'
import meImg from '@/assets/Me.jpg'

const credentials = [
  'Registered Nurse (RN, BSN)',
  'Certified Functional Nutrition Counselor',
  'Self-Taught Strength & Lifting Journey',
  'Mom — the credential that matters most',
]
</script>

<template>
  <SectionShell bg="bg-cream">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
      <div class="aspect-[3/4]">
        <ImageSlot
          label="Alyssa headshot or lifestyle photo — warm, approachable"
          :src="meImg"
          alt="Alyssa"
        />
      </div>

      <div>
        <p class="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-bronze mb-3">Your coach</p>
        <h2 class="font-display text-4xl md:text-5xl font-medium text-charcoal mb-5">Meet Alyssa</h2>
        <p class="font-sans text-sm text-charcoal/70 leading-relaxed mb-4">
          Hi, I'm Alyssa — a former Labor &amp; Delivery nurse and mom of two who has tried just about everything
          when it comes to fitness. Bootcamps, CrossFit, running, personal trainers — nothing ever stuck long enough
          for me to see the results I was hoping for.
        </p>
        <p class="font-sans text-sm text-charcoal/70 leading-relaxed mb-4">
          What did stick was cooking. I loved turning my favorite meals into recipes that actually worked for my body,
          and for a while, nutrition alone took me a good portion of the way — especially after my first child.
          But after my second, my body had changed so much I didn't recognize myself. I was tired, moody, and my
          weight jumped all over the place.
        </p>
        <p class="font-sans text-sm text-charcoal/70 leading-relaxed mb-8">
          It wasn't until I found my routine of lifting weights and truly understood how certain foods affected me
          that I noticed more energy, a better mood, and a body I was proud of. As a former Labor &amp; Delivery nurse,
          I spent years caring for others — and I wanted to bring this same care to women who so often give so much
          of themselves that they forget about their own.
        </p>

        <ul class="space-y-2 mb-8">
          <li v-for="c in credentials" :key="c" class="flex gap-2 items-center text-sm font-sans text-charcoal/80">
            <span class="w-1.5 h-1.5 rounded-full bg-bronze flex-shrink-0" />
            {{ c }}
          </li>
        </ul>

        <BrandButton to="/about">More About Alyssa</BrandButton>
      </div>
    </div>
  </SectionShell>
</template>
