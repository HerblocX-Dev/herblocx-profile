<script lang="ts">
  import CtaButton from "#lib/components/commons/cta-button.svelte";
  import ImageGrid from "#lib/components/commons/image/image-grid.svelte";
  import ProductsCarousel from "#lib/components/products-carousel.svelte";
  import { COMMODITIES } from "#lib/constants/commodities-constant.ts";
  import { GALLERY_ITEMS } from "#lib/constants/gallery-constant.ts";
</script>

<section id="products" class="bg-[#FEFBF3] text-[#F8F9F2] py-20 md:py-20">
  <div class=" mx-auto px-6 md:px-32 space-y-16">
    <div
      class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2"
    >
      <div class="space-y-10 max-w-2xl">
        <h2
          class="text-3xl sm:text-4xl lg:text-7xl font-semibold text-[#365449] tracking-tight"
        >
          Commodities We Manage. Quality We Stand Behind.
        </h2>
        <p class="font-body text-sm md:text-xl text-[#365449] leading-relaxed">
          Our portfolio focuses on carefully sourced Indonesian agricultural
          commodities, supported by origin-level partnerships and structured
          quality management.
        </p>

        <CtaButton href="/product">
          <span>See the full catalogue</span>
        </CtaButton>
      </div>

      <ImageGrid items={GALLERY_ITEMS} />
    </div>

    <div class="grid grid-cols-1 gap-5 lg:gap-14">
      <ProductsCarousel
        commodities={COMMODITIES}
        showMoq={true}
        featured={false}
      />

      <div
        class=" text-[#557174] px-20 rounded-xl flex flex-col justify-between gap-6 transition-colors"
      >
        <div class="space-y-4">
          <h3
            class="font-display text-4xl font-semibold text-[#557174] leading-snug"
          >
            Don’t see your commodity?
          </h3>

          <p class="font-body text-2xl text-[#557174] leading-relaxed">
            We buy and source beyond this list. Tell us the botanical, the grade
            and the volume — we will come back with what we can commit to.
          </p>
        </div>

        <CtaButton variant="secondary" href="/#contact">
          <span>Ask us for a quote</span>
        </CtaButton>
      </div>
    </div>
  </div>
</section>
