import type { Locale } from '@/lib/i18n/locales';
import { defaultLocale } from '@/lib/i18n/locales';
import { getLocalizedPath } from '@/lib/i18n/routing';
import { assetPath } from '@/lib/asset-path';

export type Stat = {
  value: string;
  label: string;
};

export type CaseStudySummary = {
  slug: string;
  title: string;
  heroTitle?: string;
  description: string;
  challenge: string;
  solution: string;
  leftStat: Stat;
  rightStat: Stat;
  imageSrc: string;
  imageAlt: string;
  variant: 'light' | 'dark';
  imagePosition: 'left' | 'right';
  isComingSoon?: boolean;
  comingSoonLabel?: string;
};

export type CaseStudyDetail = {
  slug: string;
  title: string;
  subtitle: string;
  heroImageSrc: string;
  heroImageAlt: string;
  overview: Array<{ label: string; value: string | string[] }>;
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

type CaseStudyCard = CaseStudySummary & { href: string };

const sharedAssets = {
  greenn: {
    hero: assetPath('/imageHero_GreennDashboard.png'),
    collageResearch: assetPath('/GreennDashboard_00.png'),
    collageResults: assetPath('/GreennDashboard_03.png'),
    impactImage1: assetPath('/GreennDashboard_01.png'),
    impactImage2: assetPath('/GreennDashboard_04.png'),
  },
  growthlab: {
    preview: assetPath('/imageHero_LearningArea.png'),
    hero: assetPath('/6212514260f27e0b62ccc7b0d6f5537f64fa68f5.png'),
    gallery: assetPath('/acc46efb158bbff6d403d8d9595c9ccc35beb827.png'),
  },
  skilllex: {
    preview: assetPath('/imageHero_LearningAreaResponsive.png'),
    hero: assetPath('/6212514260f27e0b62ccc7b0d6f5537f64fa68f5.png'),
    gallery: assetPath('/acc46efb158bbff6d403d8d9595c9ccc35beb827.png'),
  },
} as const;

const caseStudiesByLocale: Record<Locale, CaseStudy[]> = {
  'en-US': [
    {
      summary: {
        slug: 'greenn-info-product-dashboard',
        title: 'Greenn — Building an info-product dashboard app.',
        heroTitle: 'Greenn — Building an info-product dashboard app.',
        description: 'A mobile app for Greenn “producers” (creators/sellers).',
        challenge:
          'Low adoption and high support volume because key sales and statement information was hard to find and often felt unreliable.',
        solution:
          'Redesigned the core flows to make metrics scannable, navigation intuitive, and financial data easier to trust.',
        leftStat: { value: '+53%', label: 'Event Count' },
        rightStat: { value: '+9%', label: 'Avg Engagement Time (checkout)' },
        imageSrc: sharedAssets.greenn.hero,
        imageAlt: 'Greenn producer app screens preview',
        variant: 'light',
        imagePosition: 'left',
      },
      detail: {
        slug: 'greenn-info-product-dashboard',
        title: 'Greenn — Building an info-product dashboard app.',
        subtitle: 'A mobile app for Greenn “producers” (creators/sellers).',
        heroImageSrc: sharedAssets.greenn.hero,
        heroImageAlt: 'Greenn producer app screens preview',
        overview: [
          { label: 'Client', value: 'Greenn Pagamentos e Tecnologia.' },
          { label: 'Category', value: 'Info products' },
          { label: 'Timeline', value: '2 weeks' },
          { label: 'My role', value: 'Product Designer' },
          { label: 'Services', value: ['UX Research', 'UI Design', 'Mobile App Design', 'Prototyping'] },
        ],
        introduction:
          'Greenn’s producer app had low adoption and high support volume because key sales and statement information was hard to find and often felt unreliable. In two weeks, we redesigned the core flows to make metrics scannable, navigation intuitive, and financial data easier to trust.',
        coreProblems: [
          'The dashboard felt unclear / unreliable.',
          'Statements (Extract) and key financial info were hard to find.',
          'The app often felt “confusing” and “not loading” (trust broke).',
        ],
        discoveryResearch: [
          'Quick user calls, stakeholder interviews, usability testing, review mining.',
          'Recurring review themes: confusing experience, low usability, data not loading.',
          'Benchmarked Kiwify / Hubla / Hotmart + Inter / Nubank / Cora / Itaú (dashboard + statement patterns).',
        ],
        redesignStrategy: [
          'Scannability first for daily performance check-ins.',
          'Reduce cognitive load (remove noise, calm the UI).',
          'Increase trust with clear labels/timestamps + transparent loading/error states.',
          'Removed persistent UI distractions and reduced competing emphasis (over-saturated colors).',
          'Rebuilt navigation to make core actions reachable fast.',
        ],
        whatWeCrafted: [
          'New tab bar (4 items): Overview, Sales, Statements, Links.',
          'Wallet summary: available to withdraw + eligible to advance + CTAs (Withdraw / Advance).',
          'Revenue today.',
          'Last 7 days revenue + Last 30 days revenue (value, not quantity).',
          '7-day revenue chart to spot peaks/drops quickly.',
          'Clear balances: available to withdraw, pending, eligible to advance, total available.',
          'Filters: All / In / Out.',
          'Grouped by day with expandable daily summaries → transaction drill-down.',
          'Option to show/hide values.',
          'Default 7-day view + period filter.',
          'Sales grouped by day; tabs by type: one-time / subscription / contracts.',
          'Sale detail: product, sale code, payment method, gross vs received (+ fee helper).',
          'Bottom sheet: fee/commission breakdown + buyer info + contact CTA.',
          'Actions: Resend access / Refund / Text to Sell.',
          'Component system: cards, type scale, color tokens, badges/status.',
          'Empty/loading/error states with clarifying microcopy.',
          'Figma prototype + specs + structured handoff (dev calls + QA alignment).',
        ],
        businessResults: [
          '+53% — Event Count',
          '+9% — Avg Engagement Time (checkout)',
          '+5% — Engagement Rate',
          '1% — New Users',
        ],
        keyTakeaways: [
          'Trust is UX: when money data “doesn’t load” or lacks context, usability drops fast.',
          'Navigation is strategy: surfacing the top tasks reduced friction more than adding features.',
          'States + hierarchy matter: clearer loading/error + timestamps/labels restore confidence without new backend logic.',
        ],
        outcomesImpactSummary: '',
        impactMetrics: [
          { value: '+53%', label: 'Event Count' },
          { value: '+9%', label: 'Avg Engagement Time (checkout)' },
          { value: '+5%', label: 'Engagement Rate' },
          { value: '1%', label: 'New Users' },
        ],
        closingThoughts:
          'This redesign focused on making the Greenn producer app genuinely useful in the moments it matters most. Producers open it to get quick answers about revenue, balances, and withdrawals, so we prioritized clarity, speed, and confidence over adding more features. In two weeks, we aligned Product and Customer Support on the highest-impact flows, simplified the interface, and introduced clearer hierarchy and system feedback so users always understood what was happening. We also delivered a componentized UI foundation that improved handoff quality, reduced rework, and enabled reuse across other squads/products. The result was an experience that improved both perception and day-to-day usage, reflected in rating uplift after release and stronger engagement over time.',
        gallery: [
          { src: sharedAssets.greenn.collageResearch, alt: 'Greenn producer app screens collage (overview)' },
          {
            src: sharedAssets.greenn.collageResults,
            alt: 'Greenn producer app screens collage (sales and statements)',
          },
          { src: sharedAssets.greenn.impactImage1, alt: 'Greenn producer app mockup (hand holding phone)' },
          { src: sharedAssets.greenn.impactImage2, alt: 'Greenn producer app mockups (two phones)' },
        ],
      },
    },
    {
      summary: {
        slug: 'driving-digital-growth',
        title: 'Learning Area — Design System for multiple products.',
        heroTitle: 'Learning Area — Design System for multiple products.',
        description: 'A Design System for every brand the platform needed.',
        challenge: 'The legacy marketing site failed to communicate trust and value quickly.',
        solution: 'A modular IA and landing system reduced friction across campaigns.',
        leftStat: { value: '52%', label: 'Qualified lead growth' },
        rightStat: { value: '31%', label: 'Landing conversion lift' },
        imageSrc: sharedAssets.growthlab.preview,
        imageAlt: 'Tablet mockup case study preview',
        variant: 'dark',
        imagePosition: 'right',
        isComingSoon: true,
        comingSoonLabel: 'Coming soon',
      },
      detail: {
        slug: 'driving-digital-growth',
        title: 'Learning Area — Design System for multiple products.',
        subtitle: 'A Design System for every brand the platform needed.',
        heroImageSrc: sharedAssets.growthlab.hero,
        heroImageAlt: 'Growth website redesign preview',
        overview: [
          { label: 'Client', value: 'Growth agency' },
          { label: 'Role', value: 'Product Designer' },
          { label: 'Timeline', value: '6 weeks' },
          {
            label: 'Services',
            value: [
              'UX Research',
              'Web Design',
              'Information Architecture',
              'Conversion Optimization',
              'Component Library',
            ],
          },
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
          'Moved trust blocks earlier in the scroll path for mobile visitors.',
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
          { src: sharedAssets.growthlab.hero, alt: 'Landing page overview for GrowthLab redesign' },
          { src: sharedAssets.growthlab.gallery, alt: 'Editorial mockup used as brand collateral for GrowthLab' },
        ],
      },
    },
    {
      summary: {
        slug: 'designing-future-success',
        title: 'Responsive Learning Area Platform',
        heroTitle: 'Responsive Learning Area Platform',
        description: 'A responsive learning platform redesigned to improve the student experience across every device.',
        challenge: 'Product education was fragmented and new users churned in onboarding.',
        solution: 'Guided learning journeys and role-based dashboards improved activation.',
        leftStat: { value: '42%', label: 'Activation increase' },
        rightStat: { value: '36%', label: 'Time-to-value reduction' },
        imageSrc: sharedAssets.skilllex.preview,
        imageAlt: 'Tablet product case study preview',
        variant: 'light',
        imagePosition: 'left',
        isComingSoon: true,
        comingSoonLabel: 'Coming soon',
      },
      detail: {
        slug: 'designing-future-success',
        title: 'Responsive Learning Area Platform',
        subtitle: 'A responsive learning platform redesigned to improve the student experience across every device.',
        heroImageSrc: sharedAssets.skilllex.hero,
        heroImageAlt: 'Skilllex platform visual overview',
        overview: [
          { label: 'Client', value: 'EdTech platform' },
          { label: 'Role', value: 'Product Designer' },
          { label: 'Timeline', value: '10 weeks' },
          { label: 'Services', value: ['UX Research', 'UX/UI Design', 'Onboarding', 'User Flows', 'Prototyping'] },
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
          { src: sharedAssets.skilllex.hero, alt: 'Skilllex redesigned homepage' },
          { src: sharedAssets.skilllex.gallery, alt: 'Skilllex course promotional mockup' },
        ],
      },
    },
  ],
  'pt-BR': [
    {
      summary: {
        slug: 'greenn-info-product-dashboard',
        title: 'Greenn — Construindo um app de dashboard para infoprodutos.',
        heroTitle: 'Um app de dashboard para infoprodutos.',
        description: 'Um app mobile para “produtores” da Greenn (criadores/vendedores).',
        challenge:
          'Baixa adoção e alto volume de suporte porque informações-chave de vendas e extratos eram difíceis de encontrar e pareciam pouco confiáveis.',
        solution:
          'Redesign dos fluxos principais para deixar métricas mais escaneáveis, navegação mais intuitiva e dados financeiros mais confiáveis.',
        leftStat: { value: '+53%', label: 'Contagem de eventos' },
        rightStat: { value: '+9%', label: 'Tempo médio de engajamento (checkout)' },
        imageSrc: sharedAssets.greenn.hero,
        imageAlt: 'Prévia das telas do app de produtores da Greenn',
        variant: 'light',
        imagePosition: 'left',
      },
      detail: {
        slug: 'greenn-info-product-dashboard',
        title: 'Greenn — Construindo um app de dashboard para infoprodutos.',
        subtitle: 'Um app mobile para “produtores” da Greenn (criadores/vendedores).',
        heroImageSrc: sharedAssets.greenn.hero,
        heroImageAlt: 'Prévia das telas do app de produtores da Greenn',
        overview: [
          { label: 'Client', value: 'Greenn Pagamentos e Tecnologia.' },
          { label: 'Category', value: 'Infoprodutos' },
          { label: 'Timeline', value: '2 semanas' },
          { label: 'My role', value: 'Designer de Produto' },
          {
            label: 'Services',
            value: ['Pesquisa UX', 'Design de Interface (UI)', 'Design de App Mobile', 'Prototipação'],
          },
        ],
        introduction:
          'O app de produtores da Greenn tinha baixa adoção e alto volume de suporte porque informações-chave de vendas e extratos eram difíceis de encontrar e frequentemente pareciam pouco confiáveis. Em duas semanas, redesenhamos os fluxos centrais para tornar as métricas mais escaneáveis, a navegação mais intuitiva e os dados financeiros mais fáceis de confiar.',
        coreProblems: [
          'O dashboard parecia pouco claro / pouco confiável.',
          'Extratos e informações financeiras importantes eram difíceis de encontrar.',
          'O app frequentemente parecia “confuso” e “não carregava” (quebra de confiança).',
        ],
        discoveryResearch: [
          'Entrevistas rápidas, conversas com stakeholders, testes de usabilidade e mineração de reviews.',
          'Temas recorrentes nos reviews: experiência confusa, baixa usabilidade, dados não carregando.',
          'Benchmark com Kiwify / Hubla / Hotmart + Inter / Nubank / Cora / Itaú (padrões de dashboard e extrato).',
        ],
        redesignStrategy: [
          'Escaneabilidade em primeiro lugar para check-ins diários.',
          'Redução de carga cognitiva (menos ruído, UI mais calma).',
          'Aumento de confiança com labels/timestamps + estados claros de loading/erro.',
          'Remoção de distrações persistentes e redução de ênfases concorrentes (cores muito saturadas).',
          'Navegação refeita para tornar ações centrais acessíveis rapidamente.',
        ],
        whatWeCrafted: [
          'Nova tab bar (4 itens): Resumo, Vendas, Extrato, Links.',
          'Resumo da carteira: disponível para sacar + elegível para antecipar + CTAs (Sacar / Antecipar).',
          'Receita de hoje.',
          'Receita últimos 7 dias + últimos 30 dias (valor, não quantidade).',
          'Gráfico de 7 dias para identificar picos/quedas rapidamente.',
          'Saldos claros: disponível, pendente, elegível para antecipar, total.',
          'Filtros: Todas / Entradas / Saídas.',
          'Agrupamento por dia com resumo e drill-down por transação.',
          'Opção de mostrar/ocultar valores.',
          'Visão padrão de 7 dias + filtro de período.',
          'Vendas agrupadas por dia; abas por tipo: única / assinatura / contrato.',
          'Detalhe de venda: produto, código, método de pagamento, bruto vs recebido (+ ajuda de taxa).',
          'Bottom sheet: taxas/comissões + info do comprador + CTA de contato.',
          'Ações: reenviar acesso / reembolsar / texto para venda.',
          'Sistema de componentes: cards, escala tipográfica, tokens de cor, badges/status.',
          'Estados empty/loading/error com microcopy de apoio.',
          'Protótipo no Figma + specs + handoff estruturado (dev calls + alinhamento de QA).',
        ],
        businessResults: [
          '+53% — Contagem de eventos',
          '+9% — Tempo médio de engajamento (checkout)',
          '+5% — Taxa de engajamento',
          '1% — Novos usuários',
        ],
        keyTakeaways: [
          'Confiança é UX: quando dados de dinheiro “não carregam” ou não têm contexto, a usabilidade cai rápido.',
          'Navegação é estratégia: priorizar as tarefas principais reduz fricção mais do que adicionar features.',
          'Estados + hierarquia: loading/erro + timestamps/labels podem restaurar confiança sem mudar o backend.',
        ],
        outcomesImpactSummary: '',
        impactMetrics: [
          { value: '+53%', label: 'Contagem de eventos' },
          { value: '+9%', label: 'Tempo médio de engajamento (checkout)' },
          { value: '+5%', label: 'Taxa de engajamento' },
          { value: '1%', label: 'Novos usuários' },
        ],
        closingThoughts:
          'Este redesign focou em tornar o app de produtores realmente útil nos momentos que mais importam. Produtores abrem o app para respostas rápidas sobre receita, saldos e saques — então priorizamos clareza, velocidade e confiança. Em duas semanas, alinhamos Produto e Suporte nos fluxos de maior impacto, simplificamos a interface e introduzimos hierarquia e feedback de sistema mais claros para que o usuário sempre entendesse o que estava acontecendo. Também entregamos uma base de UI componentizada que melhorou o handoff, reduziu retrabalho e permitiu reutilização por outros squads/produtos. O resultado foi uma experiência que melhorou percepção e uso no dia a dia, refletida no aumento de avaliação e no engajamento.',
        gallery: [
          { src: sharedAssets.greenn.collageResearch, alt: 'Collage de telas do app de produtores da Greenn (resumo)' },
          {
            src: sharedAssets.greenn.collageResults,
            alt: 'Collage de telas do app de produtores da Greenn (vendas e extrato)',
          },
          { src: sharedAssets.greenn.impactImage1, alt: 'Mockup do app da Greenn (mão segurando o celular)' },
          { src: sharedAssets.greenn.impactImage2, alt: 'Mockups do app da Greenn (dois celulares)' },
        ],
      },
    },
    {
      summary: {
        slug: 'driving-digital-growth',
        title: 'Learning Area — Design System para múltiplos produtos.',
        heroTitle: 'Learning Area — Design System para múltiplos produtos.',
        description: 'Um Design System para cada marca que a plataforma precisava.',
        challenge: 'O site legado não comunicava valor e confiança com rapidez.',
        solution: 'Uma IA modular e um sistema de landing pages reduziram fricção nas campanhas.',
        leftStat: { value: '52%', label: 'Crescimento de leads qualificados' },
        rightStat: { value: '31%', label: 'Aumento de conversão em landing' },
        imageSrc: sharedAssets.growthlab.preview,
        imageAlt: 'Prévia do case em mockup de tablet',
        variant: 'dark',
        imagePosition: 'right',
        isComingSoon: true,
        comingSoonLabel: 'Em breve',
      },
      detail: {
        slug: 'driving-digital-growth',
        title: 'Learning Area — Design System para múltiplos produtos.',
        subtitle: 'Um Design System para cada marca que a plataforma precisava.',
        heroImageSrc: sharedAssets.growthlab.hero,
        heroImageAlt: 'Prévia do redesign do site da GrowthLab',
        overview: [
          { label: 'Client', value: 'Agência de growth' },
          { label: 'Role', value: 'Designer de Produto' },
          { label: 'Timeline', value: '6 semanas' },
          {
            label: 'Services',
            value: [
              'Pesquisa UX',
              'Design Web',
              'Arquitetura da Informação',
              'Otimização de Conversão',
              'Biblioteca de Componentes',
            ],
          },
          { label: 'Deliverables', value: 'Biblioteca de componentes' },
          { label: 'Tools', value: 'Figma + GA4' },
        ],
        introduction:
          'A GrowthLab precisava unificar narrativas de venda e melhorar a consistência de conversão em múltiplos canais, sem aumentar a complexidade de implementação.',
        coreProblems: [
          'Mensagens inconsistentes criavam fricção entre anúncios e landing pages.',
          'Hierarquia visual fraca no mobile escondia CTAs principais.',
          'Faltavam seções reutilizáveis, tornando releases mais lentos.',
        ],
        discoveryResearch: [
          'Benchmark de campanhas com melhor performance e análise de mapas de clique.',
          'Mapeamento de quedas por device e origem de tráfego.',
          'Insights de calls de vendas para alinhar copy a objeções.',
        ],
        redesignStrategy: [
          'Arquitetura modular para lançamentos recorrentes de campanhas.',
          'Blocos de confiança mais cedo no scroll para visitantes mobile.',
          'Linguagem visual componentizada para reduzir variação.',
        ],
        whatWeCrafted: [
          'Seções reutilizáveis (hero, prova social, preços) para montagem rápida de páginas.',
          'Hierarquia de CTA com microcopy contextual.',
          'Testemunhos com social proof por perfil/role.',
        ],
        businessResults: [
          'Maior conversão em destinos de tráfego pago.',
          'Menor tempo de handoff de design para dev.',
          'Mais consistência entre marketing e vendas.',
        ],
        keyTakeaways: [
          'Sequência de conteúdo importa tanto quanto o visual para conversão.',
          'Componentes compartilhados reduzem retrabalho e sustentam qualidade.',
          'Analytics comportamental direciona prioridades de iteração.',
        ],
        outcomesImpactSummary:
          'O refresh alinhou performance marketing com storytelling do produto, destravando conversão mais forte e execução mais rápida com um design system enxuto.',
        impactMetrics: [
          { value: '52%', label: 'Leads qualificados ↑' },
          { value: '47%', label: 'Páginas no ar mais rápido' },
          { value: '31%', label: 'Conversão ↑' },
          { value: '88%', label: 'Aprovação de stakeholders' },
        ],
        closingThoughts:
          'Um bom design de growth equilibra persuasão e clareza. Os melhores resultados vieram de narrativas mais claras com sistemas reutilizáveis.',
        gallery: [
          { src: sharedAssets.growthlab.hero, alt: 'Visão geral da landing page no redesign da GrowthLab' },
          { src: sharedAssets.growthlab.gallery, alt: 'Mockup editorial usado como collateral de marca' },
        ],
      },
    },
    {
      summary: {
        slug: 'designing-future-success',
        title: 'Plataforma Learning Area Responsiva',
        heroTitle: 'Plataforma Learning Area Responsiva',
        description:
          'Uma plataforma de aprendizagem responsiva redesenhada para melhorar a experiência do aluno em qualquer dispositivo.',
        challenge: 'Educação do produto fragmentada e churn no onboarding.',
        solution: 'Jornadas guiadas e dashboards por perfil melhoraram ativação.',
        leftStat: { value: '42%', label: 'Aumento de ativação' },
        rightStat: { value: '36%', label: 'Redução do time-to-value' },
        imageSrc: sharedAssets.skilllex.preview,
        imageAlt: 'Prévia do case em mockup de tablet',
        variant: 'light',
        imagePosition: 'left',
        isComingSoon: true,
        comingSoonLabel: 'Em breve',
      },
      detail: {
        slug: 'designing-future-success',
        title: 'Plataforma Learning Area Responsiva',
        subtitle:
          'Uma plataforma de aprendizagem responsiva redesenhada para melhorar a experiência do aluno em qualquer dispositivo.',
        heroImageSrc: sharedAssets.skilllex.hero,
        heroImageAlt: 'Visão geral da plataforma Skilllex',
        overview: [
          { label: 'Client', value: 'Plataforma EdTech' },
          { label: 'Role', value: 'Designer de Produto' },
          { label: 'Timeline', value: '10 semanas' },
          {
            label: 'Services',
            value: ['Pesquisa UX', 'Design UX/UI', 'Onboarding', 'Fluxos de Usuário', 'Prototipação'],
          },
          { label: 'Deliverables', value: 'Fluxos + protótipos' },
          { label: 'Tools', value: 'Figma + Hotjar' },
        ],
        introduction:
          'A Skilllex precisava de uma experiência mais clara para novos alunos, especialmente nos primeiros sete dias — período com maior abandono.',
        coreProblems: [
          'Baixa clareza sobre por onde começar e qual o próximo passo.',
          'Páginas de curso sem sinais de confiança e orientação de progresso.',
          'Dashboard não se adaptava a objetivos e comportamento do aluno.',
        ],
        discoveryResearch: [
          'Mapeamento de abandono no onboarding em três perfis.',
          'Análise de conversas com suporte para identificar padrões de confusão.',
          'Testes de estruturas de dashboard via protótipos interativos.',
        ],
        redesignStrategy: [
          'Trilhas guiadas com base na intenção no signup.',
          'Cards do dashboard reformulados para progresso e próximas ações.',
          'Prévia de conteúdo e estimativa de esforço mais claras.',
        ],
        whatWeCrafted: [
          'Home dashboard orientado por perfil (iniciante vs recorrente).',
          'Onboarding simplificado com checkpoints de progresso.',
          'Descoberta de cursos com categoria e nível mais claros.',
        ],
        businessResults: [
          'Maior conclusão de marcos do onboarding na primeira sessão.',
          'Mais engajamento em trilhas recomendadas.',
          'Menos demanda de suporte para navegação básica.',
        ],
        keyTakeaways: [
          'Guia contextual aumenta confiança mais do que tutoriais extras.',
          'Visibilidade de progresso ajuda o usuário a se comprometer.',
          'Melhorias pequenas em onboarding geram ganhos grandes de retenção.',
        ],
        outcomesImpactSummary:
          'O redesign melhorou clareza e motivação no início da jornada, aumentando ativação e reduzindo time-to-value.',
        impactMetrics: [
          { value: '42%', label: 'Ativação ↑' },
          { value: '36%', label: 'Time-to-value ↓' },
          { value: '28%', label: 'Retenção ↑' },
          { value: '91%', label: 'Feedback positivo' },
        ],
        closingThoughts:
          'Produtos de aprendizagem funcionam melhor quando reduzem incerteza. O redesign focou em tornar progresso óbvio e ação simples desde o dia um.',
        gallery: [
          { src: sharedAssets.skilllex.hero, alt: 'Home redesenhada da Skilllex' },
          { src: sharedAssets.skilllex.gallery, alt: 'Mockup promocional do curso da Skilllex' },
        ],
      },
    },
  ],
  'es-ES': [
    {
      summary: {
        slug: 'greenn-info-product-dashboard',
        title: 'Greenn — Creando una app de dashboard para infoproductos.',
        heroTitle: 'Greenn — Creando una app de dashboard para infoproductos.',
        description: 'Una app móvil para “productores” de Greenn (creadores/vendedores).',
        challenge:
          'Baja adopción y alto volumen de soporte porque la información clave de ventas y extractos era difícil de encontrar y a menudo parecía poco fiable.',
        solution:
          'Rediseño de los flujos principales para hacer las métricas más escaneables, la navegación más intuitiva y los datos financieros más confiables.',
        leftStat: { value: '+53%', label: 'Conteo de eventos' },
        rightStat: { value: '+9%', label: 'Tiempo medio de interacción (checkout)' },
        imageSrc: sharedAssets.greenn.hero,
        imageAlt: 'Vista previa de pantallas de la app de productores de Greenn',
        variant: 'light',
        imagePosition: 'left',
      },
      detail: {
        slug: 'greenn-info-product-dashboard',
        title: 'Greenn — Creando una app de dashboard para infoproductos.',
        subtitle: 'Una app móvil para “productores” de Greenn (creadores/vendedores).',
        heroImageSrc: sharedAssets.greenn.hero,
        heroImageAlt: 'Vista previa de pantallas de la app de productores de Greenn',
        overview: [
          { label: 'Client', value: 'Greenn Pagamentos e Tecnologia.' },
          { label: 'Category', value: 'Infoproductos' },
          { label: 'Timeline', value: '2 semanas' },
          { label: 'My role', value: 'Diseñador de Producto' },
          {
            label: 'Services',
            value: ['Investigación UX', 'Diseño de Interfaz (UI)', 'Diseño de App Móvil', 'Prototipado'],
          },
        ],
        introduction:
          'La app de productores de Greenn tenía baja adopción y alto volumen de soporte porque la información clave de ventas y extractos era difícil de encontrar y a menudo parecía poco fiable. En dos semanas, rediseñamos los flujos centrales para hacer las métricas más escaneables, la navegación más intuitiva y los datos financieros más fáciles de confiar.',
        coreProblems: [
          'El dashboard se percibía poco claro / poco fiable.',
          'Extractos e información financiera clave eran difíciles de encontrar.',
          'La app a menudo se sentía “confusa” y “no cargaba” (se rompía la confianza).',
        ],
        discoveryResearch: [
          'Entrevistas rápidas, stakeholders, pruebas de usabilidad y minería de reseñas.',
          'Temas recurrentes: experiencia confusa, baja usabilidad, datos que no cargan.',
          'Benchmark con Kiwify / Hubla / Hotmart + Inter / Nubank / Cora / Itaú (patrones de dashboard y extracto).',
        ],
        redesignStrategy: [
          'Escaneabilidad primero para check-ins diarios.',
          'Reducir carga cognitiva (menos ruido, UI más calmada).',
          'Aumentar confianza con labels/timestamps + estados claros de carga/error.',
          'Eliminar distracciones persistentes y reducir énfasis competidor (colores demasiado saturados).',
          'Reconstruir navegación para que acciones clave estén a un toque.',
        ],
        whatWeCrafted: [
          'Nueva barra de pestañas (4 ítems): Resumen, Ventas, Extracto, Links.',
          'Resumen de cartera: disponible para retirar + elegible para anticipar + CTAs (Retirar / Anticipar).',
          'Ingresos de hoy.',
          'Ingresos últimos 7 días + últimos 30 días (valor, no cantidad).',
          'Gráfico de 7 días para detectar picos/caídas rápido.',
          'Saldos claros: disponible, pendiente, elegible para anticipar, total.',
          'Filtros: Todas / Entradas / Salidas.',
          'Agrupado por día con resumen y drill-down por transacción.',
          'Opción para mostrar/ocultar valores.',
          'Vista por defecto de 7 días + filtro de periodo.',
          'Ventas agrupadas por día; pestañas por tipo: única / suscripción / contrato.',
          'Detalle de venta: producto, código, método, bruto vs recibido (+ ayuda de tasas).',
          'Bottom sheet: tasas/comisiones + info del comprador + CTA de contacto.',
          'Acciones: reenviar acceso / reembolsar / texto para vender.',
          'Sistema de componentes: tarjetas, escala tipográfica, tokens de color, badges/estados.',
          'Estados vacío/cargando/error con microcopy claro.',
          'Prototipo en Figma + specs + handoff estructurado (dev calls + QA).',
        ],
        businessResults: [
          '+53% — Conteo de eventos',
          '+9% — Tiempo medio de interacción (checkout)',
          '+5% — Tasa de interacción',
          '1% — Nuevos usuarios',
        ],
        keyTakeaways: [
          'La confianza es UX: si los datos de dinero “no cargan” o no tienen contexto, la usabilidad cae rápido.',
          'La navegación es estrategia: priorizar tareas clave reduce fricción más que añadir features.',
          'Estados + jerarquía: carga/error + timestamps/labels pueden restaurar confianza sin cambiar backend.',
        ],
        outcomesImpactSummary: '',
        impactMetrics: [
          { value: '+53%', label: 'Conteo de eventos' },
          { value: '+9%', label: 'Tiempo medio de interacción (checkout)' },
          { value: '+5%', label: 'Tasa de interacción' },
          { value: '1%', label: 'Nuevos usuarios' },
        ],
        closingThoughts:
          'Este rediseño se enfocó en hacer la app de productores realmente útil en los momentos que importan. Los productores abren la app para respuestas rápidas sobre ingresos, saldos y retiros; por eso priorizamos claridad, velocidad y confianza. En dos semanas, alineamos Producto y Soporte en los flujos de mayor impacto, simplificamos la interfaz e introdujimos jerarquía y feedback del sistema más claros para que el usuario entendiera siempre qué estaba pasando. También entregamos una base de UI componentizada que mejoró el handoff, redujo retrabajo y permitió reutilización en otros equipos/productos. El resultado fue una experiencia con mejor percepción y uso diario, reflejada en mejoras de rating y engagement.',
        gallery: [
          { src: sharedAssets.greenn.collageResearch, alt: 'Collage de pantallas de Greenn (resumen)' },
          { src: sharedAssets.greenn.collageResults, alt: 'Collage de pantallas de Greenn (ventas y extracto)' },
          { src: sharedAssets.greenn.impactImage1, alt: 'Mockup de Greenn (mano sosteniendo el teléfono)' },
          { src: sharedAssets.greenn.impactImage2, alt: 'Mockups de Greenn (dos teléfonos)' },
        ],
      },
    },
    {
      summary: {
        slug: 'driving-digital-growth',
        title: 'Learning Area — Design System para múltiples productos.',
        heroTitle: 'Learning Area — Design System para múltiples productos.',
        description: 'Un Design System para cada marca que la plataforma necesitaba.',
        challenge: 'El sitio legado no comunicaba valor y confianza con rapidez.',
        solution: 'Una IA modular y un sistema de landings redujo fricción en campañas.',
        leftStat: { value: '52%', label: 'Crecimiento de leads cualificados' },
        rightStat: { value: '31%', label: 'Aumento de conversión en landing' },
        imageSrc: sharedAssets.growthlab.preview,
        imageAlt: 'Vista previa del caso en mockup de tablet',
        variant: 'dark',
        imagePosition: 'right',
        isComingSoon: true,
        comingSoonLabel: 'Próximamente',
      },
      detail: {
        slug: 'driving-digital-growth',
        title: 'Learning Area — Design System para múltiples productos.',
        subtitle: 'Un Design System para cada marca que la plataforma necesitaba.',
        heroImageSrc: sharedAssets.growthlab.hero,
        heroImageAlt: 'Vista previa del rediseño del sitio de GrowthLab',
        overview: [
          { label: 'Client', value: 'Agencia de growth' },
          { label: 'Role', value: 'Diseñador de Producto' },
          { label: 'Timeline', value: '6 semanas' },
          {
            label: 'Services',
            value: [
              'Investigación UX',
              'Diseño Web',
              'Arquitectura de Información',
              'Optimización de Conversión',
              'Librería de Componentes',
            ],
          },
          { label: 'Deliverables', value: 'Librería de componentes' },
          { label: 'Tools', value: 'Figma + GA4' },
        ],
        introduction:
          'GrowthLab necesitaba unificar narrativas de venta y mejorar la consistencia de conversión en múltiples canales sin aumentar la complejidad de implementación.',
        coreProblems: [
          'Mensajes mezclados creaban fricción entre anuncios y landing pages.',
          'Jerarquía visual débil en móvil escondía CTAs principales.',
          'Faltaban secciones reutilizables, ralentizando releases.',
        ],
        discoveryResearch: [
          'Benchmark de campañas con mejor desempeño y mapas de clics.',
          'Análisis de caídas por dispositivo y origen de tráfico.',
          'Insights de llamadas de ventas para alinear copy con objeciones.',
        ],
        redesignStrategy: [
          'Arquitectura modular para lanzamientos recurrentes.',
          'Bloques de confianza más temprano en el scroll para mobile.',
          'Lenguaje visual componentizado para reducir variación.',
        ],
        whatWeCrafted: [
          'Secciones reutilizables (hero, proof, precios) para montaje rápido.',
          'Jerarquía de CTA mejorada con microcopy contextual.',
          'Testimonios con social proof por rol.',
        ],
        businessResults: [
          'Mayor conversión en destinos de tráfico pago.',
          'Menor tiempo de handoff de diseño a desarrollo.',
          'Mayor consistencia entre marketing y ventas.',
        ],
        keyTakeaways: [
          'La secuencia de contenido importa tanto como el visual para conversión.',
          'Componentes compartidos reducen retrabajo y mantienen calidad.',
          'Analytics comportamental guía prioridades de iteración.',
        ],
        outcomesImpactSummary:
          'El refresh alineó performance marketing con storytelling del producto, mejorando conversión y acelerando campañas con un sistema de diseño ligero.',
        impactMetrics: [
          { value: '52%', label: 'Leads cualificados ↑' },
          { value: '47%', label: 'Lanzamientos más rápidos' },
          { value: '31%', label: 'Conversión ↑' },
          { value: '88%', label: 'Aprobación de stakeholders' },
        ],
        closingThoughts:
          'El buen diseño de growth equilibra persuasión y claridad. Los mejores resultados vinieron de narrativas más claras con sistemas reutilizables.',
        gallery: [
          { src: sharedAssets.growthlab.hero, alt: 'Vista general de la landing en el rediseño de GrowthLab' },
          { src: sharedAssets.growthlab.gallery, alt: 'Mockup editorial usado como material de marca' },
        ],
      },
    },
    {
      summary: {
        slug: 'designing-future-success',
        title: 'Plataforma Learning Area Responsive',
        heroTitle: 'Plataforma Learning Area Responsive',
        description:
          'Una plataforma de aprendizaje responsive rediseñada para mejorar la experiencia del estudiante en cualquier dispositivo.',
        challenge: 'Educación del producto fragmentada y churn en onboarding.',
        solution: 'Rutas guiadas y dashboards por perfil mejoraron activación.',
        leftStat: { value: '42%', label: 'Aumento de activación' },
        rightStat: { value: '36%', label: 'Reducción de time-to-value' },
        imageSrc: sharedAssets.skilllex.preview,
        imageAlt: 'Vista previa del caso en mockup de tablet',
        variant: 'light',
        imagePosition: 'left',
        isComingSoon: true,
        comingSoonLabel: 'Próximamente',
      },
      detail: {
        slug: 'designing-future-success',
        title: 'Plataforma Learning Area Responsive',
        subtitle:
          'Una plataforma de aprendizaje responsive rediseñada para mejorar la experiencia del estudiante en cualquier dispositivo.',
        heroImageSrc: sharedAssets.skilllex.hero,
        heroImageAlt: 'Vista general de la plataforma Skilllex',
        overview: [
          { label: 'Client', value: 'Plataforma EdTech' },
          { label: 'Role', value: 'Diseñador de Producto' },
          { label: 'Timeline', value: '10 semanas' },
          {
            label: 'Services',
            value: ['Investigación UX', 'Diseño UX/UI', 'Onboarding', 'Flujos de Usuario', 'Prototipado'],
          },
          { label: 'Deliverables', value: 'Flujos + prototipos' },
          { label: 'Tools', value: 'Figma + Hotjar' },
        ],
        introduction:
          'Skilllex necesitaba una experiencia más clara para nuevos estudiantes, especialmente en los primeros siete días donde el abandono era mayor.',
        coreProblems: [
          'Baja claridad sobre por dónde empezar y qué hacer después.',
          'Páginas de curso sin señales de confianza y guía de progreso.',
          'El dashboard no se adaptaba a objetivos y comportamiento.',
        ],
        discoveryResearch: [
          'Mapeo del abandono de onboarding en tres perfiles.',
          'Análisis de conversaciones con soporte para detectar patrones de confusión.',
          'Pruebas de estructuras de dashboard con prototipos interactivos.',
        ],
        redesignStrategy: [
          'Rutas guiadas según intención en el signup.',
          'Cards del dashboard enfocadas en progreso y próximas acciones.',
          'Previews de contenido y estimación de esfuerzo más claras.',
        ],
        whatWeCrafted: [
          'Dashboard home por perfil (principiante vs recurrente).',
          'Onboarding simplificado con checkpoints de progreso.',
          'Descubrimiento de cursos con categoría y nivel más claros.',
        ],
        businessResults: [
          'Mayor finalización de hitos de onboarding en la primera sesión.',
          'Más engagement en rutas recomendadas.',
          'Menos demanda de soporte por navegación básica.',
        ],
        keyTakeaways: [
          'Guía contextual aumenta confianza más que tutoriales extra.',
          'Visibilidad del progreso ayuda a comprometerse.',
          'Mejoras pequeñas en onboarding se multiplican en retención.',
        ],
        outcomesImpactSummary:
          'El rediseño mejoró claridad y motivación al inicio, aumentando activación y reduciendo time-to-value.',
        impactMetrics: [
          { value: '42%', label: 'Activación ↑' },
          { value: '36%', label: 'Time-to-value ↓' },
          { value: '28%', label: 'Retención ↑' },
          { value: '91%', label: 'Feedback positivo' },
        ],
        closingThoughts:
          'Los productos de aprendizaje funcionan mejor cuando reducen incertidumbre. El rediseño se centró en hacer el progreso obvio y la acción simple desde el día uno.',
        gallery: [
          { src: sharedAssets.skilllex.hero, alt: 'Home rediseñada de Skilllex' },
          { src: sharedAssets.skilllex.gallery, alt: 'Mockup promocional del curso de Skilllex' },
        ],
      },
    },
  ],
};

export function getCaseStudyCards(locale: Locale): CaseStudyCard[] {
  return caseStudiesByLocale[locale].map((item) => ({
    ...item.summary,
    href: getLocalizedPath(`/case-studies/${item.summary.slug}`, locale),
  }));
}

export function getCaseStudyBySlug(slug: string, locale: Locale) {
  return (
    caseStudiesByLocale[locale].find((item) => item.summary.slug === slug) ??
    caseStudiesByLocale[defaultLocale].find((item) => item.summary.slug === slug)
  );
}

export function getCaseStudySlugs() {
  return caseStudiesByLocale[defaultLocale].map((item) => ({ slug: item.summary.slug }));
}
