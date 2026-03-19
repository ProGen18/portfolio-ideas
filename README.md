# Portfolio Ideas

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Licence](https://img.shields.io/badge/licence-MIT-green)
![Config-driven](https://img.shields.io/badge/config--driven-config.ts-blueviolet)

A growing collection of portfolio designs, built from scratch or redesigned from existing ones. Each template is wired to a single `config.ts` file so you can make it yours without touching the actual components.

---

## The idea

Most portfolio templates either look the same or require you to dig through the whole codebase just to change your name and tech stack. These ones don't. Everything you'd want to edit name, bio, links, projects, skills, colors — lives in one place.

---

## How to use a template

```bash
git clone https://github.com/your-username/portfolio-ideas
cd portfolio-ideas/<template-name>
npm install
npm run dev
```

Then open `config.ts` and fill it in:

```ts
export const config = {
  name: "Your Name",
  role: "Full-stack Developer",
  bio: "A short sentence about you.",
  links: {
    github: "https://github.com/you",
    linkedin: "https://linkedin.com/in/you",
  },
  projects: [
    {
      title: "My Project",
      description: "What it does.",
      url: "https://github.com/you/project",
      tags: ["React", "NestJS"],
    },
  ],
  skills: ["TypeScript", "React", "Node.js"],
};
```

That's it. No need to touch anything else.

---

## Templates

| Name | Stack | Status |
|------|-------|--------|
| ciel | TypeScript | ✅ Available |
| transitions | TypeScript | ✅ Available |
| *(coming soon)* | — | — |

---

## Contributing

Found a design you'd like to see here, or built one yourself? PRs are welcome just make sure the `config.ts` pattern is followed so it stays easy to reuse.

---

## Licence

MIT — do whatever you want with it, personal or commercial.
