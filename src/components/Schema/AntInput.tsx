import type { InputProps } from 'antd';
import { Input } from 'antd';
import type { SFC } from '.';

type AntInputProps = InputProps;

const AntInput: SFC<AntInputProps> = (props) => {
  const {} = props;

  return <Input {...props} />;
};

AntInput.defaultProps = {
  
}


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
