<script>
  import {
    MapPin,
    FileText,
    Tag,
    ClipboardCheck,
    Camera,
    FileSpreadsheet,
    CheckCircle2,
    ArrowUpRight,
  } from "@lucide/svelte";

  let activeIndex = $state(0);

  const traceabilitySteps = [
    {
      icon: MapPin,
      title: "Origin & Sourcing Area",
      description:
        "Tracing each commodity back to its specific region and local farming community.",
      metrics: [
        { label: "Sourcing Regions", value: "Sumatra, Java, Sulawesi" },
        { label: "Farm Plot ID", value: "Geo-referenced Coordinates" },
        { label: "Elevation & Soil", value: "800m - 1,400m ASL Volcanic" },
        { label: "Farmer Co-op", value: "Direct Verified Registry" },
      ],
      previewNote:
        "Every lot includes regional origin mapping and cooperative registry verification prior to consolidation.",
    },
    {
      icon: FileText,
      title: "Harvest & Collection Records",
      description:
        "Documenting collection dates, volumes, and initial handling protocols.",
      metrics: [
        { label: "Harvest Window", value: "Logged by Week & Batch" },
        { label: "Intake Weight", value: "Digital Scale Verified (kg/MT)" },
        { label: "Post-Harvest Drying", value: "Sun-Dried / Mechanical Log" },
        { label: "Collector Sign-off", value: "Field Officer Certified" },
      ],
      previewNote:
        "Collection sheets track the exact time between harvest, drying, and warehouse intake to prevent fermentation or mold.",
    },
    {
      icon: Tag,
      title: "Batch & Lot Identification",
      description:
        "Assigning unique identifiers to ensure seamless tracking through processing.",
      metrics: [
        { label: "Lot Format", value: "ORG-YYYY-REG-BATCH#" },
        { label: "Bag Tagging", value: "QR / Stenciled Jute & PP Bags" },
        { label: "Processing Line", value: "Dedicated Batch Segregation" },
        { label: "Warehouse Zone", value: "Pallet-Level Tracking" },
      ],
      previewNote:
        "Zero cross-contamination: each lot retains its unique ID from raw material intake to container stuffing.",
    },
    {
      icon: ClipboardCheck,
      title: "Quality Inspection Reports",
      description:
        "Rigorous evaluations covering moisture content, grade, and purity standards.",
      metrics: [
        { label: "Moisture Content", value: "Tested (< 11% - 13% Std)" },
        { label: "Foreign Matter", value: "< 0.5% Strict Sieve Check" },
        { label: "Defect Count", value: "Graded per ISO / ASTA Spec" },
        { label: "Third-Party Lab", value: "SGS / Sucofindo Available" },
      ],
      previewNote:
        "Buyers receive a complete Certificate of Analysis (COA) detailing physical grading and moisture readings before shipment.",
    },
    {
      icon: Camera,
      title: "Product Photos & Sample Records",
      description:
        "Visual documentation and physical sample logs maintained for every shipment.",
      isPhotoStep: true,
      photos: [
        {
          label: "Raw & Graded Commodity",
          caption: "High-res macro shot with color & size reference scale",
        },
        {
          label: "Moisture Meter Reading",
          caption: "Timestamped digital tester photo from the actual lot",
        },
        {
          label: "Bagging & Lot Markings",
          caption: "Export-ready packaging & stencil verification",
        },
        {
          label: "Sealed Retention Sample",
          caption: "300g–500g reference sample archived for 12 months",
        },
      ],
      previewNote:
        "Pre-shipment samples are couried via DHL/FedEx alongside a digital photo dossier of the exact lot being loaded.",
    },
    {
      icon: FileSpreadsheet,
      title: "Export & Shipment Documents",
      description:
        "Complete compliance paperwork, bills of lading, and certificates of origin.",
      metrics: [
        { label: "Shipping Core", value: "Bill of Lading (B/L), Packing List" },
        { label: "Biosecurity", value: "Phytosanitary & Fumigation Cert" },
        { label: "Customs & Trade", value: "Certificate of Origin (COO)" },
        { label: "Quality Certs", value: "COA, Weight & Quality Note" },
      ],
      previewNote:
        "Digital draft documents are shared for buyer approval prior to final issuance to guarantee smooth customs clearance.",
    },
  ];
</script>

<section
  id="our-approach"
  class="bg-[#FEFBF3] py-20 md:py-24 border-t border-[#3B5B46]/10"
