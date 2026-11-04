<script lang="ts">
	import LotTag from '#lib/components/LotTag.svelte';
	import { COMMODITIES } from '#lib/data/products';
</script>

<section id="products" class="bg-[#1E3B2A] text-[#F8F9F2] py-20 md:py-24">
	<div class="max-w-[1440px] mx-auto px-6 md:px-16 space-y-12">
		<!-- Section Header -->
		<div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
			<div class="space-y-3 max-w-2xl">
				<h2 class="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#F8F9F2] tracking-tight">
					Graded lots, ready to quote.
				</h2>
				<p class="font-body text-sm sm:text-base text-[#C3D0B8] leading-relaxed">
					Every commodity comes with grade options, measured specifications and a lot tag that travels with the shipment.
				</p>
			</div>

			<a
				href="/products"
				class="inline-flex items-center gap-2 font-display text-sm font-medium text-[#E3C677] hover:text-[#F8F9F2] transition-colors shrink-0 group"
			>
				<span>See the full catalogue</span>
				<svg class="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor">
					<path d="M3 8h10M9 4l4 4-4 4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>
		</div>

		<!-- Lot Tag Grid: 7 Commodities + 1 Ask Card -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
			{#each COMMODITIES as commodity}
				<div class="h-full">
					<LotTag {commodity} showMoq={true} />
				</div>
			{/each}

			<!-- 8th: Ask Card -->
			<div class="border border-[#6F8465] bg-transparent p-6 rounded-[2px] flex flex-col justify-between gap-6 hover:border-[#E3C677] transition-colors">
				<div class="space-y-4">
					<div class="w-10 h-10 rounded-full bg-[#3A5643]/50 flex items-center justify-center text-[#E3C677]">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>

					<h3 class="font-display text-2xl font-semibold text-[#F8F9F2] leading-snug">
						Don’t see your commodity?
					</h3>

					<p class="font-body text-sm text-[#C3D0B8] leading-relaxed">
						We buy and source beyond this list. Tell us the botanical, the grade and the volume — we will come back with what we can commit to.
					</p>
				</div>

				<a
					href="/#contact"
					class="inline-flex items-center gap-2 font-display text-sm font-semibold text-[#E3C677] hover:text-[#F8F9F2] transition-colors group pt-2"
				>
					<span>Ask us for a quote</span>
					<svg class="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor">
						<path d="M3 8h10M9 4l4 4-4 4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>

