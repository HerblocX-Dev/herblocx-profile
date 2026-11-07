import type { NavItem } from "#lib/types/nav-type.ts";
import {
  Sprout,
  Compass,
  Handshake,
  ShieldCheck,
  Newspaper,
  Building2,
  MapPin,
  PhoneCall,
} from "lucide-svelte";

export const NAV_ITEMS: NavItem[] = [
  {
    key: "about",
    label: "About",
    mobileLabel: "About Herblocx",
    href: "/#about",
    icon: Building2,
  },
  {
    key: "products",
    label: "Products",
    mobileLabel: "Product Catalogue",
    href: "/products",
    icon: Sprout,
  },
  {
    key: "approach",
    label: "Our Approach",
    href: "/#our-approach",
    icon: Compass,
  },
  {
    key: "partnerships",
    label: "Farmer Partnerships",
    href: "/farmer-partnerships",
    icon: Handshake,
  },
  {
    key: "quality",
    label: "Quality & Traceability",
    href: "/quality-traceability",
    icon: ShieldCheck,
  },
  {
    key: "news",
    label: "News & Activities",
    href: "/news",
    icon: Newspaper,
  },
  {
    key: "location",
    label: "Location",
    mobileLabel: "Office & Warehouse",
    href: "/#location",
    icon: MapPin,
  },
  {
    key: "contact",
    label: "Contact",
    mobileLabel: "Contact & Inquiry",
    href: "/#contact",
    icon: PhoneCall,
  },
];

export const NAV_CONTACT = {
  email: "trade@herblocx.com",
  phone: "+62 24 0000 0000",
  ctaHref: "/#contact",
  ctaLabel: "Request a quote",
};
