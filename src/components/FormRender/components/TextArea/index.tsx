import type { InputProps } from 'antd';
import { Input } from 'antd';
import type { FC } from 'react';

export type FormInputProps = InputProps;

export const TextArea: FC<FormInputProps> = (props) => {
  const { allowClear = true } = props;
  return <Input.TextArea allowClear={allowClear} {...props} />;
};
