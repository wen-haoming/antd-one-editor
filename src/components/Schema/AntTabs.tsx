import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import type { SFC } from '.';

type AntTabsProps = TabsProps;

const AntTabs: SFC<AntTabsProps> = (props) => {
  const {} = props;

  return <Tabs {...props}>{props.children}</Tabs>;
};

AntTabs.importDeclaration = {
  source:'antd',
  import:'Tabs'
}

AntTabs.defaultProps = {
  items: [
    { label: '项目 1', key: 'item-1', children: '内容 1' }, // 务必填写 key
    { label: '项目 2', key: 'item-2', children: '内容 2' },
  ],
};

AntTabs.propsConfigArray = [];

export default AntTabs;
