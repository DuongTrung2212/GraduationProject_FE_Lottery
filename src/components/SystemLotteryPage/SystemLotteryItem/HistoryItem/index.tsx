import globalVariables from '@/services/statics';
import { Avatar } from 'antd';
import clsx from 'clsx';
import moment from 'moment';
import React from 'react';
import 'moment/locale/vi';
import { useLocale } from 'next-intl';
interface Props {
  value?: string;
}
export default function HistoryItem(props: Props) {
  const locale = useLocale();
  moment.locale(locale);
  // moment().format('LLLL');
  
  const arr = ['1', '2', '3', '4', '5', '6'];
  return (
    <div className={clsx('bg-[#8B95CC] mb-1 px-2.5 py-3.5 rounded')}>
      <div className={clsx('flex align-center')}>
        <div>
          <Avatar size={'large'} src={globalVariables.logoVN} />
        </div>
        <div className={clsx('pl-3')}>
          <div className={clsx('truncate w-[200px]')}>Nguyen Van Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
          <div>{moment('20111031').startOf('hour').fromNow()}</div>
        </div>
      </div>
      <div className={clsx('flex pt-1 justify-center')}>
        {arr.map((value, index) => (
          <div className={clsx('w-[40px] h-[50px] text-center text-[30px] rounded bg-slate-300 border-solid border-2 m-1 border-slate-300')} key={index}>{value}</div>
        ))}
      </div>
    </div>
  );
}
