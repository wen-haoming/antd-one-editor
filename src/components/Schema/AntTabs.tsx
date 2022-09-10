import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import type { FC } from 'react';

type AntTabsProps = TabsProps

const AntTabs: FC<AntTabsProps> = (props) => {
  const {} = props;

  return <Tabs {...props}>{props.children}</Tabs>;
};

export default AntTabs;
