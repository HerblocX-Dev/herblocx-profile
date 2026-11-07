<script lang="ts">
  import type { GalleryType } from "#lib/types/gallery-type.ts";
  import { ArrowUpRight } from "@lucide/svelte";

  type ColumnCount = 1 | 2 | 3 | 4;
  type AspectRatio = "auto" | "square" | "video" | "4/3" | "3/4";
  type GapSize = "sm" | "md" | "lg";

  interface Props {
    items: GalleryType[];
    class?: string;
    showHoverDetail?: boolean;
    enableInstagramLink?: boolean;
    layout?: "masonry" | "grid";
    cols?: ColumnCount;
    rows?: number;
    aspect?: AspectRatio;
    gap?: GapSize;
  }

  let {
    items,
    class: className = "",
    showHoverDetail = false,
    enableInstagramLink = false,
    layout = "masonry",
    cols = 2,
    rows,
    aspect = "auto",
    gap = "md",
  }: Props = $props();

  let loadedIds = $state<Record<string, boolean>>({});

  let visibleItems = $derived(rows ? items.slice(0, cols * rows) : items);

  const gridColsMap: Record<ColumnCount, string> = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  };

  const masonryColsMap: Record<ColumnCount, string> = {
    1: "columns-1",
    2: "columns-2 sm:columns-3 lg:columns-2",
    3: "columns-2 sm:columns-3",
    4: "columns-2 sm:columns-3 lg:columns-4",
  };

  const gapMap: Record<GapSize, { container: string; itemMb: string }> = {
    sm: { container: "gap-3", itemMb: "mb-3" },
    md: { container: "gap-6", itemMb: "mb-4" },
    lg: { container: "gap-8", itemMb: "mb-6" },
  };

  const aspectMap: Record<AspectRatio, string> = {
    auto: "h-auto",
    square: "aspect-square h-full",
    video: "aspect-video h-full",
    "4/3": "aspect-[4/3] h-full",
    "3/4": "aspect-[3/4] h-full",
  };
</script>

<div
  class="{layout === 'grid'
    ? `grid ${gridColsMap[cols]}`
    : masonryColsMap[cols]} {gapMap[gap].container} w-full {className}"
>
  {#each visibleItems as item (item.id)}
    {@const hasLink = enableInstagramLink && Boolean(item.instagramUrl)}
    {@const hasDetail =
      showHoverDetail && Boolean(item.title || item.description)}

    <svelte:element
      this={hasLink ? "a" : "div"}
      href={hasLink ? item.instagramUrl : undefined}
      target={hasLink ? "_blank" : undefined}
      rel={hasLink ? "noopener noreferrer" : undefined}
      aria-label={hasLink
        ? (item.title ?? `View Instagram post ${item.id}`)
        : undefined}
      class="group relative block overflow-hidden rounded-2xl bg-neutral-200 {layout ===
      'masonry'
        ? `${gapMap[gap].itemMb} break-inside-avoid`
        : 'h-full'} {hasLink
        ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#B8892B]'
        : ''}"
    >
      <img
        src={item.path}
        alt={item.title ?? item.id}
        loading="lazy"
        onload={() => (loadedIds[item.id] = true)}
        class="block w-full object-cover grayscale transition-all duration-300 group-hover:scale-[1.02] group-hover:grayscale-0 {aspectMap[
          aspect
        ]} {loadedIds[item.id] ? 'opacity-100' : 'min-h-[160px]'}"
      />

      <div
        class="pointer-events-none absolute inset-0 flex flex-col justify-between bg-linear-to-t from-black/75 via-black/30 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <div class="flex justify-end">
          {#if hasLink}
            <span
              class="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-sm backdrop-blur-sm transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <ArrowUpRight size={16} />
            </span>
          {/if}
        </div>

        {#if hasDetail}
          <div
            class="translate-y-2 space-y-1 text-left transition-transform duration-300 group-hover:translate-y-0"
          >
            {#if item.title}
              <h4 class="text-sm font-semibold text-white leading-snug">
                {item.title}
              </h4>
            {/if}
            {#if item.description}
              <p class="line-clamp-2 text-xs text-white/85 leading-relaxed">
                {item.description}
              </p>
            {/if}
          </div>
        {/if}
      </div>
    </svelte:element>
  {/each}
</div>
