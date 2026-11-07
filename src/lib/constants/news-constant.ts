import type { GalleryType, NewsCategoryId } from "#lib/types/gallery-type.ts";
import {
  LayoutGrid,
  ShieldCheck,
  Ship,
  Sprout,
  TrendingUp,
  Users,
} from "@lucide/svelte";
import type { Component } from "svelte";

export interface NewsCategoryMeta {
  id: NewsCategoryId;
  label: string;
  icon: Component;
  summary: string;
  highlights: string[];
}

export const NEWS_CATEGORIES: NewsCategoryMeta[] = [
  {
    id: "all",
    label: "All Updates",
    icon: LayoutGrid,
    summary:
      "Complete field-to-port updates across our sourcing regions, processing facilities, and global shipments.",
    highlights: [
      "Direct Farm Sourcing",
      "Strict Quality Control",
      "Global Container Dispatch",
      "Market Intelligence",
    ],
  },
  {
    id: "field-activities",
    label: "Field Activities",
    icon: Sprout,
    summary:
      "On-the-ground documentation of farmer visits, harvest seasons, direct sourcing, and agronomic mentoring.",
    highlights: [
      "Farmer Visits & Auditing",
      "Peak Harvest Collection",
      "Origin Sourcing",
      "Agronomic Assistance",
    ],
  },
  {
    id: "quality-production",
    label: "Quality & Production",
    icon: ShieldCheck,
    summary:
      "Inside our processing facilities: physical grading, moisture inspection, batch processing, and strict QC protocols.",
    highlights: [
      "ISO / ASTA Grading",
      "Moisture & Purity Checks",
      "Hygienic Processing",
      "Pre-Shipment Lab QC",
    ],
  },
  {
    id: "export-updates",
    label: "Export Updates",
    icon: Ship,
    summary:
      "Real-time dispatches from the warehouse to port—covering container stuffing, surveyor sealing, and export compliance.",
    highlights: [
      "FCL Container Loading",
      "Desiccant & Kraft Lining",
      "Phytosanitary & Fumigation",
      "Bill of Lading Dispatch",
    ],
  },
  {
    id: "farmer-stories",
    label: "Farmer Stories",
    icon: Users,
    summary:
      "Spotlighting the farming families, local cooperatives, and long-term community partnerships behind our commodities.",
    highlights: [
      "Smallholder Profiles",
      "Cooperative Growth",
      "Fair-Trade Impact",
      "Multi-Generational Farms",
    ],
  },
  {
    id: "market-insights",
    label: "Market Insights",
    icon: TrendingUp,
    summary:
      "Data-driven updates on Indonesian commodity supply, harvest forecasts, pricing movements, and global buyer demand.",
    highlights: [
      "Crop Yield Forecasts",
      "FOB Price Movements",
      "Global Demand Trends",
      "Seasonal Supply Windows",
    ],
  },
];

export const NEWS_ITEMS: GalleryType[] = [
  {
    id: "1",
    path: "/news/instagram_posts/1.webp",
    title: "Buyers Have Faith; Indonesia Enpowered;",
    description:
      "Having a quality product alone is not enough to win the global market. See the detail by clicking this post...",
    instagramUrl:
      "https://www.instagram.com/p/Dd_iWPSTdO7/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
  },
  {
    id: "2",
    path: "/news/instagram_posts/2.webp",
    title: "YOUR HARVEST HAS THE POTENTIAL TO REACH THE GLOBAL MARKET!",
    description:
      "Indonesia possesses a wealth of herbal and spice commodities with the potential to reach international markets. See the detail by clicking this post...",
    instagramUrl:
      "https://www.instagram.com/p/DfWcZZkT-Ek/?utm_source=ig_web_copy_link&psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
  },

  {
    id: "3",
    path: "/news/instagram_posts/3.webp",
    title: "YOUR HARVEST HAS THE POTENTIAL TO REACH THE GLOBAL MARKET!",
    description:
      "Indonesia possesses a wealth of herbal and spice commodities with the potential to reach international markets. See the detail by clicking this post...",
    instagramUrl:
      "https://www.instagram.com/p/DfWcZZkT-Ek/?utm_source=ig_web_copy_link&psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
  },

  {
    id: "4",
    path: "/news/instagram_posts/4.webp",
    title: "YOUR HARVEST HAS THE POTENTIAL TO REACH THE GLOBAL MARKET!",
    description:
      "Indonesia possesses a wealth of herbal and spice commodities with the potential to reach international markets. See the detail by clicking this post...",
    instagramUrl:
      "https://www.instagram.com/p/DfWcZZkT-Ek/?utm_source=ig_web_copy_link&psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
  },

  {
    id: "5",
    path: "/news/instagram_posts/5.webp",
    title: "YOUR HARVEST HAS THE POTENTIAL TO REACH THE GLOBAL MARKET!",
    description:
      "Indonesia possesses a wealth of herbal and spice commodities with the potential to reach international markets. See the detail by clicking this post...",
    instagramUrl:
      "https://www.instagram.com/p/DfWcZZkT-Ek/?utm_source=ig_web_copy_link&psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
  },
];
