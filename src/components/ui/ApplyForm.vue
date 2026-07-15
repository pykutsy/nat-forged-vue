<script setup>
import { ref } from 'vue'
import BrandButton from './BrandButton.vue'

// Formspree endpoint — delivers submissions to hello@naturallyforged.com.
// This ID is public by design; it is not a secret and carries no account access.
// Create the form at formspree.io and paste its endpoint here.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqerepyp'

const form = ref({
  name:     '',
  email:    '',
  path:     '',
  goals:    '',
  timeline: '',
})
// Bots fill hidden fields; humans cannot see this one. Formspree discards any
// submission that arrives with it set.
const honeypot   = ref('')
const submitting = ref(false)
const submitted  = ref(false)
const errors     = ref({})
const sendError  = ref('')

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
  sendError.value  = ''
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        ...form.value,
        _subject: `Coaching application — ${form.value.name}`,
        _gotcha: honeypot.value,
      }),
    })
    if (!res.ok) {
      const data = await res.json().catch(() => null)
      throw new Error(data?.errors?.map(e => e.message).join(' ') || `HTTP ${res.status}`)
    }
    // Only claim success once it has actually been delivered.
    submitted.value = true
  } catch (err) {
    sendError.value = err.message
  } finally {
    submitting.value = false
  }
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

    <!-- Hidden from people, tempting to bots. Not `type=hidden` — bots read that. -->
    <div class="absolute left-[-9999px]" aria-hidden="true">
      <label>Leave this field empty
        <input v-model="honeypot" type="text" tabindex="-1" autocomplete="off" />
      </label>
    </div>

    <BrandButton type="submit" :disabled="submitting" class="w-full text-center justify-center">
      {{ submitting ? 'Submitting…' : 'Submit My Application' }}
    </BrandButton>

    <!-- If sending fails, never strand someone holding a written-out application. -->
    <div v-if="sendError" class="border border-red-300 bg-red-50 p-4" role="alert">
      <p class="font-sans text-sm text-red-700 mb-1">Your application didn't go through.</p>
      <p class="font-sans text-xs text-red-700/80">
        Please try again, or email your details straight to
        <a href="mailto:hello@naturallyforged.com" class="underline font-medium">hello@naturallyforged.com</a>
        so nothing is lost.
      </p>
    </div>
  </form>
</template>
