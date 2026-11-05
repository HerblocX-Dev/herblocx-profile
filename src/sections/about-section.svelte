<script>
  import CtaButton from "#lib/components/commons/cta-button.svelte";
  import YoutubePlayer from "#lib/components/commons/youtube-player.svelte";
  import { PlantPot, Handshake } from "@lucide/svelte";
</script>

<section id="about" class="bg-[#FEFBF3] py-20 md:py-24">
  <div class="mx-auto px-6 md:px-16">
    <div
      class="flex flex-col gap-12 lg:gap-16 items-center justify-center text-center"
    >
      <div class="lg:col-span-7 space-y-6">
        <h2
          class=" text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#1E3B2A] leading-tight tracking-tight"
        >
          Rooted in Indonesia. Managed with Care. Delivered to the World.
        </h2>

        <p
          class="md:text-xl text-[#365449] leading-relaxed italic font-semibold"
        >
          "We work alongside farmers and local producers to source, manage, and
          deliver premium Indonesian agricultural commodities."
        </p>

        <p class="md:text-xl text-[#365449] leading-relaxed">
          From coconut and its derivatives to carefully sourced coffee, we
          oversee the journey from origin to shipment with quality, <br />
          traceability, and long-term partnerships at the core of everything we do.
        </p>
      </div>

      <div class="lg:col-span-5 space-y-3 w-10/12">
        <div class="overflow-hidden w-full rounded-4xl shadow-sm">
          <YoutubePlayer src="https://youtu.be/trftd1ln8WI" />
        </div>
      </div>

      <div class="flex gap-6 items-center">
        <CtaButton icon={PlantPot} type="button">Explore Our Products</CtaButton
        >
        <CtaButton icon={Handshake} type="button" variant="secondary"
          >Become a Partner</CtaButton
        >
      </div>
    </div>
  </div>
</section>
