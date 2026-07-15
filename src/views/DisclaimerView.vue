<script setup>
import SectionShell from '@/components/ui/SectionShell.vue'
</script>

<template>
  <section class="bg-forest py-16 px-6 text-center">
    <div class="max-w-3xl mx-auto">
      <h1 class="font-display text-5xl font-medium text-ivory">Disclaimer</h1>
      <p class="font-sans text-sm text-ivory/60 mt-2">
        Please read carefully — this page also includes our Privacy Policy and Terms of Use.
      </p>
    </div>
  </section>

  <SectionShell bg="bg-cream" narrow>
    <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-sans font-medium uppercase tracking-widest text-charcoal/50 mb-12 pb-6 border-b border-parchment">
      <a href="#disclaimer" class="hover:text-bronze transition-colors">Disclaimer</a>
      <a href="#privacy" class="hover:text-bronze transition-colors">Privacy Policy</a>
      <a href="#terms" class="hover:text-bronze transition-colors">Terms of Use</a>
    </nav>

    <div id="disclaimer" class="font-sans text-charcoal/80 space-y-5 leading-relaxed text-sm scroll-mt-20">
      <h2 class="font-display text-2xl font-semibold text-charcoal">Not Medical Advice</h2>
      <p>
        The content on this website and within coaching programs is for educational and informational purposes only.
        It is not intended to be, and should not be construed as, medical advice, diagnosis, or treatment.
        Always consult a qualified healthcare provider before beginning any new nutrition or exercise program.
      </p>

      <h2 class="font-display text-2xl font-semibold text-charcoal">Individual Results</h2>
      <p>
        Testimonials and results shared on this site reflect individual experiences. Results vary based on individual
        effort, consistency, adherence, starting point, and other personal factors. Nothing presented here constitutes
        a guarantee of any specific outcome.
      </p>

      <h2 class="font-display text-2xl font-semibold text-charcoal">Registered Nurse Scope</h2>
      <p>
        Alyssa holds an RN, BSN credential. Coaching services are provided in a coaching capacity — not in a
        clinical nursing or medical capacity. No client–patient relationship is formed through coaching engagement.
      </p>

      <h2 class="font-display text-2xl font-semibold text-charcoal">Affiliate Disclosure</h2>
      <p>
        Some links on this website — including those on the
        <RouterLink to="/resources" class="text-bronze underline hover:text-forest">Resources</RouterLink>
        page — are affiliate links. If you make a purchase through one of these links, Naturally Forged, LLC may
        receive a commission at no additional cost to you. We only feature products and companies we use and
        genuinely recommend, and compensation never determines what is included or how it is described. This
        disclosure is made in accordance with the U.S. Federal Trade Commission's guidelines on endorsements
        and testimonials.
      </p>
    </div>

    <div id="privacy" class="font-sans text-charcoal/80 space-y-5 leading-relaxed text-sm mt-14 pt-10 border-t border-parchment scroll-mt-20">
      <h2 class="font-display text-3xl md:text-4xl font-medium text-charcoal mb-1">Privacy Policy</h2>
      <p class="text-xs text-charcoal/50 mb-2">Last updated: {{ new Date().getFullYear() }}</p>
      <p class="text-xs text-charcoal/50 italic">
        [This is a placeholder privacy policy. Replace with a policy reviewed by legal counsel before publishing.]
      </p>

      <h3 class="font-display text-xl font-semibold text-charcoal">Information We Collect</h3>
      <p>We collect information you provide directly when you apply for coaching, including your name, email address, and whatever you tell us about your goals. We may also collect usage data when you visit this website.</p>

      <h3 class="font-display text-xl font-semibold text-charcoal">How We Use Your Information</h3>
      <p>Information is used to deliver coaching services, respond to your application, and improve the website experience. We do not sell your personal information.</p>

      <h3 class="font-display text-xl font-semibold text-charcoal">Third-Party Services</h3>
      <p>
        Scheduling, client information, and coaching communications are handled through a third-party practice
        management platform, which stores that information on our behalf and under its own privacy terms.
        Coaching applications submitted through this website are delivered by a third-party form service.
        <span class="italic text-charcoal/50">[Name both providers and confirm their data handling terms before publishing.]</span>
      </p>

      <h3 class="font-display text-xl font-semibold text-charcoal">Health and Activity Data</h3>
      <p>
        Any health or activity data you choose to share with us — for example from a glucose monitor, a wearable, or a
        tracking app — is shared voluntarily and only with your consent. You may stop sharing it at any time. Data held
        in those apps remains governed by each provider's own privacy policy, not this one.
        <span class="italic text-charcoal/50">[Confirm what is collected, how long it is retained, and how a client withdraws access.]</span>
      </p>

      <h3 class="font-display text-xl font-semibold text-charcoal">Affiliate Links</h3>
      <p>
        Some links on our <RouterLink to="/resources" class="text-bronze underline hover:text-forest">Resources</RouterLink>
        page are affiliate links. Following one may allow that retailer to set cookies or otherwise record that you
        arrived from this site, so they can attribute a purchase. Those retailers' own privacy policies govern any
        information they collect once you leave this website.
      </p>
    </div>

    <div id="terms" class="font-sans text-charcoal/80 space-y-5 leading-relaxed text-sm mt-14 pt-10 border-t border-parchment scroll-mt-20">
      <h2 class="font-display text-3xl md:text-4xl font-medium text-charcoal mb-1">Terms of Use</h2>
      <p class="text-xs text-charcoal/50 mb-2">Last updated: {{ new Date().getFullYear() }}</p>
      <p class="text-xs text-charcoal/50 italic">
        [This is a placeholder terms of use. Replace with terms reviewed by legal counsel before publishing.]
      </p>

      <h3 class="font-display text-xl font-semibold text-charcoal">Acceptance of Terms</h3>
      <p>By accessing this website, you agree to be bound by these terms of use and all applicable laws and regulations.</p>

      <h3 class="font-display text-xl font-semibold text-charcoal">Use of Content</h3>
      <p>All content on this website — including text, images, and branding — is the property of Naturally Forged, LLC. You may not reproduce or distribute any content without written permission.</p>

      <h3 class="font-display text-xl font-semibold text-charcoal">Coaching Services</h3>
      <p>Coaching services are personal and non-transferable. Results described or shown are not guaranteed. Individual results vary based on effort, adherence, and individual factors.</p>
    </div>

    <div class="font-sans text-charcoal/80 space-y-5 leading-relaxed text-sm mt-14 pt-10 border-t border-parchment">
      <h2 class="font-display text-2xl font-semibold text-charcoal">Contact</h2>
      <p>
        Questions about anything above — this disclaimer, our privacy practices, or these terms? Email
        <a href="mailto:hello@naturallyforged.com" class="text-bronze underline hover:text-forest">hello@naturallyforged.com</a>.
      </p>
    </div>
  </SectionShell>
</template>
