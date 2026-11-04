import type { Component } from "svelte";
import type { Icon, IconProps } from "lucide-svelte";

export type NavIcon = typeof Icon | Component<IconProps>;

export interface NavItem {
  key: string;
  label: string;
  mobileLabel?: string;
  href: string;
  icon: NavIcon;
}
