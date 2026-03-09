export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  navbar: {
    logo: {
      fullName: string;
      location: string;
      avatarAlt: string;
    };
    links: {
      about: string;
      services: string;
      cases: string;
    };
    menu: {
      openAriaLabel: string;
      closeAriaLabel: string;
      dialogAriaLabel: string;
      title: string;
      navAriaLabel: string;
    };
    languageSelectAriaLabel: string;
    themeToggleAriaLabel: string;
    paletteAriaLabel: string;
    paletteMenuAriaLabel: string;
    themeOptions: Array<{
      value: 'default' | 'nature' | 'modern' | 'claude';
      label: string;
    }>;
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
    portraitCard: {
      name: string;
      descriptionLine1: string;
      descriptionLine2: string;
      imageAlt: string;
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
    cardLabels: {
      challenge: string;
      solution: string;
      cta: string;
    };
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
    lightbox: {
      openImageAriaLabel: string;
      closeImageAriaLabel: string;
      dialogAriaLabel: string;
    };
    overviewLabels: {
      client: string;
      category: string;
      role: string;
      timeline: string;
      services: string;
      deliverables: string;
      tools: string;
      myRole: string;
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
