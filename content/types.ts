export type SiteContent = {
  navbar: {
    logo: {
      firstName: string;
      lastName: string;
    };
    links: {
      about: string;
      services: string;
      cases: string;
    };
    languageSelectAriaLabel: string;
    themeToggleAriaLabel: string;
    paletteAriaLabel: string;
    paletteMenuAriaLabel: string;
    languages: Array<{
      value: 'pt-BR' | 'en-US' | 'es-ES';
      label: string;
    }>;
  };
  hero: {
    eyebrow: string;
    headline: string;
    title?: {
      line1: string;
      line2: string;
    };
    subtitle: string;
    ctas: {
      primary: string;
      secondary: string;
    };
    socialProof?: {
      title: string;
      subtitle: string;
    };
  };
  about: {
    label: string;
    headlineLines: [string, string, string];
    videoAriaLabel: string;
    stats: Array<{
      label: string;
      value: string;
      description: string;
    }>;
  };
  myService: {
    label: string;
    title: string;
    description: string;
    ctas: {
      primary: string;
      secondary: string;
    };
    tabsAriaLabel: string;
    tabs: Array<{
      id: string;
      label: string;
      description: string;
      imageAlt: string;
    }>;
  };
  caseStudy: {
    label: string;
    title: string;
    description: string;
  };
  caseStudyDetail: {
    sectionTitles: {
      introduction: string;
      coreProblem: string;
      discoveryResearch: string;
      redesignStrategy: string;
      whatWeCrafted: string;
      businessResults: string;
      keyTakeaways: string;
      outcomesImpact: string;
      closingThoughts: string;
    };
    overviewLabels: {
      client: string;
      role: string;
      timeline: string;
      services: string;
      deliverables: string;
      tools: string;
    };
  };
  footer: {
    brandName: string;
    tagline: string;
    columns: Array<{
      title: string;
      links: string[];
    }>;
    rights: string;
    verse: string;
  };
};
