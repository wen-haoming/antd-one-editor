import type { ResultProps } from 'antd';
import { Button } from 'antd';
import { Result } from 'antd';
import type { SFC } from '.';

type AntResultProps = ResultProps

const AntResult: SFC<AntResultProps>  = (props) => {
  const {} = props;

  return <Result {...props} />;
};


AntResult.importDeclaration = {
  source:'antd',
  import:'Result'
}

AntResult.defaultProps = {
  status: 'success',
  title: 'Successfully Purchased Cloud Server ECS!',
  subTitle:
    'Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.',
  extra: [
    <Button type="primary" key="console">
      Go Console
    </Button>,
    <Button key="buy">Buy Again</Button>,
  ],
}

AntResult.propsConfigArray = [
  
];


export default AntResult;
