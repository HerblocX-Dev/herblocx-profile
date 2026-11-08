<script lang="ts">
  import CtaButton from "#lib/components/commons/cta-button.svelte";
  import {
    CATALOGUE_2026_LINEUP,
    VALUE_PROPOSITION_HEADER,
    WHAT_YOU_GET_ITEMS,
  } from "#lib/constants/value-propotion-constant.ts";
  import { ArrowUpRight, ChevronRight, FileSpreadsheet } from "@lucide/svelte";
</script>

<section id="what-you-get" class="bg-[#FEFBF3] text-[#1E3B2A] py-20 md:py-28">
  <div class="mx-auto px-6 md:px-16 max-w-7xl w-full space-y-16">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10">
      <div class="lg:col-span-7 space-y-3">
        <span class="text-xs uppercase font-display text-[#365449] block">
          {VALUE_PROPOSITION_HEADER.eyebrow}
        </span>
        <h2
          class="text-3xl sm:text-5xl font-semibold text-[#1E3B2A] leading-[1.08] tracking-tight"
        >
          Source with Confidence. <br />
          <span class="text-[#365449]">Trade with Clarity.</span>
        </h2>
      </div>

      <div class="lg:col-span-5 space-y-4">
        <p class="text-sm sm:text-base text-[#365449] leading-relaxed">
          {VALUE_PROPOSITION_HEADER.subheadline}
        </p>
      </div>
    </div>

    <div class="cursor-default">
      <div
        class="p-6 rounded-t-2xl sm:p-8 bg-[#1E3B2A] text-[#FEFBF3] flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div class="space-y-1">
          <div class="flex items-center gap-2.5">
            <span class="text-xs font-mono uppercase text-[#FEFBF3]/80">
              2026 Crop & Export Season
            </span>
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-[#FEFBF3]">
            2026 Commodity Catalogues & Technical Specifications
          </h3>
        </div>

        <CtaButton
          iconPosition="left"
          size="md"
          icon={FileSpreadsheet}
          variant="secondary"
          href="#contact"
          type="button"
        >
          <span>Request 2026 PDF Dossier</span>
        </CtaButton>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {#each CATALOGUE_2026_LINEUP as item, idx}
          <div
            class="p-6 space-y-4 flex flex-col justify-between hover:bg-[#ede8d3]/50 transition-colors"
          >
            <div class="space-y-2">
              <div
                class="flex items-center justify-between text-xs text-[#365449]"
              >
                <span class="italic">CAT-26.0{idx + 1}</span>
                <span>HS {item.hsCodePrefix}</span>
              </div>
              <h4 class="text-xl font-bold text-[#1E3B2A]">
                {item.name}
              </h4>
            </div>

            <div class="space-y-2 pt-3 text-sm">
              <div>
                <span class="text-[10px] italic uppercase text-[#365449] block">
                  Sourcing Origin
                </span>
                <p class="font-medium text-[#1E3B2A]">{item.origin}</p>
              </div>
              <div>
                <span class="text-[10px] italic uppercase text-[#365449] block">
                  Available Grades
                </span>
                <p class="font-medium text-[#1E3B2A]">{item.grades}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="space-y-4">
      <div class="flex items-end justify-between pb-2">
        <h3 class="text-sm uppercase text-[#1E3B2A]">
          {VALUE_PROPOSITION_HEADER.ledgerTitle}
        </h3>
        <span class="text-sm text-[#1E3B2A]">
          STANDARD OPERATING PROTOCOL
        </span>
      </div>

      <div
        class="border-2 border-[#1E3B2A] rounded-xl divide-y divide-[#1E3B2A]"
      >
        {#each WHAT_YOU_GET_ITEMS as item, i (item.code)}
          <div
            class="py-8 sm:py-10 px-4 sm:px-6 grid grid-cols-1 items-center lg:grid-cols-12 gap-6 lg:gap-8 transition-colors {i %
              2 ===
            1
              ? 'bg-[#ede8d3]/40'
              : 'bg-transparent'}"
          >
            <div class="lg:col-span-4 space-y-2">
              <span
                class="text-xs font-mono font-semibold text-[#1E3B2A] block"
              >
                # {item.code}
              </span>
              <h4 class="text-xl font-semibold text-[#1E3B2A] leading-snug">
                {item.title}
              </h4>
              <div class="flex flex-col gap-6">
                <span
                  class="text-[10px] font-mono uppercase tracking-wider text-[#365449] block"
                >
                  {item.standardLabel}
                </span>
                <p class="text-xs font-semibold text-[#1E3B2A] mt-0.5">
                  {item.standardValue}
                </p>
              </div>
            </div>

            <div class="lg:col-span-4">
              <p class="text-sm text-[#365449] leading-relaxed">
                {item.summary}
              </p>
            </div>

            <div class="lg:col-span-4 space-y-4 p-4">
              <span
                class="text-sm uppercase tracking-wider text-[#1E3B2A]/70 block pb-1.5 font-medium"
              >
                {item.deliverablesLabel}
              </span>
              <ul class="grid grid-cols-1 gap-1.5">
                {#each item.deliverables as doc}
                  <li
                    class="text-xs font-medium text-[#1E3B2A] flex items-start gap-2"
                  >
                    <span class="text-[#1E3B2A] font-mono text-[10px] mt-0.5"
                      ><ChevronRight size={15} /></span
                    >
                    <span>{doc}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
