import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
 
export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'vi'}];
}
 
export default async function LocaleLayout({children, params: {locale}}:any) {
  let messages;
  try {
    messages = (await import(`../../../locales/${locale}/${locale}.json`)).default;
  } catch (error) {
    // console.log(locale)
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}