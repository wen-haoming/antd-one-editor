import { PageHeader, PageHeaderProps } from 'antd';
import { FC } from 'react';

interface AntPageHeaderProps extends PageHeaderProps {}

const AntPageHeader: FC<AntPageHeaderProps> = (props) => {
  const {} = props;

  return <PageHeader {...props} />;
};

export default AntPageHeader;
