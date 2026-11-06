<script lang="ts">
  import { onMount } from "svelte";
  import { geoMercator, geoPath, geoGraticule } from "d3-geo";
  import {
    ORIGIN_LOCATIONS,
    SEA_LABELS,
  } from "../constants/traceability-constant";
  import type { OriginLocation } from "#lib/types/traceability.ts";

  const WIDTH = 1000;
  const HEIGHT = 420;

  let geojsonData = $state<any>(null);
  let loading = $state(true);
  let selectedOrigin = $state<OriginLocation>(ORIGIN_LOCATIONS[0]);

  let projection = $derived.by(() => {
    const proj = geoMercator();
    if (geojsonData) {
      proj.fitExtent(
        [
          [24, 24],
          [WIDTH - 24, HEIGHT - 32],
        ],
        geojsonData,
      );
    } else {
      proj
        .center([118, -2.5])
        .scale(1150)
        .translate([WIDTH / 2, HEIGHT / 2]);
    }
    return proj;
  });

  let pathGenerator = $derived(geoPath().projection(projection));
  let graticulePath = $derived(pathGenerator(geoGraticule().step([10, 5])()));

  onMount(async () => {
    try {
      const res = await fetch(
        "https://raw.githubusercontent.com/superpikar/indonesia-geojson/master/indonesia-province-simple.json",
      );
      geojsonData = await res.json();
    } catch (err) {
      console.error("Failed to load Indonesia GeoJSON:", err);
    } finally {
      loading = false;
    }
  });
</script>

<div class="space-y-4 w-full">
  <div
    class="relative w-full aspect-[21/9] min-h-[280px] rounded-2xl overflow-hidden border border-[#1E3B2A]/20 bg-gradient-to-b from-[#d8e8f3] to-[#9fc3dc] select-none shadow-inner"
  >
    {#if loading}
      <div
        class="absolute inset-0 flex items-center justify-center text-xs font-mono uppercase tracking-widest text-[#1E3B2A]/70"
      >
        Loading Archipelago Geometry...
      </div>
    {/if}

    <svg
      viewBox="0 0 {WIDTH} {HEIGHT}"
      class="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter
          id="archipelago-shadow"
          x="-10%"
          y="-10%"
          width="120%"
          height="125%"
        >
          <feDropShadow
            dx="4"
            dy="8"
            stdDeviation="5"
            flood-color="#09150e"
            flood-opacity="0.45"
          />
        </filter>
      </defs>

      {#if graticulePath}
        <path
          d={graticulePath}
          fill="none"
          stroke="#7fa9c7"
          stroke-width="0.7"
          stroke-opacity="0.35"
        />
      {/if}

      {#each SEA_LABELS as sea}
        {@const pos = projection(sea.coords)}
        {#if pos}
          <text
            x={pos[0]}
            y={pos[1]}
            text-anchor="middle"
            class="fill-[#648ead] text-[10px] italic tracking-[0.18em] font-medium pointer-events-none"
          >
            {sea.name}
          </text>
        {/if}
      {/each}

      {#if geojsonData}
        <g
          transform="translate(3, 5)"
          fill="#0f2017"
          filter="url(#archipelago-shadow)"
        >
          {#each geojsonData.features as feature}
            <path d={pathGenerator(feature)} />
          {/each}
        </g>

        <g
          fill="#1E3B2A"
          stroke="#1E3B2A"
          stroke-width="0.4"
          stroke-linejoin="round"
        >
          {#each geojsonData.features as feature}
            <path
              d={pathGenerator(feature)}
              class="transition-colors duration-200 hover:fill-[#284d37]"
            />
          {/each}
        </g>
      {/if}

      {#each ORIGIN_LOCATIONS as origin}
        {@const pos = projection(origin.coords)}
        {@const active = selectedOrigin.id === origin.id}
        {#if pos}
          <g
            transform="translate({pos[0]}, {pos[1]})"
            class="cursor-pointer group/pin focus:outline-none"
            onclick={() => (selectedOrigin = origin)}
            onkeydown={(e) => e.key === "Enter" && (selectedOrigin = origin)}
            role="button"
            tabindex="0"
            aria-label="Inspect {origin.name}"
          >
            {#if active}
              <circle r="15" fill="#D99B26" opacity="0.3" />
            {/if}

            <circle
              r={active ? 11 : 9}
              fill="#D99B26"
              stroke="#FEFBF3"
              stroke-width="2.5"
              class="transition-all duration-200"
            />
            <circle r={active ? 4 : 3.5} fill="#FEFBF3" />

            <!-- Crisp Pill Text Label with White Halo -->
            <text
              x={origin.labelOffset?.x ?? 0}
              y={origin.labelOffset?.y ?? -18}
              text-anchor="middle"
              stroke="#FEFBF3"
              stroke-width="4"
              stroke-linejoin="round"
              paint-order="stroke"
              class="text-[12px] font-bold fill-[#16211A] select-none"
            >
              {origin.name}
            </text>
          </g>
        {/if}
      {/each}
    </svg>

    <span
      class="absolute bottom-2 left-1/2 -translate-x-1/2 text-[11px] text-[#1E3B2A]/60 font-medium pointer-events-none"
    >
      Click an origin pin to explore
    </span>
  </div>

  <div
    class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#F8F9F2] border border-[#1E3B2A]/20"
  >
    <div>
      <span class="text-[10px] uppercase tracking-wider text-[#365449] block">
        Selected Origin
      </span>
      <p class="text-sm font-semibold text-[#1E3B2A]">{selectedOrigin.name}</p>
    </div>
    <div>
      <span class="text-[10px] uppercase tracking-wider text-[#365449] block">
        Sourcing Zone
      </span>
      <p class="text-sm font-medium text-[#1E3B2A]">{selectedOrigin.region}</p>
    </div>
    <div>
      <span class="text-[10px] uppercase tracking-wider text-[#365449] block">
        Elevation
      </span>
      <p class="text-sm font-medium text-[#1E3B2A]">
        {selectedOrigin.elevation}
      </p>
    </div>
    <div>
      <span class="text-[10px] uppercase tracking-wider text-[#365449] block">
        Soil Profile
      </span>
      <p class="text-sm font-medium text-[#1E3B2A]">{selectedOrigin.soil}</p>
    </div>
  </div>
</div>
