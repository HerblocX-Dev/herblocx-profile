<script lang="ts">
  import type { Commodity, GradeSpec } from "#lib/data/products.ts";

  interface Props {
    commodity: Commodity;
    featured?: boolean;
    showMoq?: boolean;
    showAvailability?: boolean;
    showPurity?: boolean;
    showSupplyCapacity?: boolean;
    selectedGrade?: string;
    clone?: boolean;
    onlinkclick?: (e: MouseEvent) => void;
  }

  let {
    commodity,
    featured = false,
    showMoq = true,
    showAvailability = false,
    showPurity = false,
    showSupplyCapacity = true,
    selectedGrade,
    clone = false,
    onlinkclick,
  }: Props = $props();

  let specs = $derived.by(() => {
    const item = commodity;
    let grade = item.grades?.[0];
    if (selectedGrade && item.grades) {
      const found = item.grades.find(
        (g: GradeSpec) => g.name.toLowerCase() === selectedGrade.toLowerCase(),
      );
      if (found) grade = found;
    }
    return {
      gradeName: grade?.name || item.gradeBadge || "Standard",
      moisture: grade?.moisture || item.moisture,
      purity: grade?.purity || item.purity,
      moq: item.exportInfo?.moq || grade?.moq || item.moq || "Contact us",
      leadTime:
        item.exportInfo?.leadTime ||
        grade?.leadTime ||
        item.leadTime ||
        "Available",
      ports: item.exportInfo?.loadingPort?.[0] || item.origin,
    };
  });
</script>

<div
  inert={clone}
  aria-hidden={clone ? "true" : undefined}
  class="flex shrink-0 flex-col justify-between overflow-hidden border-2 rounded-2xl bg-transparent transition-colors border-[#00301C] {featured
    ? 'w-[310px] sm:w-[350px]'
    : 'w-[280px] sm:w-[310px]'}"
>
  <div
    class="relative w-full overflow-hidden bg-[#E7EBDD] {featured
      ? 'h-52'
      : 'h-44'}"
  >
    <img
      src={commodity.image}
      alt="{commodity.name} ({commodity.latinName})"
      class="pointer-events-none h-full w-full object-cover select-none"
      loading="lazy"
      draggable="false"
    />

    <div
      class="pointer-events-none absolute top-2.5 left-2.5 flex flex-col items-start gap-1"
    >
      <span
        class="rounded-full bg-[#F8F9F2] px-2 py-0.5 text-[10px] font-semibold tracking-wide text-[#16211A] uppercase backdrop-blur-xs"
      >
        {commodity.category}
      </span>
    </div>

    {#if commodity.kicker}
      <div
        class="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#16211A]/80 to-transparent p-2.5 pt-6"
      >
        <p
          class="truncate font-mono text-[9px] tracking-wider text-[#D8E4C7] uppercase"
        >
          {commodity.kicker}
        </p>
      </div>
    {/if}
  </div>

  <div class="flex flex-1 flex-col justify-between gap-3 p-6">
    <div>
      <h3
        class="font-display line-clamp-1 text-2xl leading-tight font-semibold text-[#16211A]"
        title={commodity.name}
      >
        {commodity.name}
      </h3>
      <p class="font-body mt-0.5 text-lg text-[#62724D] italic">
        {commodity.latinName}
      </p>
      <!-- <p -->
      <!--   class="font-body mt-2 line-clamp-2 text-lg leading-relaxed text-[#455047]" -->
      <!-- > -->
      <!--   {commodity.summary} -->
      <!-- </p> -->
    </div>

    <dl class="font-display space-y-1.5 text-xs">
      <div class="flex items-center justify-between">
        <dt class="text-lg font-medium tracking-wider text-[#5A6847] uppercase">
          Origin
        </dt>
        <dd
          class="max-w-[60%] truncate text-right text-lg font-medium text-[#16211A]"
          title={commodity.originDetail || commodity.origin}
        >
          {commodity.origin}
        </dd>
      </div>

      <div class="flex items-center justify-between">
        <dt class="text-lg font-medium tracking-wider text-[#5A6847] uppercase">
          Moisture
        </dt>
        <dd class="text-lg font-semibold text-[#16211A]">
          {specs.moisture}
        </dd>
      </div>

      {#if showPurity}
        <div class="flex items-center justify-between">
          <dt
            class="text-lg font-medium tracking-wider text-[#5A6847] uppercase"
          >
            Purity
          </dt>
          <dd class="text-lg font-semibold text-[#16211A]">
            {specs.purity}
          </dd>
        </div>
      {/if}

      {#if showSupplyCapacity && commodity.supplyCapacity}
        <div class="flex items-center justify-between">
          <dt
            class="text-lg font-medium tracking-wider text-[#5A6847] uppercase"
          >
            Capacity
          </dt>
          <dd class="text-lg font-medium text-[#2F4F38]">
            {commodity.supplyCapacity}
          </dd>
        </div>
      {/if}

      {#if showAvailability}
        <div class="flex items-center justify-between">
          <dt
            class="text-lg font-medium tracking-wider text-[#5A6847] uppercase"
          >
            Availability
          </dt>
          <dd class="text-lg font-medium text-[#16211A]">
            {commodity.availability}
          </dd>
        </div>
      {/if}

      {#if showMoq}
        <div class="flex items-center justify-between">
          <dt
            class="text-lg font-medium tracking-wider text-[#5A6847] uppercase"
          >
            MOQ
          </dt>
          <dd class="text-lg font-semibold text-[#16211A]">
            {specs.moq}
          </dd>
        </div>
      {/if}
    </dl>

    {#if commodity.certifications && commodity.certifications.length > 0}
      <div class="flex flex-wrap gap-1 pt-0.5">
        {#each commodity.certifications.slice(0, 3) as cert}
          <span
            class="rounded-xs border border-[#CCD8C4] bg-[#E6ECE0] px-1.5 py-0.5 font-mono text-[9px] text-[#344335]"
          >
            {cert}
          </span>
        {/each}
        {#if commodity.certifications.length > 3}
          <span class="self-center font-mono text-[9px] text-[#62724D]">
            +{commodity.certifications.length - 3}
          </span>
        {/if}
      </div>
    {/if}

    <div class="flex items-center justify-between pt-5">
      <button
        class="bg-[#3B5B46] hover:bg-[#3B5B46] text-[#F8F9F2] inline-flex
        items-center rounded-xl justify-center font-display font-semibold transition-colors text-xl duration-150 select-none cursor-pointer p-1 px-3"
      >
        <a
          href="/products/{commodity.slug}"
          draggable="false"
          onclick={onlinkclick}
          class="font-display"
        >
          <span>View specification</span>
        </a>
      </button>

      {#if commodity.exportInfo?.loadingPort?.[0]}
        <span
          class="max-w-[40%] truncate text-right font-mono text-[9px] text-[#788865] uppercase"
          title="Primary Port"
        >
          FOB {commodity.exportInfo.loadingPort[0].split("(")[0]}
        </span>
      {/if}
    </div>
  </div>
</div>
