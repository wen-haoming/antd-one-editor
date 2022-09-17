import type { PageHeaderProps } from 'antd';
import { Button, Descriptions } from 'antd';
import { PageHeader } from 'antd';
import type { SFC } from '.';

type AntPageHeaderProps = PageHeaderProps;

const AntPageHeader: SFC<AntPageHeaderProps> = (props) => {
  const {} = props;

  return <PageHeader {...props} />;
};

AntPageHeader.defaultProps = {
  ghost: false,
  title: 'Title',
  subTitle: 'This is a subtitle',
  extra: [
    <Button key="3">Operation</Button>,
    <Button key="2">Operation</Button>,
    <Button key="1" type="primary">
      Primary
    </Button>,
  ],
  children: (
    <Descriptions size="small" column={3}>
      <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
      <Descriptions.Item label="Association">
        <a>421421</a>
      </Descriptions.Item>
      <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
      <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
      <Descriptions.Item label="Remarks">
        Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
      </Descriptions.Item>
    </Descriptions>
  ),
}

AntPageHeader.propsConfigArray = [

];;

export default AntPageHeader;
