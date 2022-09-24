import { useBoolean } from 'ahooks';
import { Button, Modal } from 'antd';
import type { SFC } from '..';
import { TableFormRender } from 'antd-one';
import type { TableFormRenderProps } from 'antd-one/es/Components/TableFormRender';

const TableFormRender2: SFC<TableFormRenderProps> = (props) => {
  return <TableFormRender {...props} />;
};

TableFormRender2.importDeclaration = {
  source: 'antd-one',
  import: 'TableFormRender',
};

TableFormRender2.defaultProps = {
  async request() {
    return {
      total: 1000,
      list: Array(1000)
        .fill('')
        .map((item, id) => ({
          key: id,
          name: id,
          age: id,
          title: id,
        })),
    };
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
};

TableFormRender2.propsConfigArray = [
  {
    valueType: 'FormSwitch',
    label: '是否展示外边框',
    name: 'bordered',
  },
  {
    valueType: 'FormSelect',
    label: '表格大小',
    name: 'size',
    valueEnum: {
      default: 'default',
      middle: 'middle',
      small: 'small',
    },
  },
  {
    valueType: () => {
      const [vis, { setTrue, setFalse }] = useBoolean();
      return (
        <>
          <Button onClick={setTrue}>columns配置</Button>
          <Modal open={vis} onOk={setFalse} onCancel={setFalse}>
            123
          </Modal>
        </>
      );
    },
    label: 'columns',
    name: 'columns',
  },
];

export default TableFormRender2;