>
  <div class="mx-auto px-6 md:px-16 max-w-7xl w-full">
    <div class="flex flex-col gap-12 lg:gap-16 items-center">
      <div class="space-y-4 max-w-3xl text-center">
        <span
          class="text-5xl font-bold uppercase tracking-widest text-[#3B5B46]"
        >
          Our Approach
        </span>
        <h2
          class="text-3xl md:text-4xl font-semibold text-[#1E3B2A] leading-tight tracking-tight"
        >
          Complete Transparency from Origin to Port
        </h2>
        <p class="md:text-lg text-[#365449] leading-relaxed">
          We believe true quality is built on accountability. Select any stage
          below to inspect the documentation, photos, and verification records
          provided with every lot.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-start">
        {#if traceabilitySteps[activeIndex]}
          {@const current = traceabilitySteps[activeIndex]}
          <div
            class="lg:col-span-5 text-[#1E3B2A] p-8 lg:p-10 rounded-3xl border border-[#3B5B46] flex flex-col justify-between min-h-[460px] lg:sticky lg:top-24"
          >
            <div class="space-y-6">
              <div
                class="flex items-center justify-between border-b border-[#F8F9F2]/10 pb-4"
              >
                <span class="text-xs font-display font-semibold text-[#1E3B2A]">
                  #{activeIndex + 1} VERIFICATION
                </span>
              </div>

              <div class="space-y-2">
                <h3 class="text-2xl font-semibold text-[#1E3B2A]">
                  {current.title}
                </h3>
                <p class="text-sm text-[#1E3B2A]/80 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {#if current.isPhotoStep}
                <div class="grid grid-cols-2 gap-3 pt-2">
                  {#each current.photos as photo}
                    <div
                      class="group/photo relative rounded-2xl border border-[#1E3B2A] p-3.5 flex flex-col justify-between aspect-[4/3] overflow-hidden transition-colors"
                    >
                      <div
                        class="flex items-center justify-between text-[#1E3B2A]"
                      >
                        <Camera size={18} />
                      </div>
                      <div class="space-y-1">
                        <p class="text-xs font-light text-[#1E3B2A]">
                          {photo.label}
                        </p>
                        <p class="text-sm text-[#1E3B2A] leading-tight">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                  {/each}
                </div>
              {:else}
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {#each current.metrics as metric}
                    <div
                      class="p-4 rounded-2xl border-[#162B1F] border space-y-6"
                    >
                      <span
                        class="text-xs uppercase text-[#162B1F]/80 font-light"
                      >
                        {metric.label}
                      </span>
                      <p class="text-sm font-medium text-[#162B1F]">
                        {metric.value}
                      </p>
                    </div>
                  {/each}
                </div>
              {/if}
            </div>

            <div
              class="p-3 mt-10 rounded-xl bg-[#4f635c] flex items-center gap-3 text-sm justify-center"
            >
              <p class="leading-relaxed italic text-[#F8F9F2]">
                {current.previewNote}
              </p>
            </div>
          </div>
        {/if}

        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {#each traceabilitySteps as step, i}
            {@const isSelected = activeIndex === i}
            {@const darkZigzag = i % 4 === 1 || i % 4 === 2}

            <button
              type="button"
              onclick={() => (activeIndex = i)}
              class="w-full p-6 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between group cursor-pointer {isSelected
                ? 'bg-[#1E3B2A]  shadow-md'
                : darkZigzag
                  ? 'bg-[#ede8d3] border-[#3B5B46]'
                  : 'bg-[#F8F9F2] border-[#3B5B46]'}"
            >
              <div class="space-y-3 w-full">
                <div class="flex items-center justify-between">
                  <div
                    class="w-11 h-11 rounded-2xl flex items-center justify-center transition-colors duration-300 {isSelected
                      ? 'bg-[#FEFBF3] text-[#16211A]'
                      : 'bg-[#1E3B2A] text-[#F8F9F2] ]'}"
                  >
                    <step.icon size={20} />
                  </div>
                  <span
                    class="text-xs font-display font-semibold {isSelected
                      ? 'text-[#F8F9F2]'
                      : 'text-[#3B5B46]/70'}"
                  >
                    #{i + 1} STEP
                  </span>
                </div>

                <h3
                  class="text-lg font-semibold transition-colors {isSelected
                    ? 'text-[#FEFBF3]'
                    : 'text-[#1E3B2A]'}"
                >
                  {step.title}
                </h3>

                <p
                  class="text-xs leading-relaxed line-clamp-2 {isSelected
                    ? 'text-[#F8F9F2]/80'
                    : 'text-[#365449]'}"
                >
                  {step.description}
                </p>
              </div>
            </button>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
