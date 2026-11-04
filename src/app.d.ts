// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }

  namespace svelteHTML {
    interface IntrinsicElements {
      "media-player": HTMLAttributes<HTMLElement> & {
        src?: string;
        title?: string;
        autoplay?: boolean;
        muted?: boolean;
        playsinline?: boolean;
        crossorigin?: boolean | string;
        aspectRatio?: string | number;
        logLevel?: "silent" | "error" | "warn" | "info" | "debug";
      };
      "media-provider": HTMLAttributes<HTMLElement>;
      "media-video-layout": HTMLAttributes<HTMLElement>;
      "media-audio-layout": HTMLAttributes<HTMLElement>;
    }
  }
}

export {};
