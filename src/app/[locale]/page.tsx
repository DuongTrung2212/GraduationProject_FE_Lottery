'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import styles from './locale.module.scss';
import { TypeAnimation } from 'react-type-animation';
import 'animate.css';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import globalVariables from '@/services/statics';
import { CoinCard } from '@/components';

export default function IndexPage() {
  const t = useTranslations('home');
  const constraintsRef = useRef(null);
  return (
    <div className={clsx('localePage h-[200rem]')}>
      <div className={clsx('flex pt-20')}>
        <div className={clsx('w-8/12 p-10')}>
          <div className={clsx('py-5')}>
            <TypeAnimation
              className={clsx(
                'drop-shadow-2xl text-indigo-400 text-5xl font-bold'
              )}
              speed={25}
              cursor={false}
              omitDeletionAnimation={true}
              sequence={['SimpRaidenEi', 60000, '', 3000]}
              repeat={Infinity}
            />
          </div>
          <TypeAnimation
            className={clsx('drop-shadow-lg text-neutral-200 font-mono')}
            speed={40}
            omitDeletionAnimation={true}
            sequence={[t('description'), 5000, '', 3000, '']}
            repeat={Infinity}
          />
          {/* <p className={clsx('drop-shadow-lg text-neutral-200 font-mono')}>
            {t('description')}
          </p> */}
        </div>
        <div className={clsx('w-4/12 mt-6 h-[1000px] flex ml-24')}>
          <motion.div
            className={clsx('shadow relative drop-shadow-xl')}
            ref={constraintsRef}
          >
            <motion.div
              drag
              dragConstraints={constraintsRef}
              className={clsx('absolute left-[-50px] top-[6px] rotate-[10deg]')}
            >
              <CoinCard src={globalVariables.logoVN} value='ETH' />
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              className={clsx('absolute left-[-40px] top-[8px] rotate-[15deg]')}
            >
              <CoinCard src={globalVariables.logoVN} value='BTC'/>
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              className={clsx('absolute left-[-30px] top-[10px] rotate-[20deg]')}
            >
              <CoinCard src={globalVariables.logoVN} value='SOL'/>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
