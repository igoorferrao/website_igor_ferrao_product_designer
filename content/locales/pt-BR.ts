import type { SiteContent } from '../types';

export const content: SiteContent = {
  meta: {
    title: 'Igor Ferrão — Designer de Produto',
    description: 'Designer de Produto focado em experiências digitais intuitivas.',
  },
  navbar: {
    logo: { fullName: 'Igor Ferrão', location: 'Based in Brasil', avatarAlt: 'Foto de perfil de Igor Ferrão' },
    links: { about: 'Sobre mim', services: 'Serviços', cases: 'Estudos de caso' },
    menu: {
      openAriaLabel: 'Abrir menu de navegação',
      closeAriaLabel: 'Fechar menu de navegação',
      dialogAriaLabel: 'Menu de navegação',
      title: 'Menu',
      navAriaLabel: 'Navegação principal',
    },
    languageSelectAriaLabel: 'Selecionar idioma',
    themeToggleAriaLabel: 'Alternar tema',
    paletteAriaLabel: 'Tema',
    paletteMenuAriaLabel: 'Abrir menu de tema',
    themeOptions: [
      { value: 'default', label: 'Ferrão Design' },
      { value: 'nature', label: 'Natureza' },
      { value: 'modern', label: 'Moderno' },
      { value: 'claude', label: 'Claude' },
    ],
    languages: [
      { value: 'pt-BR', label: 'Português' },
      { value: 'en-US', label: 'English' },
      { value: 'es-ES', label: 'Español' },
    ],
  },
  hero: {
    eyebrow: 'Oi! Eu sou Igor Ferrão.',
    headline: 'Designer de Produto, Criador de Conteúdo e apaixonado por soluções criativas.',
    subtitle:
      'Eu crio experiências digitais unindo estratégia, UX e design. Eu desenho produtos que equilibram a velocidade de startups com a escala corporativa — atualmente criando experiências digitais de plataforma de produtos na Greenn.',
    ctas: { primary: 'Vamos conversar', secondary: 'Baixar CV' },
    portraitCard: {
      name: 'Igor Ferrão de Souza',
      descriptionLine1: 'Designer de Produto focado em experiências',
      descriptionLine2: 'intuitivas.',
      imageAlt: 'Retrato de Igor Ferrão de Souza',
    },
  },
  about: {
    label: 'SOBRE MIM',
    headlineLines: [
      'Sou Igor Ferrão, seu parceiro criativo em design.',
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
      {
        id: 'branding',
        label: 'Branding',
        description:
          'Crie um sistema de marca consistente que comunique valor com clareza e gere reconhecimento em cada ponto de contato.',
        imageAlt: 'Prévia do serviço de branding',
      },
      {
        id: 'web-development',
        label: 'Desenvolvimento Web',
        description:
          'Construa sites rápidos e responsivos com código limpo, arquitetura escalável e entrega focada em performance.',
        imageAlt: 'Prévia do serviço de desenvolvimento web',
      },
      {
        id: 'web-design',
        label: 'Web Design',
        description:
          'Desenhe interfaces centradas no usuário: bonitas, intuitivas e que convertem — no mobile e no desktop.',
        imageAlt: 'Prévia do serviço de web design',
      },
      {
        id: 'marketing',
        label: 'Marketing',
        description:
          'Crie campanhas e peças alinhadas à marca para alcançar o público certo com mensagem clara e consistente.',
        imageAlt: 'Prévia do serviço de marketing',
      },
    ],
  },
  caseStudy: {
    label: 'ESTUDO DE CASO',
    title: 'Resultados Reais',
    description: 'Experiências marcantes, com visual forte e foco no usuário.',
    cardLabels: {
      challenge: 'Desafio',
      solution: 'Solução',
      cta: 'Ver case',
    },
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
    lightbox: {
      openImageAriaLabel: 'Abrir imagem',
      closeImageAriaLabel: 'Fechar visualização de imagem',
      dialogAriaLabel: 'Visualização de imagem',
    },
    overviewLabels: {
      client: 'Cliente',
      category: 'Categoria',
      role: 'Papel',
      timeline: 'Timeline',
      services: 'Serviços',
      deliverables: 'Entregáveis',
      tools: 'Ferramentas',
      myRole: 'Meu papel',
    },
  },
  footer: {
    brandName: 'Igor Ferrão',
    tagline: 'Designer de Produto focado em experiências intuitivas.',
    columns: [
      { title: 'Produto', links: ['Funcionalidades', 'Preços', 'Integrações', 'Atualizações'] },
      { title: 'Recursos', links: ['Documentação', 'Guias', 'Blog', 'Suporte'] },
      { title: 'Empresa', links: ['Sobre', 'Carreira', 'Contato', 'Parceiros'] },
    ],
    rights: '2026 Igor. Todos os direitos reservados',
    verse: 'Rm 10:9',
  },
};
