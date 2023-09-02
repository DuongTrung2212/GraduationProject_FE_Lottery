import clsx from 'clsx';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import styles from './locale.module.scss';
import { Providers } from './provider';
import 'animate.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'vi' }];
}

export const metadata: Metadata = {
  title: 'Lottery Blockchain',
  description: 'Lottery Blockchain',
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
    <html /*lang={locale}*/>
      <body className={clsx(styles.locale)}>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header/>
            <div className={clsx('pt-32 px-4')}>
              {children}
            </div>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
