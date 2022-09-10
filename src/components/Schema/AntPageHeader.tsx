import type { PageHeaderProps } from 'antd';
import { PageHeader } from 'antd';
import type { FC } from 'react';

type AntPageHeaderProps = PageHeaderProps

const AntPageHeader: FC<AntPageHeaderProps> = (props) => {
  const {} = props;

  return <PageHeader {...props} />;
};

export default AntPageHeader;
