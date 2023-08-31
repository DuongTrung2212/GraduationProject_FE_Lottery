import globalVariables from '@/services/statics';
import { Image } from 'antd';
import clsx, { ClassValue } from 'clsx';
import React from 'react';
import styles from './CoinCard.module.scss';

interface Props {
  className? :ClassValue;
  src: string;
  value: string;
}

export default function CoinCard(props: Props) {
  return (
    <div className={clsx(props.className)}>
      <div
        className={clsx(
          styles.coinCard,
          'w-fit m-10 p-10 shadow-indigo-500/40 flex items-center flex-col shadow-2xl shadow-2xl'
        )}
      >
        <Image
          preview={false}
          alt=""
          draggable={false}
          width={200}
          height={200}
          className={clsx('w-100 h-100 rounded-lg')}
          src={props.src}
        />
        <span className={clsx('pt-5')}>{props.value}</span>
      </div>
    </div>
  );
}
