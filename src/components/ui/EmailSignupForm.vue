<script setup>
import { ref } from 'vue'
import BrandButton from './BrandButton.vue'

const email      = ref('')
const submitting = ref(false)
const submitted  = ref(false)
const error      = ref('')

async function onSubmit() {
  error.value = ''
  if (!email.value.trim() || !email.value.includes('@')) {
    error.value = 'Please enter a valid email address.'
    return
  }
  submitting.value = true
  // TODO: wire to ConvertKit / Mailchimp
  console.info('[EmailSignup] payload:', { email: email.value })
  await new Promise(r => setTimeout(r, 600))
  submitting.value = false
  submitted.value  = true
}
</script>

<template>
  <div v-if="submitted" class="py-4 text-center">
    <p class="font-display text-xl text-forest">You're in! Check your inbox for your free guide.</p>
  </div>
  <form v-else @submit.prevent="onSubmit" class="flex flex-col sm:flex-row gap-3">
    <div class="flex-1">
      <input
        v-model="email"
        type="email"
        placeholder="Your email address"
        autocomplete="email"
        class="w-full px-4 py-3 bg-ivory border border-parchment text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-bronze font-sans text-sm"
      />
      <p v-if="error" class="text-xs text-red-500 mt-1">{{ error }}</p>
    </div>
    <BrandButton type="submit" :disabled="submitting">
      {{ submitting ? 'Sending…' : 'Get Free Guides' }}
    </BrandButton>
  </form>
</template>
