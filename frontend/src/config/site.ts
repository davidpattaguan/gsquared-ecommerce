import type { FooterItem, MainNavItem } from "@/types";

export type SiteConfig = typeof siteConfig;

const links = {
  github: "https://github.com/davidpattaguan",
};

export const siteConfig = {
  name: "Carmmerce",
  description: "An open source e-commerce for pre-loved cars ",
  url: "",
  ogImage: "",
  links,
  mainNav: [
    {
      title: "Menu",
      items: [
        {
          title: "Cars",
          href: "/products",
          description: "Pre-loved Car Selection",
          items: [],
        },
        {
          title: "Store Locator",
          href: "/stores",
          description: "Find Stores near you",
          items: [],
        },
        {
          title: "Orders",
          href: "/orders",
          description: "View Orders",
          items: [],
        },
      ],
    },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "Credits",
      items: [
        {
          title: "shadcn/ui",
          href: "https://ui.shadcn.com",
          external: true,
        },
      ],
    },
    {
      title: "Help",
      items: [
        {
          title: "About",
          href: "/about",
          external: false,
        },
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
        {
          title: "Terms",
          href: "/terms",
          external: false,
        },
        {
          title: "Privacy",
          href: "/privacy",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "GitHub",
          href: links.github,
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
};
