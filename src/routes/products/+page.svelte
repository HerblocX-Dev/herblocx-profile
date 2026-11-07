<script lang="ts">
  import { COMMODITIES } from "#lib/constants/commodities-constant.ts";
  import {
    COMMODITY_SPECIFICATIONS,
    type CommoditySpecificationData,
  } from "#lib/constants/commodity-specs.ts";
  import {
    Sprout,
    ShieldCheck,
    MapPin,
    FileCheck2,
    Ship,
    ArrowRight,
    Search,
    CheckCircle2,
    SlidersHorizontal,
    Layers,
    Award,
    Globe,
    Building2,
    Scale,
    ExternalLink,
    Filter,
    Package,
  } from "lucide-svelte";

  const categories = [
    "All",
    "Oils & fats",
    "Kernel products",
    "Sweeteners",
    "Shell & fibre",
  ];

  let selectedCategory = $state("All");
  let searchQuery = $state("");

  let filteredCommodities = $derived.by(() => {
    return COMMODITIES.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" ||
        item.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.latinName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  });

  function getSpec(slug: string): CommoditySpecificationData | undefined {
    return COMMODITY_SPECIFICATIONS[slug];
  }

  const galleryFallbacks: Record<string, string> = {
    "virgin-coconut-oil": "/gallery_commodities/1.webp",
    "desiccated-coconut": "/gallery_commodities/2.webp",
    "coconut-milk-powder": "/gallery_commodities/3.webp",
    "coconut-sugar": "/gallery_commodities/1.webp",
    "coconut-shell-charcoal": "/gallery_commodities/4.webp",
    cocopeat: "/gallery_commodities/2.webp",
    copra: "/gallery_commodities/3.webp",
  };

  function getCommodityImage(slug: string, originalImage: string): string {
    return (
      galleryFallbacks[slug] || originalImage || "/gallery_commodities/1.webp"
    );
  }
</script>

<svelte:head>
  <title
    >Commodities Catalogue — Graded Indonesian Agricultural Exports | HerblocX</title
  >
  <meta
    name="description"
    content="Explore HerblocX's bento catalogue of premium Indonesian agricultural commodities: Virgin Coconut Oil, Desiccated Coconut, Coconut Sugar, Charcoal, Cocopeat, and Copra. 100% origin traceable with full lot specifications."
  />
</svelte:head>

