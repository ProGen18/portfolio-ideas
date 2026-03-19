import * as THREE from "three";
import { FooterLink, Project, WorkTimelinePoint } from "./types";

export const CONFIG = {
  name: "Your Name",
  headLine: "Hi, I am Stéphane TALAB.",

  // Localized UI texts and section titles
  ui: {
    sections: {
      experience: "experience",
      work: "WORK AND EDUCATION",
      projects: "SIDE PROJECTS",
    },
    hints: {
      scroll: "SCROLL",
      pan: "PAN",
    }
  },

  doorWords: [
    "FRONTEND ENGINEER",
    "DESIGNER. DEVELOPER",
    "DESIGNER. DUMBASS.",
    "DJ. MELOMANIAC",
    "GAMER. CREATIVE",
    "CREATIVE. OPTIMIST",
  ],
  seo: {
    title: "Stéphane TALAB - Portfolio",
    description: "A frontend developer by profession, a creative at heart.",
    keywords: "Your Name, Frontend Engineer, React Developer, Portfolio",
    authors: [{ name: "Your Name" }],
    creator: "Your Name",
    publisher: "Your Name",
    openGraph: {
      title: "Your Name - Portfolio",
      description: "Frontend engineer by profession, creative at heart.",
      url: "https://your-website.com",
      siteName: "Your Name's Portfolio",
      locale: "en_US",
      type: "website" as const,
    },
  },
  analytics: {
    googleAnalyticsId: "",
  },
  footerLinks: [
    {
      name: 'LinkedIn',
      hoverText: 'Connect with me',
      icon: 'icons/linkedin.svg',
      url: 'https://www.linkedin.com/in/your-linkedin/',
    },
    {
      name: 'GitHub',
      hoverText: 'Open Sourcing',
      icon: 'icons/github.svg',
      url: 'https://github.com/your-github',
    },
    {
      name: 'Spotify',
      hoverText: 'Curated playlists',
      icon: 'icons/spotify.svg',
      url: 'https://open.spotify.com/user/your-spotify',
    },
    {
      name: 'Instagram',
      hoverText: '@yourusername',
      icon: 'icons/instagram.svg',
      url: 'https://www.instagram.com/yourusername/',
    },
    {
      name: 'Resume',
      hoverText: 'Download',
      icon: 'icons/file.svg',
      url: './Your_Name_Resume.pdf',
    }
  ] as FooterLink[],
  projects: [
    {
      title: 'Angular Gulp Seed',
      date: 'Aug 2016',
      subtext: 'A basic starter project to initialize project using AngularJS and Gulp. It follows MVC architecture and uses standard app structure.',
      url: 'https://github.com/your-github/angular-gulp-seed',
    },
    {
      title: 'State.js',
      date: 'Jul 2020',
      subtext: 'A lightweight library for turning JS objects into observables, providing a convenient API for state management and manipulation.',
      url: 'https://github.com/your-github/state.js',
    },
    {
      title: 'change-host',
      date: 'Jul 2020',
      subtext: 'A CLI tool to manage /etc/hosts entries for local development. It enables quick and easy mapping of IPs to URLs with a single command.',
      url: 'https://github.com/your-github/change-host',
    },
    {
      title: 'Vaccine Slots Discord Bot',
      date: 'May 2021',
      subtext: 'A Discord Bot that sends alerts for COVID-19 vaccine availability based on PIN/district using public APIs.',
      url: 'https://github.com/your-github/vaccine-slots-discord-bot',
    },
    {
      title: 'Chat bot',
      date: 'Aug 2024',
      subtext: 'A streaming chatbot that allows users to switch between different LLMs with custom API keys.',
      url: 'https://github.com/your-github/chat-bot-vercel',
    },
    {
      title: 'Word Game',
      date: 'Oct 2024',
      subtext: 'This word game app offers single and multiplayer modes where players take turns forming words, each starting with the last letter of the previous word.',
      url: 'https://github.com/your-github/word-game',
    },
    {
      title: 'DJ Gig',
      date: 'Mar 2025',
      subtext: 'Hosted a Sundowner event which was recorded and is out on YouTube. Furthermore, I performed a UKG/140 DJ set at a local club.',
      url: 'https://www.youtube.com/',
    },
    {
      title: 'Portfolio',
      date: 'Apr 2025',
      subtext: '[Enter a meta joke].',
      url: 'https://github.com/your-github/your-portfolio',
    }, {
      title: 'Portfolio',
      date: 'Apr 2025',
      subtext: '[Enter a meta joke].',
      url: 'https://github.com/your-github/your-portfolio',
    },

  ] as Project[],
  workTimeline: [
    {
      point: new THREE.Vector3(0, 0, 0),
      year: '2014',
      title: 'IIT Roorkee',
      subtitle: 'Electrical Engineering',
      position: 'right',
    },
    {
      point: new THREE.Vector3(-4, -4, -3),
      year: '2016',
      title: 'XPrep',
      subtitle: 'Frontend Intern',
      position: 'left',
    },
    {
      point: new THREE.Vector3(-3, -1, -6),
      year: '2017',
      title: 'Headout',
      subtitle: 'Software Developer Intern',
      position: 'left',
    },
    {
      point: new THREE.Vector3(0, -1, -10),
      year: '2018',
      title: 'Cohesity',
      subtitle: 'Member of Technical Staff',
      position: 'left',
    },
    {
      point: new THREE.Vector3(1, 1, -12),
      year: new Date().toLocaleDateString('default', { year: 'numeric' }),
      title: '?',
      subtitle: '???',
      position: 'right',
    }, {
      point: new THREE.Vector3(-2, 0, -15), // x=-2 (gauche), y=0 (centre), z=-15 (plus profond)
      year: '2026',
      title: 'Nouvelle Expérience',
      subtitle: 'Mon nouveau rôle',
      position: 'left', // Alterne entre 'left' et 'right' pour que le texte ne se superpose pas
    }

  ] as WorkTimelinePoint[],
};
