// js/config.ts
// ============================================================
// PORTFOLIO CONFIGURATION
// Edit this file to personalize the portfolio.
// ============================================================

export const CONFIG = {
  // ── Personal Identity ──────────────────────────────────────
  identity: {
    firstName: "First Name",
    lastName: "Last Name",
    fullName: "First Name Last Name",
    /** Displayed in the navbar logo, e.g. "P ✦ K" */
    logoText: "X ✦ Y",
  },

  // ── SEO / Page Titles ──────────────────────────────────────
  seo: {
    homeTitle: "Your Name | Portfolio",
    contactTitle: "Contact | Your Name | Portfolio",
  },

  // ── Contact Information ────────────────────────────────────
  contact: {
    email: "your.email@example.com",
    twitter: {
      handle: "@yourusername",
      url: "https://x.com/yourusername",
    },
  },

  // ── Social Links ───────────────────────────────────────────
  social: {
    github: {
      label: "Github",
      url: "https://github.com/yourusername",
    },
    linkedin: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/yourusername/",
    },
  },

  // ── Hero Section ───────────────────────────────────────────
  hero: {
    resumeUrl: "https://your-resume-link.com",
  },

  // ── About Section ──────────────────────────────────────────
  about: {
    bio: "Write your bio here. Describe your skills, passion, and what makes you unique as a developer and designer.",
    tagline: "Design / Develop / Repeat",
    portraitSrc: "/images/services-header/portrait.jpeg",
  },

  // ── Featured Projects (scroll showcase) ───────────────────
  // Exactly 4 entries. imageIndex maps to /images/work-items/work-item-N.jpg
  featuredProjects: [
    { title: "Project One", imageIndex: 1, url: "#" },
    { title: "Project Two", imageIndex: 2, url: "#" },
    { title: "Project Three", imageIndex: 4, url: "#" },
    { title: "Project Four", imageIndex: 5, url: "#" },
    { title: "Project Five", imageIndex: 6, url: "#" },

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
    copyright: "© - Your Name // 2025",
    portfolioUrl: "https://your-portfolio-url.com",
    blogUrl: "https://your-blog-url.com",
    twitter: {
      label: "Twitter",
      url: "https://x.com/yourusername",
    },
  },

  // ── Images ─────────────────────────────────────────────────
  // Number of work-item images in /images/work-items/
  images: {
    totalWorkItems: 10,
  },
};
