import type { FC } from 'react';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { useBoolean } from 'ahooks';
import type { TableColumnProps } from 'antd';
import { Button, Modal, Segmented, Space, Divider, ConfigProvider } from 'antd';
import type { TableFormRenderProps } from 'antd-one';
import { FormRender } from 'antd-one';
import produce from 'immer';
import setVal from 'lodash.set';

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
  const [form] = FormRender.useForm();

  const segmentedChange = useCallback(
    async (val: string | number) => {
        await form.validateFields();
      setCurrentVal(val);
      const targetForm = value.find((item: any) => item.dataIndex === val) as any;
      if (targetForm) {
        form.setFieldsValue({
          title: targetForm.title,
          dataIndex: targetForm.dataIndex,
          searchField: !!targetForm.searchField,
          ['searchField.props.name']: targetForm?.searchField?.props?.name,
          ['searchField.type']: targetForm?.searchField?.type,
          ['searchField.props.label']: targetForm?.searchField?.props?.label,
        });
      }
    },
    [value, form],
  );

  useEffect(() => {
    if (vis && value && value[0]) {
      setCurrentVal(value[0].dataIndex as string);
      segmentedChange(value[0].dataIndex as string);
    }
  }, [vis, value]);

  return value ? (
    <>
      <Button type="primary" onClick={setTrue}>
        columns配置
      </Button>
      <Modal
        title={'column配置'}
        width={550}
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
            onChange={segmentedChange}
          />
          <div className="btn">+</div>
        </Space>
        <div className="w-xs mt">
          <ConfigProvider componentSize="small">
            <FormRender
              form={form}
              onValuesChange={(_, values) => {
                const darft = produce(value, (val: any) => {
                  const idx = val.findIndex((item: any) => item.dataIndex === currentVal) as number;
                  Object.entries(values).forEach(([k, v]) => {
                    setVal(val[idx], k, v);
                  });
                });
                setDraftValue(darft);
              }}
              fields={[
                {
                  render: <Divider plain>columns配置</Divider>,
                },
                {
                  type: 'FormInput',
                  props: {
                    name: 'title',
                    label: 'title',
                    rules: [{ required: true }],
                  },
                },
                {
                  type: 'FormInput',
                  props: {
                    name: 'dataIndex',
                    label: 'dataIndex',
                    rules: [{ required: true }],
                  },
                },
                {
                  type: 'Switch' as any,
                  props: {
                    name: 'searchField',
                    label: '表单搜索？',
                  },
                },
                (formData) => {
                  return {
                    type: formData.searchField && (() => <Divider plain>搜索配置</Divider>),
                    props: {
                      noStyle: true,
                    },
                  };
                },
                (formData) => {
                  return {
                    type: formData.searchField && 'FormInput',
                    props: {
                      name: 'searchField.props.label',
                      label: 'label名称',
                      rules: [{ required: true }],
                    },
                  };
                },
                (formData) => {
                  return {
                    type: formData.searchField && 'FormInput',
                    props: {
                      name: 'searchField.props.name',
                      label: 'name',
                      rules: [{ required: true }],
                    },
                  };
                },
                (formData) => {
                  return {
                    type: formData.searchField && 'FormSelect',
                    props: {
                      name: 'searchField.type',
                      label: '搜索类型控件',
                      fieldProps: {
                        rules: [{ required: true }],
                        valueEnum: {
                          FormInput: '输入框',
                          DateTimeRangePicker: '日期选择',
                          FormSelect: '选择框',
                          Switch: '按钮开关',
                        },
                      },
                    },
                  };
                },
              ]}
            />
          </ConfigProvider>
        </div>
      </Modal>
    </>
  ) : null;
};

export default Columns;
