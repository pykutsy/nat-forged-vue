<script setup>
import { ref } from 'vue'
import SectionShell from '@/components/ui/SectionShell.vue'
import ImageSlot    from '@/components/ui/ImageSlot.vue'
import FinalCtaSection from '@/components/sections/FinalCtaSection.vue'

const copiedCode = ref(null)

async function copyCode(code, event) {
  // Grab the node now: currentTarget is nulled once dispatch ends, so it is
  // gone by the time anything after the await runs.
  const button = event.currentTarget
  try {
    await navigator.clipboard.writeText(code)
    copiedCode.value = code
    setTimeout(() => {
      if (copiedCode.value === code) copiedCode.value = null
    }, 2000)
  } catch {
    // Clipboard can be blocked by permissions or a non-secure context. Select the
    // text instead so the click still does something the user can act on.
    const selection = window.getSelection()
    const range = document.createRange()
    range.selectNodeContents(button)
    selection.removeAllRanges()
    selection.addRange(range)
  }
}

// Uncomment each import once the matching file is saved into src/assets/,
// then set the entry's `image` below to the imported name.
// import equipLogo from '@/assets/equip-logo.png'
import levelsLogo from '@/assets/logo_levels_1color_black_on_light.svg'

// To add a resource: copy an entry and fill it in.
// `affiliate` — true only when the link earns a commission. Drives the disclosure
//               badge and rel="sponsored"; getting this wrong is an FTC problem.
// `image`     — import the file from @/assets above. Leave null to fall back to a
//               typographic tile built from `kicker` + `name`.
// `fit`       — 'contain' for logos/wordmarks, 'cover' for photos.
// `tileBg`    — only for a logo with a background baked in: set it to that exact
//               colour so the image edges disappear into the tile. Omit otherwise.
// `code`      — omit if there is no code, or the link applies it automatically.
const resources = [
  {
    name: 'Equip Foods',
    kicker: 'Protein',
    blurb: 'A beef isolate protein — no whey, no dairy. If dairy-based powders leave you bloated or uncomfortable, this one tends to sit much easier on the stomach.',
    href: 'https://www.equipfoods.com/ALYSSAKUTSY',
    affiliate: true,
    code: 'ALYSSAKUTSY',
    codeNote: '15% off your first order — applied automatically through the link. Shopping direct instead? Enter the code at checkout.',
    image: null, // ← swap to equipLogo once saved to @/assets/equip-logo.png
    fit: 'contain',
    imageLabel: 'Equip Foods logo',
  },
  {
    name: 'Levels',
    kicker: 'Food & glucose',
    blurb: 'What I use to log meals and read continuous glucose monitor data — it shows how specific foods actually affect blood sugar, rather than guessing. Clients can share their data with me, so we can work together to see patterns and make adjustments as needed, for better insight either way.',
    href: 'https://www.levels.com/',
    affiliate: false,
    image: levelsLogo,
    fit: 'contain',
    imageLabel: 'Levels logo',
  },
  {
    name: 'Oura',
    kicker: 'Sleep & recovery',
    blurb: 'A health tracking tool that monitors sleep quality, temperature, and other health insights.',
    href: 'https://ouraring.com/',
    affiliate: false,
    image: null,
    fit: 'contain',
    imageLabel: 'Oura logo',
  },
  {
    // Affiliate approval pending. Once it lands: set affiliate to true, swap href
    // to your referral link, and fill in code + codeNote. Until then this is an
    // ordinary recommendation and must not carry the affiliate badge.
    name: 'Instant Hydration',
    kicker: 'Hydration',
    blurb: 'A hydration enhancer and electrolyte balancer, made with clean ingredients.',
    href: 'https://instanthydration.com/',
    affiliate: false,
    image: null,
    fit: 'contain',
    imageLabel: 'Instant Hydration logo',
  },
]
</script>

