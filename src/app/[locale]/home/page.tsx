'use client';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Tab, TabList } from '@web3uikit/core';
import {
  Button,
  ConfigProvider,
  Radio,
  Segmented,
  Tabs,
  TabsProps,
} from 'antd';
import './home.module.scss';

export default function Home() {
  const [stateTab, setStateTab] = useState('1');
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: '',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: '',
      children: 'Content of Tab Pane 3',
    },
    {
      key: '4',
      label: '',
      children: 'Content of Tab Pane 4',
    },
  ];
  const tabs = [
    {
      label: 'Giải hệ thống',
      value: '1',
      className: clsx(
        'bg-transparent  font-bold text-lg text-slate-100 py-2.5 px-4'
      ),
    },
    {
      label: 'Giải người dùng',
      value: '2',
      className: clsx(
        'bg-transparent font-bold text-lg text-slate-100 py-2.5 px-4'
      ),
    },
    {
      label: 'Giải kết thúc',
      value: '3',
      className: clsx(
        'bg-transparent font-bold text-lg text-slate-100 py-2.5 px-4'
      ),
    },
    {
      label: 'Tạo giải',
      value: '4',
      className: clsx(
        'bg-transparent font-bold text-lg text-slate-100 py-2.5 px-4'
      ),
    },
  ];
  return (
    <div className={clsx('h-[5000px]')}>
      <ConfigProvider
        theme={{
          components: {
            Segmented: {
              itemSelectedBg: 'rgba(230, 171, 239, 1)',
            },
          },
        }}
      >
        <Segmented
          size={'large'}
          className={clsx(
            'shadow-[0px_4px_50px_30px_rgba(75,163,182,0.50)] m-auto block w-fit bg-gradient-to-r from-violet-500 to-fuchsia-500'
          )}
          onChange={(value) => setStateTab(value.toString())}
          options={tabs}
        />
      </ConfigProvider>
      <Tabs
        activeKey={stateTab}
        tabBarStyle={{
          margin: 'auto',
          display: 'none',
          width: '0px',
          border: 'none',
        }}
        items={items}
        defaultActiveKey="1"
      />
    </div>
  );
}
