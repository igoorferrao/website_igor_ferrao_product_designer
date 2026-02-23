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
    title: { line1: 'Freelance Web Designer', line2: 'from Brazil' },
    subtitle: 'I specialize in delivering designs that are not only visually striking but also impactful.',
    ctas: { primary: "Let's Talk", secondary: 'Download CV' },
    socialProof: { title: 'Loved by founders globally', subtitle: '5K Clients Word-Wide' },
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
      { id: 'branding', label: 'Branding', imageAlt: 'Branding service preview' },
      { id: 'web-development', label: 'Web Development', imageAlt: 'Web development service preview' },
      { id: 'web-design', label: 'Web Design', imageAlt: 'Web design service preview' },
      { id: 'marketing', label: 'Marketing', imageAlt: 'Marketing service preview' },
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
