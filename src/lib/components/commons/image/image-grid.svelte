<script lang="ts">
  import type { GalleryType } from "#lib/types/gallery-type.ts";

  interface Props {
    items: GalleryType[];
    class?: string;
  }

  let { items, class: className = "" }: Props = $props();

  let loadedIds = $state<Record<string, boolean>>({});
</script>

<div class="columns-2 max-w-2xl gap-6 sm:columns-3 lg:columns-2 {className}">
  {#each items as item (item.id)}
    <div
      class="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-neutral-200"
    >
      <img
        src={item.path}
        alt={item.id}
        loading="lazy"
        onload={() => (loadedIds[item.id] = true)}
        class="block h-auto grayscale w-full object-cover hover:grayscale-0 transition-all duration-300 group-hover:scale-[1.02] {loadedIds[
          item.id
        ]
          ? 'opacity-100'
          : 'min-h-[160px] '}"
      />

      <div
        class="pointer-events-none absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      ></div>
    </div>
  {/each}
</div>
