import { Tabs, TabsProps } from 'antd';
import { FC } from 'react';

interface AntTabsProps extends TabsProps {}

const AntTabs: FC<AntTabsProps> = (props) => {
  const {} = props;

  return <Tabs {...props}>{props.children}</Tabs>;
};

export default AntTabs;
