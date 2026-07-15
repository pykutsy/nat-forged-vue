<script setup>
import SectionShell from '@/components/ui/SectionShell.vue'
</script>

<template>
  <section class="bg-forest py-16 px-6 text-center">
    <div class="max-w-3xl mx-auto">
      <h1 class="font-display text-5xl font-medium text-ivory">Privacy Policy</h1>
      <p class="font-sans text-sm text-ivory/60 mt-2">Last updated: {{ new Date().getFullYear() }}</p>
    </div>
  </section>

  <SectionShell bg="bg-cream" narrow>
    <div class="prose prose-sm max-w-none font-sans text-charcoal/80 space-y-5 leading-relaxed">
      <p class="font-sans text-xs text-charcoal/50 italic">
        [This is a placeholder privacy policy. Replace with a policy reviewed by legal counsel before publishing.]
      </p>

      <h2 class="font-display text-2xl font-semibold text-charcoal">Information We Collect</h2>
      <p>We collect information you provide directly when you apply for coaching or sign up for our email list, including your name and email address. We may also collect usage data when you visit this website.</p>

      <h2 class="font-display text-2xl font-semibold text-charcoal">How We Use Your Information</h2>
      <p>Information is used to deliver coaching services, send newsletters and free resources you've requested, and improve the website experience. We do not sell your personal information.</p>

      <h2 class="font-display text-2xl font-semibold text-charcoal">Email Communications</h2>
      <p>If you join our email list, you can unsubscribe at any time using the link at the bottom of any email. We will not send unsolicited messages.</p>

      <h2 class="font-display text-2xl font-semibold text-charcoal">Third-Party Services</h2>
      <p>
        Scheduling, client information, and coaching communications are handled through a third-party practice
        management platform, which stores that information on our behalf and under its own privacy terms.
        <span class="italic text-charcoal/50">[Name the platform and confirm its data handling terms before publishing.]</span>
      </p>

      <h2 class="font-display text-2xl font-semibold text-charcoal">Health and Activity Data</h2>
      <p>
        Any health or activity data you choose to share with us — for example from a glucose monitor, a wearable, or a
        tracking app — is shared voluntarily and only with your consent. You may stop sharing it at any time. Data held
        in those apps remains governed by each provider's own privacy policy, not this one.
        <span class="italic text-charcoal/50">[Confirm what is collected, how long it is retained, and how a client withdraws access.]</span>
      </p>

      <h2 class="font-display text-2xl font-semibold text-charcoal">Affiliate Links</h2>
      <p>
        Some links on our <RouterLink to="/resources" class="text-bronze underline hover:text-forest">Resources</RouterLink>
        page are affiliate links. Following one may allow that retailer to set cookies or otherwise record that you
        arrived from this site, so they can attribute a purchase. Those retailers' own privacy policies govern any
        information they collect once you leave this website.
      </p>

      <h2 class="font-display text-2xl font-semibold text-charcoal">Contact</h2>
      <p>For questions about this policy, email <a href="mailto:hello@naturallyforged.com" class="text-bronze underline hover:text-forest">hello@naturallyforged.com</a>.</p>
    </div>
  </SectionShell>
</template>
