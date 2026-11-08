<script lang="ts">
  import HeroSection from "../sections/hero-section.svelte";
  import AboutSection from "../sections/about-section.svelte";
  import ProductsSection from "../sections/products-section.svelte";
  import LocationSection from "../sections/location-section.svelte";
  import ContactSection from "../sections/contact-section.svelte";
  import ApproachSection from "../sections/approach-section.svelte";
  import NewsSection from "../sections/news-section.svelte";
  import EncouragementSection from "../sections/encouragement-section.svelte";
  import ValuePropotion from "../sections/value-propotion.svelte";
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
  <AboutSection />
  <ProductsSection />
  <ApproachSection />
  <NewsSection />
  <EncouragementSection />
  <ValuePropotion />
  <LocationSection />
  <ContactSection />
</div>
