import type { Locale } from '@/lib/i18n/locales';
import type { SiteContent } from './types';

export async function getContent(locale: Locale): Promise<SiteContent> {
  switch (locale) {
    case 'pt-BR': {
      const mod = await import('./locales/pt-BR');
      return mod.content;
    }
    case 'es-ES': {
      const mod = await import('./locales/es-ES');
      return mod.content;
    }
    case 'en-US':
    default: {
      const mod = await import('./locales/en-US');
      return mod.content;
    }
  }
}

