<script lang="ts">
	import LotTag from '#lib/components/LotTag.svelte';
	import { COMMODITIES, type Commodity } from '#lib/data/products';

	let activeFilter = $state<'All' | 'Rhizomes' | 'Spices' | 'Leaves'>('All');
	let viewMode = $state<'grid' | 'table'>('grid');
	let sortBy = $state<'lot' | 'name'>('lot');

	let filteredCommodities = $derived.by(() => {
		let list = [...COMMODITIES];
		if (activeFilter !== 'All') {
			list = list.filter((c: Commodity) => c.category === activeFilter);
		}
		if (sortBy === 'name') {
			list.sort((a, b) => a.name.localeCompare(b.name));
		} else {
			list.sort((a, b) => a.lotCode.localeCompare(b.lotCode));
		}
		return list;
	});

	const counts = {
		All: COMMODITIES.length,
		Rhizomes: COMMODITIES.filter(c => c.category === 'Rhizomes').length,
		Spices: COMMODITIES.filter(c => c.category === 'Spices').length,
		Leaves: COMMODITIES.filter(c => c.category === 'Leaves').length
	};
</script>

<svelte:head>
	<title>Product Catalogue — Seven Graded Botanicals | Herblocx</title>
	<meta name="description" content="View specifications, grades, and availability for Indonesian ginger, turmeric, cinnamon, cloves, nutmeg, lemongrass, and black pepper." />
</svelte:head>

