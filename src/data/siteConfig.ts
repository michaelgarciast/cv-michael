import type { SiteConfig } from "@types";

export const SITE_CONFIG: SiteConfig = {
  // Site metadata
  title: "Michael Garcia — Desarrollador de Software",
  author: "Michael Garcia",
  description:
    "Ingeniero de Software radicado en Bogotá, Colombia. Me especializo en desarrollo web, y mantenimiento de aplicaciones web.",
  lang: "es",
  // Header links
  siteLogo: "/../assets/images/profile/alejandro-small.jpg",
  navLinks: [
    { text: "Experiencia", href: "#experience" },
    { text: "Educación", href: "#education" },
    { text: "Portafolio", href: "#projects" },
    { text: "Sobre mí", href: "#about" },
  ],
  //Footer links
  socialLinks: [
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/michael-steven-garcia-santa",
    },
    { text: "Github", href: "https://github.com/michaelgarciast/cv-michael" },
    { text: "Dev", href: "https://dev.to/michael_gs" },
  ],
  socialImage: "/../assets/images/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};
