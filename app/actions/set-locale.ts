'use server';

import { redirect } from 'next/navigation';
import { defaultLocale, isLocale } from '@/lib/i18n/locales';
import { setLocaleCookie } from '@/lib/i18n/get-locale';

export async function setLocale(formData: FormData) {
  const localeValue = formData.get('locale');
  const redirectToValue = formData.get('redirectTo');

  const locale =
    typeof localeValue === 'string' && isLocale(localeValue) ? localeValue : defaultLocale;

  await setLocaleCookie(locale);

  if (typeof redirectToValue === 'string' && redirectToValue.startsWith('/')) {
    redirect(redirectToValue);
  }

  redirect('/');
}
