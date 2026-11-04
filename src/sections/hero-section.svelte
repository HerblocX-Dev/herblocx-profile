<script lang="ts">
  import LotTag from "#lib/components/LotTag.svelte";
  import { getCommodity } from "#lib/data/products.ts";

  const turmeric = getCommodity("turmeric") || {
    slug: "turmeric",
    lotCode: "LOT HX-0241",
    name: "Dried turmeric",
    latinName: "Curcuma longa",
    kicker: "RHIZOME",
    category: "Rhizomes",
    origin: "Central Java, ID",
    originDetail: "Central Java",
    summary: "Sun-dried finger turmeric with certified moisture readings.",
    image: "/images/generated-1.png",
    gradeBadge: "GRADE A",
    moisture: "10.0% max",
    purity: "99.0% min",
    availability: "Mar – Nov",
    availabilityMonths: [3, 4, 5, 6, 7, 8, 9, 10, 11],
    peakMonths: [4, 5, 6],
    stockMonths: [3, 7, 8, 9, 10, 11],
    moq: "500 kg",
    leadTime: "21 days",
    packing: "25 kg PP bag",
    grades: [
      {
        name: "GRADE A",
        moisture: "10.0% max",
        purity: "99.0% min",
        moq: "500 kg",
        leadTime: "21 days",
        packing: "25 kg PP bag",
      },
    ],
  };
</script>

<section
  class="relative overflow-hidden min-h-[720px] lg:min-h-[772px] flex flex-col justify-between"
>
  <div class="absolute inset-0 z-0">
    <img
      src="/images/generated.png"
      alt="Herbal commodities harvest at origin"
      class="w-full h-full object-cover object-center brightness-95"
    />
  </div>

  <div
    class="relative z-10 bg-[#FBF3D5] w-full mx-auto px-6 md:px-32 pt-12 md:pt-20 pb-12 flex-1 flex flex-col justify-center"
  >
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      <div class="lg:col-span-7 space-y-6 md:space-y-10 max-w-2xl">
        <h1
          class=" text-4xl sm:text-5xl lg:text-[62px] font-semibold text-[#365449] leading-[1.08] tracking-tight"
        >
          Indonesian Agricultural Sourcing & Export Company
        </h1>

        <div class="flex flex-col gap-10">
          <span class="text-[#5b8274] text-2xl">
            <h2>From Indonesian Farms to Global Markets.</h2>
            <h2>
              We grow relationships. We manage quality. We deliver commodities.
            </h2>
          </span>

          <p class="md:text-xl text-[#365449] leading-relaxed italic">
            "HerblocX connects Indonesian farmers, local producers, and global
            buyers through a managed agricultural sourcing and export
            ecosystem.""
          </p>
        </div>
      </div>

      <!-- <div class="lg:col-span-5 flex justify-center lg:justify-end"> -->
      <!--   <div -->
      <!--     class="w-full max-w-[340px] transform lg:rotate-1 hover:rotate-0 transition-transform duration-300" -->
      <!--   > -->
      <!--     <LotTag -->
      <!--       commodity={turmeric} -->
      <!--       featured={true} -->
      <!--       showMoq={true} -->
      <!--       showAvailability={true} -->
      <!--     /> -->
      <!--   </div> -->
      <!-- </div> -->
    </div>
  </div>

  <div class="">
    <div
      class=" z-10 w-full bg-[#A7C1A8] backdrop-blur-sm py-2 px-6 md:px-16"
    ></div>
    <div
      class=" z-0 w-full bg-[#1E3B2A]/80 backdrop-blur-sm py-3.5 px-6 md:px-16"
    ></div>
  </div>
</section>
