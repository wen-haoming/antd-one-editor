import type { TableProps } from 'antd';
import { Table } from 'antd';
import type { FC } from 'react';

type AntTableProps = TableProps<any>

const AntTable: FC<AntTableProps> = (props) => {
  const {} = props;

  return <Table {...props} />;
};

export default AntTable;
