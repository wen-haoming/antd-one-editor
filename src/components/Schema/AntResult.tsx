import type { PropsConfigArray } from '@/utils/propsTramsform';
import type { ResultProps } from 'antd';
import { Result } from 'antd';
import type { FC } from 'react';

type AntResultProps = ResultProps

const AntResult: FC<AntResultProps> & {propsConfigArray: PropsConfigArray} = (props) => {
  const {} = props;

  return <Result {...props} />;
};


AntResult.propsConfigArray = [
  
];


export default AntResult;
