'use client';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Tab, TabList } from '@web3uikit/core';
import { Button, Radio, Segmented, Tabs, TabsProps } from 'antd';

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
  ];
  const tabs = [
    { label: 'Tab1', value: '1', className: clsx('bg-violet-500 p-2.5')},
    { label: 'Tab2', value: '2', className: clsx('bg-violet-500 p-2.5')},
    { label: 'Tab3', value: '3', className: clsx('bg-violet-500 p-2.5')},
  ];
  return (
    <div>
      <Segmented
        className={clsx('bg-transparent')}
        onChange={(value) => setStateTab(value.toString())}
        options={tabs}
      />
      <Tabs
        activeKey={stateTab}
        tabBarStyle={{
          margin: 'auto',
          display: 'none',
          width: '0px',
          border: 'none',
        }}
        items={items}
        defaultActiveKey="2"
      />
    </div>
  );
}
