// js/config.ts
// ============================================================
// PORTFOLIO CONFIGURATION
// Edit this file to personalize the portfolio.
// ============================================================

export const CONFIG = {
  // ── Personal Identity ──────────────────────────────────────
  identity: {
    firstName: "Prashant",
    lastName: "Koirala",
    fullName: "Prashant Koirala",
    /** Displayed in the navbar logo, e.g. "P ✦ K" */
    logoText: "P ✦ K",
  },

  // ── SEO / Page Titles ──────────────────────────────────────
  seo: {
    homeTitle: "Prashant Koirala | Portfolio",
    contactTitle: "Contact | Prashant Koirala | Portfolio",
  },

  // ── Contact Information ────────────────────────────────────
  contact: {
    email: "prashantkoirala465@gmail.com",
    twitter: {
      handle: "@arkynox_",
      url: "https://x.com/arkynox_",
    },
  },

  // ── Social Links ───────────────────────────────────────────
  social: {
    github: {
      label: "Github",
      url: "https://github.com/prashantkoirala465",
    },
    linkedin: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/prashantkoirala/",
    },
  },

  // ── Hero Section ───────────────────────────────────────────
  hero: {
    resumeUrl:
      "https://drive.google.com/file/d/1lhunYlVGdRqDiOsPf6xECVWj0x6tDbzR/view?usp=sharing",
  },

  // ── About Section ──────────────────────────────────────────
  about: {
    bio: "I'm a designer and full-stack developer who's obsessed with creating award-worthy digital experiences. From crafting pixel-perfect interfaces to architecting robust backend systems, I live at the intersection where beautiful design meets clean code. My work draws inspiration from the best of Awwwards — those jaw-dropping sites that make you pause mid-scroll and wonder \"how did they do that?\"",
    tagline: "Code / Design / Craft / Repeat",
    portraitSrc: "/images/services-header/portrait.jpeg",
  },

  // ── Featured Projects (scroll showcase) ───────────────────
  // Exactly 4 entries. imageIndex maps to /images/work-items/work-item-N.jpg
  featuredProjects: [
    { title: "Triad Portfolio",   imageIndex: 1, url: "#" },
    { title: "Pinnacle Urja",     imageIndex: 2, url: "#" },
    { title: "Ocean Education",   imageIndex: 4, url: "#" },
    { title: "Sign2Text",         imageIndex: 5, url: "#" },
  ],

  // ── Services (stacked cards section) ──────────────────────
  services: [
    { title: "Frontend Development" },
    { title: "Backend Development" },
    { title: "UI/UX Design" },
    { title: "Web Applications" },
  ],

  // ── Contact CTA section ────────────────────────────────────
  contactCta: {
    tagline: "Let's build something amazing together",
    buttonText: "Get in touch",
  },

  // ── Footer ─────────────────────────────────────────────────
  footer: {
    copyright: "© - Prashant Koirala // 2025",
    portfolioUrl: "https://www.prashantkoirala.info.np",
    blogUrl: "https://prashantkoirala.hashnode.dev/",
    twitter: {
      label: "Twitter",
      url: "https://x.com/arkynox_",
    },
  },

  // ── Images ─────────────────────────────────────────────────
  // Number of work-item images in /images/work-items/
  images: {
    totalWorkItems: 10,
  },
};
