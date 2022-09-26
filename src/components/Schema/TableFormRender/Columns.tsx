import type { FC } from 'react';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { useBoolean } from 'ahooks';
import type { TableColumnProps } from 'antd';
import { Button, Modal, Segmented, Space, ConfigProvider } from 'antd';
import type { TableFormRenderProps } from 'antd-one';
import { FormRender } from 'antd-one';
import produce from 'immer';
import setVal from 'lodash.set';
import getVal from 'lodash.get';
import { Brand } from '@/components';
import { randomId } from '@/utils';

const setFieldsValue = (targetObj: Record<string, any>) => {
  return [
    'title',
    'dataIndex',
    'searchField',
    'searchField.props.name',
    'searchField.type',
    'searchField.props.label',
  ].reduce<Record<string, any>>((pre, item) => {
    pre[item] = getVal(targetObj, item);
    return pre;
  }, {});
};

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

  const addColumn = async () => {
    await form.validateFields();
    const id = randomId();
    const darft = produce(draftValue, (val: any) => {
      val.push({
        title: id,
        dataIndex: id,
      });
      return val;
    });
    setCurrentVal(id);
    setDraftValue(darft);
  };

  const segmentedChange = useCallback(
    async (val: string | number) => {
      if (currentVal && val !== currentVal) {
        await form.validateFields();
      }
      setCurrentVal(val);
    },
    [value, form, draftValue],
  );

  useEffect(() => {
    // 初次打开需要赋值第一个
    if (vis && value && value[0]) {
      setDraftValue(value);
      setCurrentVal(value[0].dataIndex as string);
      segmentedChange(value[0].dataIndex as string);
    }
  }, [vis, value]);

  useEffect(() => {
    /**
     * 每次切换 Segmented 都会刷新当前表单，为什么不在回调里做，感觉是 Segmented 的onChange 的闭包没有更新 draftValue 导致拿到旧的数据
     **/
    if (currentVal && draftValue) {
      const targetForm = draftValue.find((item: any) => item.dataIndex === currentVal) as any;
      if (targetForm) {
        form.setFieldsValue(setFieldsValue(targetForm));
      }
    }
  }, [currentVal, draftValue]);

  return value ? (
    <>
      <Button type="primary" onClick={setTrue}>
        columns配置
      </Button>
      <Modal
        title={'column配置'}
        // width={550}
        open={vis}
        onOk={async () => {
          await form.validateFields();
          onChange(draftValue);
          setFalse();
        }}
        onCancel={setFalse}
      >
        <div className="flex w-full">
          <div className="overflow-x-auto">
            <Segmented
              value={currentVal}
              options={draftValue.map((item: any) => {
                return {
                  label: item.title as string,
                  value: item.dataIndex as string,
                };
              })}
              onChange={segmentedChange}
            />
          </div>
          <div className="btn m-l-5px" onClick={addColumn}>
            +
          </div>
        </div>
        <div className="w-xs mt">
          <ConfigProvider componentSize="small">
            <FormRender
              form={form}
              onValuesChange={(_, values) => {
                const darft = produce(draftValue, (val: any) => {
                  const idx = val.findIndex((item: any) => item.dataIndex === currentVal) as number;
                  Object.entries(values).forEach(([k, v]) => {
                    setVal(val[idx], k, v);
                  });
                });
                setDraftValue(darft);
              }}
              fields={[
                () => {
                  return {
                    type: () => <Brand str="columns配置" />,
                    props: {
                      noStyle: true,
                    },
                  };
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
                    label: '表单搜索',
                  },
                },
                (formData) => {
                  return {
                    type: formData.searchField && (() => <Brand str="table搜索配置" />),
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
                      rules: [{ required: true }],
                      fieldProps: {
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
