<script setup>
import TopBar     from '@/components/layout/TopBar.vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
</script>

<template>
  <TopBar />
  <SiteHeader />
  <main>
    <RouterView />
  </main>
  <SiteFooter />
</template>