<div class="bg-[#FEFBF3] min-h-screen text-[#16211A] pt-8 md:pt-12 pb-24">
  <div
    class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 space-y-10 md:space-y-12"
  >
    <nav
      class="flex items-center gap-2 text-xs md:text-sm text-[#5A6847] font-display"
    >
      <a href="/" class="hover:text-[#1E3B2A] transition-colors">Home</a>
      <span>/</span>
      <span class="text-[#1E3B2A] font-semibold">Commodities Catalogue</span>
    </nav>

    <div class="space-y-6">
      <div
        class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4 border-b border-[#1E3B2A]/15"
      >
        <div class="max-w-3xl space-y-3">
          <h1
            class="text-3xl sm:text-4xl lg:text-6xl font-semibold text-[#1E3B2A] tracking-tight leading-[1.1]"
          >
            Commodity Catalogue & Lot Specifications
          </h1>
          <p
            class="text-base sm:text-lg md:text-xl text-[#365449] leading-relaxed max-w-2xl font-body"
          >
            Directly sourced from Indonesian farmer cooperatives. Every lot is
            graded at origin, third-party lab inspected, and documented with
            transparent chain of custody from farm gate to ocean port.
          </p>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-2"
      >
        <div
          class="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none font-display text-sm"
        >
          {#each categories as category}
            {@const isActive = selectedCategory === category}
            <button
              type="button"
              onclick={() => (selectedCategory = category)}
              class="px-3.5 sm:px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 cursor-pointer text-xs sm:text-sm {isActive
                ? 'bg-[#1E3B2A] text-[#F8F9F2] shadow-sm font-semibold'
                : 'bg-[#E7EBDD] text-[#365449] hover:bg-[#D6DAC8] hover:text-[#16211A]'}"
            >
              {category}
              {#if category === "All"}
                <span class="ml-1 opacity-70 font-mono text-[11px]"
                  >({COMMODITIES.length})</span
                >
              {/if}
            </button>
          {/each}
        </div>

        <div class="relative w-full md:w-72">
          <Search
            size={16}
            class="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5A6847]"
          />
          <input
            type="text"
            bind:value={searchQuery}
            placeholder="Search commodity, origin, grade..."
            class="w-full bg-[#F3F6EC] border border-[#CCD8C4] rounded-full pl-9 pr-4 py-2 text-sm text-[#16211A] placeholder:text-[#5A6847]/70 focus:outline-none focus:ring-2 focus:ring-[#1E3B2A] focus:bg-white transition-all font-display"
          />
        </div>
      </div>
    </div>

    <div
      class="flex items-center justify-between text-xs sm:text-sm text-[#5A6847] font-display"
    >
      <span>
        Showing <strong class="text-[#1E3B2A]"
          >{filteredCommodities.length}</strong
        >
        of {COMMODITIES.length} export commodities
        {#if selectedCategory !== "All"}
          in <strong class="text-[#1E3B2A]">{selectedCategory}</strong>{/if}
      </span>
      {#if searchQuery}
        <button
          onclick={() => {
            searchQuery = "";
            selectedCategory = "All";
          }}
          class="text-[#B8892B] hover:underline font-semibold cursor-pointer"
        >
          Reset filters
        </button>
      {/if}
    </div>

    <!-- Bento Grid Showcase -->
    {#if filteredCommodities.length === 0}
      <div
        class="bg-[#F3F6EC] border border-[#CCD8C4] rounded-3xl p-12 text-center space-y-4 max-w-lg mx-auto"
      >
        <Package size={48} class="mx-auto text-[#5A6847]" />
        <h3 class="text-xl font-semibold text-[#1E3B2A] font-display">
          No commodities match your criteria
        </h3>
        <p class="text-sm text-[#365449] font-body">
          Try clearing your search query or choosing another category filter.
        </p>
        <button
          onclick={() => {
            searchQuery = "";
            selectedCategory = "All";
          }}
          class="px-5 py-2.5 rounded-full bg-[#1E3B2A] text-white text-sm font-semibold font-display cursor-pointer hover:bg-[#3B5B46] transition-colors"
        >
          Show All Commodities
        </button>
      </div>
    {:else}
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6 items-stretch"
      >
        {#each filteredCommodities as commodity, index (commodity.slug)}
          {@const spec = getSpec(commodity.slug)}
          {@const imageSrc = getCommodityImage(commodity.slug, commodity.image)}

          {#if commodity.slug === "virgin-coconut-oil"}
            <div
              class="lg:col-span-8 bg-[#172E21] text-[#F8F9F2] rounded-3xl overflow-hidden border border-[#2C4535] shadow-lg flex flex-col justify-between group transition-all duration-300 hover:border-[#E3C677]/60"
            >
              <div
                class="relative h-64 sm:h-80 w-full overflow-hidden bg-[#243F2F]"
              >
                <img
                  src={imageSrc}
                  alt="{commodity.name} - HerblocX Indonesian Export"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-[#172E21] via-[#172E21]/40 to-transparent"
                ></div>

                <!-- Bottom Title Overlay -->
                <div class="absolute bottom-4 left-6 right-6 space-y-1">
                  <span
                    class="text-xs uppercase font-mono tracking-widest text-[#F8F9F2] font-semibold"
                  >
                    {commodity.kicker || "COLD-PRESSED OIL · COCOS NUCIFERA"}
                  </span>
                  <h2
                    class="text-2xl sm:text-3xl md:text-4xl font-semibold text-white font-display"
                  >
                    {commodity.name}
                  </h2>
                  <p
                    class="text-sm sm:text-base text-[#C3D0B8] italic font-body"
                  >
                    {commodity.latinName}
                  </p>
                </div>
              </div>

              <div
                class="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-6"
              >
                <p
                  class="text-sm sm:text-base text-[#C3D0B8] leading-relaxed font-body"
                >
                  {commodity.summary}
                </p>

                <!-- Key Parameters Grid -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 font-display">
                  <div
                    class="bg-[#243F2F]/80 border border-[#3A5643] rounded-2xl p-3.5"
                  >
                    <span
                      class="text-[10px] uppercase tracking-wider text-[#9EB394] font-medium block"
                      >Moisture</span
                    >
                    <span class="text-base sm:text-lg font-bold text-[#E3C677]"
                      >{commodity.moisture}</span
                    >
                    <span class="text-[10px] text-[#C3D0B8] block"
                      >Karl Fischer Max</span
                    >
                  </div>
                  <div
                    class="bg-[#243F2F]/80 border border-[#3A5643] rounded-2xl p-3.5"
                  >
                    <span
                      class="text-[10px] uppercase tracking-wider text-[#9EB394] font-medium block"
                      >Purity</span
                    >
                    <span class="text-base sm:text-lg font-bold text-white"
                      >{commodity.purity}</span
                    >
                    <span class="text-[10px] text-[#C3D0B8] block"
                      >Water-Clear Grade</span
                    >
                  </div>
                  <div
                    class="bg-[#243F2F]/80 border border-[#3A5643] rounded-2xl p-3.5"
                  >
                    <span
                      class="text-[10px] uppercase tracking-wider text-[#9EB394] font-medium block"
                      >MOQ</span
                    >
                    <span class="text-base sm:text-lg font-bold text-white"
                      >{commodity.moq}</span
                    >
                    <span class="text-[10px] text-[#C3D0B8] block"
                      >LCL & FCL Available</span
                    >
                  </div>
                  <div
                    class="bg-[#243F2F]/80 border border-[#3A5643] rounded-2xl p-3.5"
                  >
                    <span
                      class="text-[10px] uppercase tracking-wider text-[#9EB394] font-medium block"
                      >Loading Port</span
                    >
                    <span class="text-base sm:text-lg font-bold text-white"
                      >Bitung / Priok</span
                    >
                    <span class="text-[10px] text-[#C3D0B8] block"
                      >190kg HDPE Drums</span
                    >
                  </div>
                </div>

                <!-- Action Button -->
                <div
                  class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-[#2C4535]"
                >
                  <div
                    class="flex items-center gap-2 text-xs text-[#9EB394] font-display"
                  >
                    <CheckCircle2 size={16} class="text-[#E3C677]" />
                    <span
                      >Includes Origin Mapping, Harvest Logs & Certified COA</span
                    >
                  </div>

                  <a
                    href="/products/{commodity.slug}"
                    class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E3C677] text-[#16211A] font-semibold font-display text-sm sm:text-base hover:bg-white transition-all shadow-md group/btn cursor-pointer"
                  >
                    <span>View specification</span>
                    <ArrowRight
                      size={18}
                      class="transition-transform group-hover/btn:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>

            <!-- Bento Feature Tile: Origin & Traceability Hub (4 Cols on lg) -->
            <div
              class="lg:col-span-4 bg-[#EDE8D3] border border-[#CCD8C4] rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-[#16211A] shadow-sm"
            >
              <div class="space-y-4">
                <div
                  class="w-12 h-12 rounded-2xl bg-[#1E3B2A] text-[#F8F9F2] flex items-center justify-center"
                >
                  <MapPin size={24} />
                </div>
                <div>
                  <span
                    class="text-xs font-mono uppercase tracking-widest text-[#5A6847] font-semibold"
                  >
                    ORIGIN NETWORK
                  </span>
                  <h3
                    class="text-2xl font-bold font-display text-[#1E3B2A] mt-1"
                  >
                    Direct Sourcing Across Indonesia
                  </h3>
                </div>
                <p class="text-sm text-[#365449] leading-relaxed font-body">
                  We manage direct smallholder farmer relationships across 6 key
                  archipelago provinces with verifiable GPS polygons and
                  farm-gate intake registries.
                </p>

                <div class="space-y-2.5 pt-2 font-display text-xs">
                  <div
                    class="flex items-center justify-between p-2.5 bg-white/70 rounded-xl border border-[#CCD8C4]"
                  >
                    <span class="font-medium text-[#1E3B2A]"
                      >North Sulawesi (Bitung & Minahasa)</span
                    >
                    <span class="font-mono text-[#5A6847]"
                      >Virgin Coconut Oil</span
                    >
                  </div>
                  <div
                    class="flex items-center justify-between p-2.5 bg-white/70 rounded-xl border border-[#CCD8C4]"
                  >
                    <span class="font-medium text-[#1E3B2A]"
                      >Lampung & Sumatra</span
                    >
                    <span class="font-mono text-[#5A6847]"
                      >Desiccated & Cocopeat</span
                    >
                  </div>
                  <div
                    class="flex items-center justify-between p-2.5 bg-white/70 rounded-xl border border-[#CCD8C4]"
                  >
                    <span class="font-medium text-[#1E3B2A]"
                      >Central Java (Banyumas)</span
                    >
                    <span class="font-mono text-[#5A6847]"
                      >Organic Coconut Sugar</span
                    >
                  </div>
                  <div
                    class="flex items-center justify-between p-2.5 bg-white/70 rounded-xl border border-[#CCD8C4]"
                  >
                    <span class="font-medium text-[#1E3B2A]"
                      >North Maluku (Halmahera)</span
                    >
                    <span class="font-mono text-[#5A6847]">Edible Copra</span>
                  </div>
                </div>
              </div>

              <div class="pt-6">
                <a
                  href="/#our-approach"
                  class="inline-flex items-center gap-2 text-sm font-semibold font-display text-[#1E3B2A] hover:text-[#B8892B] transition-colors"
                >
                  <span>Learn how our traceability works</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <!-- 2. Desiccated Coconut (6 Cols on lg or 4 Cols) -->
          {:else if commodity.slug === "desiccated-coconut"}
            <div
              class="lg:col-span-6 bg-white border border-[#CCD8C4] rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300"
            >
              <div class="relative h-52 w-full overflow-hidden bg-[#E7EBDD]">
                <img
                  src={imageSrc}
                  alt={commodity.name}
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute top-3 left-3 flex gap-2">
                  <span
                    class="px-2.5 py-1 rounded-full bg-[#1E3B2A] text-white text-[11px] font-semibold font-display uppercase tracking-wide"
                  >
                    {commodity.category}
                  </span>
                  <span
                    class="px-2.5 py-1 rounded-full bg-white/90 text-[#16211A] text-[11px] font-semibold font-display uppercase tracking-wide backdrop-blur-xs"
                  >
                    {commodity.gradeBadge}
                  </span>
                </div>
                <div
                  class="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-mono backdrop-blur-xs"
                >
                  {commodity.origin}
                </div>
              </div>

              <div class="p-6 flex-1 flex flex-col justify-between gap-4">
                <div class="space-y-1">
                  <h3 class="text-2xl font-bold font-display text-[#16211A]">
                    {commodity.name}
                  </h3>
                  <p class="text-sm text-[#5A6847] italic font-body">
                    {commodity.latinName}
                  </p>
                  <p
                    class="text-sm text-[#365449] line-clamp-2 leading-relaxed pt-1 font-body"
                  >
                    {commodity.summary}
                  </p>
                </div>

                <div
                  class="grid grid-cols-3 gap-2 py-2 font-display text-xs border-y border-[#CCD8C4]"
                >
                  <div>
                    <span class="text-[#5A6847] block text-[10px] uppercase"
                      >Moisture</span
                    >
                    <span class="font-bold text-[#16211A] text-sm"
                      >{commodity.moisture}</span
                    >
                  </div>
                  <div>
                    <span class="text-[#5A6847] block text-[10px] uppercase"
                      >Fat Content</span
                    >
                    <span class="font-bold text-[#16211A] text-sm">65% Min</span
                    >
                  </div>
                  <div>
                    <span class="text-[#5A6847] block text-[10px] uppercase"
                      >MOQ</span
                    >
                    <span class="font-bold text-[#16211A] text-sm"
                      >{commodity.moq}</span
                    >
                  </div>
                </div>

                <div class="flex items-center justify-between pt-2">
                  <span class="text-xs text-[#5A6847] font-mono">
                    25kg Multiwall Sacks
                  </span>
                  <a
                    href="/products/{commodity.slug}"
                    class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#3B5B46] hover:bg-[#1E3B2A] text-white font-semibold font-display text-sm transition-colors cursor-pointer"
                  >
                    <span>View specification</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            <!-- 3. Coconut Sugar (6 Cols on lg) -->
          {:else if commodity.slug === "coconut-sugar"}
            <div
              class="lg:col-span-6 bg-white border border-[#CCD8C4] rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300"
            >
              <div class="relative h-52 w-full overflow-hidden bg-[#E7EBDD]">
                <img
                  src={imageSrc}
                  alt={commodity.name}
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute top-3 left-3 flex gap-2">
                  <span
                    class="px-2.5 py-1 rounded-full bg-[#1E3B2A] text-white text-[11px] font-semibold font-display uppercase tracking-wide"
                  >
                    {commodity.category}
                  </span>
                  <span
                    class="px-2.5 py-1 rounded-full bg-white/90 text-[#16211A] text-[11px] font-semibold font-display uppercase tracking-wide backdrop-blur-xs"
                  >
                    Low GI (~35)
                  </span>
                </div>
                <div
                  class="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-mono backdrop-blur-xs"
                >
                  {commodity.origin}
                </div>
              </div>

              <div class="p-6 flex-1 flex flex-col justify-between gap-4">
                <div class="space-y-1">
                  <h3 class="text-2xl font-bold font-display text-[#16211A]">
                    {commodity.name}
                  </h3>
                  <p class="text-sm text-[#5A6847] italic font-body">
                    {commodity.latinName}
                  </p>
                  <p
                    class="text-sm text-[#365449] line-clamp-2 leading-relaxed pt-1 font-body"
                  >
                    {commodity.summary}
                  </p>
                </div>

                <div
                  class="grid grid-cols-3 gap-2 py-2 font-display text-xs border-y border-[#CCD8C4]"
                >
                  <div>
                    <span class="text-[#5A6847] block text-[10px] uppercase"
                      >Moisture</span
                    >
                    <span class="font-bold text-[#16211A] text-sm"
                      >{commodity.moisture}</span
                    >
                  </div>
                  <div>
                    <span class="text-[#5A6847] block text-[10px] uppercase"
                      >Sucrose</span
                    >
                    <span class="font-bold text-[#16211A] text-sm">> 75%</span>
                  </div>
                  <div>
                    <span class="text-[#5A6847] block text-[10px] uppercase"
                      >MOQ</span
                    >
                    <span class="font-bold text-[#16211A] text-sm"
                      >{commodity.moq}</span
                    >
                  </div>
                </div>

                <div class="flex items-center justify-between pt-2">
                  <span class="text-xs text-[#5A6847] font-mono">
                    20kg Kraft Bag with Liner
                  </span>
                  <a
                    href="/products/{commodity.slug}"
                    class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#3B5B46] hover:bg-[#1E3B2A] text-white font-semibold font-display text-sm transition-colors cursor-pointer"
                  >
                    <span>View specification</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            <!-- 4. Coconut Milk Powder (6 Cols on lg) -->
          {:else if commodity.slug === "coconut-milk-powder"}
            <div
              class="lg:col-span-6 bg-white border border-[#CCD8C4] rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300"
            >
              <div class="relative h-52 w-full overflow-hidden bg-[#E7EBDD]">
                <img
                  src={imageSrc}
                  alt={commodity.name}
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute top-3 left-3 flex gap-2">
                  <span
                    class="px-2.5 py-1 rounded-full bg-[#1E3B2A] text-white text-[11px] font-semibold font-display uppercase tracking-wide"
                  >
                    {commodity.category}
                  </span>
                  <span
                    class="px-2.5 py-1 rounded-full bg-white/90 text-[#16211A] text-[11px] font-semibold font-display uppercase tracking-wide backdrop-blur-xs"
                  >
                    {commodity.gradeBadge || "Grade A"}
                  </span>
                </div>
                <div
                  class="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-mono backdrop-blur-xs"
                >
                  {commodity.origin}
                </div>
              </div>

              <div class="p-6 flex-1 flex flex-col justify-between gap-4">
                <div class="space-y-1">
                  <h3 class="text-2xl font-bold font-display text-[#16211A]">
                    {commodity.name}
                  </h3>
                  <p class="text-sm text-[#5A6847] italic font-body">
                    {commodity.latinName}
                  </p>
                  <p
                    class="text-sm text-[#365449] line-clamp-2 leading-relaxed pt-1 font-body"
                  >
                    {commodity.summary}
                  </p>
                </div>

                <div
                  class="grid grid-cols-3 gap-2 py-2 font-display text-xs border-y border-[#CCD8C4]"
                >
                  <div>
                    <span class="text-[#5A6847] block text-[10px] uppercase"
                      >Moisture</span
                    >
                    <span class="font-bold text-[#16211A] text-sm"
                      >{commodity.moisture}</span
                    >
                  </div>
                  <div>
                    <span class="text-[#5A6847] block text-[10px] uppercase"
                      >Fat Content</span
                    >
                    <span class="font-bold text-[#16211A] text-sm"
                      >65% High Fat</span
                    >
                  </div>
                  <div>
                    <span class="text-[#5A6847] block text-[10px] uppercase"
                      >MOQ</span
                    >
                    <span class="font-bold text-[#16211A] text-sm"
                      >{commodity.moq}</span
                    >
                  </div>
                </div>

                <div class="flex items-center justify-between pt-2">
                  <span class="text-xs text-[#5A6847] font-mono">
                    20kg Carton with Liner
                  </span>
                  <a
                    href="/products/{commodity.slug}"
                    class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#3B5B46] hover:bg-[#1E3B2A] text-white font-semibold font-display text-sm transition-colors cursor-pointer"
                  >
                    <span>View specification</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            <!-- 5. Coconut Shell Charcoal (6 Cols on lg) -->
          {:else if commodity.slug === "coconut-shell-charcoal"}
            <div
              class="lg:col-span-6 bg-white border border-[#CCD8C4] rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300"
            >
              <div class="relative h-52 w-full overflow-hidden bg-[#E7EBDD]">
                <img
                  src={imageSrc}
                  alt={commodity.name}
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute top-3 left-3 flex gap-2">
                  <span
                    class="px-2.5 py-1 rounded-full bg-[#1E3B2A] text-white text-[11px] font-semibold font-display uppercase tracking-wide"
                  >
                    {commodity.category}
                  </span>
                  <span
                    class="px-2.5 py-1 rounded-full bg-white/90 text-[#16211A] text-[11px] font-semibold font-display uppercase tracking-wide backdrop-blur-xs"
                  >
                    {commodity.gradeBadge || "Grade A"}
                  </span>
                </div>
                <div
                  class="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-mono backdrop-blur-xs"
                >
                  {commodity.origin}
                </div>
              </div>

              <div class="p-6 flex-1 flex flex-col justify-between gap-4">
                <div class="space-y-1">
                  <h3 class="text-2xl font-bold font-display text-[#16211A]">
                    {commodity.name}
                  </h3>
                  <p class="text-sm text-[#5A6847] italic font-body">
                    {commodity.latinName}
                  </p>
                  <p
                    class="text-sm text-[#365449] line-clamp-2 leading-relaxed pt-1 font-body"
                  >
                    {commodity.summary}
                  </p>
                </div>

                <div
                  class="grid grid-cols-3 gap-2 py-2 font-display text-xs border-y border-[#CCD8C4]"
                >
                  <div>
                    <span class="text-[#5A6847] block text-[10px] uppercase"
                      >Fixed Carbon</span
                    >
                    <span class="font-bold text-[#16211A] text-sm">75% Min</span
                    >
                  </div>
                  <div>
                    <span class="text-[#5A6847] block text-[10px] uppercase"
                      >Calorific</span
                    >
                    <span class="font-bold text-[#16211A] text-sm"
                      >> 7,200 kcal</span
                    >
                  </div>
                  <div>
                    <span class="text-[#5A6847] block text-[10px] uppercase"
                      >MOQ</span
                    >
                    <span class="font-bold text-[#16211A] text-sm"
                      >{commodity.moq}</span
                    >
                  </div>
                </div>

                <div class="flex items-center justify-between pt-2">
                  <span class="text-xs text-[#5A6847] font-mono">
                    10kg Carton / Jumbo Bag
                  </span>
                  <a
                    href="/products/{commodity.slug}"
                    class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#3B5B46] hover:bg-[#1E3B2A] text-white font-semibold font-display text-sm transition-colors cursor-pointer"
                  >
                    <span>View specification</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            <!-- 6. Cocopeat & Coir (6 Cols on lg) -->
          {:else if commodity.slug === "cocopeat"}
            <div
              class="lg:col-span-6 bg-white border border-[#CCD8C4] rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300"
            >
              <div class="relative h-52 w-full overflow-hidden bg-[#E7EBDD]">
                <img
                  src={imageSrc}
                  alt={commodity.name}
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute top-3 left-3 flex gap-2">
                  <span
                    class="px-2.5 py-1 rounded-full bg-[#1E3B2A] text-white text-[11px] font-semibold font-display uppercase tracking-wide"
                  >
                    {commodity.category}
                  </span>
                  <span
                    class="px-2.5 py-1 rounded-full bg-white/90 text-[#16211A] text-[11px] font-semibold font-display uppercase tracking-wide backdrop-blur-xs"
                  >
                    {commodity.gradeBadge || "Grade A"}
                  </span>
                </div>
                <div
                  class="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-mono backdrop-blur-xs"
                >
                  {commodity.origin}
                </div>
              </div>

              <div class="p-6 flex-1 flex flex-col justify-between gap-4">
                <div class="space-y-1">
                  <h3 class="text-2xl font-bold font-display text-[#16211A]">
                    {commodity.name}
                  </h3>
                  <p class="text-sm text-[#5A6847] italic font-body">
                    {commodity.latinName}
                  </p>
                  <p
                    class="text-sm text-[#365449] line-clamp-2 leading-relaxed pt-1 font-body"
                  >
                    {commodity.summary}
                  </p>
                </div>

                <div
                  class="grid grid-cols-3 gap-2 py-2 font-display text-xs border-y border-[#CCD8C4]"
                >
                  <div>
                    <span class="text-[#5A6847] block text-[10px] uppercase"
                      >Electrical Cond.</span
                    >
                    <span class="font-bold text-[#16211A] text-sm"
                      >Low EC &lt; 0.5</span
                    >
                  </div>
                  <div>
                    <span class="text-[#5A6847] block text-[10px] uppercase"
                      >Expansion</span
                    >
                    <span class="font-bold text-[#16211A] text-sm"
                      >75L+ / 5kg Block</span
                    >
                  </div>
                  <div>
                    <span class="text-[#5A6847] block text-[10px] uppercase"
                      >MOQ</span
                    >
                    <span class="font-bold text-[#16211A] text-sm"
                      >{commodity.moq}</span
                    >
                  </div>
                </div>

                <div class="flex items-center justify-between pt-2">
                  <span class="text-xs text-[#5A6847] font-mono">
                    5kg Compressed Block
                  </span>
                  <a
                    href="/products/{commodity.slug}"
                    class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#3B5B46] hover:bg-[#1E3B2A] text-white font-semibold font-display text-sm transition-colors cursor-pointer"
                  >
                    <span>View specification</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            <!-- 7. Copra (6 Cols on lg) -->
          {:else if commodity.slug === "copra"}
            <div
              class="lg:col-span-6 bg-white border border-[#CCD8C4] rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300"
            >
              <div class="relative h-52 w-full overflow-hidden bg-[#E7EBDD]">
                <img
                  src={imageSrc}
                  alt={commodity.name}
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute top-3 left-3 flex gap-2">
                  <span
                    class="px-2.5 py-1 rounded-full bg-[#1E3B2A] text-white text-[11px] font-semibold font-display uppercase tracking-wide"
                  >
                    {commodity.category}
                  </span>
                  <span
                    class="px-2.5 py-1 rounded-full bg-white/90 text-[#16211A] text-[11px] font-semibold font-display uppercase tracking-wide backdrop-blur-xs"
                  >
                    Edible & Milling
                  </span>
                </div>
                <div
                  class="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-mono backdrop-blur-xs"
                >
                  {commodity.origin}
                </div>
              </div>

              <div class="p-6 flex-1 flex flex-col justify-between gap-4">
                <div class="space-y-1">
                  <h3 class="text-2xl font-bold font-display text-[#16211A]">
                    {commodity.name}
                  </h3>
                  <p class="text-sm text-[#5A6847] italic font-body">
                    {commodity.latinName}
                  </p>
                  <p
                    class="text-sm text-[#365449] line-clamp-2 leading-relaxed pt-1 font-body"
                  >
                    {commodity.summary}
                  </p>
                </div>

                <div
                  class="grid grid-cols-3 gap-2 py-2 font-display text-xs border-y border-[#CCD8C4]"
                >
                  <div>
                    <span class="text-[#5A6847] block text-[10px] uppercase"
                      >Oil Content</span
                    >
                    <span class="font-bold text-[#16211A] text-sm"
                      >> 67% Min</span
                    >
                  </div>
                  <div>
                    <span class="text-[#5A6847] block text-[10px] uppercase"
                      >Moisture</span
                    >
                    <span class="font-bold text-[#16211A] text-sm"
                      >{commodity.moisture}</span
                    >
                  </div>
                  <div>
                    <span class="text-[#5A6847] block text-[10px] uppercase"
                      >Aflatoxin</span
                    >
                    <span class="font-bold text-[#16211A] text-sm"
                      >&lt; 4 ppb</span
                    >
                  </div>
                </div>

                <div class="flex items-center justify-between pt-2">
                  <span class="text-xs text-[#5A6847] font-mono"
                    >50kg Woven PP Sacks</span
                  >
                  <a
                    href="/products/{commodity.slug}"
                    class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#3B5B46] hover:bg-[#1E3B2A] text-white font-semibold font-display text-sm transition-colors cursor-pointer"
                  >
                    <span>View specification</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            <!-- Default fallback card for any other commodities -->
          {:else}
            <div
              class="lg:col-span-6 bg-white border border-[#CCD8C4] rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300"
            >
              <div class="relative h-52 w-full overflow-hidden bg-[#E7EBDD]">
                <img
                  src={imageSrc}
                  alt={commodity.name}
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute top-3 left-3 flex gap-2">
                  <span
                    class="px-2.5 py-1 rounded-full bg-[#1E3B2A] text-white text-[11px] font-semibold font-display uppercase tracking-wide"
                  >
                    {commodity.category}
                  </span>
                  <span
                    class="px-2.5 py-1 rounded-full bg-white/90 text-[#16211A] text-[11px] font-semibold font-display uppercase tracking-wide backdrop-blur-xs"
                  >
                    {commodity.gradeBadge || "Standard"}
                  </span>
                </div>
                <div
                  class="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-mono backdrop-blur-xs"
                >
                  {commodity.origin}
                </div>
              </div>

              <div class="p-6 flex-1 flex flex-col justify-between gap-4">
                <div class="space-y-1">
                  <h3 class="text-2xl font-bold font-display text-[#16211A]">
                    {commodity.name}
                  </h3>
                  <p class="text-sm text-[#5A6847] italic font-body">
                    {commodity.latinName}
                  </p>
                  <p
                    class="text-sm text-[#365449] line-clamp-2 leading-relaxed pt-1 font-body"
                  >
                    {commodity.summary}
                  </p>
                </div>

                <div
                  class="grid grid-cols-3 gap-2 py-2 font-display text-xs border-y border-[#CCD8C4]"
                >
                  <div>
                    <span class="text-[#5A6847] block text-[10px] uppercase"
                      >Moisture</span
                    >
                    <span class="font-bold text-[#16211A] text-sm"
                      >{commodity.moisture}</span
                    >
                  </div>
                  <div>
                    <span class="text-[#5A6847] block text-[10px] uppercase"
                      >Purity</span
                    >
                    <span class="font-bold text-[#16211A] text-sm"
                      >{commodity.purity}</span
                    >
                  </div>
                  <div>
                    <span class="text-[#5A6847] block text-[10px] uppercase"
                      >MOQ</span
                    >
                    <span class="font-bold text-[#16211A] text-sm"
                      >{commodity.moq}</span
                    >
                  </div>
                </div>

                <div class="flex items-center justify-between pt-2">
                  <span class="text-xs text-[#5A6847] font-mono">
                    MOQ: {commodity.moq}
                  </span>
                  <a
                    href="/products/{commodity.slug}"
                    class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#3B5B46] hover:bg-[#1E3B2A] text-white font-semibold font-display text-sm transition-colors cursor-pointer"
                  >
                    <span>View specification</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          {/if}
        {/each}

        <!-- Bento Bottom Feature Tile: Custom Specs & Private Label (6 Cols on lg) -->
        <div
          class="lg:col-span-12 bg-[#1E3B2A] text-[#F8F9F2] border border-[#2C4535] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md"
        >
          <div class="space-y-4">
            <div>
              <span
                class="text-xs font-mono uppercase tracking-widest text-[#E3C677] font-semibold"
              >
                CUSTOM INDUSTRIAL REQUIREMENTS
              </span>
              <h3 class="text-2xl font-bold font-display text-white mt-1">
                Custom Cuts, Moisture Targets & OEM Packaging
              </h3>
            </div>
            <p class="text-sm text-[#C3D0B8] leading-relaxed font-body">
              Looking for tailored granulation, customized mesh size, specific
              moisture thresholds, or private-label packaging? We collaborate
              closely with manufacturing clients to meet exact production line
              specifications.
            </p>
          </div>

          <div class="pt-10 flex flex-wrap items-center gap-4">
            <a
              href="/#contact"
              class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#E3C677] hover:bg-white text-[#16211A] font-semibold font-display text-sm transition-all shadow-sm cursor-pointer"
            >
              <span>Request Custom Quotation</span>
              <ArrowRight size={16} />
            </a>
            <span class="text-xs text-[#9EB394] font-display">
              Response within 24 business hours
            </span>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>
