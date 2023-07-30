import globalVariables from '@/services/statics';
import { Image } from 'antd';
import clsx from 'clsx';
import React from 'react';
import styles from './CoinCard.module.scss';

export default function CoinCard() {
  return (
    <div
      className={clsx(
        styles.coinCard,
        'w-fit m-10 rotate-18 p-10 flex items-center flex-col'
      )}
    >
      <Image
        alt=""
        width={50}
        height={50}
        className={clsx('w-50 h-50')}
        src={globalVariables.logoVN}
      />
      <span className={clsx('pt-5')}>ETH</span>
    </div>
  );
}
