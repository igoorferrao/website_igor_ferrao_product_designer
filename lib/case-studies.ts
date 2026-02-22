export type Stat = {
  value: string;
  label: string;
};

export type CaseStudySummary = {
  slug: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  leftStat: Stat;
  rightStat: Stat;
  imageSrc: string;
  imageAlt: string;
  variant: 'light' | 'dark';
  imagePosition: 'left' | 'right';
};

export type CaseStudyDetail = {
  slug: string;
  title: string;
  subtitle: string;
  heroImageSrc: string;
  heroImageAlt: string;
  overview: Array<{ label: string; value: string }>;
  introduction: string;
  coreProblems: string[];
  discoveryResearch: string[];
  redesignStrategy: string[];
  whatWeCrafted: string[];
  businessResults: string[];
  keyTakeaways: string[];
  outcomesImpactSummary: string;
  impactMetrics: Stat[];
  closingThoughts: string;
  gallery: Array<{ src: string; alt: string }>;
};

export type CaseStudy = {
  summary: CaseStudySummary;
  detail: CaseStudyDetail;
};

export const caseStudies: CaseStudy[] = [
  {
    summary: {
      slug: 'nova-bank-fintech-dashboard',
      title: 'Smarter Flight Booking UX',
      description: 'Led design for SaaS dashboards, landing pages, and mobile apps',
      challenge: 'Users abandoned the booking funnel when filtering and comparing options.',
      solution: 'Rebuilt search and pricing clarity with a guided booking flow and persistent context.',
      leftStat: { value: '60%', label: 'Increase subscriber' },
      rightStat: { value: '40%', label: 'Grow new user to Contact Us' },
      imageSrc: '/figma-33-220/45760701929f8dee9336d8d798e21c8be31e46d7.png',
      imageAlt: 'Laptop mockup case study preview',
      variant: 'light',
      imagePosition: 'left',
    },
    detail: {
      slug: 'nova-bank-fintech-dashboard',
      title: 'NovaBank - Building a FinTech Dashboard',
      subtitle:
        'A redesign focused on reducing friction in key account actions while improving trust in core financial workflows.',
      heroImageSrc: '/figma-assets/7b6cc944cf8ca20f8e52a603af1c617c94a8e811.png',
      heroImageAlt: 'NovaBank app mockup with floating mobile cards',
      overview: [
        { label: 'Client', value: 'Fintech startup' },
        { label: 'Role', value: 'Lead Product Designer' },
        { label: 'Timeline', value: '8 weeks' },
        { label: 'Services', value: 'UX strategy' },
        { label: 'Deliverables', value: 'UI kit + prototype' },
        { label: 'Tools', value: 'Figma + Notion' },
      ],
      introduction:
        'As a solo product designer, I led the end-to-end redesign of NovaBank dashboard experience to support faster and safer decision making for everyday financial operations.',
      coreProblems: [
        'Navigation depth made frequent tasks feel slow and fragmented.',
        'Low information hierarchy reduced confidence during money movement.',
        'Dense blocks of data made trends hard to read at a glance.',
      ],
      discoveryResearch: [
        'Conducted a UX audit across onboarding, card management, and transfer flows.',
        'Interviewed active users and support agents to identify recurring friction points.',
        'Mapped bottlenecks in analytics to prioritize high-impact screens first.',
      ],
      redesignStrategy: [
        'Built a modular dashboard with clear sections for balance, actions, and activity.',
        'Reduced visual noise and improved spacing to support quick scanning.',
        'Created stronger status patterns for success, pending, and error states.',
      ],
      whatWeCrafted: [
        'Personalized dashboard blocks based on the user usage profile.',
        'A redesigned card management flow with faster freeze/unfreeze actions.',
        'A lightweight design system for faster iteration across product squads.',
      ],
      businessResults: [
        'Task completion speed improved in primary transfer scenarios.',
        'Support tickets tied to transaction confusion reduced after launch.',
        'Feature adoption increased for underused savings goals and recurring transfers.',
      ],
      keyTakeaways: [
        'Progressive disclosure reduced cognitive load during high-risk actions.',
        'Consistency in microcopy materially improved user confidence.',
        'Smaller weekly releases accelerated learning without product instability.',
      ],
      outcomesImpactSummary:
        'The redesign helped NovaBank deliver a calmer and clearer dashboard that improved conversion in core financial tasks and increased trust signals across the experience.',
      impactMetrics: [
        { value: '45%', label: 'Reduce friction rate' },
        { value: '50%', label: 'Completion increase' },
        { value: '33%', label: 'Faster task path' },
        { value: '90%', label: 'Positive feedback' },
      ],
      closingThoughts:
        'This project reinforced that strong UX in finance is not only about clean visuals. It is about making risk-heavy actions feel predictable and safe.',
      gallery: [
        {
          src: '/figma-assets/21cd39231d7d41d5d9f973580b9834b0a4dbf0ac.png',
          alt: 'Tablet product render used in the NovaBank case study',
        },
        {
          src: '/figma-assets/7b6cc944cf8ca20f8e52a603af1c617c94a8e811.png',
          alt: 'Mobile product render used in the NovaBank case study',
        },
      ],
    },
  },
  {
    summary: {
      slug: 'driving-digital-growth',
      title: 'Driving Digital Growth',
      description: 'Driving Digital Growth leverages technology, innovation.',
      challenge: 'The legacy marketing site failed to communicate trust and value quickly.',
      solution: 'A conversion-first IA and modular landing system reduced friction across campaigns.',
      leftStat: { value: '52%', label: 'Qualified lead growth' },
      rightStat: { value: '31%', label: 'Landing page conversion lift' },
      imageSrc: '/figma-33-220/902ef81d2ecf99bd662113cf090f39326690b610.png',
      imageAlt: 'Tablet mockup case study preview',
      variant: 'dark',
      imagePosition: 'right',
    },
    detail: {
      slug: 'driving-digital-growth',
      title: 'GrowthLab - Conversion Platform Refresh',
      subtitle:
        'A web redesign for a growth consultancy focused on storytelling, trust, and better campaign conversion.',
      heroImageSrc: '/figma-assets/6212514260f27e0b62ccc7b0d6f5537f64fa68f5.png',
      heroImageAlt: 'Growth website redesign preview',
      overview: [
        { label: 'Client', value: 'Growth agency' },
        { label: 'Role', value: 'Product Designer' },
        { label: 'Timeline', value: '6 weeks' },
        { label: 'Services', value: 'Web redesign' },
        { label: 'Deliverables', value: 'Component library' },
        { label: 'Tools', value: 'Figma + GA4' },
      ],
      introduction:
        'GrowthLab needed to unify sales narratives and improve conversion consistency across multiple traffic channels without increasing implementation complexity.',
      coreProblems: [
        'Mixed messaging created friction between paid ads and landing pages.',
        'Visual hierarchy was weak on mobile, hiding primary CTAs.',
        'Reusable sections were missing, making release cycles slow.',
      ],
      discoveryResearch: [
        'Benchmarked top-performing campaigns and click maps.',
        'Mapped drop-offs by device and traffic source.',
        'Captured insights from sales calls to align copy with objections.',
      ],
      redesignStrategy: [
        'Defined a modular page architecture for repeated campaign launches.',
        'Built trust blocks earlier in the scroll path for mobile visitors.',
        'Reduced style variance with a componentized visual language.',
      ],
      whatWeCrafted: [
        'Reusable hero, proof, and pricing sections for high-speed page assembly.',
        'Improved CTA hierarchy with context-driven microcopy.',
        'Updated testimonial patterns with role-specific social proof.',
      ],
      businessResults: [
        'Higher conversion rates in paid traffic destinations.',
        'Lower handoff time from design to implementation.',
        'Improved message consistency across sales and marketing touchpoints.',
      ],
      keyTakeaways: [
        'Content sequence matters as much as visual polish for conversion.',
        'Shared components reduce rework and sustain campaign quality.',
        'Behavioral analytics should drive iteration priorities.',
      ],
      outcomesImpactSummary:
        'The refresh aligned performance marketing with product storytelling, unlocking stronger conversion and faster campaign execution with a lean design system.',
      impactMetrics: [
        { value: '52%', label: 'Qualified leads up' },
        { value: '47%', label: 'Faster page launches' },
        { value: '31%', label: 'Conversion uplift' },
        { value: '88%', label: 'Stakeholder approval' },
      ],
      closingThoughts:
        'Strong growth design balances persuasion and clarity. The best results came from pairing clearer narratives with reusable systems.',
      gallery: [
        {
          src: '/figma-assets/6212514260f27e0b62ccc7b0d6f5537f64fa68f5.png',
          alt: 'Landing page overview for GrowthLab redesign',
        },
        {
          src: '/figma-assets/5c2c8c5ebec97d6357f87e4fd8a81bace5438a50.png',
          alt: 'Editorial mockup used as brand collateral for GrowthLab',
        },
      ],
    },
  },
  {
    summary: {
      slug: 'designing-future-success',
      title: 'Designing Future Success',
      description: 'Led design for SaaS dashboards, landing pages, and mobile apps',
      challenge: 'Product education was fragmented and new users churned in onboarding.',
      solution: 'Introduced guided learning journeys and role-based dashboards for activation.',
      leftStat: { value: '42%', label: 'Activation rate increase' },
      rightStat: { value: '36%', label: 'Time-to-value reduction' },
      imageSrc: '/figma-33-220/e6d534a3f6d9b26f956c874e277db8f92f8c25d0.png',
      imageAlt: 'Tablet product case study preview',
      variant: 'light',
      imagePosition: 'left',
    },
    detail: {
      slug: 'designing-future-success',
      title: 'Skilllex - Learning Product Experience',
      subtitle:
        'A UX redesign focused on improving onboarding clarity and learner engagement in a digital education platform.',
      heroImageSrc: '/figma-assets/6212514260f27e0b62ccc7b0d6f5537f64fa68f5.png',
      heroImageAlt: 'Skilllex platform visual overview',
      overview: [
        { label: 'Client', value: 'EdTech platform' },
        { label: 'Role', value: 'Product Designer' },
        { label: 'Timeline', value: '10 weeks' },
        { label: 'Services', value: 'UX + UI design' },
        { label: 'Deliverables', value: 'Flows + prototypes' },
        { label: 'Tools', value: 'Figma + Hotjar' },
      ],
      introduction:
        'Skilllex needed a clearer experience for first-time learners, especially in the first seven days where dropout was highest.',
      coreProblems: [
        'New users had low clarity on where to start and what to do next.',
        'Course pages lacked confidence signals and progress guidance.',
        'The dashboard did not adapt to learner goals or behavior.',
      ],
      discoveryResearch: [
        'Mapped onboarding drop-off across three learner profiles.',
        'Analyzed support conversations to uncover confusion patterns.',
        'Tested multiple dashboard structures through interactive prototypes.',
      ],
      redesignStrategy: [
        'Introduced guided paths based on learner intent at signup.',
        'Reframed dashboard cards around progress and next actions.',
        'Added stronger content previews and estimated effort cues.',
      ],
      whatWeCrafted: [
        'A role-aware home dashboard for beginners and returning learners.',
        'A simplified onboarding sequence with progress checkpoints.',
        'Course discovery surfaces with clearer category and level signaling.',
      ],
      businessResults: [
        'Higher first-session completion for onboarding milestones.',
        'Increased engagement in recommended learning paths.',
        'Lower support demand for basic navigation questions.',
      ],
      keyTakeaways: [
        'Contextual guidance improves confidence more than extra tutorials.',
        'Progress visibility helps users commit to longer journeys.',
        'Small UX improvements in onboarding compound into major retention gains.',
      ],
      outcomesImpactSummary:
        'The redesign improved clarity and motivation in the early learner journey, increasing activation while reducing time-to-value for new users.',
      impactMetrics: [
        { value: '42%', label: 'Activation up' },
        { value: '36%', label: 'Time-to-value down' },
        { value: '28%', label: 'Retention lift' },
        { value: '91%', label: 'Positive learner feedback' },
      ],
      closingThoughts:
        'Learning products succeed when they reduce uncertainty. The redesign centered on making progress obvious and action simple from day one.',
      gallery: [
        {
          src: '/figma-assets/6212514260f27e0b62ccc7b0d6f5537f64fa68f5.png',
          alt: 'Skilllex redesigned homepage',
        },
        {
          src: '/figma-assets/21cd39231d7d41d5d9f973580b9834b0a4dbf0ac.png',
          alt: 'Skilllex course promotional mockup',
        },
      ],
    },
  },
];

export const caseStudyCards = caseStudies.map((item) => ({
  ...item.summary,
  href: `/case-studies/${item.summary.slug}`,
}));

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((item) => item.summary.slug === slug);
}

export function getCaseStudySlugs() {
  return caseStudies.map((item) => ({ slug: item.summary.slug }));
}
