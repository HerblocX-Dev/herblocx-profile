<script lang="ts">
  import { untrack } from "svelte";
  import type { Commodity } from "#lib/data/products.ts";
  import CommodityCard from "./commons/commodity/commodity-card.svelte";

  interface Props {
    commodities: Commodity[];
    featured?: boolean;
    showMoq?: boolean;
    showAvailability?: boolean;
    showPurity?: boolean;
    showSupplyCapacity?: boolean;
    selectedGrade?: string;
    autoplay?: boolean;
    interval?: number;
  }

  let {
    commodities = [],
    featured = false,
    showMoq = true,
    showAvailability = false,
    showPurity = false,
    showSupplyCapacity = true,
    selectedGrade,
    autoplay = true,
    interval = 4000,
  }: Props = $props();

  const TRANSITION_MS = 500;
  const DRAG_THRESHOLD = 40;

  let cloneCount = $derived(Math.min(commodities.length, 3));
  let extendedItems = $derived.by(() => {
    if (commodities.length === 0) return [];
    const headClones = commodities.slice(-cloneCount);
    const tailClones = commodities.slice(0, cloneCount);
    return [...headClones, ...commodities, ...tailClones];
  });

  let trackEl: HTMLDivElement | undefined = $state();
  let currentIndex = $state(untrack(() => Math.min(commodities.length, 3)));
  let isTransitioning = $state(false);
  let isPaused = $state(false);
  let stepSize = $state(326);

  let isDragging = $state(false);
  let hasDragged = $state(false);
  let dragStartX = $state(0);
  let dragDelta = $state(0);

  let isAnimating = false;
  let settleTimer: ReturnType<typeof setTimeout> | undefined;

  function measureStep() {
    if (!trackEl || trackEl.children.length < 2) return;
    const first = trackEl.children[0] as HTMLElement;
    const second = trackEl.children[1] as HTMLElement;
    const diff = second.offsetLeft - first.offsetLeft;
    if (diff > 0) stepSize = diff;
  }

  $effect(() => {
    if (!trackEl) return;
    measureStep();
    window.addEventListener("resize", measureStep);
    return () => window.removeEventListener("resize", measureStep);
  });

  $effect(() => {
    void featured;
    void extendedItems;
    queueMicrotask(measureStep);
  });

  $effect(() => {
    if (!autoplay || isPaused || isDragging || commodities.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  });

  $effect(() => () => clearTimeout(settleTimer));

  function normalize() {
    const len = commodities.length;
    if (!len) return;
    if (currentIndex >= len + cloneCount) {
      isTransitioning = false;
      currentIndex -= len;
    } else if (currentIndex < cloneCount) {
      isTransitioning = false;
      currentIndex += len;
    }
  }

  function settle() {
    clearTimeout(settleTimer);
    isAnimating = false;
    normalize();
  }

  function moveTo(target: number) {
    if (commodities.length <= 1 || isAnimating || target === currentIndex)
      return;
    measureStep();
    isAnimating = true;
    isTransitioning = true;
    currentIndex = target;
    settleTimer = setTimeout(settle, TRANSITION_MS + 50);
  }

  const next = () => moveTo(currentIndex + 1);
  const prev = () => moveTo(currentIndex - 1);
  const goToSlide = (realIndex: number) => moveTo(realIndex + cloneCount);

  function handleTransitionEnd(e: TransitionEvent) {
    if (e.target !== e.currentTarget) return;
    settle();
  }

  function onPointerDown(e: PointerEvent) {
    if (commodities.length <= 1 || e.button !== 0) return;
    measureStep();
    settle();

    isDragging = true;
    hasDragged = false;
    isTransitioning = false;
    dragStartX = e.clientX;
    dragDelta = 0;
  }

  function onPointerMove(e: PointerEvent) {
    if (!isDragging) return;
    dragDelta = e.clientX - dragStartX;

    if (Math.abs(dragDelta) > 5 && !hasDragged) {
      hasDragged = true;
      try {
        (e.currentTarget as HTMLElement)?.setPointerCapture(e.pointerId);
      } catch (error) {
        console.error(error);
      }
    }
  }

  function onPointerUp(e: PointerEvent) {
    if (!isDragging) return;
    isDragging = false;

    const delta = dragDelta;
    dragDelta = 0;

    if (hasDragged) {
      try {
        (e.currentTarget as HTMLElement)?.releasePointerCapture(e.pointerId);
      } catch (error) {
        console.error(error);
      }
    }

    if (delta < -DRAG_THRESHOLD) {
      next();
    } else if (delta > DRAG_THRESHOLD) {
      prev();
    } else {
      isTransitioning = true;
    }
  }

  function handleLinkClick(e: MouseEvent) {
    if (hasDragged) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  const isClone = (idx: number) =>
    idx < cloneCount || idx >= cloneCount + commodities.length;

  let activeRealIndex = $derived(
    commodities.length
      ? (((currentIndex - cloneCount) % commodities.length) +
          commodities.length) %
          commodities.length
      : 0,
  );

  let trackOffset = $derived(-(currentIndex * stepSize) + dragDelta);
</script>

<div
  class="relative flex w-full max-w-full min-w-0 flex-col overflow-hidden select-none"
  role="region"
  aria-roledescription="carousel"
  aria-label="Commodity Carousel"
  onmouseenter={() => (isPaused = true)}
  onmouseleave={() => (isPaused = false)}
  onfocusin={() => (isPaused = true)}
  onfocusout={() => (isPaused = false)}
>
  <!-- Draggable Viewport -->
  <div
    role="group"
    aria-label="Draggable carousel track"
    class="w-full cursor-grab touch-pan-y overflow-hidden py-2 active:cursor-grabbing"
    onpointerdown={onPointerDown}
    onpointermove={onPointerMove}
    onpointerup={onPointerUp}
    onpointercancel={onPointerUp}
    onlostpointercapture={onPointerUp}
  >
    <div
      bind:this={trackEl}
      class="flex w-max gap-4 {isTransitioning
        ? 'transition-transform duration-500 ease-out'
        : ''}"
      style="transform: translate3d({trackOffset}px, 0px, 0px);"
      ontransitionend={handleTransitionEnd}
    >
      {#each extendedItems as commodity, idx (idx + "-" + commodity.slug)}
        <CommodityCard
          {commodity}
          {featured}
          {showMoq}
          {showAvailability}
          {showPurity}
          {showSupplyCapacity}
          {selectedGrade}
          clone={isClone(idx)}
          onlinkclick={handleLinkClick}
        />
      {/each}
    </div>
  </div>

  {#if commodities.length > 1}
    <div class="relative z-20 mt-4 flex items-center justify-center">
      <div class="flex flex-wrap items-center justify-center gap-2 py-2">
        {#each commodities as commodity, i (commodity.slug)}
          <button
            type="button"
            onclick={() => goToSlide(i)}
            aria-label="Go to {commodity.name}"
            aria-current={activeRealIndex === i ? "true" : undefined}
            class="h-2.5 cursor-pointer rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#B8892B] focus-visible:outline-none {activeRealIndex ===
            i
              ? 'w-12 bg-[#1b2e22] sm:w-20'
              : 'w-6 bg-[#6F8465]/40 hover:bg-[#6F8465] sm:w-10'}"
          ></button>
        {/each}
      </div>
    </div>
  {/if}
</div>
