import type { SFC } from '..';
import { TableFormRender } from 'antd-one';
import type { TableFormRenderProps } from 'antd-one';
import Columns from './Columns';

const TableFormRender2: SFC<TableFormRenderProps> = (props) => {
  return <TableFormRender {...props} />;
};

TableFormRender2.importDeclaration = {
  source: 'antd-one',
  import: 'TableFormRender',
};

TableFormRender2.defaultProps = {
  request: async () => {
    return new Promise((r) => {
      window.setTimeout(() => {
        r({
          total: 1000,
          list: Array(1000)
            .fill('')
            .map((item, id) => ({
              key: id,
              name: id,
              gender: '男',
              age: id,
              title: id,
              address: id,
            })),
        });
      }, 300);
    });
  },
  tableProps: {
    scroll: {
      y: 500,
    },
  },
  columns: [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      searchField: {
        type: 'FormInput',
        props: {
          label: '姓名',
          name: 'name',
        },
      },
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
      searchField: {
        type: 'FormSelect',
        props: {
          label: '性别',
          name: 'gender',
          fieldProps: {
            valueEnum: {
              man: '男',
              woman: '女',
            },
          },
        },
      },
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      searchField: {
        type: 'FormInput',
        props: {
          label: '年龄',
          name: 'age',
        },
      },
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      searchField: {
        type: 'FormInput',
        props: {
          label: '住址',
          name: 'address',
        },
      },
    },
  ],
};

TableFormRender2.propsConfigArray = [
  {
    valueType: 'FormSwitch',
    label: '是否展示外边框',
    name: 'tableProps.bordered',
  },
  {
    valueType: 'FormSelect',
    label: '表格大小',
    name: 'tableProps.size',
    valueEnum: {
      default: 'default',
      middle: 'middle',
      small: 'small',
    },
  },
  {
    valueType: Columns as React.FunctionComponent,
    label: 'columns',
    name: 'columns',
  },
];

export default TableFormRender2;