<div class="w-full bg-[#F8F9F2] text-[#16211A]">
	<!-- Page Head (Light Paper) -->
	<section class="bg-[#F8F9F2] pt-8 pb-10 border-b border-[#D3DAC5]">
		<div class="max-w-[1440px] mx-auto px-6 md:px-16 space-y-10">
			<!-- Breadcrumb & Note -->
			<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D3DAC5] pb-4">
				<nav class="flex items-center gap-2.5 font-display text-xs" aria-label="Breadcrumb">
					<a href="/" class="text-[#7C8A64] hover:text-[#1E3B2A]">Herblocx</a>
					<span class="text-[#B0BCA0]">/</span>
					<span class="font-semibold text-[#1E3B2A]">Catalogue</span>
				</nav>
				<span class="font-display text-[10.5px] font-medium tracking-wider text-[#7C8A64] uppercase">
					LOTS UPDATED 12 JAN 2026 · 07 COMMODITIES · 4 GRADES EACH
				</span>
			</div>

			<!-- Headline & Terms Box -->
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end justify-between">
				<div class="lg:col-span-7 space-y-4 max-w-2xl">
					<h1 class="font-display text-4xl sm:text-5xl lg:text-[56px] font-semibold text-[#1E3B2A] leading-[1.08] tracking-tight">
						Seven botanicals, graded lot by lot.
					</h1>
					<p class="font-body text-base text-[#3A4A3C] leading-relaxed">
						Every commodity below is in stock as a named lot, with its own moisture reading, grade badge and origin paperwork. Quantities move weekly — ask for the current position before you plan.
					</p>
				</div>

				<!-- Terms Box -->
				<div class="lg:col-span-5 bg-white border border-[#D3DAC5] p-5 rounded-[2px] shadow-sm divide-y divide-[#DCE3D1] font-display text-xs">
					<div class="pb-2.5 flex justify-between items-center">
						<span class="text-[9.5px] font-semibold text-[#6B7A58] uppercase">TRADE TERMS</span>
						<span class="font-medium text-[#1E3B2A] text-xs">FOB Semarang · CIF on request</span>
					</div>
					<div class="py-2.5 flex justify-between items-center">
						<span class="text-[9.5px] font-semibold text-[#6B7A58] uppercase">MINIMUM</span>
						<span class="font-medium text-[#1E3B2A] text-xs">From 500 kg per commodity</span>
					</div>
					<div class="py-2.5 flex justify-between items-center">
						<span class="text-[9.5px] font-semibold text-[#6B7A58] uppercase">LEAD TIME</span>
						<span class="font-medium text-[#1E3B2A] text-xs">18 – 28 days from confirmation</span>
					</div>
					<div class="pt-2.5 flex justify-between items-center">
						<span class="text-[9.5px] font-semibold text-[#6B7A58] uppercase">SAMPLES</span>
						<span class="font-medium text-[#1E3B2A] text-xs">Sent before the order is placed</span>
					</div>
				</div>
			</div>

			<!-- Filter & View Toolbar -->
			<div class="pt-4 border-t border-[#D3DAC5] flex flex-col md:flex-row md:items-center justify-between gap-4">
				<!-- Category Filter Chips -->
				<div class="flex flex-wrap items-center gap-2">
					<button
						type="button"
						onclick={() => activeFilter = 'All'}
						class="h-9 px-4 rounded-[2px] font-display text-xs font-semibold flex items-center gap-2 transition-colors {activeFilter === 'All' ? 'bg-[#1E3B2A] text-[#F8F9F2]' : 'bg-white border border-[#D3DAC5] text-[#3A4A3C] hover:border-[#1E3B2A]'}"
					>
						<span>All commodities</span>
						<span class="text-[10px] {activeFilter === 'All' ? 'text-[#E3C677]' : 'text-[#85926F]'}">0{counts.All}</span>
					</button>

					<button
						type="button"
						onclick={() => activeFilter = 'Rhizomes'}
						class="h-9 px-4 rounded-[2px] font-display text-xs font-semibold flex items-center gap-2 transition-colors {activeFilter === 'Rhizomes' ? 'bg-[#1E3B2A] text-[#F8F9F2]' : 'bg-white border border-[#D3DAC5] text-[#3A4A3C] hover:border-[#1E3B2A]'}"
					>
						<span>Rhizomes</span>
						<span class="text-[10px] {activeFilter === 'Rhizomes' ? 'text-[#E3C677]' : 'text-[#85926F]'}">0{counts.Rhizomes}</span>
					</button>

					<button
						type="button"
						onclick={() => activeFilter = 'Spices'}
						class="h-9 px-4 rounded-[2px] font-display text-xs font-semibold flex items-center gap-2 transition-colors {activeFilter === 'Spices' ? 'bg-[#1E3B2A] text-[#F8F9F2]' : 'bg-white border border-[#D3DAC5] text-[#3A4A3C] hover:border-[#1E3B2A]'}"
					>
						<span>Spices</span>
						<span class="text-[10px] {activeFilter === 'Spices' ? 'text-[#E3C677]' : 'text-[#85926F]'}">0{counts.Spices}</span>
					</button>

					<button
						type="button"
						onclick={() => activeFilter = 'Leaves'}
						class="h-9 px-4 rounded-[2px] font-display text-xs font-semibold flex items-center gap-2 transition-colors {activeFilter === 'Leaves' ? 'bg-[#1E3B2A] text-[#F8F9F2]' : 'bg-white border border-[#D3DAC5] text-[#3A4A3C] hover:border-[#1E3B2A]'}"
					>
						<span>Leaves</span>
						<span class="text-[10px] {activeFilter === 'Leaves' ? 'text-[#E3C677]' : 'text-[#85926F]'}">0{counts.Leaves}</span>
					</button>
				</div>

				<!-- Sort & View Mode Toggle -->
				<div class="flex items-center gap-4">
					<div class="flex items-center gap-2 font-display text-xs font-semibold text-[#6B7A58]">
						<span>SORT</span>
						<select
							bind:value={sortBy}
							class="bg-white border border-[#D3DAC5] text-[#1E3B2A] text-xs px-2.5 py-1.5 rounded-[2px] focus:outline-none"
						>
							<option value="lot">LOT CODE</option>
							<option value="name">COMMODITY NAME</option>
						</select>
					</div>

					<div class="h-4 w-px bg-[#D3DAC5]"></div>

					<div class="border border-[#D3DAC5] rounded-[2px] p-0.5 bg-white flex items-center">
						<button
							type="button"
							onclick={() => viewMode = 'grid'}
							class="p-1.5 rounded-[2px] transition-colors {viewMode === 'grid' ? 'bg-[#EEF2E7] text-[#1E3B2A]' : 'text-[#85926F] hover:text-[#1E3B2A]'}"
							title="Grid view"
						>
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
						</button>
						<button
							type="button"
							onclick={() => viewMode = 'table'}
							class="p-1.5 rounded-[2px] transition-colors {viewMode === 'table' ? 'bg-[#EEF2E7] text-[#1E3B2A]' : 'text-[#85926F] hover:text-[#1E3B2A]'}"
							title="Table view"
						>
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Commodities Display: Grid or Table -->
	<section class="py-12 md:py-16">
		<div class="max-w-[1440px] mx-auto px-6 md:px-16">
			{#if viewMode === 'grid'}
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{#each filteredCommodities as commodity}
						<div class="h-full">
							<LotTag {commodity} showMoq={true} showAvailability={true} />
						</div>
					{/each}

					<!-- Not on the list Card -->
					<div class="bg-[#EEF2E7] border border-[#C9D5BA] p-6 rounded-[2px] flex flex-col justify-between gap-6">
						<div class="space-y-3">
							<div class="w-9 h-9 rounded bg-[#1E3B2A] text-[#E3C677] flex items-center justify-center">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
							</div>
							<h3 class="font-display text-lg font-semibold text-[#1E3B2A]">Not on the list?</h3>
							<p class="font-body text-xs text-[#3A4A3C] leading-relaxed">
								We buy beyond this catalogue. Send the botanical, the grade and the volume and we will tell you what we can commit to.
							</p>
						</div>

						<a
							href="/#contact"
							class="inline-flex items-center gap-1.5 font-display text-xs font-semibold text-[#3F6F47] hover:underline"
						>
							<span>Ask for a quote</span>
							<span>→</span>
						</a>
					</div>
				</div>
			{:else}
				<!-- Direct Table View of All Lots -->
				<div class="overflow-x-auto bg-white border border-[#D3DAC5] rounded-[2px] shadow-sm">
					<table class="w-full text-left font-display text-xs">
						<thead class="bg-[#EEF2E7] border-b border-[#D3DAC5] text-[9.5px] font-semibold text-[#6B7A58] uppercase tracking-wider">
							<tr>
								<th class="py-3 px-4">LOT</th>
								<th class="py-3 px-4">COMMODITY</th>
								<th class="py-3 px-4">ORIGIN</th>
								<th class="py-3 px-4">MOISTURE</th>
								<th class="py-3 px-4">PURITY</th>
								<th class="py-3 px-4">MOQ</th>
								<th class="py-3 px-4">LEAD TIME</th>
								<th class="py-3 px-4 text-right">ACTION</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-[#DCE3D1]">
							{#each filteredCommodities as c}
								<tr class="hover:bg-[#F8F9F2] transition-colors">
									<td class="py-4 px-4 font-semibold text-[#7A5A17]">{c.lotCode}</td>
									<td class="py-4 px-4">
										<div class="font-semibold text-[#1E3B2A] text-sm">{c.name}</div>
										<div class="font-body italic text-[11px] text-[#7C8A64]">{c.latinName}</div>
									</td>
									<td class="py-4 px-4 font-body text-sm text-[#3A4A3C]">{c.origin}</td>
									<td class="py-4 px-4 font-medium text-[#16211A]">{c.moisture}</td>
									<td class="py-4 px-4 font-medium text-[#16211A]">{c.purity}</td>
									<td class="py-4 px-4 font-medium text-[#16211A]">{c.moq}</td>
									<td class="py-4 px-4 font-medium text-[#16211A]">{c.leadTime}</td>
									<td class="py-4 px-4 text-right">
										<a href="/products/{c.slug}" class="text-[#3F6F47] hover:underline font-semibold text-xs">
											Spec sheet →
										</a>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			{/if}
		</div>
	</section>

	<!-- Specification Side-by-Side Comparison Table Section -->
	<section class="bg-[#EEF2E7] py-16 md:py-20 border-t border-[#D3DAC5]">
		<div class="max-w-[1440px] mx-auto px-6 md:px-16 space-y-8">
			<div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
				<div class="space-y-2 max-w-2xl">
					<span class="font-display text-[10px] font-semibold tracking-widest text-[#7A5A17] uppercase">SPECIFICATION TABLE</span>
					<h2 class="font-display text-3xl font-semibold text-[#1E3B2A]">Compare the lots side by side.</h2>
					<p class="font-body text-sm text-[#3A4A3C]">
						Values are the minimum we guarantee on the certificate of analysis. Tighter tolerances are possible on contract — ask the desk.
					</p>
				</div>
				<a href="/#contact" class="font-display text-xs font-semibold text-[#3F6F47] hover:underline">
					Download all specs (PDF) →
				</a>
			</div>

			<div class="overflow-x-auto bg-white border border-[#D3DAC5] rounded-[2px] shadow-sm">
				<table class="w-full text-left font-display text-xs">
					<thead class="bg-[#EEF2E7] border-b border-[#D3DAC5] text-[9.5px] font-semibold text-[#6B7A58] uppercase tracking-wider">
						<tr>
							<th class="py-3 px-5">LOT</th>
							<th class="py-3 px-5">COMMODITY</th>
							<th class="py-3 px-5">ORIGIN</th>
							<th class="py-3 px-5">MOISTURE</th>
							<th class="py-3 px-5">PURITY</th>
							<th class="py-3 px-5">MOQ</th>
							<th class="py-3 px-5">LEAD TIME</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-[#DCE3D1]">
						{#each COMMODITIES as c}
							<tr class="hover:bg-[#F8F9F2] transition-colors">
								<td class="py-4 px-5 font-semibold text-[#7A5A17]">{c.lotCode}</td>
								<td class="py-4 px-5 font-semibold text-[#1E3B2A]">{c.name}</td>
								<td class="py-4 px-5 font-body text-sm text-[#3A4A3C]">{c.originDetail}</td>
								<td class="py-4 px-5 font-medium text-[#16211A]">{c.moisture}</td>
								<td class="py-4 px-5 font-medium text-[#16211A]">{c.purity}</td>
								<td class="py-4 px-5 font-medium text-[#16211A]">{c.moq}</td>
								<td class="py-4 px-5 font-medium text-[#16211A] flex items-center gap-1.5">
									<span>{c.leadTime}</span>
									<span class="text-[#85926F]">→</span>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</section>

	<!-- Packaging & Loading Section -->
	<section class="py-16 md:py-20 border-t border-[#D3DAC5] bg-white">
		<div class="max-w-[1440px] mx-auto px-6 md:px-16">
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
				<div class="lg:col-span-7 space-y-6">
					<div class="space-y-2">
						<span class="font-display text-[10px] font-semibold tracking-widest text-[#7A5A17] uppercase">PACKING & LOADING</span>
						<h2 class="font-display text-3xl font-semibold text-[#1E3B2A]">Packed to the format you order, not ours.</h2>
						<p class="font-body text-sm text-[#3A4A3C] leading-relaxed">
							Packing is agreed in the quote. Every format below uses a food-grade liner and is stencilled with lot code, net weight and destination port.
						</p>
					</div>

					<!-- Packing list -->
					<div class="divide-y divide-[#DCE3D1] border-y border-[#DCE3D1] font-display">
						<div class="py-4 flex items-center gap-4">
							<span class="font-semibold text-[#7A5A17] text-sm shrink-0 w-16">25 kg</span>
							<div>
								<h3 class="font-semibold text-sm text-[#1E3B2A]">PP woven bag</h3>
								<p class="font-body text-xs text-[#3A4A3C]">Standard export bag, heat-sealed liner, 40 bags per pallet</p>
							</div>
						</div>
						<div class="py-4 flex items-center gap-4">
							<span class="font-semibold text-[#7A5A17] text-sm shrink-0 w-16">50 kg</span>
							<div>
								<h3 class="font-semibold text-sm text-[#1E3B2A]">Jute bag</h3>
								<p class="font-body text-xs text-[#3A4A3C]">Breathable, for whole spices and roots that travel long</p>
							</div>
						</div>
						<div class="py-4 flex items-center gap-4">
							<span class="font-semibold text-[#7A5A17] text-sm shrink-0 w-16">10 kg</span>
							<div>
								<h3 class="font-semibold text-sm text-[#1E3B2A]">Carton</h3>
								<p class="font-body text-xs text-[#3A4A3C]">For retail-ready and sample shipments, banded per 4</p>
							</div>
						</div>
						<div class="py-4 flex items-center gap-4">
							<span class="font-semibold text-[#7A5A17] text-sm shrink-0 w-16">1 MT</span>
							<div>
								<h3 class="font-semibold text-sm text-[#1E3B2A]">Bulk tote</h3>
								<p class="font-body text-xs text-[#3A4A3C]">For manufacturers running continuous extraction lines</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Container Loads Panel -->
				<div class="lg:col-span-5 bg-[#1E3B2A] text-[#F8F9F2] p-7 rounded-[2px] shadow-sm space-y-6">
					<div class="flex items-center justify-between pb-2 border-b border-[#3A5643]">
						<span class="font-display text-[9.5px] font-semibold tracking-widest text-[#E3C677] uppercase">CONTAINER LOADS</span>
						<svg class="w-4 h-4 text-[#8FA383]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
					</div>

					<div class="space-y-4 font-display">
						<div class="flex items-center justify-between pb-3 border-b border-[#3A5643]/60">
							<span class="text-base font-semibold">20 ft container</span>
							<div class="text-right text-xs">
								<div class="text-[#C3D0B8]">18.0 t palletised</div>
								<div class="text-[#9EB394]">19.5 t loose</div>
							</div>
						</div>

						<div class="flex items-center justify-between pb-3 border-b border-[#3A5643]/60">
							<span class="text-base font-semibold">40 ft container</span>
							<div class="text-right text-xs">
								<div class="text-[#C3D0B8]">26.0 t palletised</div>
								<div class="text-[#9EB394]">28.0 t loose</div>
							</div>
						</div>
					</div>

					<p class="font-body text-xs text-[#9EB394] leading-relaxed">
						Mixed lots are allowed from 500 kg per commodity. Palletised cargo is fumigated and wrapped before loading at Tanjung Emas.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Closing CTA -->
	<section class="bg-[#172E21] text-[#F8F9F2] py-16 px-6 md:px-16">
		<div class="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
			<div class="space-y-2 max-w-2xl">
				<span class="font-display text-[10px] font-semibold tracking-widest text-[#8FA383] uppercase">CURRENT POSITION</span>
				<h2 class="font-display text-3xl sm:text-4xl font-semibold text-[#F8F9F2]">
					Stock moves weekly. Ask before you plan a shipment.
				</h2>
			</div>

			<div class="flex flex-wrap items-center gap-4">
				<a
					href="/#contact"
					class="inline-flex items-center justify-center h-12 px-7 bg-[#B8892B] hover:bg-[#E3C677] text-[#16211A] font-display text-[15px] font-semibold transition-colors rounded-[2px]"
				>
					Request a quote
				</a>
				<a
					href="tel:+622400000000"
					class="inline-flex items-center justify-center h-12 px-6 border border-[#5C7A63] text-[#F8F9F2] hover:bg-white/10 font-display text-[15px] font-medium transition-colors rounded-[2px]"
				>
					+62 24 0000 0000
				</a>
			</div>
		</div>
	</section>
</div>

