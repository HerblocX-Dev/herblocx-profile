import type { Component } from "svelte";
import type { IconProps } from "@lucide/svelte";

export interface OriginLocation {
  id: string;
  name: string;
  region: string;
  elevation: string;
  soil: string;
  coords: [number, number];
  labelOffset?: { x: number; y: number };
}

export interface StepMetric {
  label: string;
  value: string;
}

export interface StepPhoto {
  label: string;
  caption: string;
  src?: string;
}

export interface TraceabilityStep {
  id: string;
  icon: Component<IconProps>;
  title: string;
  description: string;
  previewNote: string;
  isMapStep?: boolean;
  isPhotoStep?: boolean;
  metrics?: StepMetric[];
  photos?: StepPhoto[];
}
