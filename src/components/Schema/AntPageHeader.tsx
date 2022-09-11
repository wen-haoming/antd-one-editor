import type { PropsConfigArray } from '@/utils/propsTramsform';
import type { PageHeaderProps } from 'antd';
import { PageHeader } from 'antd';
import type { FC } from 'react';

type AntPageHeaderProps = PageHeaderProps;

const AntPageHeader: FC<AntPageHeaderProps> & { propsConfigArray: PropsConfigArray } = (props) => {
  const {} = props;

  return <PageHeader {...props} />;
};

const AntPageHeaderConfig: PropsConfigArray = [

];

AntPageHeader.propsConfigArray = AntPageHeaderConfig;

export default AntPageHeader;
