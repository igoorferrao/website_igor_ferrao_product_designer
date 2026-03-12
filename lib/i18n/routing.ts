import { defaultLocale, isLocale, type Locale } from './locales';

function normalizePath(pathname: string) {
  if (!pathname) return '/';
  return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

export function getLocaleFromPath(pathname: string): Locale | null {
  const [firstSegment] = normalizePath(pathname).split('/').filter(Boolean);
  return isLocale(firstSegment) ? firstSegment : null;
}

export function getLocalizedPath(pathname: string, locale: Locale) {
  const normalizedPath = normalizePath(pathname);
  const segments = normalizedPath.split('/').filter(Boolean);

  if (segments[0] && isLocale(segments[0])) {
    segments.shift();
  }

  const localizedPath = segments.length ? `/${segments.join('/')}` : '/';
  return locale === defaultLocale ? localizedPath : `/${locale}${localizedPath === '/' ? '' : localizedPath}`;
}

export function withBasePath(pathname: string) {
  const normalizedPath = normalizePath(pathname);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  if (!basePath || normalizedPath.startsWith(basePath)) {
    return normalizedPath;
  }

  return `${basePath}${normalizedPath === '/' ? '' : normalizedPath}`;
}
