import { cookies, headers } from 'next/headers';
import { defaultLocale, isLocale, localeFromAcceptLanguage, type Locale } from './locales';

const LOCALE_COOKIE = 'site_locale';

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && isLocale(cookieLocale)) return cookieLocale;

  const headerStore = await headers();
  const headerLocale = localeFromAcceptLanguage(headerStore.get('accept-language'));
  return headerLocale ?? defaultLocale;
}

export async function setLocaleCookie(locale: Locale) {
  const cookieStore = await cookies();
  cookieStore.set(LOCALE_COOKIE, locale, {
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365,
  });
}
