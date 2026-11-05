<script lang="ts">
  import { NAV_CONTACT, NAV_ITEMS } from "#lib/constants/nav-constant.ts";
  import { Menu, X, Send } from "lucide-svelte";
  import { fly } from "svelte/transition";

  import logoWhite from "#lib/assets/logo/logo_hbcx_white.webp";

  let { currentPath = "" }: { currentPath?: string } = $props();

  let mobileMenuOpen = $state(false);

  const toggleMobileMenu = () => (mobileMenuOpen = !mobileMenuOpen);
  const closeMobileMenu = () => (mobileMenuOpen = false);

  const isActive = (href: string) => {
    if (href.includes("#")) return false;
    return currentPath === href || currentPath.startsWith(href + "/");
  };

  const STAGGER = 35;
</script>

<aside
  class="group/rail fixed inset-y-0 bg-slate-50/20 backdrop-blur-xl left-0 z-50 hidden w-[72px] flex-col justify-between px-3 py-4 transition-[width] duration-300 ease-out hover:w-[264px] focus-within:w-[264px] lg:flex"
  aria-label="Main Navigation"
>
  <div
    class="pointer-events-none fixed inset-0 -z-10 bg-black/20 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover/rail:opacity-100 group-focus-within/rail:opacity-100"
    aria-hidden="true"
  ></div>

  <a
    href="/"
    class="flex h-12 w-full shrink-0 items-center gap-3 overflow-hidden rounded-full bg-[#172E21] px-[11px] shadow-md shadow-black/20"
  >
    <img
      src={logoWhite}
      alt="Herblocx logo"
      class="size-[26px] shrink-0 object-contain"
    />
    <span
      class="font-display whitespace-nowrap text-xl font-semibold tracking-tight text-[#F8F9F2] opacity-0 transition-opacity duration-200 group-hover/rail:opacity-100 group-focus-within/rail:opacity-100"
    >
      HerblocX
    </span>
  </a>

  <nav
    class="-mx-3 flex min-h-0 flex-col gap-3 overflow-y-auto overflow-x-hidden px-3 py-2"
  >
    {#each NAV_ITEMS as item, i (item.key)}
      {@const Icon = item.icon}
      {@const active = isActive(item.href)}
      <a
        href={item.href}
        aria-current={active ? "page" : undefined}
        class="group/link flex h-12 w-full shrink-0 items-center gap-3 overflow-hidden rounded-full px-[13px] shadow-md shadow-black/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3C677]
          {active
          ? 'bg-[#B8892B] text-[#16211A]'
          : 'bg-[#4b514a] text-[#F8F9F2] hover:bg-[#D1D8BE] hover:text-gray-800 focus-visible:bg-[#1F3A2B]'}"
      >
        <Icon size={22} class="shrink-0" />

        <span
          style="--d:{i * STAGGER}ms"
          class="font-display translate-x-[-10px] whitespace-nowrap text-[15px] font-medium opacity-0 transition-[opacity,transform] duration-200
                 group-hover/rail:translate-x-0 group-hover/rail:opacity-100 group-hover/rail:[transition-delay:var(--d)]
                 group-focus-within/rail:translate-x-0 group-focus-within/rail:opacity-100 group-focus-within/rail:[transition-delay:var(--d)]"
        >
          {item.label}
        </span>
      </a>
    {/each}
  </nav>

  <a
    href={NAV_CONTACT.ctaHref}
    class="font-display flex h-12 w-full shrink-0 items-center gap-3 overflow-hidden rounded-full bg-[#172E21] px-[15px] text-[13px] font-semibold text-white shadow-md shadow-black/20 transition-colors hover:bg-[#3B5B46] text-[#F8F9F2]"
  >
    <Send size={18} class="shrink-0" />
    <span
      class="whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover/rail:opacity-100 group-hover/rail:delay-200 group-focus-within/rail:opacity-100 group-focus-within/rail:delay-200"
    >
      {NAV_CONTACT.ctaLabel}
    </span>
  </a>
</aside>

<header
  class="sticky top-0 z-50 w-full border-b border-[#2C4535] bg-[#172E21] lg:hidden"
>
  <div class="flex h-[64px] items-center justify-between px-6">
    <a href="/" class="flex items-center gap-2.5">
      <img
        src={logoWhite}
        alt="Herblocx logo"
        class="size-8 shrink-0 object-contain"
      />
      <span
        class="font-display text-xl font-semibold tracking-tight text-[#F8F9F2]"
      >
        Herblocx
      </span>
    </a>

    <div class="flex items-center gap-3">
      <a
        href={NAV_CONTACT.ctaHref}
        class="font-display inline-flex h-9 items-center rounded-[2px] bg-[#B8892B] px-3.5 text-xs font-semibold text-[#16211A]"
      >
        Quote
      </a>
      <button
        type="button"
        class="p-2 text-[#C6D2BB] transition-colors hover:text-[#F8F9F2] focus:outline-none"
        aria-label="Toggle mobile menu"
        aria-expanded={mobileMenuOpen}
        onclick={toggleMobileMenu}
      >
        {#if mobileMenuOpen}<X size={24} />{:else}<Menu size={24} />{/if}
      </button>
    </div>
  </div>

  {#if mobileMenuOpen}
    <div class="space-y-4 border-t border-[#2C4535] bg-[#172E21] px-6 py-6">
      <nav class="font-display flex flex-col text-base">
        {#each NAV_ITEMS as item, i (item.key)}
          {@const Icon = item.icon}
          <a
            href={item.href}
            onclick={closeMobileMenu}
            in:fly={{ x: -16, duration: 250, delay: i * STAGGER }}
            class="flex items-center gap-3 border-b border-[#2C4535]/50 py-3 text-[#C6D2BB] transition-colors hover:text-[#F8F9F2]"
          >
            <Icon size={18} class="text-[#B8892B]" />
            <span>{item.mobileLabel ?? item.label}</span>
          </a>
        {/each}
      </nav>

      <div class="font-display pt-2 text-xs text-[#9EB394]">
        <p>
          Trade Desk:
          <a href="mailto:{NAV_CONTACT.email}" class="text-[#E3C677] underline">
            {NAV_CONTACT.email}
          </a>
        </p>
        <p class="mt-1">Direct: {NAV_CONTACT.phone}</p>
      </div>
    </div>
  {/if}
</header>
