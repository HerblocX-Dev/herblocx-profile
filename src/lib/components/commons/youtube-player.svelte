<script lang="ts">
  import { browser } from "$app/environment";
  import "vidstack/player/styles/default/theme.css";
  import "vidstack/player/styles/default/layouts/video.css";
  import "vidstack/player";
  import "vidstack/player/ui";
  import "vidstack/player/layouts";

  interface Props {
    src: string;
    title?: string;
  }

  let { src, title = "Video Player" }: Props = $props();
</script>

<div class="player-wrapper">
  {#if browser}
    <media-player {src} {title} playsinline>
      <media-provider></media-provider>
      <media-video-layout></media-video-layout>
    </media-player>
  {/if}
</div>

<style>
  .player-wrapper {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #000;
  }

  media-player {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
