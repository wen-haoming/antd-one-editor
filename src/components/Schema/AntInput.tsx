import type { PropsConfigArray } from '@/utils/propsTramsform';
import type { InputProps } from 'antd';
import { Input } from 'antd';
import type { FC } from 'react';

type AntInputProps = InputProps;

const AntInput: FC<AntInputProps> & { propsConfigArray: PropsConfigArray } = (props) => {
  const {} = props;

  return <Input {...props} />;
};


AntInput.propsConfigArray = [
  {
    valueType: 'FormSwitch',
    label: '是否展示字数',
    name: 'showCount',
  },
  {
    valueType: 'FormSelect',
    label: '大小',
    name: 'size',
    valueEnum: {
      large: '大',
      middle: '中',
      small: '小',
    },
  },
];;

export default AntInput;
