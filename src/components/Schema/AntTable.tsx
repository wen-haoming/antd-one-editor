import type { PropsConfigArray } from '@/utils/propsTramsform';
import type { TableProps } from 'antd';
import { Table } from 'antd';
import type { FC } from 'react';

type AntTableProps = TableProps<any>

const AntTable: FC<AntTableProps>& {propsConfigArray: PropsConfigArray} = (props) => {
  const {} = props;

  return <Table {...props} />;
};
AntTable.propsConfigArray = []


export default AntTable;
