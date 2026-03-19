# Web Development Portfolio Template

A customizable, award-inspired web development portfolio built with vanilla JS and Vite. Features smooth GSAP animations, scroll-triggered effects, and a single config file to personalize everything.

## Customization

Edit `js/config.ts` — it's the only file you need to touch:

```ts
export const CONFIG = {
  identity: { firstName, lastName, fullName, logoText },
  seo:      { homeTitle, contactTitle },
  contact:  { email, twitter },
  social:   { github, linkedin },
  hero:     { resumeUrl },
  about:    { bio, tagline, portraitSrc },
  featuredProjects: [ /* 4 entries */ ],
  services:         [ /* 4 entries */ ],
  contactCta:       { tagline, buttonText },
  footer:           { copyright, portfolioUrl, blogUrl, twitter },
  images:           { totalWorkItems },
};
```

## Setup

```bash
npm install
npm run dev       # http://localhost:5173
npm run build
npm run preview
```

## Stack

- **Vite** — build tool
- **GSAP + ScrollTrigger** — animations
- **Lenis** — smooth scroll
- **TypeScript** — config file only

## Structure

```
js/
  config.ts        ← edit this to personalize
  init.ts          ← injects config into DOM
  hero.js          ← hero image cycling
  featured-work.js ← horizontal scroll showcase
  services.js      ← stacked cards
  footer.js        ← particle explosion
  contact.js       ← mouse trail + form
css/               ← stylesheets per section
public/images/     ← replace with your own images
```

## License

MIT
