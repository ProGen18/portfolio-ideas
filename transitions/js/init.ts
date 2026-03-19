// js/init.ts
// Injects CONFIG values into the DOM on page load.
// Elements are targeted by id attributes added to index.html and contact.html.

import { CONFIG } from './config';

document.addEventListener('DOMContentLoaded', () => {
  // ── Page title ──────────────────────────────────────────────
  const isContactPage = !!document.querySelector('.page.contact-page');
  document.title = isContactPage ? CONFIG.seo.contactTitle : CONFIG.seo.homeTitle;

  // ── Logo (both pages) ───────────────────────────────────────
  const navLogo = document.getElementById('nav-logo');
  if (navLogo) navLogo.textContent = CONFIG.identity.logoText;

  // ── HOME PAGE ───────────────────────────────────────────────

  // Hero names
  const heroFirstName = document.getElementById('hero-first-name');
  if (heroFirstName) heroFirstName.textContent = CONFIG.identity.firstName;

  const heroLastName = document.getElementById('hero-last-name');
  if (heroLastName) heroLastName.textContent = CONFIG.identity.lastName;

  // Resume link
  const heroResumeLink = document.getElementById('hero-resume-link') as HTMLAnchorElement | null;
  if (heroResumeLink) heroResumeLink.href = CONFIG.hero.resumeUrl;

  // Nav social links (in menu overlay)
  const navGithub = document.getElementById('nav-github') as HTMLAnchorElement | null;
  if (navGithub) {
    navGithub.href = CONFIG.social.github.url;
    navGithub.textContent = CONFIG.social.github.label;
  }

  const navLinkedin = document.getElementById('nav-linkedin') as HTMLAnchorElement | null;
  if (navLinkedin) {
    navLinkedin.href = CONFIG.social.linkedin.url;
    navLinkedin.textContent = CONFIG.social.linkedin.label;
  }

  const navEmailLink = document.getElementById('nav-email-link') as HTMLAnchorElement | null;
  if (navEmailLink) {
    navEmailLink.href = `mailto:${CONFIG.contact.email}`;
    navEmailLink.textContent = CONFIG.contact.email;
  }

  // About section
  const aboutFirstName = document.getElementById('about-first-name');
  if (aboutFirstName) aboutFirstName.textContent = CONFIG.identity.firstName;

  const aboutBio = document.getElementById('about-bio');
  if (aboutBio) aboutBio.textContent = CONFIG.about.bio;

  const aboutTagline = document.getElementById('about-tagline');
  if (aboutTagline) aboutTagline.textContent = CONFIG.about.tagline;

  const aboutPortrait = document.getElementById('about-portrait') as HTMLImageElement | null;
  if (aboutPortrait) {
    aboutPortrait.src = CONFIG.about.portraitSrc;
    aboutPortrait.alt = `${CONFIG.identity.fullName} Portrait`;
  }

  // Featured project titles + thumbnail images
  CONFIG.featuredProjects.forEach((project, index) => {
    const titleEl = document.getElementById(`featured-title-${index + 1}`);
    if (titleEl) titleEl.textContent = project.title;

    const imgEl = document.getElementById(`featured-img-${index + 1}`) as HTMLImageElement | null;
    if (imgEl) imgEl.src = `/images/work-items/work-item-${project.imageIndex}.jpg`;
  });

  // Service card titles
  CONFIG.services.forEach((service, index) => {
    const titleEl = document.getElementById(`service-title-${index + 1}`);
    if (titleEl) titleEl.textContent = service.title;
  });

  // Contact CTA
  const ctaTagline = document.getElementById('cta-tagline');
  if (ctaTagline) ctaTagline.textContent = CONFIG.contactCta.tagline;

  const ctaButtonText = document.getElementById('cta-button-text');
  if (ctaButtonText) ctaButtonText.textContent = CONFIG.contactCta.buttonText;

  // Footer
  const footerName = document.getElementById('footer-name');
  if (footerName) footerName.textContent = CONFIG.identity.fullName;

  const footerCopyright = document.getElementById('footer-copyright');
  if (footerCopyright) footerCopyright.textContent = CONFIG.footer.copyright;

  const footerLinkedin = document.getElementById('footer-linkedin') as HTMLAnchorElement | null;
  if (footerLinkedin) {
    footerLinkedin.href = CONFIG.social.linkedin.url;
    footerLinkedin.textContent = CONFIG.social.linkedin.label;
  }

  const footerGithub = document.getElementById('footer-github') as HTMLAnchorElement | null;
  if (footerGithub) {
    footerGithub.href = CONFIG.social.github.url;
    footerGithub.textContent = CONFIG.social.github.label;
  }

  const footerTwitter = document.getElementById('footer-twitter') as HTMLAnchorElement | null;
  if (footerTwitter) {
    footerTwitter.href = CONFIG.footer.twitter.url;
    footerTwitter.textContent = CONFIG.footer.twitter.label;
  }

  const footerPortfolio = document.getElementById('footer-portfolio') as HTMLAnchorElement | null;
  if (footerPortfolio) footerPortfolio.href = CONFIG.footer.portfolioUrl;

  const footerBlog = document.getElementById('footer-blog') as HTMLAnchorElement | null;
  if (footerBlog) footerBlog.href = CONFIG.footer.blogUrl;

  // ── CONTACT PAGE ────────────────────────────────────────────

  const contactEmailLink = document.getElementById('contact-email-link') as HTMLAnchorElement | null;
  if (contactEmailLink) {
    contactEmailLink.href = `mailto:${CONFIG.contact.email}`;
    contactEmailLink.textContent = CONFIG.contact.email;
  }

  const contactTwitterLink = document.getElementById('contact-twitter-link') as HTMLAnchorElement | null;
  if (contactTwitterLink) {
    contactTwitterLink.href = CONFIG.contact.twitter.url;
    contactTwitterLink.textContent = CONFIG.contact.twitter.handle;
  }
});
