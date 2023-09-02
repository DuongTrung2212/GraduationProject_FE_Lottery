import { Avatar, Card } from 'antd';
import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Image from 'next/image';
import globalVariables from '@/services/statics';
import SystemLotteryItem from './SystemLotteryItem';
const { Meta } = Card;
export default function SystemLotteryPage() {
  return (
    <div>
      <SystemLotteryItem/>
    </div>
  );
}
