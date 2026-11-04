<script lang="ts">
	import { COMMODITIES } from '#lib/data/products';
</script>

<footer class="bg-[#172E21] text-[#B3C3A8] border-t border-[#2C4535]">
	<div class="max-w-[1440px] mx-auto px-6 md:px-16 pt-16 md:pt-20 pb-10">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14 pb-16">
			<!-- Brand Column -->
			<div class="space-y-4">
				<a href="/" class="flex items-center gap-2.5 group">
					<div class="w-2.5 h-2.5 bg-[#B8892B] rotate-45 transition-transform group-hover:rotate-90 duration-300"></div>
					<span class="font-display text-[23px] font-semibold text-[#F8F9F2] tracking-tight">Herblocx</span>
				</a>
				<p class="font-body text-sm text-[#B3C3A8] leading-relaxed max-w-sm">
					Exporter and importer of herbal commodities. Graded by lot, documented at origin, shipped to your port.
				</p>
				<div class="pt-2">
					<a
						href="/#contact"
						class="inline-flex items-center gap-2 font-display text-[13.5px] font-semibold text-[#E3C677] hover:text-[#F8F9F2] transition-colors group"
					>
						<span>Request a quote</span>
						<svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor">
							<path d="M3 8h10M9 4l4 4-4 4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</a>
				</div>
			</div>

			<!-- Products Column -->
			<div class="space-y-3.5">
				<h4 class="font-display text-[10.5px] font-semibold tracking-widest text-[#E3C677] uppercase">Products</h4>
				<ul class="space-y-2.5 font-display text-[13.5px]">
					{#each COMMODITIES as c}
						<li>
							<a href="/products/{c.slug}" class="text-[#B3C3A8] hover:text-[#F8F9F2] transition-colors">
								{c.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Company Column -->
			<div class="space-y-3.5">
				<h4 class="font-display text-[10.5px] font-semibold tracking-widest text-[#E3C677] uppercase">Company</h4>
				<ul class="space-y-2.5 font-display text-[13.5px]">
					<li>
						<a href="/about" class="text-[#B3C3A8] hover:text-[#F8F9F2] transition-colors">About Herblocx</a>
					</li>
					<li>
						<a href="/#location" class="text-[#B3C3A8] hover:text-[#F8F9F2] transition-colors">Location</a>
					</li>
					<li>
						<a href="/#contact" class="text-[#B3C3A8] hover:text-[#F8F9F2] transition-colors">Contact</a>
					</li>
					<li>
						<a href="/about" class="text-[#B3C3A8] hover:text-[#F8F9F2] transition-colors">Privacy policy</a>
					</li>
				</ul>
			</div>

			<!-- Trade Desk Column -->
			<div class="space-y-3.5 font-display text-[13.5px]">
				<h4 class="text-[10.5px] font-semibold tracking-widest text-[#E3C677] uppercase">Trade desk</h4>
				<ul class="space-y-2">
					<li>
						<a href="mailto:trade@herblocx.com" class="flex items-center gap-2.5 text-[#B3C3A8] hover:text-[#F8F9F2] transition-colors">
							<svg class="w-4 h-4 text-[#93A88A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							<span>trade@herblocx.com</span>
						</a>
					</li>
					<li>
						<a href="https://wa.me/6281200000000" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2.5 text-[#B3C3A8] hover:text-[#F8F9F2] transition-colors">
							<svg class="w-4 h-4 text-[#93A88A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
							<span>+62 812 0000 0000 (WhatsApp)</span>
						</a>
					</li>
					<li>
						<a href="tel:+622400000000" class="flex items-center gap-2.5 text-[#B3C3A8] hover:text-[#F8F9F2] transition-colors">
							<svg class="w-4 h-4 text-[#93A88A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
							</svg>
							<span>+62 24 0000 0000</span>
						</a>
					</li>
				</ul>
				<div class="pt-2 font-body text-[12.5px] text-[#93A88A] leading-relaxed">
					Jl. Raya Semarang–Solo Km 12 No. 4<br />
					Ungaran, Central Java 50511<br />
					Indonesia
				</div>
			</div>
		</div>

		<!-- Footer Bottom Divider and Legal -->
		<div class="pt-6 border-t border-[#2C4535] flex flex-col sm:flex-row items-center justify-between gap-4 font-display text-xs text-[#9BAF90]">
			<p>© 2026 Herblocx. All rights reserved.</p>
			<div class="flex items-center gap-6">
				<a href="/about" class="hover:text-[#F8F9F2] transition-colors">Privacy policy</a>
				<a href="/about" class="hover:text-[#F8F9F2] transition-colors">Terms of trade</a>
				<span class="text-[#E3C677]">EN</span>
			</div>
		</div>
	</div>
</footer>
