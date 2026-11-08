<script lang="ts">
  import { COMMODITIES } from "#lib/constants/commodities-constant.ts";

  interface Props {
    initialCommodity?: string;
    initialGrade?: string;
  }

  let { initialCommodity = "ginger", initialGrade = "Grade A" }: Props =
    $props();

  let fullName = $state("");
  let company = $state("");
  let email = $state("");
  let country = $state("Japan");
  let phone = $state("");
  let selectedCommodity = $state("ginger");
  let selectedGrade = $state("Grade A");

  $effect.pre(() => {
    selectedCommodity = initialCommodity;
    selectedGrade = initialGrade;
  });
  let quantity = $state("");
  let unit = $state("kg");
  let port = $state("");
  let message = $state("");
  let consent = $state(true);

  let submitted = $state(false);
  let isSubmitting = $state(false);
  let errorMessage = $state("");

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (!fullName || !company || !email) {
      errorMessage = "Please fill out all required fields (*).";
      return;
    }
    errorMessage = "";
    isSubmitting = true;

    setTimeout(() => {
      isSubmitting = false;
      submitted = true;
    }, 600);
  }

  function resetForm() {
    submitted = false;
  }
</script>

<div class="bg-[#F8F9F2] p-6 sm:p-8 lg:p-9 rounded-xl shadow-sm">
  {#if submitted}
    <div class="py-12 px-4 text-center space-y-4">
      <div
        class="w-12 h-12 rounded-full bg-[#1E3B2A] text-[#E3C677] flex items-center justify-center mx-auto"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 class="font-display text-2xl font-semibold text-[#1E3B2A]">
        Quote request sent
      </h3>
      <p class="font-body text-[#3A4A3C] text-sm max-w-md mx-auto">
        Thank you, <strong class="text-[#1E3B2A]">{fullName}</strong>. We have
        received your inquiry for
        <strong class="text-[#1E3B2A]"
          >{selectedCommodity} ({selectedGrade})</strong
        >. A dedicated trader will reply to
      </p>
      <div class="pt-4">
        <button
          type="button"
          onclick={resetForm}
          class="inline-flex items-center justify-center h-10 px-6 bg-[#1E3B2A] text-[#F8F9F2] font-display text-xs font-semibold hover:bg-[#3F6F47] transition-colors rounded-[2px]"
        >
          Send another inquiry
        </button>
      </div>
    </div>
  {:else}
    <div
      class="flex items-start justify-between gap-4 pb-6 border-b border-[#D3DAC5]"
    >
      <div>
        <h3
          class="font-display text-2xl font-semibold text-[#1E3B2A] tracking-tight"
        >
          Request a quote
        </h3>
        <p class="font-body text-xs text-[#5A6847] mt-1">
          Fields marked * are required.
        </p>
      </div>
    </div>

    {#if errorMessage}
      <div
        class="mt-4 p-3 bg-red-50 border border-red-200 text-red-800 font-body text-xs rounded-[2px]"
      >
        {errorMessage}
      </div>
    {/if}

    <form onsubmit={handleSubmit} class="mt-6 space-y-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="space-y-1.5">
          <label
            for="fullName"
            class="block font-display text-[11.5px] font-medium text-[#4A5841]"
          >
            Full name *
          </label>
          <input
            id="fullName"
            type="text"
            required
            bind:value={fullName}
            placeholder="Your name"
            class="w-full h-10 px-3 bg-white border border-[#1E3B2A] text-[#16211A] font-body text-sm rounded-[2px] focus:outline-none focus:border-[#3F6F47] placeholder:text-[#6B785C]/60"
          />
        </div>

        <div class="space-y-1.5">
          <label
            for="company"
            class="block font-display text-[11.5px] font-medium text-[#4A5841]"
          >
            Company *
          </label>
          <input
            id="company"
            type="text"
            required
            bind:value={company}
            placeholder="Company or trading name"
            class="w-full h-10 px-3 bg-white border border-[#1E3B2A] text-[#16211A] font-body text-sm rounded-[2px] focus:outline-none focus:border-[#3F6F47] placeholder:text-[#6B785C]/60"
          />
        </div>
      </div>

      <!-- Field: Email -->
      <div class="space-y-1.5">
        <label
          for="email"
          class="block font-display text-[11.5px] font-medium text-[#4A5841]"
        >
          Email *
        </label>
        <input
          id="email"
          type="email"
          required
          bind:value={email}
          placeholder="name@company.com"
          class="w-full h-10 px-3 bg-white border border-[#1E3B2A] text-[#16211A] font-body text-sm rounded-[2px] focus:outline-none focus:border-[#3F6F47] placeholder:text-[#6B785C]/60"
        />
      </div>

      <!-- Row: Country & Phone/WhatsApp -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="space-y-1.5">
          <label
            for="country"
            class="block font-display text-[11.5px] font-medium text-[#4A5841]"
          >
            Country *
          </label>
          <select
            id="country"
            bind:value={country}
            class="w-full h-10 px-3 bg-white border border-[#1E3B2A] text-[#16211A] font-body text-sm rounded-[2px] focus:outline-none focus:border-[#3F6F47]"
          >
            <option value="Japan">Japan</option>
            <option value="Germany">Germany</option>
            <option value="Netherlands">Netherlands</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Singapore">Singapore</option>
            <option value="South Korea">South Korea</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Other">Other destination</option>
          </select>
        </div>

        <div class="space-y-1.5">
          <label
            for="phone"
            class="block font-display text-[11.5px] font-medium text-[#4A5841]"
          >
            Phone or WhatsApp
          </label>
          <input
            id="phone"
            type="tel"
            bind:value={phone}
            placeholder="Optional"
            class="w-full h-10 px-3 bg-white border border-[#1E3B2A] text-[#16211A] font-body text-sm rounded-[2px] focus:outline-none focus:border-[#3F6F47] placeholder:text-[#6B785C]/60"
          />
        </div>
      </div>

      <!-- Row: Commodity & Grade -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="space-y-1.5">
          <label
            for="commodity"
            class="block font-display text-[11.5px] font-medium text-[#4A5841]"
          >
            Commodity *
          </label>
          <select
            id="commodity"
            bind:value={selectedCommodity}
            class="w-full h-10 px-3 bg-white border border-[#1E3B2A] text-[#16211A] font-body text-sm rounded-[2px] focus:outline-none focus:border-[#3F6F47]"
          >
            {#each COMMODITIES as c}
              <option value={c.slug}>{c.name}</option>
            {/each}
            <option value="other">Other botanical (specify below)</option>
          </select>
        </div>

        <div class="space-y-1.5">
          <label
            for="grade"
            class="block font-display text-[11.5px] font-medium text-[#4A5841]"
          >
            Grade
          </label>
          <select
            id="grade"
            bind:value={selectedGrade}
            class="w-full h-10 px-3 bg-white border border-[#1E3B2A] text-[#16211A] font-body text-sm rounded-[2px] focus:outline-none focus:border-[#3F6F47]"
          >
            <option value="Grade A">Grade A</option>
            <option value="Grade B">Grade B</option>
            <option value="Grade C">Grade C</option>
            <option value="Standard / FAQ">Standard / FAQ</option>
          </select>
        </div>
      </div>

      <!-- Row: Quantity, Unit, Destination Port -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="space-y-1.5">
          <label
            for="quantity"
            class="block font-display text-[11.5px] font-medium text-[#4A5841]"
          >
            Estimated quantity
          </label>
          <input
            id="quantity"
            type="number"
            bind:value={quantity}
            placeholder="e.g. 20"
            class="w-full h-10 px-3 bg-white border border-[#1E3B2A] text-[#16211A] font-body text-sm rounded-[2px] focus:outline-none focus:border-[#3F6F47] placeholder:text-[#6B785C]/60"
          />
        </div>

        <div class="space-y-1.5">
          <label
            for="unit"
            class="block font-display text-[11.5px] font-medium text-[#4A5841]"
          >
            Unit
          </label>
          <select
            id="unit"
            bind:value={unit}
            class="w-full h-10 px-3 bg-white border border-[#1E3B2A] text-[#16211A] font-body text-sm rounded-[2px] focus:outline-none focus:border-[#3F6F47]"
          >
            <option value="kg">kg</option>
            <option value="ton">ton (MT)</option>
            <option value="20ft">20 ft container</option>
            <option value="40ft">40 ft container</option>
          </select>
        </div>

        <div class="space-y-1.5">
          <label
            for="port"
            class="block font-display text-[11.5px] font-medium text-[#4A5841]"
          >
            Destination port
          </label>
          <input
            id="port"
            type="text"
            bind:value={port}
            placeholder="e.g. Port of Rotterdam"
            class="w-full h-10 px-3 bg-white border border-[#1E3B2A] text-[#16211A] font-body text-sm rounded-[2px] focus:outline-none focus:border-[#3F6F47] placeholder:text-[#6B785C]/60"
          />
        </div>
      </div>

      <div class="space-y-1.5">
        <label
          for="message"
          class="block font-display text-[11.5px] font-medium text-[#4A5841]"
        >
          Message
        </label>
        <textarea
          id="message"
          rows="3"
          bind:value={message}
          placeholder="Specification, sample request, shipping terms, packaging…"
          class="w-full p-3 bg-white border border-[#1E3B2A] text-[#16211A] font-body text-sm rounded-[2px] focus:outline-none focus:border-[#3F6F47] placeholder:text-[#6B785C]/60 resize-y"
        ></textarea>
      </div>

      <div class="flex items-start gap-2.5 pt-1">
        <input
          id="consent"
          type="checkbox"
          required
          bind:checked={consent}
          class="mt-1 h-4 w-4 rounded border-[#B9C2AC] text-[#B8892B] focus:ring-[#B8892B]"
        />
        <label
          for="consent"
          class="font-body text-xs text-[#5A6847] leading-relaxed"
        >
          I agree to Herblocx storing this enquiry to respond to it. See the
          privacy policy.
        </label>
      </div>

      <div class="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          class="w-full h-11 bg-[#1b2e22] text-[#F8F9F2] font-display text-[14.5px] font-semibold transition-colors duration-150 rounded-[2px] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
        >
          {#if isSubmitting}
            <span>Sending request...</span>
          {:else}
            <span>Request a quote</span>
          {/if}
        </button>
      </div>
    </form>
  {/if}
</div>
