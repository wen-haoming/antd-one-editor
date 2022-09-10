import { Modal, Button, Descriptions } from 'antd';
import { FC, memo } from 'react';
import { useBoolean } from 'ahooks';
import { Atom } from '@/components/Render';

interface AddComponentProps {
  onChange: (atom: Atom) => void;
}

const AddComponent: FC<AddComponentProps> = (props) => {
  const [visible, { setTrue, setFalse }] = useBoolean();
  const { onChange } = props;

  const handleChange =
    (type: Atom['type'], props: any = {}) =>
    () => {
      onChange({
        type: type,
        props: props,
        id: Math.floor(Math.random() * 100000).toString(16),
      });
      setFalse();
    };

  return (
    <>
      <Modal
        open={visible}
        onOk={setTrue}
        bodyStyle={{
          borderRadius: '0.375rem',
        }}
        onCancel={setFalse}
        wrapClassName="rounded-md"
        className="rounded-md"
      >
        <div className="rounded-md text-brand-sub-txt bg-white p-4 z-auto">
          <span className="">普通组件</span>
          <div className="p-2 grid grid-cols-3 gap-4">
            <div
              className="compBtn"
              onClick={handleChange('AntButton', {
                children: '按钮',
                type: 'primary',
              })}
            >
              按钮
            </div>
            <div className="compBtn" onClick={handleChange('AntInput', {})}>
              输入框
            </div>
            <div
              className="compBtn"
              onClick={handleChange('AntPageHeader', {
                ghost: false,
                onBack: () => window.history.back(),
                title: 'Title',
                subTitle: 'This is a subtitle',
                extra: [
                  <Button key="3">Operation</Button>,
                  <Button key="2">Operation</Button>,
                  <Button key="1" type="primary">
                    Primary
                  </Button>,
                ],
                children: (
                  <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
                    <Descriptions.Item label="Association">
                      <a>421421</a>
                    </Descriptions.Item>
                    <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
                    <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
                    <Descriptions.Item label="Remarks">
                      Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
                    </Descriptions.Item>
                  </Descriptions>
                ),
              })}
            >
              页头
            </div>
            <div
              className="compBtn"
              onClick={handleChange('AntResult', {
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
              })}
            >
              结果页
            </div>
            <div
              className="compBtn"
              onClick={handleChange('AntTable', {
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
              })}
            >
              列表
            </div>
            <div
              className="compBtn"
              onClick={handleChange('AntTabs', {
                items: [
                  { label: '项目 1', key: 'item-1', children: '内容 1' }, // 务必填写 key
                  { label: '项目 2', key: 'item-2', children: '内容 2' },
                ],
              })}
            >
              标签页
            </div>
          </div>
          <span className="">表单组件</span>
          <div className="p-2 grid grid-cols-3 gap-4">
            <div className="compBtn" onClick={handleChange('AntInput', {})}>
              查询表单
            </div>
            <div className="compBtn" onClick={handleChange('AntInput', {})}>
              按钮表单
            </div>
          </div>
        </div>
      </Modal>
      <div className="btn-block mx-10 my-2 " onClick={setTrue}>
        +
      </div>
    </>
  );
};

export default memo(AddComponent);
