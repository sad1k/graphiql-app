import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  const supportedLocales = ['en', 'rus'];
  const defaultLocale = 'en';

  const currentLocale = supportedLocales.includes(locale)
    ? locale
    : defaultLocale;

  if (!routing.locales.includes(currentLocale as 'en' | 'rus')) notFound();

  const messages = (await import(`../../messages/${locale}.json`)) as {
    default: Record<string, string>;
  };

  return {
    messages: messages.default,
    locale: currentLocale,
  };
});
