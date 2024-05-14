import type { FooterItem, MainNavItem } from "~/types";

const links = {
  github: "https://github.com/iboughtbed/jotai-flow",
};

export const siteConfig = {
  name: "Jotai Flow",
  url: "http://localhost:3000", 
  ogImage: "",
  description: "A habit app",
  links,
  mainNav: [
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Explore", href: "/explore" },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "Help",
      items: [
        { title: "About", href: "/about", external: false },
        { title: "Contact", href: "/contact", external: false },
        { title: "Terms", href: "/terms", external: false },
        { title: "Privacy", href: "/privacy", external: false },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "Github",
          href: links.github,
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
};

export type SiteConfig = typeof siteConfig;
