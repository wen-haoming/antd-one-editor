import { Result, ResultProps } from 'antd';
import { FC } from 'react';

interface AntResultProps extends ResultProps {}

const AntResult: FC<AntResultProps> = (props) => {
  const {} = props;

  return <Result {...props} />;
};

export default AntResult;
