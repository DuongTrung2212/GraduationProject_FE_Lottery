'use client';

import { Header } from '@/components';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import styles from './locale.module.scss';
import { CoinCard } from './components';

export default function IndexPage() {
  const t = useTranslations();

  return (
    <div className={clsx('localePage')}>
      <Header />
      <div className={clsx('flex items-center pt-20')}>
        <div className={clsx('w-6/12 p-10')}>
          <b>SimpRaidenEi</b>
          <p>
            Một hệ thống sổ xố blockchain minh bạch, uy tín, bảo mật không bị
            một bất kì ai kiểm soát. Với việc áp dụng công nghệ blockchain,
            chúng ta có thể giải quyết được nhiều vấn đề hiện nay như: con số
            trúng giải bị kiểm soát, thông tin bị người khác nắm giữ, bị đánh
            thuế cao, không an toàn...
          </p>
        </div>
        <div className={clsx('w-6/12 flex items-center')}>
          <CoinCard />
        </div>
      </div>
    </div>
  );
}
