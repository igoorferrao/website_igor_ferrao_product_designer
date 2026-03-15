import type { SiteContent } from '../types';

export const content: SiteContent = {
  meta: {
    title: 'Igor Ferrão — Diseñador de Producto',
    description: 'Diseñador de Producto enfocado en experiencias digitales intuitivas.',
  },
  navbar: {
    logo: { fullName: 'Igor Ferrão', location: 'Con sede en Brasil', avatarAlt: 'Foto de perfil de Igor Ferrão' },
    links: { about: 'Sobre mí', services: 'Servicios', cases: 'Casos' },
    menu: {
      openAriaLabel: 'Abrir menú de navegación',
      closeAriaLabel: 'Cerrar menú de navegación',
      dialogAriaLabel: 'Menú de navegación',
      title: 'Menú',
      navAriaLabel: 'Navegación principal',
    },
    languageSelectAriaLabel: 'Seleccionar idioma',
    themeToggleAriaLabel: 'Cambiar tema',
    paletteAriaLabel: 'Tema',
    paletteMenuAriaLabel: 'Abrir menú de tema',
    themeOptions: [
      { value: 'default', label: 'Ferrão Design' },
      { value: 'nature', label: 'Naturaleza' },
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
    eyebrow: '¡Hola! Soy Igor Ferrão.',
    headline: 'Diseñador de Producto, Creador de Contenido y apasionado por soluciones creativas.',
    subtitle:
      'Creo experiencias digitales uniendo estrategia, UX y diseño. Diseño productos que equilibran la velocidad de las startups con la escala corporativa. Actualmente estoy creando experiencias digitales para la plataforma de productos de Greenn.',
    ctas: { primary: 'Hablemos', secondary: 'Descargar CV' },
    portraitCard: {
      name: 'Igor Ferrão de Souza',
      descriptionLine1: 'Diseñador de Producto enfocado en experiencias',
      descriptionLine2: 'intuitivas.',
      imageAlt: 'Retrato de Igor Ferrão de Souza',
    },
  },
  about: {
    label: 'SOBRE MÍ',
    headlineLines: [
      'Soy Igor Ferrão, tu socio creativo en diseño.',
      'Para mí, el diseño consiste en crear experiencias que',
      'conecten de verdad con las personas, no se trata solo de estética.',
    ],
    summary:
      'Diseñador multidisciplinario con más de 6 años de experiencia creando identidades de marca y productos digitales para startups y empresas consolidadas en Brasil.',
    videoAriaLabel: 'Abrir video',
    stats: [
      { value: '6+ años', label: 'Experiencia en diseño' },
      { value: '40+', label: 'Proyectos entregados' },
    ],
    legacyStats: [
      { label: 'Satisfacción de clientes', value: '98%', description: 'Generando impacto financiero medible.' },
      { label: 'Negocios transformados', value: '99+', description: 'Ayudando a empresas a crecer y rendir mejor.' },
      { label: 'Experiencia y especialidad', value: '14+', description: 'Confiable y recomendado por clientes.' },
    ],
    portraitAlt: 'Retrato de Igor Ferrão de Souza',
  },
  myService: {
    label: 'MIS SERVICIOS',
    title: 'Soluciones Profesionales',
    description:
      'Soluciones digitales a medida para elevar el rendimiento de tu negocio, su crecimiento y éxito a largo plazo.',
    ctas: { primary: 'Contrátame', secondary: 'Ver video' },
    tabsAriaLabel: 'Categorías de servicio',
    tabs: [
      {
        id: 'branding',
        label: 'Branding',
        description:
          'Crea un sistema de marca consistente que comunique valor con claridad y genere reconocimiento en cada punto de contacto.',
        imageAlt: 'Vista previa de branding',
      },
      {
        id: 'web-development',
        label: 'Desarrollo Web',
        description:
          'Construye sitios rápidos y responsivos con código limpio, arquitectura escalable y entrega enfocada en rendimiento.',
        imageAlt: 'Vista previa de desarrollo web',
      },
      {
        id: 'web-design',
        label: 'Diseño Web',
        description:
          'Diseña interfaces centradas en el usuario: atractivas, intuitivas y que convierten — en móvil y escritorio.',
        imageAlt: 'Vista previa de diseño web',
      },
      {
        id: 'marketing',
        label: 'Marketing',
        description:
          'Crea campañas y recursos alineados con la marca para llegar a la audiencia correcta con un mensaje claro.',
        imageAlt: 'Vista previa de marketing',
      },
    ],
  },
  caseStudy: {
    label: 'CASO DE ESTUDIO',
    title: 'Resultados Reales',
    description: 'Experiencias destacadas: visualmente fuertes y centradas en el usuario.',
    cardLabels: {
      challenge: 'Desafío',
      solution: 'Solución',
      cta: 'Ver caso',
    },
  },
  caseStudyDetail: {
    sectionTitles: {
      introduction: 'Introducción',
      coreProblem: 'El Problema Central',
      discoveryResearch: 'Descubrimiento e Investigación',
      redesignStrategy: 'Estrategia de Rediseño',
      whatWeCrafted: 'Lo Que Construimos',
      businessResults: 'Resultados de Negocio',
      keyTakeaways: 'Aprendizajes Clave',
      outcomesImpact: 'Resultados e Impacto',
      closingThoughts: 'Reflexiones Finales',
    },
    lightbox: {
      openImageAriaLabel: 'Abrir imagen',
      closeImageAriaLabel: 'Cerrar vista de imagen',
      dialogAriaLabel: 'Vista de imagen',
    },
    overviewLabels: {
      client: 'Cliente',
      category: 'Categoría',
      role: 'Rol',
      timeline: 'Cronograma',
      services: 'Servicios',
      deliverables: 'Entregables',
      tools: 'Herramientas',
      myRole: 'Mi rol',
    },
  },
  footer: {
    brandName: 'Igor Ferrão',
    tagline: 'Diseñador de Producto enfocado en experiencias intuitivas.',
    columns: [
      { title: 'Producto', links: ['Funcionalidades', 'Precios', 'Integraciones', 'Actualizaciones'] },
      { title: 'Recursos', links: ['Documentación', 'Guías', 'Blog', 'Soporte'] },
      { title: 'Empresa', links: ['Acerca de', 'Carreras', 'Contacto', 'Socios'] },
    ],
    rights: '© 2026 Igor Ferrão.',
    verse: 'Rm 10:9',
  },
};
