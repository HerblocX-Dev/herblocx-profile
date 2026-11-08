import type { IconProps } from "@lucide/svelte";
import type { Component } from "svelte";

export interface TradeStandardItem {
  code: string;
  title: string;
  summary: string;
  deliverablesLabel: string;
  deliverables: string[];
  standardLabel: string;
  standardValue: string;
}

export interface CatalogueItem {
  name: string;
  origin: string;
  grades: string;
  hsCodePrefix: string;
}
