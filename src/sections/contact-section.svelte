<script lang="ts">
  import QuoteForm from "../lib/components/QuoteForm.svelte";
</script>

<section id="contact" class="bg-[#1E3B2A] text-[#F8F9F2] py-20 md:py-24">
  <div class="max-w-[1440px] mx-auto px-6 md:px-16">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      <!-- Contact Information Column (6 cols) -->
      <div class="lg:col-span-6 space-y-8">
        <div class="space-y-4">
          <h2
            class="font-display text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#F8F9F2] leading-tight tracking-tight"
          >
            Tell us the commodity, the grade and the volume.
          </h2>
          <p
            class="font-body text-base text-[#C3D0B8] leading-relaxed max-w-lg"
          >
            Send what you already know. If a field is blank we will ask the
            right question instead of guessing.
          </p>
        </div>

        <!-- Direct Communication Channels -->
        <div class="divide-y divide-[#3A5643] border-y border-[#3A5643]">
          <!-- Email -->
          <a
            href="mailto:trade@herblocx.com"
            class="py-4 flex items-center justify-between group text-sm font-display hover:opacity-90 transition-opacity"
          >
            <div class="flex items-center gap-3.5">
              <svg
                class="w-4 h-4 text-[#E3C677]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span class="text-[#9EB394]">Email</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="font-semibold text-[#F8F9F2]"
                >trade@herblocx.com</span
              >
              <svg
                class="w-3.5 h-3.5 text-[#9EB394] transition-transform group-hover:translate-x-1"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </a>

          <!-- WhatsApp -->
          <a
            href="https://wa.me/6281200000000"
            target="_blank"
            rel="noopener noreferrer"
            class="py-4 flex items-center justify-between group text-sm font-display hover:opacity-90 transition-opacity"
          >
            <div class="flex items-center gap-3.5">
              <svg
                class="w-4 h-4 text-[#E3C677]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span class="text-[#9EB394]">WhatsApp</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="font-semibold text-[#F8F9F2]">+62 812 0000 0000</span
              >
              <svg
                class="w-3.5 h-3.5 text-[#9EB394] transition-transform group-hover:translate-x-1"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </a>

          <!-- Phone -->
          <a
            href="tel:+622400000000"
            class="py-4 flex items-center justify-between group text-sm font-display hover:opacity-90 transition-opacity"
          >
            <div class="flex items-center gap-3.5">
              <svg
                class="w-4 h-4 text-[#E3C677]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <span class="text-[#9EB394]">Phone</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="font-semibold text-[#F8F9F2]">+62 24 0000 0000</span>
              <svg
                class="w-3.5 h-3.5 text-[#9EB394] transition-transform group-hover:translate-x-1"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </a>
        </div>

        <!-- Promise -->
        <div
          class="flex items-center gap-2.5 pt-1 text-sm font-body text-[#C3D0B8]"
        >
          <span class="w-2 h-2 rounded-full bg-[#B8892B] inline-block"></span>
          <span>We reply within 1 business day, Monday to Friday.</span>
        </div>

        <!-- Next Steps Process -->
        <div class="pt-6 border-t border-[#3A5643] space-y-4">
          <h3
            class="font-display text-xs font-semibold tracking-widest text-[#E3C677] uppercase"
          >
            What happens next
          </h3>
          <div class="space-y-3 font-body text-sm text-[#C3D0B8]">
            <div class="flex items-start gap-3">
              <span
                class="font-display text-xs font-semibold text-[#E3C677] mt-0.5"
                >01</span
              >
              <p>We confirm grade, quantity and packaging specifications.</p>
            </div>
            <div class="flex items-start gap-3">
              <span
                class="font-display text-xs font-semibold text-[#E3C677] mt-0.5"
                >02</span
              >
              <p>
                You get an itemized quote with the spec sheet and FOB/CIF
                shipping terms.
              </p>
            </div>
            <div class="flex items-start gap-3">
              <span
                class="font-display text-xs font-semibold text-[#E3C677] mt-0.5"
                >03</span
              >
              <p>
                Samples ship on request via DHL/FedEx before your order is
                booked.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Quote Form Column (6 cols) -->
      <!-- <div class="lg:col-span-6"> -->
      <!--   <QuoteForm /> -->
      <!-- </div> -->
    </div>
  </div>
</section>
