import { Avatar, Card } from 'antd';
import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Image from 'next/image';
import globalVariables from '@/services/statics';
import SystemLotteryItem from './SystemLotteryItem';
import clsx from 'clsx';
const { Meta } = Card;
export default function SystemLotteryPage() {
  return (
    <div className={clsx('flex items-center flex-col')}>
      <SystemLotteryItem/>
      {/* <SystemLotteryItem/> */}
    </div>
  );
}
