import type { SiteContent } from '../types';

export const content: SiteContent = {
  navbar: {
    logo: { firstName: 'Igor', lastName: 'Ferrão' },
    links: { about: 'Sobre mí', services: 'Servicios', cases: 'Casos' },
    languageSelectAriaLabel: 'Seleccionar idioma',
    themeToggleAriaLabel: 'Cambiar tema',
    paletteAriaLabel: 'Tema',
    paletteMenuAriaLabel: 'Abrir menú de tema',
    languages: [
      { value: 'pt-BR', label: 'Português' },
      { value: 'en-US', label: 'English' },
      { value: 'es-ES', label: 'Español' },
    ],
  },
  hero: {
    eyebrow: '¡Hola! Soy Igor Ferrão.',
    headline: 'Product Designer, Creador de Contenido y apasionado por soluciones creativas.',
    subtitle:
      'Creo experiencias digitales combinando estrategia, UX y diseño. Diseño productos que equilibran la velocidad de las startups con la escala corporativa; actualmente dando forma a la hospitalidad digital en Hyatt.',
    ctas: { primary: 'Hablemos', secondary: 'Descargar CV' },
  },
  about: {
    label: 'SOBRE MÍ',
    headlineLines: [
      'Soy Ethan Riley, tu socio creativo en diseño.',
      'Para mí, el diseño se trata de crear experiencias que',
      'conecten de verdad con las personas. No es solo verse bien',
    ],
    videoAriaLabel: 'Abrir video',
    stats: [
      { label: 'Satisfacción de clientes', value: '98%', description: 'Generando impacto financiero medible.' },
      { label: 'Negocios transformados', value: '99+', description: 'Ayudando a empresas a crecer y rendir mejor.' },
      { label: 'Experiencia y especialidad', value: '14+', description: 'Confiable y recomendado por clientes.' },
    ],
  },
  myService: {
    label: 'MIS SERVICIOS',
    title: 'Soluciones Profesionales',
    description: 'Soluciones digitales a medida para elevar el rendimiento de tu negocio, su crecimiento y éxito a largo plazo.',
    ctas: { primary: 'Contrátame', secondary: 'Ver video' },
    tabsAriaLabel: 'Categorías de servicio',
    tabs: [
      { id: 'branding', label: 'Branding', imageAlt: 'Vista previa de branding' },
      { id: 'web-development', label: 'Desarrollo Web', imageAlt: 'Vista previa de desarrollo web' },
      { id: 'web-design', label: 'Diseño Web', imageAlt: 'Vista previa de diseño web' },
      { id: 'marketing', label: 'Marketing', imageAlt: 'Vista previa de marketing' },
    ],
  },
  caseStudy: {
    label: 'CASO DE ESTUDIO',
    title: 'Resultados Reales',
    description: 'Experiencias destacadas: visualmente fuertes y centradas en el usuario.',
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
    overviewLabels: {
      client: 'Cliente',
      role: 'Rol',
      timeline: 'Cronograma',
      services: 'Servicios',
      deliverables: 'Entregables',
      tools: 'Herramientas',
    },
  },
  footer: {
    brandName: 'Igor Ferrão',
    tagline: 'Product Designer enfocado en experiencias intuitivas.',
    columns: [
      { title: 'Producto', links: ['Funcionalidades', 'Precios', 'Integraciones', 'Actualizaciones'] },
      { title: 'Recursos', links: ['Documentación', 'Guías', 'Blog', 'Soporte'] },
      { title: 'Empresa', links: ['Sobre', 'Carreras', 'Contacto', 'Partners'] },
    ],
    rights: '2026 Igor. Todos los derechos reservados',
    verse: 'Rm 10:9',
  },
};
