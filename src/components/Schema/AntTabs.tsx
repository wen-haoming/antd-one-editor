import type { PropsConfigArray } from '@/utils/propsTramsform';
import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import type { FC } from 'react';

type AntTabsProps = TabsProps

const AntTabs: FC<AntTabsProps> & {propsConfigArray: PropsConfigArray} = (props) => {
  const {} = props;

  return <Tabs {...props}>{props.children}</Tabs>;
};



AntTabs.propsConfigArray = [
  
];

export default AntTabs;
