import globalVariables from '@/services/statics';
import { Image } from 'antd';
import clsx, { ClassValue } from 'clsx';
import React from 'react';
import styles from './CoinCard.module.scss';

export default function CoinCard({ className }: { className?: ClassValue }) {
  return (
    <div className={clsx(className)}>
      <div
        className={clsx(
          styles.coinCard,
          'w-fit m-10 p-10 shadow-indigo-500/40 flex items-center flex-col shadow-2xl shadow-2xl'
        )}
      >
        <Image
          alt=""
          width={200}
          height={200}
          className={clsx('w-100 h-100')}
          src={globalVariables.logoVN}
        />
        <span className={clsx('pt-5')}>ETH</span>
      </div>
    </div>
  );
}
