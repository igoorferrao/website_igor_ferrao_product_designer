import type { SiteContent } from '../types';

export const content: SiteContent = {
  navbar: {
    logo: { firstName: 'Igor', lastName: 'Ferrão' },
    links: { about: 'Sobre mim', services: 'Serviços', cases: 'Cases' },
    languageSelectAriaLabel: 'Selecionar idioma',
    themeToggleAriaLabel: 'Alternar tema',
    paletteAriaLabel: 'Tema',
    paletteMenuAriaLabel: 'Abrir menu de tema',
    languages: [
      { value: 'pt-BR', label: 'Português' },
      { value: 'en-US', label: 'English' },
      { value: 'es-ES', label: 'Español' },
    ],
  },
  hero: {
    eyebrow: 'Oi! Eu sou Igor Ferrão.',
    headline: 'Product Designer, Criador de Conteúdo e apaixonado por soluções criativas.',
    subtitle:
      'Eu crio experiências digitais unindo estratégia, UX e design. Eu desenho produtos que equilibram a velocidade de startups com a escala corporativa — atualmente criando experiências digitais de hospitalidade na Hyatt.',
    ctas: { primary: 'Vamos conversar', secondary: 'Baixar CV' },
  },
  about: {
    label: 'SOBRE MIM',
    headlineLines: [
      'Sou Ethan Riley, seu parceiro criativo em design.',
      'Para mim, design é criar experiências que',
      'conectam de verdade com as pessoas. Não é só estética',
    ],
    videoAriaLabel: 'Abrir vídeo',
    stats: [
      { label: 'Taxa de satisfação', value: '98%', description: 'Entregando impacto financeiro mensurável.' },
      { label: 'Negócios transformados', value: '99+', description: 'Ajudando empresas a crescer e performar.' },
      { label: 'Experiência e expertise', value: '14+', description: 'Confiável e recomendado por clientes.' },
    ],
  },
  myService: {
    label: 'MEUS SERVIÇOS',
    title: 'Soluções Profissionais',
    description: 'Soluções digitais sob medida para elevar performance, crescimento e sucesso de longo prazo.',
    ctas: { primary: 'Me contrate', secondary: 'Assistir vídeo' },
    tabsAriaLabel: 'Categorias de serviço',
    tabs: [
      { id: 'branding', label: 'Branding', imageAlt: 'Prévia do serviço de branding' },
      { id: 'web-development', label: 'Desenvolvimento Web', imageAlt: 'Prévia do serviço de desenvolvimento web' },
      { id: 'web-design', label: 'Web Design', imageAlt: 'Prévia do serviço de web design' },
      { id: 'marketing', label: 'Marketing', imageAlt: 'Prévia do serviço de marketing' },
    ],
  },
  caseStudy: {
    label: 'CASE STUDY',
    title: 'Resultados Reais',
    description: 'Experiências marcantes, com visual forte e foco no usuário.',
  },
  caseStudyDetail: {
    sectionTitles: {
      introduction: 'Introdução',
      coreProblem: 'O Problema Central',
      discoveryResearch: 'Descoberta & Pesquisa',
      redesignStrategy: 'Estratégia de Redesign',
      whatWeCrafted: 'O Que Criamos',
      businessResults: 'Resultados do Negócio',
      keyTakeaways: 'Principais Aprendizados',
      outcomesImpact: 'Resultados & Impacto',
      closingThoughts: 'Considerações Finais',
    },
    overviewLabels: {
      client: 'Cliente',
      role: 'Papel',
      timeline: 'Timeline',
      services: 'Serviços',
      deliverables: 'Entregáveis',
      tools: 'Ferramentas',
    },
  },
  footer: {
    brandName: 'Igor Ferrão',
    tagline: 'Product Designer focado em experiências intuitivas.',
    columns: [
      { title: 'Produto', links: ['Funcionalidades', 'Preços', 'Integrações', 'Atualizações'] },
      { title: 'Recursos', links: ['Documentação', 'Guias', 'Blog', 'Suporte'] },
      { title: 'Empresa', links: ['Sobre', 'Carreira', 'Contato', 'Parceiros'] },
    ],
    rights: '2026 Igor. Todos os direitos reservados',
    verse: 'Rm 10:9',
  },
};
