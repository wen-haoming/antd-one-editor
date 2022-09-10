import type { PropsConfigArray } from '@/utils/propsTramsform';
import type { InputProps } from 'antd';
import { Input } from 'antd';
import type { FC } from 'react';

type AntInputProps = InputProps;

const AntInput: FC<AntInputProps> & { schemaConfig: PropsConfigArray } = (props) => {
  const {} = props;

  return <Input {...props} />;
};

const AntInputConfig: PropsConfigArray = [
  {
    valueType: 'FormSelect',
    label: '是否展示字数',
    name: 'showCount',
    valueEnum: {
      true: '是',
      false: '否',
    },
  },
  {
    valueType: 'FormSelect',
    label: '是否边框',
    name: 'bordered',
    valueEnum: {
      true: '是',
      false: '否',
    },
  },
];

AntInput.schemaConfig = AntInputConfig;

export default AntInput;
