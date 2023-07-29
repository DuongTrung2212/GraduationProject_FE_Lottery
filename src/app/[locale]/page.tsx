'use client';

import {useTranslations} from 'next-intl';
// import PageLayout from 'components/PageLayout';

export default function IndexPage() {
  const t = useTranslations();

  return (
      <p className="max-w-[590px]">
        {t.rich('home', {
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          )
        })}
      </p>
  );
}