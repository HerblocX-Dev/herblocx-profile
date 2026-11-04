<script lang="ts">
  import HeroSection from "../sections/hero-section.svelte";
  import TrustStrip from "#lib/components/TrustStrip.svelte";
  import AboutSection from "../sections/about-section.svelte";
  import ProcessSection from "../sections/process-section.svelte";
  import ProductsSection from "../sections/products-section.svelte";
  import LocationSection from "../sections/location-section.svelte";
  import ContactSection from "../sections/contact-section.svelte";
</script>

<svelte:head>
  <title>Herblocx — Herbal commodities, graded and shipped from origin</title>
  <meta
    name="description"
    content="We export and import ginger, turmeric, clove, and Indonesian botanicals — sorted, dried, moisture-tested, and documented lot by lot."
  />
</svelte:head>

<div class="w-full">
  <HeroSection />
  <!-- <TrustStrip /> -->
  <AboutSection />
  <ProcessSection />
  <ProductsSection />
  <LocationSection />
  <ContactSection />
</div>
