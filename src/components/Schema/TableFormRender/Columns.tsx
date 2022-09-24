import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useBoolean } from 'ahooks';
import type { TableColumnProps } from 'antd';
import { Button, Modal, Segmented, Space, Divider } from 'antd';
import type { TableFormRenderProps } from 'antd-one/es/Components/TableFormRender';
import { FormRender } from 'antd-one';
import { useForm } from 'antd-one/es/Components/FormRender';
import produce from 'immer';

const Columns: FC<{
  value: TableFormRenderProps['columns'] & TableColumnProps<any>[];
  onChange: (p: TableFormRenderProps['columns']) => void;
}> = (props) => {
  const { value, onChange } = props;

  const [vis, { setTrue, setFalse }] = useBoolean();
  const [draftValue, setDraftValue] = useState<
    TableFormRenderProps['columns'] & TableColumnProps<any>[]
  >([]);
  const [currentVal, setCurrentVal] = useState<string | number>('');
  const [form] = useForm();

  useEffect(() => {
    if (vis && value && value[0]) {
      setCurrentVal(value[0].dataIndex as string);
    }
  }, [vis, value]);

  return value ? (
    <>
      <Button type="primary" onClick={setTrue}>
        columns配置
      </Button>
      <Modal
        title={'column配置'}
        width={400}
        open={vis}
        onOk={() => {
          onChange(draftValue);
          setFalse();
        }}
        onCancel={setFalse}
      >
        <Space>
          <Segmented
            value={currentVal}
            options={value.map((item: any) => {
              return {
                label: item.title as string,
                value: item.dataIndex as string,
              };
            })}
            onChange={(val) => {
              setCurrentVal(val);
              const targetForm = value.find(
                (item: any) => item.dataIndex === val,
              ) as TableFormRenderProps['columns'][0];
              if (targetForm) {
                form.setFieldsValue({
                  title: targetForm.title,
                  searchField: !!targetForm.searchField,
                });
              }
            }}
          />
          <div className="btn">+</div>
        </Space>
        <div className="w-xs mt">
          <FormRender
            form={form}
            onValuesChange={(_, values) => {
              console.log(value, values, currentVal, '==');
              const darft = produce(value, (val: any) => {
                const idx = val.findIndex(
                  (item: any) => item.dataIndex === currentVal,
                ) as number;
                val[idx].title = values.title;
              });
              setDraftValue(darft);
            }}
            fields={[
              {
                type: 'FormInput',
                props: {
                  name: 'title',
                  label: 'title',
                },
              },
              {
                type: 'Switch' as any,
                props: {
                  name: 'searchField',
                  label: '是否支持表单搜索？',
                },
              },
            ]}
          />
        </div>
      </Modal>
    </>
  ) : null;
};

export default Columns;
