export const locales = ['pt-BR', 'en-US', 'es-ES'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'pt-BR';

export function isLocale(value: string | undefined | null): value is Locale {
  return locales.includes(value as Locale);
}

function normalizeLocale(value: string): Locale | null {
  if (isLocale(value)) return value;

  const lower = value.toLowerCase();
  if (lower === 'pt' || lower === 'pt-br') return 'pt-BR';
  if (lower === 'en' || lower === 'en-us') return 'en-US';
  if (lower === 'es' || lower === 'es-es') return 'es-ES';

  return null;
}

export function localeFromAcceptLanguage(headerValue: string | null): Locale | null {
  if (!headerValue) return null;

  const candidates = headerValue
    .split(',')
    .map((part) => part.trim().split(';')[0]?.trim())
    .filter(Boolean) as string[];

  for (const candidate of candidates) {
    const normalized = normalizeLocale(candidate);
    if (normalized) return normalized;

    const base = candidate.split('-')[0];
    if (base) {
      const normalizedBase = normalizeLocale(base);
      if (normalizedBase) return normalizedBase;
    }
  }

  return null;
}

