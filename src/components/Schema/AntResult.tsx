import type { ResultProps } from 'antd';
import { Result } from 'antd';
import type { FC } from 'react';

type AntResultProps = ResultProps

const AntResult: FC<AntResultProps> = (props) => {
  const {} = props;

  return <Result {...props} />;
};

export default AntResult;
