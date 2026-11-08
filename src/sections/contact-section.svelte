<script lang="ts">
  import CtaButton from "#lib/components/commons/cta-button.svelte";
  import QuoteForm from "#lib/components/QuoteForm.svelte";
  import { Mail, MessageCircleText, Truck } from "@lucide/svelte";
</script>

<section id="contact" class="bg-[#1E3B2A] text-[#F8F9F2] py-20 md:py-24 px-32">
  <div class=" mx-auto px-6 md:px-16">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      <div class="lg:col-span-6 space-y-8">
        <div class="space-y-4">
          <h2
            class="font-display text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#F8F9F2] leading-tight tracking-tight"
          >
            Real Work. Measurable Impact. Let's Build Better Agricultural Supply
            Chains Together.
          </h2>
          <p
            class="font-body text-base text-[#F8F9F2] leading-relaxed max-w-lg"
          >
            Whether you are looking for reliable Indonesian commodity supplies
            or seeking better market access for your agricultural products, we
            are ready to build a partnership.
          </p>
        </div>

        <div class="flex flex-col gap-5">
          <CtaButton
            icon={Mail}
            iconPosition="left"
            size="md"
            variant="secondary">Request a Quote</CtaButton
          >
          <CtaButton
            icon={Truck}
            size="md"
            variant="secondary"
            iconPosition="left">Become a Supplier</CtaButton
          >
          <CtaButton
            icon={MessageCircleText}
            size="md"
            variant="secondary"
            iconPosition="left">Contact Our Team</CtaButton
          >
        </div>
      </div>

      <div class="lg:col-span-6">
        <QuoteForm />
      </div>
    </div>
  </div>
</section>
