<script lang="ts">
  import type { Component, Snippet } from "svelte";
  import type { LucideProps } from "@lucide/svelte";

  type ButtonIcon = Component<LucideProps>;

  interface Props {
    href?: string;
    variant?: "primary" | "secondary" | "outline" | "outline-secondary";
    size?: "sm" | "md" | "lg";
    icon?: ButtonIcon;
    iconPosition?: "left" | "right";
    class?: string;
    type?: "button" | "submit" | "reset";
    children?: Snippet;
    [key: string]: unknown;
  }

  let {
    href,
    variant = "primary",
    size = "lg",
    icon: Icon,
    iconPosition = "right",
    class: customClass = "",
    type = "button",
    children,
    ...restProps
  }: Props = $props();

  const baseStyles =
    "inline-flex items-center rounded-xl justify-center font-display font-semibold transition-colors duration-150 select-none cursor-pointer";

  const variantStyles = {
    primary: "bg-[#1b2e22] hover:bg-[#3B5B46] text-[#F8F9F2]",
    secondary:
      "bg-[#4f635c] hover:bg-[#7ba591] text-[#F8F9F2] border border-[#3B5B46]",
    outline:
      "border border-[#B8892B] text-[#E3C677] hover:bg-[#B8892B] hover:text-[#16211A]",

    "outline-secondary":
      "border-2 border-[#FBF3D5] text-[#FBF3D5] hover:bg-[#FBF3D5] hover:text-[#16211A]",
  };

  const sizeStyles = {
    sm: "h-9 px-3.5 text-xs gap-1.5",
    md: "h-10 px-5 text-[13px] gap-2",
    lg: "h-16 px-7 text-xl gap-2.5",
  };

  const iconSizeMap = {
    sm: 14,
    md: 16,
    lg: 23,
  };

  const computedClasses = $derived(
    `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${customClass}`.trim(),
  );
</script>

{#snippet content()}
  {#if Icon && iconPosition === "left"}
    <Icon size={iconSizeMap[size]} />
  {/if}

  {#if children}
    {@render children()}
  {/if}

  {#if Icon && iconPosition === "right"}
    <Icon size={iconSizeMap[size]} />
  {/if}
{/snippet}

{#if href}
  <a {href} class={computedClasses} {...restProps}>
    {@render content()}
  </a>
{:else}
  <button {type} class={computedClasses} {...restProps}>
    {@render content()}
  </button>
{/if}
