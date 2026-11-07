<script lang="ts">
  import type { PageData } from "./$types";
  import {
    MapPin,
    Calendar,
    Tag,
    FileCheck2,
    Camera,
    Ship,
    ArrowLeft,
    CheckCircle2,
    ShieldCheck,
    Send,
    Download,
    Award,
    Clock,
    Scale,
    Building2,
    Layers,
    FileText,
    ExternalLink,
    Box,
    Sparkles,
    Check,
  } from "lucide-svelte";
  import QuoteForm from "#lib/components/QuoteForm.svelte";

  let { data }: { data: PageData } = $props();

  let commodity = $derived(data.commodity);
  let spec = $derived(data.spec);
  let otherCommodities = $derived(data.otherCommodities);

  // Active section tracking for smooth scroll
  let activeTab = $state("origin");

  const sections = [
    { id: "origin", label: "Origin & Sourcing", icon: MapPin },
    { id: "harvest", label: "Harvest & Collection", icon: Calendar },
    { id: "batch", label: "Batch & Lot ID", icon: Tag },
    { id: "quality", label: "Quality & Inspection", icon: FileCheck2 },
    { id: "photos", label: "Photos & Samples", icon: Camera },
    { id: "export", label: "Export & Documents", icon: Ship },
  ];

  function scrollToSection(id: string) {
    activeTab = id;
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  // Fallback image helper
  const galleryFallbacks: Record<string, string> = {
    "virgin-coconut-oil": "/gallery_commodities/1.webp",
    "desiccated-coconut": "/gallery_commodities/2.webp",
    "coconut-milk-powder": "/gallery_commodities/3.webp",
    "coconut-sugar": "/gallery_commodities/1.webp",
    "coconut-shell-charcoal": "/gallery_commodities/4.webp",
    cocopeat: "/gallery_commodities/2.webp",
    copra: "/gallery_commodities/3.webp",
  };

  let heroImage = $derived(
    galleryFallbacks[commodity.slug] ||
      commodity.image ||
      "/gallery_commodities/1.webp",
  );
</script>

<svelte:head>
  <title>{commodity.name} Specification & Traceability Dossier — HerblocX</title
  >
  <meta
    name="description"
    content="Detailed lot specifications, origin sourcing area, harvest records, batch identification, lab inspection report, and export documents for {commodity.name} ({commodity.latinName})."
  />
</svelte:head>

<div class="bg-[#FEFBF3] min-h-screen text-[#16211A] pt-6 md:pt-10 pb-24">
  <div
    class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 space-y-8 md:space-y-12"
  >
    <!-- Top Breadcrumbs & Back Link -->
    <div
      class="flex items-center justify-between gap-4 font-display text-xs sm:text-sm"
    >
      <nav class="flex items-center gap-2 text-[#5A6847]">
        <a href="/" class="hover:text-[#1E3B2A] transition-colors">Home</a>
        <span>/</span>
        <a href="/products" class="hover:text-[#1E3B2A] transition-colors"
          >Commodities</a
        >
        <span>/</span>
        <span class="text-[#1E3B2A] font-semibold">{commodity.name}</span>
      </nav>

      <a
        href="/products"
        class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E3B2A] hover:text-[#B8892B] transition-colors"
      >
        <ArrowLeft size={14} />
        <span>Back to Catalogue</span>
      </a>
    </div>

    <!-- Product Overview Hero Section -->
    <section
      class="bg-[#172E21] text-[#F8F9F2] rounded-3xl overflow-hidden border border-[#2C4535] shadow-xl"
    >
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-8 md:p-12 items-center"
      >
        <!-- Hero Details Column (7 cols) -->
        <div class="lg:col-span-7 space-y-6">
          <div class="flex flex-wrap items-center gap-2">
            <span
              class="px-3 py-1 rounded-full bg-[#E3C677] text-[#16211A] text-xs font-bold font-display uppercase tracking-wider"
            >
              {commodity.gradeBadge || "GRADE A EXPORT"}
            </span>
            <span
              class="px-3 py-1 rounded-full bg-white/10 text-[#C3D0B8] text-xs font-mono"
            >
              {commodity.category}
            </span>
            <span
              class="px-3 py-1 rounded-full bg-[#243F2F] text-[#C3D0B8] text-xs font-mono flex items-center gap-1"
            >
              <MapPin size={12} class="text-[#E3C677]" />
              {commodity.origin}
            </span>
          </div>

          <div class="space-y-2">
            <h1
              class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white font-display tracking-tight leading-tight"
            >
              {commodity.name}
            </h1>
            <p
              class="text-lg sm:text-xl text-[#F8F9F2] italic font-body font-medium"
            >
              {commodity.latinName}
            </p>
          </div>

          <p
            class="text-sm sm:text-base text-[#C3D0B8] leading-relaxed font-body"
          >
            {commodity.summary}
          </p>

          <!-- Core Export Specs Pills -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-display">
            <div
              class="bg-[#243F2F]/90 border border-[#3A5643] rounded-2xl p-3"
            >
              <span
                class="text-[10px] uppercase tracking-wider text-[#9EB394] block"
                >Moisture Spec</span
              >
              <span class="text-base sm:text-lg font-bold text-[#E3C677]"
                >{commodity.moisture}</span
              >
            </div>
            <div
              class="bg-[#243F2F]/90 border border-[#3A5643] rounded-2xl p-3"
            >
              <span
                class="text-[10px] uppercase tracking-wider text-[#9EB394] block"
                >Purity Standard</span
              >
              <span class="text-base sm:text-lg font-bold text-white"
                >{commodity.purity}</span
              >
            </div>
            <div
              class="bg-[#243F2F]/90 border border-[#3A5643] rounded-2xl p-3"
            >
              <span
                class="text-[10px] uppercase tracking-wider text-[#9EB394] block"
                >Minimum Order (MOQ)</span
              >
              <span class="text-base sm:text-lg font-bold text-white"
                >{commodity.moq}</span
              >
            </div>
            <div
              class="bg-[#243F2F]/90 border border-[#3A5643] rounded-2xl p-3"
            >
              <span
                class="text-[10px] uppercase tracking-wider text-[#9EB394] block"
                >Lead Time</span
              >
              <span class="text-base sm:text-lg font-bold text-white"
                >{commodity.leadTime}</span
              >
            </div>
          </div>

          <!-- CTAs -->
          <div
            class="flex flex-wrap items-center gap-4 pt-4 border-t border-[#2C4535]"
          >
            <a
              href="#inquiry"
              class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#E3C677] hover:bg-white text-[#16211A] font-semibold font-display text-sm sm:text-base transition-all shadow-md group cursor-pointer"
            >
              <Send size={16} />
              <span>Request Lot Quotation</span>
            </a>

            <button
              type="button"
              onclick={() => scrollToSection("quality")}
              class="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#F8F9F2] font-semibold font-display text-sm transition-colors border border-white/15 cursor-pointer"
            >
              <FileCheck2 size={16} class="text-[#E3C677]" />
              <span>Inspect Lab COA</span>
            </button>
          </div>
        </div>

        <!-- Hero Image Showcase Column (5 cols) -->
        <div class="lg:col-span-5 flex flex-col items-center">
          <div
            class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#3A5643] shadow-lg bg-[#243F2F]"
          >
            <img
              src={heroImage}
              alt="{commodity.name} - Official HerblocX Lot"
              class="w-full h-full object-cover"
              loading="eager"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#172E21]/80 via-transparent to-transparent"
            ></div>

            <div
              class="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#F8F9F2]"
            >
              <span class="bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-xs">
                Lot #{spec?.batchIdentification.sampleLotNumber ||
                  `HBCX-${commodity.slug.toUpperCase()}-01`}
              </span>
              <span
                class="bg-[#1E3B2A]/90 px-2.5 py-1 rounded-md border border-[#3A5643]"
              >
                {spec?.originArea.region || commodity.origin}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sticky Navigation Tab Bar for the 6 Specification Sections -->
    <div
      class="sticky top-2 z-40 bg-[#FEFBF3]/95 backdrop-blur-md py-3 border-y border-[#1E3B2A]/15 shadow-xs"
    >
      <div
        class="flex items-center gap-2 overflow-x-auto scrollbar-none font-display"
      >
        {#each sections as sec}
          {@const Icon = sec.icon}
          {@const isActive = activeTab === sec.id}
          <button
            type="button"
            onclick={() => scrollToSection(sec.id)}
            class="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer {isActive
              ? 'bg-[#1E3B2A] text-[#F8F9F2] shadow-sm'
              : 'bg-[#E7EBDD] text-[#365449] hover:bg-[#D6DAC8] hover:text-[#16211A]'}"
          >
            <Icon
              size={15}
              class={isActive ? "text-[#E3C677]" : "text-[#5A6847]"}
            />
            <span>{sec.label}</span>
          </button>
        {/each}
      </div>
    </div>

    <!-- The 6 Detailed Specification & Traceability Sections -->
    <div class="space-y-16 md:space-y-20 pt-4">
      <!-- SECTION 1: Origin and Sourcing Area -->
      <section
        id="origin"
        class="bg-white border border-[#CCD8C4] rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm space-y-8"
      >
        <div
          class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#CCD8C4]"
        >
          <div class="space-y-1">
            <div
              class="inline-flex items-center gap-1.5 text-xs font-semibold font-display uppercase tracking-widest text-[#B8892B]"
            >
              <MapPin size={15} />
              <span>#1 Specification & Traceability Stage</span>
            </div>
            <h2
              class="text-2xl sm:text-3xl font-bold font-display text-[#1E3B2A]"
            >
              Origin and Sourcing Area
            </h2>
          </div>
          <span
            class="text-xs font-mono bg-[#E7EBDD] text-[#1E3B2A] px-3 py-1.5 rounded-full font-semibold"
          >
            Coordinates: {spec?.originArea.coordinates
              ? `${spec.originArea.coordinates[0]}° E, ${spec.originArea.coordinates[1]}° N`
              : "Archipelago Certified"}
          </span>
        </div>

        <!-- Geography & Cooperative Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-display"
        >
          <div class="bg-[#F8F9F2] border border-[#CCD8C4] rounded-2xl p-4">
            <span
              class="text-xs uppercase tracking-wider text-[#5A6847] font-semibold block"
              >Primary Region</span
            >
            <p class="text-base font-bold text-[#1E3B2A] mt-1">
              {spec?.originArea.region ||
                commodity.originDetail ||
                commodity.origin}
            </p>
            <span class="text-xs text-[#5A6847] block mt-0.5"
              >Republic of Indonesia</span
            >
          </div>

          <div class="bg-[#F8F9F2] border border-[#CCD8C4] rounded-2xl p-4">
            <span
              class="text-xs uppercase tracking-wider text-[#5A6847] font-semibold block"
              >Elevation & Topography</span
            >
            <p class="text-base font-bold text-[#1E3B2A] mt-1">
              {spec?.originArea.elevation || "150m – 600m ASL"}
            </p>
            <span class="text-xs text-[#5A6847] block mt-0.5"
              >Optimal solar exposure</span
            >
          </div>

          <div class="bg-[#F8F9F2] border border-[#CCD8C4] rounded-2xl p-4">
            <span
              class="text-xs uppercase tracking-wider text-[#5A6847] font-semibold block"
              >Soil Profile</span
            >
            <p class="text-base font-bold text-[#1E3B2A] mt-1">
              {spec?.originArea.soilType || "Volcanic alluvial soil"}
            </p>
            <span class="text-xs text-[#5A6847] block mt-0.5"
              >Rich in natural minerals</span
            >
          </div>

          <div class="bg-[#F8F9F2] border border-[#CCD8C4] rounded-2xl p-4">
            <span
              class="text-xs uppercase tracking-wider text-[#5A6847] font-semibold block"
              >Farmer Network</span
            >
            <p class="text-base font-bold text-[#1E3B2A] mt-1">
              {spec?.originArea.cooperativeCount || 12} Cooperatives
            </p>
            <span class="text-xs text-[#5A6847] block mt-0.5"
              >{spec?.originArea.registeredFarmers || 450}+ Registered
              smallholders</span
            >
          </div>
        </div>

        <!-- Provenance Narrative & Sub-Regions -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-8 space-y-4 font-body">
            <h3 class="text-lg font-bold font-display text-[#1E3B2A]">
              Terroir & Sourcing Heritage
            </h3>
            <p class="text-[#365449] leading-relaxed text-sm sm:text-base">
              {spec?.originArea.provenanceStory ||
                `${commodity.name} is cultivated in the mineral-rich soils of ${commodity.origin}. Through long-term off-take agreements with village cooperatives, HerblocX manages harvesting standards at the farm level, ensuring continuous quality and ethical compensation for farming communities.`}
            </p>

            <div class="pt-2">
              <span
                class="text-xs font-semibold font-display uppercase tracking-wider text-[#5A6847] block mb-2"
              >
                Certified Farming & Environmental Practices
              </span>
              <div class="flex flex-wrap gap-2">
                {#if spec?.originArea.certifications}
                  {#each spec.originArea.certifications as cert}
                    <span
                      class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E7EBDD] text-[#1E3B2A] text-xs font-semibold font-display"
                    >
                      <CheckCircle2 size={13} class="text-[#3B5B46]" />
                      {cert}
                    </span>
                  {/each}
                {:else}
                  <span
                    class="px-3 py-1 rounded-full bg-[#E7EBDD] text-[#1E3B2A] text-xs font-semibold font-display"
                  >
                    Chemical-Free Sourcing
                  </span>
                  <span
                    class="px-3 py-1 rounded-full bg-[#E7EBDD] text-[#1E3B2A] text-xs font-semibold font-display"
                  >
                    Halal Certified
                  </span>
                {/if}
              </div>
            </div>
          </div>

          <div
            class="lg:col-span-4 bg-[#F8F9F2] border border-[#CCD8C4] rounded-2xl p-5 space-y-3 font-display"
          >
            <h4
              class="text-sm font-bold text-[#1E3B2A] uppercase tracking-wider"
            >
              Harvesting Sub-Districts
            </h4>
            <ul class="space-y-2 text-xs">
              {#if spec?.originArea.subRegions}
                {#each spec.originArea.subRegions as sub}
                  <li class="flex items-center gap-2 text-[#365449]">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#3B5B46]"></span>
                    <span>{sub}</span>
                  </li>
                {/each}
              {:else}
                <li class="flex items-center gap-2 text-[#365449]">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#3B5B46]"></span>
                  <span>{commodity.originDetail || commodity.origin}</span>
                </li>
              {/if}
            </ul>
            <div
              class="pt-2 border-t border-[#CCD8C4] text-[11px] text-[#5A6847]"
            >
              GPS polygon coordinates recorded for every intake cooperative.
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: Harvest and Collection Records -->
      <section
        id="harvest"
        class="bg-white border border-[#CCD8C4] rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm space-y-8"
      >
        <div
          class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#CCD8C4]"
        >
          <div class="space-y-1">
            <div
              class="inline-flex items-center gap-1.5 text-xs font-semibold font-display uppercase tracking-widest text-[#B8892B]"
            >
              <Calendar size={15} />
              <span>#2 Specification & Traceability Stage</span>
            </div>
            <h2
              class="text-2xl sm:text-3xl font-bold font-display text-[#1E3B2A]"
            >
              Harvest and Collection Records
            </h2>
          </div>
          <span
            class="text-xs font-mono bg-[#E7EBDD] text-[#1E3B2A] px-3 py-1.5 rounded-full font-semibold"
          >
            {spec?.harvestRecords.harvestSeason || commodity.availability}
          </span>
        </div>

        <!-- Harvest Parameters Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-display"
        >
          <div
            class="bg-[#F8F9F2] border border-[#CCD8C4] rounded-2xl p-4 space-y-1"
          >
            <span
              class="text-xs uppercase tracking-wider text-[#5A6847] font-semibold"
              >Peak Season</span
            >
            <p class="text-base font-bold text-[#1E3B2A]">
              {spec?.harvestRecords.peakMonths || "May through October"}
            </p>
            <span class="text-xs text-[#5A6847] block"
              >Highest volume & active drying window</span
            >
          </div>

          <div
            class="bg-[#F8F9F2] border border-[#CCD8C4] rounded-2xl p-4 space-y-1"
          >
            <span
              class="text-xs uppercase tracking-wider text-[#5A6847] font-semibold"
              >Freshness / Processing Speed</span
            >
            <p class="text-base font-bold text-[#1E3B2A]">
              {spec?.harvestRecords.processingWindow ||
                "Processed within 24 hours of harvest"}
            </p>
            <span class="text-xs text-[#5A6847] block"
              >Prevents fermentation & microbial spike</span
            >
          </div>

          <div
            class="bg-[#F8F9F2] border border-[#CCD8C4] rounded-2xl p-4 space-y-1"
          >
            <span
              class="text-xs uppercase tracking-wider text-[#5A6847] font-semibold"
              >Drying / Curing Protocol</span
            >
            <p class="text-base font-bold text-[#1E3B2A]">
              {spec?.harvestRecords.dryingMethod ||
                "Controlled temperature moisture separation"}
            </p>
            <span class="text-xs text-[#5A6847] block"
              >Ensures target moisture compliance</span
            >
          </div>
        </div>

        <!-- Intake Protocol & Log Table -->
        <div class="space-y-4">
          <h3 class="text-lg font-bold font-display text-[#1E3B2A]">
            Cooperative Intake Verification Log
          </h3>
          <p class="text-sm text-[#365449] font-body leading-relaxed">
            Every delivery at our regional consolidation hub is weighed on
            calibrated digital scales, checked for moisture and foreign matter,
            and certified by our field agronomist before batch aggregation.
          </p>

          <div class="overflow-x-auto rounded-2xl border border-[#CCD8C4]">
            <table class="w-full text-left font-display text-xs sm:text-sm">
              <thead
                class="bg-[#E7EBDD] text-[#1E3B2A] uppercase text-[11px] font-bold"
              >
                <tr>
                  <th class="py-3 px-4">Log ID</th>
                  <th class="py-3 px-4">Collection Date</th>
                  <th class="py-3 px-4">Origin Village / Hub</th>
                  <th class="py-3 px-4">Intake Volume</th>
                  <th class="py-3 px-4">Field Sign-off</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#CCD8C4] bg-white">
                {#if spec?.harvestRecords.recordsDossier}
                  {#each spec.harvestRecords.recordsDossier as log}
                    <tr class="hover:bg-[#F8F9F2] transition-colors">
                      <td
                        class="py-3 px-4 font-mono font-semibold text-[#1E3B2A]"
                        >{log.logId}</td
                      >
                      <td class="py-3 px-4 text-[#5A6847]">{log.date}</td>
                      <td class="py-3 px-4 font-medium text-[#1E3B2A]"
                        >{log.village}</td
                      >
                      <td class="py-3 px-4 font-mono text-[#1E3B2A]"
                        >{log.volume}</td
                      >
                      <td class="py-3 px-4">
                        <span
                          class="inline-flex items-center gap-1 text-xs font-semibold text-[#3B5B46]"
                        >
                          <CheckCircle2 size={13} />
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  {/each}
                {:else}
                  <tr>
                    <td class="py-3 px-4 font-mono">HRV-2026-01</td>
                    <td class="py-3 px-4">Recent harvest cycle</td>
                    <td class="py-3 px-4">{commodity.origin}</td>
                    <td class="py-3 px-4">Batch verified</td>
                    <td class="py-3 px-4 text-[#3B5B46] font-semibold"
                      >Agronomist Certified</td
                    >
                  </tr>
                {/if}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- SECTION 3: Batch / Lot Identification -->
      <section
        id="batch"
        class="bg-white border border-[#CCD8C4] rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm space-y-8"
      >
        <div
          class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#CCD8C4]"
        >
          <div class="space-y-1">
            <div
              class="inline-flex items-center gap-1.5 text-xs font-semibold font-display uppercase tracking-widest text-[#B8892B]"
            >
              <Tag size={15} />
              <span>#3 Specification & Traceability Stage</span>
            </div>
            <h2
              class="text-2xl sm:text-3xl font-bold font-display text-[#1E3B2A]"
            >
              Batch / Lot Identification
            </h2>
          </div>
          <span
            class="text-xs font-mono bg-[#1E3B2A] text-[#F8F9F2] px-3.5 py-1.5 rounded-full font-bold"
          >
            {spec?.batchIdentification.sampleLotNumber ||
              `HBCX-${commodity.slug.toUpperCase()}-2026`}
          </span>
        </div>

        <!-- Lot Number Structure Card -->
        <div
          class="bg-[#172E21] text-[#F8F9F2] rounded-2xl p-6 sm:p-8 space-y-4"
        >
          <div
            class="flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div>
              <span
                class="text-xs font-mono uppercase tracking-widest text-[#E3C677] font-semibold"
              >
                UNIQUE LOT CODING SYNTAX
              </span>
              <h3
                class="text-xl sm:text-2xl font-bold font-mono text-white mt-1"
              >
                {spec?.batchIdentification.lotFormat ||
                  "HBCX-[COMMODITY]-[YEAR]-[ORIGIN]-[BATCH]"}
              </h3>
            </div>
            <div
              class="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-xs font-mono text-[#C3D0B8]"
            >
              Zero Cross-Contamination Protocol
            </div>
          </div>

          <p class="text-sm text-[#C3D0B8] leading-relaxed font-body">
            Every container or parcel carries a serialized QR code and barcode
            linked to this lot ID. This code unlocks the entire origin history,
            moisture logs, lab certificate of analysis, and ocean container
            stuffing report.
          </p>

          <div
            class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-display text-xs"
          >
            <div class="bg-[#243F2F] p-3 rounded-xl border border-[#3A5643]">
              <span class="text-[#9EB394] block uppercase text-[10px]"
                >Tagging System</span
              >
              <p class="font-bold text-white mt-0.5">
                {spec?.batchIdentification.taggingType ||
                  "Weatherproof QR Barcode on each package"}
              </p>
            </div>
            <div class="bg-[#243F2F] p-3 rounded-xl border border-[#3A5643]">
              <span class="text-[#9EB394] block uppercase text-[10px]"
                >Tamper Protection</span
              >
              <p class="font-bold text-white mt-0.5">
                {spec?.batchIdentification.sealType ||
                  "Heavy-duty security lock seal"}
              </p>
            </div>
            <div class="bg-[#243F2F] p-3 rounded-xl border border-[#3A5643]">
              <span class="text-[#9EB394] block uppercase text-[10px]"
                >Warehouse Zone</span
              >
              <p class="font-bold text-white mt-0.5">
                {spec?.batchIdentification.warehouseZone ||
                  "Palletized climate-controlled storage"}
              </p>
            </div>
          </div>
        </div>

        <!-- End-to-End Chain of Custody -->
        <div class="space-y-4 font-display">
          <h3 class="text-lg font-bold text-[#1E3B2A]">
            Chain of Custody & Verification Milestones
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-5 gap-3">
            {#if spec?.batchIdentification.chainOfCustody}
              {#each spec.batchIdentification.chainOfCustody as step, i}
                <div
                  class="bg-[#F8F9F2] border border-[#CCD8C4] rounded-2xl p-4 flex flex-col justify-between space-y-3"
                >
                  <div class="flex items-center justify-between">
                    <span
                      class="w-6 h-6 rounded-full bg-[#1E3B2A] text-[#F8F9F2] text-xs font-bold flex items-center justify-center"
                    >
                      {i + 1}
                    </span>
                    <span class="text-[10px] font-mono text-[#5A6847]"
                      >STAGE</span
                    >
                  </div>
                  <div>
                    <h4 class="text-xs font-bold text-[#1E3B2A]">
                      {step.stage}
                    </h4>
                    <p class="text-[11px] text-[#5A6847] mt-0.5">
                      {step.responsible}
                    </p>
                  </div>
                  <div
                    class="pt-2 border-t border-[#CCD8C4] text-[10px] text-[#3B5B46] font-semibold"
                  >
                    {step.verification}
                  </div>
                </div>
              {/each}
            {:else}
              <div
                class="col-span-5 p-4 bg-[#F8F9F2] rounded-2xl text-xs text-[#5A6847]"
              >
                Chain of custody verified from cooperative intake through
                container departure.
              </div>
            {/if}
          </div>
        </div>
      </section>

      <!-- SECTION 4: Quality Inspection Reports -->
      <section
        id="quality"
        class="bg-white border border-[#CCD8C4] rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm space-y-8"
      >
        <div
          class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#CCD8C4]"
        >
          <div class="space-y-1">
            <div
              class="inline-flex items-center gap-1.5 text-xs font-semibold font-display uppercase tracking-widest text-[#B8892B]"
            >
              <FileCheck2 size={15} />
              <span>#4 Specification & Traceability Stage</span>
            </div>
            <h2
              class="text-2xl sm:text-3xl font-bold font-display text-[#1E3B2A]"
            >
              Quality Inspection Reports
            </h2>
          </div>
          <div class="flex items-center gap-2">
            <span
              class="text-xs font-mono bg-[#E7EBDD] text-[#1E3B2A] px-3 py-1.5 rounded-full font-semibold"
            >
              {spec?.inspectionReports.accreditedLab ||
                "PT Sucofindo / SGS (ISO/IEC 17025)"}
            </span>
          </div>
        </div>

        <!-- Lab Overview Banner -->
        <div
          class="bg-[#F3F6EC] border border-[#CCD8C4] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-display"
        >
          <div>
            <span class="text-xs uppercase text-[#5A6847] font-semibold"
              >Certificate of Analysis (COA)</span
            >
            <p class="text-lg font-bold text-[#1E3B2A] mt-0.5">
              {spec?.inspectionReports.reportNumber ||
                `COA-HBCX-${commodity.slug.toUpperCase()}-2026`}
            </p>
            <span class="text-xs text-[#5A6847]"
              >Issued on: {spec?.inspectionReports.issueDate ||
                "October 2026"}</span
            >
          </div>

          <div class="flex items-center gap-2">
            <span
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E3B2A] text-white text-xs font-bold"
            >
              <CheckCircle2 size={14} class="text-[#E3C677]" />
              ISO 17025 ACCREDITED
            </span>
          </div>
        </div>

        <!-- Full Laboratory Parameter Results Table -->
        <div class="space-y-3 font-display">
          <h3 class="text-base font-bold text-[#1E3B2A]">
            Physicochemical & Quality Parameter Test Matrix
          </h3>

          <div class="overflow-x-auto rounded-2xl border border-[#CCD8C4]">
            <table class="w-full text-left text-xs sm:text-sm">
              <thead
                class="bg-[#E7EBDD] text-[#1E3B2A] uppercase text-[11px] font-bold"
              >
                <tr>
                  <th class="py-3 px-4">Parameter</th>
                  <th class="py-3 px-4">Test Method</th>
                  <th class="py-3 px-4">Required Spec</th>
                  <th class="py-3 px-4">Lot Result</th>
                  <th class="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#CCD8C4] bg-white">
                {#if spec?.inspectionReports.parameters}
                  {#each spec.inspectionReports.parameters as param}
                    <tr class="hover:bg-[#F8F9F2] transition-colors">
                      <td class="py-3.5 px-4 font-bold text-[#1E3B2A]"
                        >{param.parameter}</td
                      >
                      <td class="py-3.5 px-4 font-mono text-xs text-[#5A6847]"
                        >{param.testMethod}</td
                      >
                      <td class="py-3.5 px-4 font-mono text-[#5A6847]"
                        >{param.specification}</td
                      >
                      <td class="py-3.5 px-4 font-mono font-bold text-[#1E3B2A]"
                        >{param.result}</td
                      >
                      <td class="py-3.5 px-4">
                        <span
                          class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold {param.status ===
                          'EXCEEDS'
                            ? 'bg-[#E3C677] text-[#16211A]'
                            : 'bg-[#E7EBDD] text-[#1E3B2A]'}"
                        >
                          <Check size={12} />
                          {param.status}
                        </span>
                      </td>
                    </tr>
                  {/each}
                {:else if commodity.parameters}
                  {#each commodity.parameters as param}
                    <tr class="hover:bg-[#F8F9F2] transition-colors">
                      <td class="py-3.5 px-4 font-bold text-[#1E3B2A]"
                        >{param.name}</td
                      >
                      <td class="py-3.5 px-4 font-mono text-xs text-[#5A6847]"
                        >{param.method}</td
                      >
                      <td class="py-3.5 px-4 font-mono text-[#5A6847]"
                        >{param.gradeA}</td
                      >
                      <td class="py-3.5 px-4 font-mono font-bold text-[#1E3B2A]"
                        >{param.gradeA}</td
                      >
                      <td class="py-3.5 px-4">
                        <span
                          class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E7EBDD] text-[#1E3B2A]"
                        >
                          <Check size={12} />
                          PASS
                        </span>
                      </td>
                    </tr>
                  {/each}
                {:else}
                  <tr>
                    <td class="py-3.5 px-4 font-bold">Moisture Content</td>
                    <td class="py-3.5 px-4 font-mono">AOAC Standard</td>
                    <td class="py-3.5 px-4 font-mono">{commodity.moisture}</td>
                    <td class="py-3.5 px-4 font-mono font-bold"
                      >{commodity.moisture}</td
                    >
                    <td class="py-3.5 px-4"
                      ><span
                        class="px-2 py-0.5 bg-[#E7EBDD] rounded-full text-xs font-bold"
                        >PASS</span
                      ></td
                    >
                  </tr>
                {/if}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Sensory & Contaminants Notes -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-display text-xs">
          <div
            class="bg-[#F8F9F2] border border-[#CCD8C4] rounded-2xl p-5 space-y-2"
          >
            <span
              class="font-bold uppercase tracking-wider text-[#1E3B2A] block"
              >Sensory Panel Evaluation</span
            >
            <p class="text-[#365449] font-body text-sm leading-relaxed">
              {spec?.inspectionReports.sensoryNotes ||
                "Passed all visual, aroma, and mouthfeel evaluations without abnormal off-flavors, rancidity, or foreign aroma."}
            </p>
          </div>

          <div
            class="bg-[#F8F9F2] border border-[#CCD8C4] rounded-2xl p-5 space-y-2"
          >
            <span
              class="font-bold uppercase tracking-wider text-[#1E3B2A] block"
              >Microbiology & Heavy Metals</span
            >
            <p class="text-[#365449] font-body text-sm leading-relaxed">
              {spec?.inspectionReports.microbiologyResult ||
                "Salmonella: Negative/25g; E. coli: Negative; Heavy metals well below CODEX international food standards."}
            </p>
          </div>
        </div>
      </section>

      <!-- SECTION 5: Product Photos and Sample Records -->
      <section
        id="photos"
        class="bg-white border border-[#CCD8C4] rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm space-y-8"
      >
        <div
          class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#CCD8C4]"
        >
          <div class="space-y-1">
            <div
              class="inline-flex items-center gap-1.5 text-xs font-semibold font-display uppercase tracking-widest text-[#B8892B]"
            >
              <Camera size={15} />
              <span>#5 Specification & Traceability Stage</span>
            </div>
            <h2
              class="text-2xl sm:text-3xl font-bold font-display text-[#1E3B2A]"
            >
              Product Photos and Sample Records
            </h2>
          </div>
          <span
            class="text-xs font-mono bg-[#E7EBDD] text-[#1E3B2A] px-3 py-1.5 rounded-full font-semibold"
          >
            {spec?.photosAndSamples.sampleRetentionPeriod ||
              "12 Months Sample Archive"}
          </span>
        </div>

        <!-- Visual Inspection Dossier Photos -->
        <div class="space-y-3">
          <h3 class="text-base font-bold font-display text-[#1E3B2A]">
            Inspection Checkpoint Visual Dossier
          </h3>
          <p class="text-sm text-[#365449] font-body leading-relaxed">
            High-resolution photographic documentation captured at key
            consolidation and packaging stages for every departing container.
          </p>

          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2"
          >
            {#if spec?.photosAndSamples.inspectionPhotos}
              {#each spec.photosAndSamples.inspectionPhotos as photo}
                <div
                  class="group/p border border-[#CCD8C4] rounded-2xl overflow-hidden bg-[#F8F9F2] flex flex-col justify-between shadow-xs hover:border-[#1E3B2A] transition-colors"
                >
                  <div
                    class="relative h-44 w-full overflow-hidden bg-[#E7EBDD]"
                  >
                    <img
                      src={photo.image}
                      alt={photo.title}
                      class="w-full h-full object-cover transition-transform duration-500 group-hover/p:scale-105"
                      loading="lazy"
                    />
                    <span
                      class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/60 text-white text-[10px] font-mono backdrop-blur-xs"
                    >
                      {photo.tag}
                    </span>
                  </div>
                  <div class="p-3.5 space-y-1 font-display">
                    <h4 class="text-xs font-bold text-[#1E3B2A] line-clamp-1">
                      {photo.title}
                    </h4>
                    <p
                      class="text-[11px] text-[#5A6847] leading-tight line-clamp-2"
                    >
                      {photo.description}
                    </p>
                  </div>
                </div>
              {/each}
            {:else}
              <div
                class="col-span-4 p-6 bg-[#F8F9F2] rounded-2xl text-center text-xs text-[#5A6847]"
              >
                Visual records archived at factory dispatch station.
              </div>
            {/if}
          </div>
        </div>

        <!-- Physical Sample Policy Banner -->
        <div
          class="bg-[#1E3B2A] text-[#F8F9F2] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div class="space-y-2 max-w-xl font-display">
            <span
              class="text-xs font-mono uppercase tracking-widest text-[#E3C677] font-semibold"
            >
              PRE-SHIPMENT PHYSICAL SAMPLE DISPATCH
            </span>
            <h3 class="text-xl font-bold text-white">
              Request Physical Lab Counter-Sample
            </h3>
            <p
              class="text-xs sm:text-sm text-[#C3D0B8] font-body leading-relaxed"
            >
              We archive 500g – 1,000g sealed counter-samples for 12 months
              under climate control. We courier pre-shipment evaluation samples
              directly to your quality lab via DHL / FedEx with tamper-evident
              seals.
            </p>
          </div>

          <a
            href="#inquiry"
            class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#E3C677] text-[#16211A] text-sm font-bold font-display hover:bg-white transition-all whitespace-nowrap cursor-pointer shadow-md"
          >
            <span>Request Physical Sample</span>
          </a>
        </div>
      </section>

      <!-- SECTION 6: Export and Shipment Documents -->
      <section
        id="export"
        class="bg-white border border-[#CCD8C4] rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm space-y-8"
      >
        <div
          class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#CCD8C4]"
        >
          <div class="space-y-1">
            <div
              class="inline-flex items-center gap-1.5 text-xs font-semibold font-display uppercase tracking-widest text-[#B8892B]"
            >
              <Ship size={15} />
              <span>#6 Specification & Traceability Stage</span>
            </div>
            <h2
              class="text-2xl sm:text-3xl font-bold font-display text-[#1E3B2A]"
            >
              Export and Shipment Documents
            </h2>
          </div>
          <span
            class="text-xs font-mono bg-[#E7EBDD] text-[#1E3B2A] px-3 py-1.5 rounded-full font-semibold"
          >
            {commodity.packing}
          </span>
        </div>

        <!-- Port of Loading & Container Specs -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-display"
        >
          <div
            class="bg-[#F8F9F2] border border-[#CCD8C4] rounded-2xl p-4 space-y-1"
          >
            <span
              class="text-xs uppercase tracking-wider text-[#5A6847] font-semibold"
              >Primary Loading Ports</span
            >
            <p class="text-base font-bold text-[#1E3B2A]">
              {spec?.exportDocuments.loadingPorts
                ? spec.exportDocuments.loadingPorts.join(" / ")
                : "Port of Tanjung Priok / Bitung"}
            </p>
            <span class="text-xs text-[#5A6847] block"
              >Direct ocean carrier berthing</span
            >
          </div>

          <div
            class="bg-[#F8F9F2] border border-[#CCD8C4] rounded-2xl p-4 space-y-1"
          >
            <span
              class="text-xs uppercase tracking-wider text-[#5A6847] font-semibold"
              >20ft FCL Capacity</span
            >
            <p class="text-base font-bold text-[#1E3B2A]">
              {spec?.exportDocuments.containerCapacity.container20ft ||
                "Standard FCL Available"}
            </p>
            <span class="text-xs text-[#5A6847] block"
              >Palletized with desiccants</span
            >
          </div>

          <div
            class="bg-[#F8F9F2] border border-[#CCD8C4] rounded-2xl p-4 space-y-1"
          >
            <span
              class="text-xs uppercase tracking-wider text-[#5A6847] font-semibold"
              >Incoterms Available</span
            >
            <p class="text-base font-bold text-[#1E3B2A]">FOB, CIF, CFR</p>
            <span class="text-xs text-[#5A6847] block"
              >Incoterms 2020 Compliant</span
            >
          </div>
        </div>

        <!-- Full Document Checklist Cards -->
        <div class="space-y-3 font-display">
          <h3 class="text-base font-bold text-[#1E3B2A]">
            Mandatory Export Document Dossier Provided per Shipment
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {#if spec?.exportDocuments.documentChecklist}
              {#each spec.exportDocuments.documentChecklist as doc}
                <div
                  class="bg-[#F8F9F2] border border-[#CCD8C4] rounded-2xl p-4 flex flex-col justify-between space-y-3"
                >
                  <div class="flex items-center justify-between">
                    <span
                      class="px-2 py-0.5 rounded-md bg-[#1E3B2A] text-white text-[10px] font-mono font-bold"
                    >
                      {doc.code}
                    </span>
                    {#if doc.requiredForCustoms}
                      <span
                        class="text-[10px] text-[#3B5B46] font-semibold flex items-center gap-1"
                      >
                        <Check size={12} /> Customs Required
                      </span>
                    {/if}
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-[#1E3B2A]">{doc.name}</h4>
                    <p
                      class="text-xs text-[#5A6847] font-body mt-1 leading-snug"
                    >
                      {doc.description}
                    </p>
                  </div>
                  <div
                    class="pt-2 border-t border-[#CCD8C4] text-[10px] text-[#5A6847]"
                  >
                    Issued by: <strong class="text-[#1E3B2A]"
                      >{doc.issuingAuthority}</strong
                    >
                  </div>
                </div>
              {/each}
            {:else}
              <div
                class="col-span-3 p-4 bg-[#F8F9F2] rounded-2xl text-xs text-[#5A6847]"
              >
                Ocean Bill of Lading, Certificate of Origin, Phytosanitary, and
                Lab COA provided.
              </div>
            {/if}
          </div>
        </div>
      </section>
    </div>

    <!-- Request a Quotation Form Section (Pre-populated with this commodity) -->
    <section
      id="inquiry"
      class="bg-[#1E3B2A] text-[#F8F9F2] rounded-3xl p-6 sm:p-8 md:p-12 border border-[#2C4535] shadow-xl space-y-8"
    >
      <div class="max-w-2xl space-y-2">
        <span
          class="text-xs font-mono uppercase tracking-widest text-[#E3C677] font-semibold"
        >
          DIRECT FACTORY QUOTATION
        </span>
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-semibold text-white font-display"
        >
          Request Quotation for {commodity.name}
        </h2>
        <p
          class="text-sm sm:text-base text-[#C3D0B8] font-body leading-relaxed"
        >
          Submit your desired volume, target delivery port, and grade
          requirements. Our export trading desk will provide complete FOB or CIF
          pricing alongside the official certificate of analysis.
        </p>
      </div>

      <div class="bg-[#F8F9F2] rounded-2xl p-6 sm:p-8 text-[#16211A]">
        <QuoteForm
          initialCommodity={commodity.slug}
          initialGrade={commodity.gradeBadge || "Grade A"}
        />
      </div>
    </section>

    <!-- Other Commodities Bento Strip -->
    <section class="space-y-6 pt-6">
      <div
        class="flex items-center justify-between pb-2 border-b border-[#1E3B2A]/15"
      >
        <div>
          <h2 class="text-xl sm:text-2xl font-bold font-display text-[#1E3B2A]">
            Explore Other Graded Commodities
          </h2>
          <p class="text-xs sm:text-sm text-[#5A6847] font-body">
            Direct from Indonesian origin with identical batch traceability.
          </p>
        </div>

        <a
          href="/products"
          class="text-xs sm:text-sm font-semibold font-display text-[#1E3B2A] hover:text-[#B8892B] transition-colors"
        >
          View Full Catalogue →
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        {#each otherCommodities as item}
          {@const otherImg =
            galleryFallbacks[item.slug] ||
            item.image ||
            "/gallery_commodities/1.webp"}
          <div
            class="bg-white border border-[#CCD8C4] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div class="relative h-44 w-full overflow-hidden bg-[#E7EBDD]">
              <img
                src={otherImg}
                alt={item.name}
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <span
                class="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#1E3B2A] text-white text-[10px] font-semibold font-display uppercase"
              >
                {item.category}
              </span>
            </div>

            <div class="p-5 flex-1 flex flex-col justify-between gap-3">
              <div>
                <h3 class="text-lg font-bold font-display text-[#16211A]">
                  {item.name}
                </h3>
                <p class="text-xs text-[#5A6847] italic font-body">
                  {item.latinName}
                </p>
                <p class="text-xs text-[#365449] line-clamp-2 mt-1 font-body">
                  {item.summary}
                </p>
              </div>

              <div
                class="pt-2 border-t border-[#CCD8C4] flex items-center justify-between"
              >
                <span class="text-xs text-[#5A6847] font-mono"
                  >MOQ: {item.moq}</span
                >
                <a
                  href="/products/{item.slug}"
                  class="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-[#3B5B46] hover:bg-[#1E3B2A] text-white font-semibold font-display text-xs transition-colors cursor-pointer"
                >
                  <span>View specification</span>
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </section>
  </div>
</div>
