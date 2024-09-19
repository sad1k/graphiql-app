import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as 'en' | 'rus')) notFound();

  const currentLocale = ['en', 'rus'].includes(locale) ? locale : 'en';

  const messages = (await import(`../../messages/${currentLocale}.json`)) as {
    default: Record<string, string>;
  };

  return {
    messages: messages.default,
  };
});
