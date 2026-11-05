<script lang="ts">
  import "./layout.css";
  import favicon from "#lib/assets/favicon.svg";
  import Nav from "#lib/components/commons/nav.svelte";
  import Footer from "#lib/components/commons/footer.svelte";
  import type { LayoutProps } from "./$types";

  let { children }: LayoutProps = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Herblocx — Graded Herbal Commodities</title>
  <meta
    name="description"
    content="Exporter and importer of Indonesian herbal commodities: ginger, turmeric, clove, cinnamon, nutmeg, lemongrass, black pepper. Graded, tested, and traceable."
  />
</svelte:head>

<div class="min-h-screen flex flex-col justify-between">
  <Nav />
  <main class="flex-grow">
    {@render children()}
  </main>
  <Footer />
</div>
