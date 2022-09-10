import type { PropsArray } from '@/utils/propsTramsform';
import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import type { FC } from 'react';

type AntButtonProps = ButtonProps

const AntButton: FC<AntButtonProps> = (props) => {
  const {} = props;

  return <Button {...props} />;
};

export const AntButtonProps: PropsArray = [
  {
    type: 'FormInput',
  },
];

export default AntButton;
