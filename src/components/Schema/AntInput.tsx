import type { InputProps } from 'antd';
import { Input } from 'antd';
import type { FC } from 'react';

type AntInputProps = InputProps

const AntInput: FC<AntInputProps> = (props) => {
  const {} = props;

  return <Input {...props} />;
};

export default AntInput;
