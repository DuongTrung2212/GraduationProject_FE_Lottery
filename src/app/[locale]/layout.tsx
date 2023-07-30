import clsx from 'clsx';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import styles from './locale.module.scss';
import { Providers } from './provider';
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'vi' }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: any) {
  let messages;
  try {
    messages = (await import(`../../../locales/${locale}/${locale}.json`))
      .default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={clsx(styles.locale)}>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
