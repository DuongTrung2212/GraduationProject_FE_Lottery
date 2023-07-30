'use client';
import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next-intl/client';
import React, { MouseEvent, useEffect, useState, useTransition } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { Avatar, Select } from 'antd';
import globalVariables from '../../services/statics/index';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {
  const router = useRouter();
  const t = useTranslations('header');
  const pathname = usePathname();
  const locale = useLocale();
  const [dataLocales, setDataLocales] = useState({});
  function handleOnClick(e: MouseEvent<HTMLButtonElement>) {
    router.replace(pathname, { locale: locale === 'vi' ? 'en' : 'vi' });
  }

  useEffect(() => {
    // Sử dụng hàm async IIFE để lấy dữ liệu từ tệp dịch vụ (JSON)
    const fetchData = async () => {
      try {
        const messages = (
          await import(`../../../locales/${locale}/${locale}.json`)
        ).default;
        setDataLocales(messages.header); // Lưu trữ dữ liệu vào state
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
        setDataLocales({}); // Xử lý lỗi nếu cần thiết
      }
    };

    fetchData();
  }, [locale]);
  {
    return (
      <div
        className={clsx(
          styles.header,
          'h-fit w-full px-5 fixed flex items-center justify-between'
        )}
      >
        <div>
          Logo
          {/* <img src={logo} /> */}
        </div>
        <div className={clsx('flex items-center')}>
          {Object.keys(dataLocales).map((data, index) => {
            return (
              <Link
                key={index}
                className={clsx('px-10 py-5 hover:border-b-2 hover:rounded')}
                href={`/${data}`}
              >
                <p className={clsx('text-xl font-bold text-cyan-100')}>
                  {t(data)}
                </p>
              </Link>
            );
          })}

          {/* <Link className={clsx('px-5 py-5')} href={'/rules'}>
            <p>{t('rules')}</p>
          </Link>
          <Link className={clsx('px-5 py-5')} href={'/forum'}>
            <p>{t('forum')}</p>
          </Link>
          <Link className={clsx('px-5 py-5')} href={'/about'}>
            <p>{t('about')}</p>
          </Link> */}
        </div>
        <div className={clsx('flex items-center')}>
          <Select
            onChange={(e: string) => {
              router.replace(pathname, { locale: e });
            }}
            style={{ width: 80 }}
            defaultValue={locale}
            options={[
              {
                value: 'vi',
                label: (
                  <div>
                    <Avatar size={20} src={globalVariables.logoVN} />
                    VN
                  </div>
                ),
              },
              {
                value: 'en',
                label: (
                  <div>
                    <Avatar size={20} src={globalVariables.logoEN} />
                    EN
                  </div>
                ),
              },
            ]}
          />
          <ConnectButton />
        </div>
      </div>
    );
  }
}
