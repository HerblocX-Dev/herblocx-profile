<script lang="ts">
	import type { Commodity, GradeSpec } from '#lib/data/products';

	interface Props {
		commodity: Commodity;
		featured?: boolean;
		showMoq?: boolean;
		showAvailability?: boolean;
		showPurity?: boolean;
		selectedGrade?: string;
	}

	let {
		commodity,
		featured = false,
		showMoq = true,
		showAvailability = false,
		showPurity = false,
		selectedGrade
	}: Props = $props();

	// Calculate display values based on selectedGrade if passed
	let currentGrade = $derived.by(() => {
		if (selectedGrade) {
			const found = commodity.grades.find((g: GradeSpec) => g.name.toLowerCase() === selectedGrade.toLowerCase());
			if (found) return found;
		}
		return commodity.grades[0];
	});

	let gradeName = $derived(currentGrade?.name || commodity.gradeBadge);
	let moistureVal = $derived(currentGrade?.moisture || commodity.moisture);
	let purityVal = $derived(currentGrade?.purity || commodity.purity);
	let moqVal = $derived(currentGrade?.moq || commodity.moq);
</script>

<div
	class="lot-tag-card bg-[#F8F9F2] border border-[#D3DAC5] flex flex-col justify-between overflow-hidden {featured ? 'w-full max-w-[340px]' : 'w-full'}"
>
	<!-- Tag Header Strip with String Hole -->
	<div class="bg-[#1E3B2A] px-4 py-2 flex items-center justify-between">
		<div class="flex items-center gap-2">
			<span class="w-2 h-2 rounded-full border border-[#E3C677]/60 bg-[#E3C677] inline-block shadow-sm"></span>
			<span class="font-display text-[9.5px] tracking-widest text-[#E3C677] font-medium uppercase">
				{commodity.lotCode}
			</span>
		</div>
		<div class="bg-[#B8892B] text-[#16211A] px-2 py-0.5 rounded-[2px] font-display text-[8.5px] font-semibold tracking-wider uppercase">
			{gradeName}
		</div>
	</div>

	<!-- Commodity Image -->
	<div class="w-full relative overflow-hidden bg-[#E7EBDD] {featured ? 'h-44' : 'h-40'}">
		<img
			src={commodity.image}
			alt="{commodity.name} ({commodity.latinName})"
			class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
			loading="lazy"
		/>
	</div>

	<!-- Tag Body with Herbarium Spec Data -->
	<div class="p-4 flex-1 flex flex-col justify-between gap-3">
		<div>
			<h3 class="font-display font-semibold text-[#16211A] text-xl leading-tight">
				{commodity.name}
			</h3>
			<p class="font-body italic text-xs text-[#7C8A64] mt-0.5">
				{commodity.latinName}
			</p>
		</div>

		<div class="h-px w-full bg-[#D3DAC5]"></div>

		<dl class="space-y-1.5 font-display text-xs">
			<div class="flex items-center justify-between">
				<dt class="text-[9px] font-medium tracking-wider text-[#5A6847] uppercase">ORIGIN</dt>
				<dd class="text-[12px] font-medium text-[#16211A]">{commodity.origin}</dd>
			</div>

			<div class="flex items-center justify-between">
				<dt class="text-[9px] font-medium tracking-wider text-[#5A6847] uppercase">MOISTURE</dt>
				<dd class="text-[12px] font-medium text-[#16211A]">{moistureVal}</dd>
			</div>

			{#if showPurity}
				<div class="flex items-center justify-between">
					<dt class="text-[9px] font-medium tracking-wider text-[#5A6847] uppercase">PURITY</dt>
					<dd class="text-[12px] font-medium text-[#16211A]">{purityVal}</dd>
				</div>
			{/if}

			{#if showAvailability}
				<div class="flex items-center justify-between">
					<dt class="text-[9px] font-medium tracking-wider text-[#5A6847] uppercase">AVAILABILITY</dt>
					<dd class="text-[12px] font-medium text-[#16211A]">{commodity.availability}</dd>
				</div>
			{/if}

			{#if showMoq}
				<div class="flex items-center justify-between">
					<dt class="text-[9px] font-medium tracking-wider text-[#5A6847] uppercase">MOQ</dt>
					<dd class="text-[12px] font-medium text-[#16211A]">{moqVal}</dd>
				</div>
			{/if}
		</dl>

		<div class="h-px w-full bg-[#D3DAC5] mt-1"></div>

		<a
			href="/products/{commodity.slug}"
			class="inline-flex items-center gap-1.5 font-display text-xs font-semibold text-[#3F6F47] hover:text-[#1E3B2A] transition-colors group mt-1"
		>
			<span>View specification</span>
			<svg
				class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
				viewBox="0 0 16 16"
				fill="none"
				stroke="currentColor"
			>
				<path d="M3 8h10M9 4l4 4-4 4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</a>
	</div>
</div>
