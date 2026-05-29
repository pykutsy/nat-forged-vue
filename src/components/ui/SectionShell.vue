<script setup>
defineProps({
  bg:     { type: String, default: '' },
  narrow: { type: Boolean, default: false },
  id:     { type: String, default: null },
})
</script>

<template>
  <section :id="id" :class="['py-20 px-6', bg]">
    <div :class="['mx-auto', narrow ? 'max-w-3xl' : 'max-w-6xl']">
      <slot />
    </div>
  </section>
</template>
