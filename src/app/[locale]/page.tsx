'use client';

import { Header } from '@/components';
import clsx from 'clsx';
import {useTranslations} from 'next-intl';
import styles from './locale.module.scss';

export default function IndexPage() {
  const t = useTranslations();

  return (
      <div className={clsx('localePage')}>
        <Header/>
      </div>
  );
}