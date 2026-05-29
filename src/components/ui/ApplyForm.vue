<script setup>
import { ref } from 'vue'
import BrandButton from './BrandButton.vue'

const form = ref({
  name:     '',
  email:    '',
  path:     '',
  goals:    '',
  timeline: '',
})
const submitting = ref(false)
const submitted  = ref(false)
const errors     = ref({})

const inputClass = 'w-full px-4 py-3 bg-ivory border border-parchment text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-bronze font-sans text-sm'
const labelClass = 'block text-[10px] font-sans font-medium uppercase tracking-widest text-charcoal/50 mb-1.5'

function validate() {
  const e = {}
  if (!form.value.name.trim())                              e.name  = 'Name is required.'
  if (!form.value.email.trim() || !form.value.email.includes('@')) e.email = 'Valid email is required.'
  if (!form.value.path)                                     e.path  = 'Please select a coaching path.'
  if (!form.value.goals.trim())                             e.goals = 'Tell us a little about your goals.'
  errors.value = e
  return Object.keys(e).length === 0
}

async function onSubmit() {
  if (!validate()) return
  submitting.value = true
  // TODO: wire to Tally / Typeform / custom backend
  console.info('[ApplyForm] payload:', { ...form.value })
  await new Promise(r => setTimeout(r, 800))
  submitting.value = false
  submitted.value  = true
}
</script>

<template>
  <div v-if="submitted" class="py-10 text-center">
    <p class="font-display text-3xl text-forest mb-3">Application received!</p>
    <p class="font-sans text-charcoal/70">Alyssa will be in touch within 48 hours. Check your inbox.</p>
  </div>

  <form v-else @submit.prevent="onSubmit" class="space-y-5" novalidate>
    <div>
      <label :class="labelClass">Full Name</label>
      <input v-model="form.name" type="text" placeholder="Jane Smith" autocomplete="name" :class="inputClass" />
      <p v-if="errors.name" class="text-xs text-red-500 mt-1">{{ errors.name }}</p>
    </div>

    <div>
      <label :class="labelClass">Email Address</label>
      <input v-model="form.email" type="email" placeholder="you@email.com" autocomplete="email" :class="inputClass" />
      <p v-if="errors.email" class="text-xs text-red-500 mt-1">{{ errors.email }}</p>
    </div>

    <div>
      <label :class="labelClass">Coaching Path</label>
      <select v-model="form.path" :class="inputClass">
        <option value="" disabled>Select a path…</option>
        <option value="nutrition">Nutrition Coaching</option>
        <option value="fitness">Fitness Coaching</option>
        <option value="combined">Nutrition + Fitness (Combined)</option>
      </select>
      <p v-if="errors.path" class="text-xs text-red-500 mt-1">{{ errors.path }}</p>
    </div>

    <div>
      <label :class="labelClass">Tell me about your goals</label>
      <textarea
        v-model="form.goals"
        rows="4"
        placeholder="What are you hoping to achieve? What's your biggest challenge right now?"
        :class="inputClass + ' resize-none'"
      ></textarea>
      <p v-if="errors.goals" class="text-xs text-red-500 mt-1">{{ errors.goals }}</p>
    </div>

    <div>
      <label :class="labelClass">When are you looking to start?</label>
      <select v-model="form.timeline" :class="inputClass">
        <option value="" disabled>Select…</option>
        <option value="asap">Ready to start ASAP</option>
        <option value="1month">Within the next month</option>
        <option value="3months">In the next 3 months</option>
        <option value="exploring">Just exploring options</option>
      </select>
    </div>

    <BrandButton type="submit" :disabled="submitting" class="w-full text-center justify-center">
      {{ submitting ? 'Submitting…' : 'Submit My Application' }}
    </BrandButton>
  </form>
</template>
