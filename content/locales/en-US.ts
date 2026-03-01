import type { SiteContent } from '../types';

export const content: SiteContent = {
  navbar: {
    logo: { firstName: 'Igor', lastName: 'Ferrão' },
    links: { about: 'About Me', services: 'Services', cases: 'Cases' },
    languageSelectAriaLabel: 'Select language',
    themeToggleAriaLabel: 'Toggle theme',
    paletteAriaLabel: 'Theme',
    paletteMenuAriaLabel: 'Open theme menu',
    languages: [
      { value: 'pt-BR', label: 'Português' },
      { value: 'en-US', label: 'English' },
      { value: 'es-ES', label: 'Español' },
    ],
  },
  hero: {
    eyebrow: "Hey! I'm Igor Ferrão.",
    headline: 'Product Designer, Content Creator, and passionate about creative solutions.',
    subtitle:
      'I craft digital experiences blending strategy, UX, and design. I design products that balance startup speed with corporate scale, currently shaping digital hospitality at Hyatt.',
    ctas: { primary: "Let's Talk", secondary: 'Download CV' },
  },
  about: {
    label: 'ABOUT ME',
    headlineLines: [
      "I'm Ethan Riley, your creative partner in design.",
      'For me, design is all about creating experiences that',
      "really connect with people. It's not just looking good",
    ],
    videoAriaLabel: 'Open video placeholder',
    stats: [
      { label: 'Client satisfaction rate', value: '98%', description: 'Delivering measurable financial impact.' },
      { label: 'Business transformed', value: '99+', description: 'Helping companies grow, perform better.' },
      { label: 'Experience and Expertise', value: '14+', description: 'Trusted and recommended by clients.' },
    ],
  },
  myService: {
    label: 'MY SERVICE',
    title: 'Professional Service Solutions',
    description: 'Tailored digital solutions designed to elevate your business performance, growth, and long-term success.',
    ctas: { primary: 'Hire Me', secondary: 'Watch Video' },
    tabsAriaLabel: 'Service categories',
    tabs: [
      {
        id: 'branding',
        label: 'Branding',
        description:
          'Craft a consistent brand system that communicates value clearly and builds recognition across every touchpoint.',
        imageAlt: 'Branding service preview',
      },
      {
        id: 'web-development',
        label: 'Web Development',
        description:
          'Build fast, responsive websites with clean code, scalable architecture, and performance-focused delivery.',
        imageAlt: 'Web development service preview',
      },
      {
        id: 'web-design',
        label: 'Web Design',
        description:
          'Design user-centered interfaces that look great, feel intuitive, and convert—across mobile and desktop.',
        imageAlt: 'Web design service preview',
      },
      {
        id: 'marketing',
        label: 'Marketing',
        description:
          'Create campaigns and assets that align with your brand and help you reach the right audience with clarity.',
        imageAlt: 'Marketing service preview',
      },
    ],
  },
  caseStudy: {
    label: 'CASE STUDY',
    title: 'Real Results Showcase',
    description: 'Delivering standout experiences that are both visually striking and user-focused.',
  },
  caseStudyDetail: {
    sectionTitles: {
      introduction: 'Introduction',
      coreProblem: 'The Core Problem',
      discoveryResearch: 'Discovery & Research',
      redesignStrategy: 'Redesign Strategy',
      whatWeCrafted: 'What We Crafted',
      businessResults: 'Business Results',
      keyTakeaways: 'Key Takeaways',
      outcomesImpact: 'Outcomes & Impact',
      closingThoughts: 'Closing Thoughts',
    },
    overviewLabels: {
      client: 'Client',
      role: 'Role',
      timeline: 'Timeline',
      services: 'Services',
      deliverables: 'Deliverables',
      tools: 'Tools',
    },
  },
  footer: {
    brandName: 'Igor Ferrão',
    tagline: 'A Product Designer focused on intuitive user experiences.',
    columns: [
      { title: 'Product', links: ['Features', 'Princing', 'Integrations', 'Updates'] },
      { title: 'Resources', links: ['Documentation', 'Guides', 'Blog', 'Support'] },
      { title: 'Company', links: ['About', 'Careers', 'Contact', 'Partners'] },
    ],
    rights: '2026 Igor. All rights reserved',
    verse: 'Rm 10:9',
  },
};
