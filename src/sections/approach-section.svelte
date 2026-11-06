<script>
  import OriginMap from "#lib/components/origin-map.svelte";
  import { TRACEABILITY_STEPS } from "#lib/constants/traceability-constant.ts";
  import { Camera } from "@lucide/svelte";

  let activeIndex = $state(0);
</script>

<section
  id="our-approach"
  class="bg-[#FEFBF3] py-20 md:py-24 border-t border-[#3B5B46]/10"
>
  <div class="mx-auto px-6 md:px-16 max-w-7xl w-full">
    <div class="flex flex-col gap-12 lg:gap-16 items-center">
      <div class="space-y-4 max-w-3xl text-center">
        <span
          class="text-5xl font-bold uppercase tracking-widest text-[#3B5B46]"
        >
          Our Approach
        </span>
        <h2
          class="text-3xl md:text-4xl font-semibold text-[#1E3B2A] leading-tight tracking-tight"
        >
          Complete Transparency from Origin to Port
        </h2>
        <p class="md:text-lg text-[#365449] leading-relaxed">
          We believe true quality is built on accountability. Select any stage
          below to inspect the documentation, photos, and verification records
          provided with every lot.
        </p>
      </div>

      <div class="flex flex-col gap-8 w-full items-center">
        {#if TRACEABILITY_STEPS[activeIndex]}
          {@const current = TRACEABILITY_STEPS[activeIndex]}
          <div
            class="w-full text-[#1E3B2A] p-8 lg:p-10 rounded-3xl border border-[#3B5B46] flex flex-col justify-between min-h-[460px]"
          >
            <div class="space-y-6">
              <div
                class="flex items-center justify-between border-b border-[#1E3B2A]/15 pb-4"
              >
                <span class="text-xs font-display font-semibold text-[#1E3B2A]">
                  #{activeIndex + 1} VERIFICATION
                </span>
              </div>

              <div class="space-y-2">
                <h3 class="text-2xl font-semibold text-[#1E3B2A]">
                  {current.title}
                </h3>
                <p class="text-sm text-[#1E3B2A]/80 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {#if current.isMapStep}
                <OriginMap />
              {:else if current.isPhotoStep && current.photos}
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {#each current.photos as photo}
                    <div
                      class="group/photo relative rounded-2xl border border-[#1E3B2A] p-3.5 flex flex-col justify-between aspect-[4/3] overflow-hidden transition-colors"
                    >
                      <div
                        class="flex items-center justify-between text-[#1E3B2A]"
                      >
                        <Camera size={18} />
                      </div>
                      <div class="space-y-1">
                        <p class="text-xs font-light text-[#1E3B2A]">
                          {photo.label}
                        </p>
                        <p class="text-sm text-[#1E3B2A] leading-tight">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                  {/each}
                </div>
              {:else if current.metrics}
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {#each current.metrics as metric}
                    <div
                      class="p-4 rounded-2xl border-[#162B1F] border space-y-6"
                    >
                      <span
                        class="text-xs uppercase text-[#162B1F]/80 font-light block"
                      >
                        {metric.label}
                      </span>
                      <p class="text-sm font-medium text-[#162B1F]">
                        {metric.value}
                      </p>
                    </div>
                  {/each}
                </div>
              {/if}
            </div>

            <div
              class="p-3 mt-10 rounded-xl bg-[#4f635c] flex items-center gap-3 text-sm justify-center"
            >
              <p class="leading-relaxed italic text-[#F8F9F2]">
                {current.previewNote}
              </p>
            </div>
          </div>
        {/if}

        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {#each TRACEABILITY_STEPS as step, i}
            {@const isSelected = activeIndex === i}
            {@const darkZigzag = i % 4 === 1 || i % 4 === 2}

            <button
              type="button"
              onclick={() => (activeIndex = i)}
              class="w-full p-6 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between group cursor-pointer {isSelected
                ? 'bg-[#1E3B2A]  shadow-md'
                : darkZigzag
                  ? 'bg-[#ede8d3] border-[#3B5B46]'
                  : 'bg-[#F8F9F2] border-[#3B5B46]'}"
            >
              <div class="space-y-3 w-full">
                <div class="flex items-center justify-between">
                  <div
                    class="w-11 h-11 rounded-2xl flex items-center justify-center transition-colors duration-300 {isSelected
                      ? 'bg-[#FEFBF3] text-[#16211A]'
                      : 'bg-[#1E3B2A] text-[#F8F9F2] ]'}"
                  >
                    <step.icon size={20} />
                  </div>
                  <span
                    class="text-xs font-display font-semibold {isSelected
                      ? 'text-[#F8F9F2]'
                      : 'text-[#3B5B46]/70'}"
                  >
                    #{i + 1} STEP
                  </span>
                </div>

                <h3
                  class="text-lg font-semibold transition-colors {isSelected
                    ? 'text-[#FEFBF3]'
                    : 'text-[#1E3B2A]'}"
                >
                  {step.title}
                </h3>

                <p
                  class="text-xs leading-relaxed line-clamp-2 {isSelected
                    ? 'text-[#F8F9F2]/80'
                    : 'text-[#365449]'}"
                >
                  {step.description}
                </p>
              </div>
            </button>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
