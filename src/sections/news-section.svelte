<script lang="ts">
  import ImageGrid from "#lib/components/commons/image/image-grid.svelte";
  import { NEWS_ITEMS, NEWS_CATEGORIES } from "#lib/constants/news-constant.ts";
  import type { NewsCategoryId } from "#lib/types/gallery-type.ts";
  import { ArrowUpRight, CheckCircle2 } from "@lucide/svelte";

  let activeCategory = $state<NewsCategoryId>("all");

  let currentCategoryMeta = $derived(
    NEWS_CATEGORIES.find((c) => c.id === activeCategory) ?? NEWS_CATEGORIES[0],
  );

  let filteredItems = $derived(
    activeCategory === "all"
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((item) => item.category === activeCategory),
  );
</script>

<section id="news" class="bg-[#FEFBF3] text-[#1E3B2A] py-20 md:py-24">
  <div class="mx-auto px-6 md:px-16 lg:px-32 space-y-14">
    <div
      class="flex flex-col md:flex-row-reverse md:items-end justify-between gap-6 pb-10"
    >
      <div class="space-y-4 max-w-3xl">
        <h2
          class="text-3xl sm:text-4xl lg:text-6xl font-semibold text-[#1E3B2A] tracking-tight leading-[1.1]"
        >
          Beyond the Shipment. <br />
          <span class="text-[#365449]">Stories from the Field.</span>
        </h2>
      </div>
      <p
        class="font-body italic text-sm md:text-base text-[#365449] leading-relaxed max-w-md"
      >
        "We believe transparency starts with showing the work behind every
        commodity, from smallholder farms and quality labs to global market
        movements."
      </p>
    </div>

    <div class="space-y-6">
      <div class="flex flex-wrap items-center gap-2.5">
        {#each NEWS_CATEGORIES as category}
          {@const isSelected = activeCategory === category.id}
          {@const CategoryIcon = category.icon}
          <button
            type="button"
            onclick={() => (activeCategory = category.id)}
            class="inline-flex items-center gap-3 px-4 py-2.5 rounded-full text-sm sm:text-sm font-medium transition-all duration-200 cursor-pointer border {isSelected
              ? 'bg-[#1E3B2A] text-[#FEFBF3] border-[#1E3B2A] shadow-sm'
              : 'text-[#365449] border-[#3B5B46] hover:text-[#1E3B2A]'}"
          >
            <CategoryIcon
              size={15}
              class={isSelected ? "text-[#FEFBF3]" : "text-[#365449]"}
            />
            <span>{category.label}</span>
          </button>
        {/each}
      </div>

      {#if currentCategoryMeta}
        {@const ActiveIcon = currentCategoryMeta.icon}
        <div
          class="p-6 rounded-2xl border border-[#3B5B46] bg-white flex flex-col lg:flex-row lg:items-center justify-between gap-6"
        >
          <div class="flex items-start gap-4 max-w-2xl">
            <div
              class="w-11 h-11 rounded-xl bg-[#1E3B2A] text-[#FEFBF3] flex items-center justify-center shrink-0 mt-0.5"
            >
              <ActiveIcon size={20} />
            </div>
            <div class="space-y-1">
              <h3 class="text-base font-semibold text-[#1E3B2A]">
                {currentCategoryMeta.label}
              </h3>
              <p class="text-xs sm:text-sm text-[#365449] leading-relaxed">
                {currentCategoryMeta.summary}
              </p>
            </div>
          </div>

          <div class="flex flex-wrap gap-2 lg:justify-end">
            {#each currentCategoryMeta.highlights as badge}
              <span
                class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#ede8d3] text-xs font-medium text-[#1E3B2A]"
              >
                {badge}
              </span>
            {/each}
          </div>
        </div>
      {/if}
    </div>

    <div class="flex flex-col items-start gap-6 w-full">
      <div class="flex flex-wrap gap-4 items-center justify-between w-full">
        <div class="flex items-end gap-3">
          <h3
            class="text-xl sm:text-2xl font-semibold text-[#1E3B2A] tracking-tight"
          >
            Updated News
          </h3>
          <!-- <span -->
          <!--   class="text-xs px-2.5 py-1 rounded-full bg-[#365449] text-[#FEFBF3] font-medium" -->
          <!-- > -->
          <!--   {filteredItems.length} Posts -->
          <!-- </span> -->
        </div>

        <a
          href="https://www.instagram.com/herblocxindonesia/"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex items-center gap-1.5 text-sm font-medium text-[#365449] hover:text-[#1E3B2A] transition-colors"
        >
          <span>See More on Our Instagram</span>
          <ArrowUpRight
            size={16}
            class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#1E3B2A]"
          />
        </a>
      </div>

      {#if filteredItems.length > 0}
        <ImageGrid
          layout="grid"
          cols={3}
          rows={2}
          aspect="4/3"
          items={filteredItems}
          enableInstagramLink={true}
          showHoverDetail={true}
        />
      {:else}
        <div
          class="w-full py-16 px-6 rounded-3xl border-4 border-dashed border-[#3B5B46] flex flex-col items-center justify-center text-center space-y-4"
        >
          <div
            class="w-12 h-12 rounded-2xl bg-[#1E3B2A] text-[#F8F9F2] flex items-center justify-center"
          >
            {#if currentCategoryMeta}
              {@const EmptyIcon = currentCategoryMeta.icon}
              <EmptyIcon size={22} />
            {/if}
          </div>

          <div class="space-y-1.5 max-w-md">
            <h4 class="text-lg font-semibold text-[#1E3B2A]">
              No Updates in "{currentCategoryMeta?.label ?? "This Category"}"
              Yet
            </h4>
            <p class="text-xs sm:text-sm text-[#365449] leading-relaxed">
              We are currently documenting new dispatches from the field. Check
              back soon or follow our latest daily stories on Instagram.
            </p>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
            {#if activeCategory !== "all"}
              <button
                type="button"
                onclick={() => (activeCategory = "all")}
                class="px-4 py-2 rounded-full text-xs font-medium bg-[#1E3B2A] text-[#FEFBF3] hover:bg-[#365449] transition-colors cursor-pointer"
              >
                View All Updates
              </button>
            {/if}

            <a
              href="https://www.instagram.com/herblocxindonesia/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-[#1E3B2A] border border-[#3B5B46] transition-colors"
            >
              <span>Visit Our Instagram</span>
              <ArrowUpRight size={14} class="text-[#3B5B46]" />
            </a>
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>
