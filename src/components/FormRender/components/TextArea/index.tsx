// import type { InputProps } from 'antd';
import { Input } from 'antd';
import type { FC } from 'react';

export type FormInputProps = any;

export const TextArea: FC<FormInputProps> = (props) => {
  return <Input.TextArea  {...props} />;
};