<template>
  <section class="bg-forest py-20 px-6 text-center">
    <div class="max-w-3xl mx-auto">
      <p class="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-bronze mb-3">Tried and tested</p>
      <h1 class="font-display text-5xl md:text-6xl font-medium text-ivory mb-4">Resources I Recommend</h1>
      <p class="font-sans text-sm text-ivory/70 leading-relaxed">
        The brands and tools I use — plus a discount when I have one to share.
      </p>
    </div>
  </section>

  <SectionShell bg="bg-cream">
    <!-- FTC disclosure: must stay above the links and visible without clicking.
         Individual affiliate links are badged as well, since most links here are not. -->
    <p class="font-sans text-xs text-charcoal/60 leading-relaxed border-l-2 border-bronze pl-4 mb-12 max-w-2xl">
      Links marked <span class="text-bronze font-medium">Affiliate link</span> earn me a commission if you buy through
      them — at no extra cost to you. Everything else is here simply because I use it, with nothing in it for me.
      I only recommend what I use and believe in, and commission never influences what appears on this page.
      Nothing here is medical advice; talk to your provider before starting a new supplement.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="item in resources"
        :key="item.name"
        class="flex flex-col bg-ivory border border-parchment hover:shadow-md transition-shadow duration-200"
      >
        <div class="aspect-[4/3]" :style="item.tileBg ? { backgroundColor: item.tileBg } : null">
          <!-- Real image once there is one; otherwise a typographic tile that reads as
               intentional rather than as a missing asset. -->
          <ImageSlot
            v-if="item.image"
            :label="item.imageLabel"
            :src="item.image"
            :alt="item.name"
            :fit="item.fit ?? 'cover'"
          />
          <!-- The tile stands in for a logo, so it carries the heading itself —
               the card body drops its own to avoid printing the name twice. -->
          <div v-else class="w-full h-full bg-parchment flex flex-col items-center justify-center px-6 text-center">
            <p class="font-sans text-[9px] font-medium uppercase tracking-[0.3em] text-bronze mb-2">{{ item.kicker }}</p>
            <h2 class="font-display text-3xl font-medium text-forest leading-tight">{{ item.name }}</h2>
            <span class="block w-8 h-px bg-bronze/40 mt-4" />
          </div>
        </div>

        <div class="flex flex-col flex-1 p-7">
          <h2 v-if="item.image" class="font-display text-xl font-semibold text-charcoal mb-2">{{ item.name }}</h2>
          <p class="font-sans text-sm text-charcoal/70 leading-relaxed mb-5 flex-1">{{ item.blurb }}</p>

          <div v-if="item.code" class="border-t border-parchment pt-4 mb-5">
            <div class="flex items-center gap-2 mb-1.5">
              <span class="font-sans text-[10px] uppercase tracking-widest text-charcoal/50">Code</span>
              <button
                type="button"
                @click="copyCode(item.code, $event)"
                :aria-label="`Copy discount code ${item.code}`"
                class="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-bronze underline underline-offset-4 decoration-bronze/30 hover:text-forest hover:decoration-forest/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
              >
                {{ item.code }}
              </button>
              <span
                v-if="copiedCode === item.code"
                class="font-sans text-[10px] uppercase tracking-widest text-forest/60"
                role="status"
              >
                Copied
              </span>
            </div>
            <p v-if="item.codeNote" class="font-sans text-xs text-charcoal/60 leading-relaxed">{{ item.codeNote }}</p>
          </div>

          <a
            :href="item.href"
            target="_blank"
            :rel="item.affiliate ? 'sponsored noopener' : 'noopener'"
            class="self-start border-2 border-bronze text-bronze hover:bg-bronze hover:text-ivory inline-block px-7 py-3 text-xs font-sans font-medium tracking-widest uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
          >
            {{ item.affiliate ? 'Shop' : 'Visit' }} {{ item.name }}
          </a>

          <p v-if="item.affiliate" class="font-sans text-[10px] uppercase tracking-widest text-charcoal/40 mt-3">
            Affiliate link
          </p>
        </div>
      </div>
    </div>
  </SectionShell>

  <FinalCtaSection />
</template>
