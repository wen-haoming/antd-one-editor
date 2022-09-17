import type { TableProps } from 'antd';
import { Table } from 'antd';
import type { SFC } from '.';

type AntTableProps = TableProps<any>

const AntTable: SFC<AntTableProps> = (props) => {
  const {} = props;

  return <Table {...props} />;
};

AntTable.importDeclaration = {
  source:'antd',
  import:'Table'
}

AntTable.defaultProps = {
  dataSource: [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ],
  columns: [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ],
}

AntTable.propsConfigArray = []


export default AntTable;
