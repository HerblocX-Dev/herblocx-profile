<script lang="ts">
  import ImageGrid from "#lib/components/commons/image/image-grid.svelte";
  import { NEWS_ITEMS } from "#lib/constants/news-constant.ts";
</script>

<section id="news" class="bg-[#FEFBF3] text-[#F8F9F2] py-20 md:py-20">
  <div class=" mx-auto px-6 md:px-32 space-y-16">
    <div class="w-full flex flex-col items-center">
      <div
        class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2"
      >
        <div class="space-y-10 max-w-2xl">
          <h2
            class="text-3xl sm:text-4xl lg:text-7xl font-semibold text-[#365449] tracking-tight"
          >
            Beyond the Shipment. Stories from the Field.
          </h2>
          <p
            class="font-body text-sm md:text-xl text-[#365449] leading-relaxed"
          >
            We believe transparency starts with showing the work behind every
            commodity.
          </p>
        </div>
      </div>
      <ImageGrid
        layout="grid"
        cols={4}
        rows={2}
        items={NEWS_ITEMS}
        enableInstagramLink={true}
        showHoverDetail={true}
      />
    </div>
  </div>
</section>
