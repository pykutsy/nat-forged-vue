<script setup>
import SectionShell from '@/components/ui/SectionShell.vue'

const testimonials = [
  {
    quote:
      "Working with Alyssa Kutsy has been a game changer. She created personalized nutrition and workout plans that truly worked for me. She also introduced me to a glucose monitor, which helped me understand how certain foods affected my blood sugar and insulin response, making it much easier to reach my goals. Beyond the results, Alyssa's ongoing support, genuine care, and positive personality made me feel valued every step of the way. She truly invests in her clients, and it shows. I couldn't be happier with my progress and highly recommend her.",
    name: 'Tina',
  },
  {
    quote:
      "Alyssa Kutsy is an incredible example of what is possible when you prioritize your health, even with the demands of motherhood and running a business. As a registered nurse and nutrition coach, she doesn't just teach healthy habits—she lives them every day. After having two boys, Alyssa transformed her own body by optimizing her nutrition, returning to strength training, and creating sustainable habits that fit her busy lifestyle. Her journey is inspiring because it's built on consistency, knowledge, and balance rather than quick fixes. She brings both clinical expertise and real-life experience to her coaching, making her guidance practical, compassionate, and effective. If you're looking for someone who truly understands the challenges of balancing family, work, and health while achieving incredible results, I highly recommend Alyssa. She is living proof that it's never too late to reclaim your health and become the strongest version of yourself.",
    name: 'Olga',
  },
]
</script>

<template>
  <SectionShell bg="bg-parchment">
    <div class="text-center mb-14">
      <p class="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-bronze mb-3">Results from real women</p>
      <h2 class="font-display text-4xl md:text-5xl font-medium text-charcoal">What Clients Are Saying</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div
        v-for="t in testimonials"
        :key="t.name"
        class="bg-ivory p-8 flex flex-col"
      >
        <svg class="w-7 h-7 text-bronze/40 mb-5 flex-shrink-0" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p class="font-sans text-sm text-charcoal/75 leading-relaxed mb-6 italic">
          "{{ t.quote }}"
        </p>
        <p class="font-sans text-sm font-semibold text-charcoal">{{ t.name }}</p>
      </div>
    </div>

    <p class="text-center font-sans text-xs text-charcoal/40 italic">
      Testimonials used with permission. Results vary based on individual effort and starting point.
    </p>
  </SectionShell>
</template>
