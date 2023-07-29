'use client'
import { useLocale, useTranslations } from 'next-intl';
import { useRouter,usePathname } from 'next-intl/client';
import React, { ChangeEvent, MouseEvent, useTransition } from 'react'

export default function Header() {
  const router= useRouter();
  const t = useTranslations();
  const pathname = usePathname();
  const locale = useLocale();
  function handleOnClick(e: MouseEvent<HTMLButtonElement>) {
      router.replace(pathname, {locale: (locale === 'vi'?'en':'vi')});
  }
  {return (
    <>
     <button onClick={handleOnClick}>Change</button>
      <div>Header ---{t('home')}</div>
    </>
  )}
}
