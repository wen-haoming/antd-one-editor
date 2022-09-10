import FormRender, { useForm } from '@/components/FormRender';
import { currentSelect, schema } from '@/store';
import { propsTramsform } from '@/utils/propsTramsform';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const RightPanel = () => {
  const [form] = useForm();
  const currentSelectState = useRecoilValue(currentSelect);
  const [schemaState, setSchemaState] = useRecoilState(schema);

  useEffect(() => {
    if (currentSelectState.id) {
      const targetItem = schemaState.find((item) => item.id === currentSelectState.id);
      if (targetItem) {
        form.setFieldsValue(targetItem.props);
      }
    }else{
      form.setFieldsValue({})
    }
  }, [currentSelectState.id]);

  return (
    <div className="w-1/5  border-brand-line ">
      <div className="flex h-8 w-full bg-white b-brand-grey border-b-1 justify-end items-center p-x2 m-b5">
        {/* 属性 */}
      </div>
      <div className="p-5">
        <FormRender
          form={form}
          onValuesChange={(_, formValues) => {
            const s = schemaState.map((item) => {
              if (item.id === currentSelectState.id && item.props) {
                return {
                  ...item,
                  props:{
                    ...item.props,
                    ...formValues,
                  }
                };
              }
              return item
            });
            setSchemaState(s);
          }}
          fields={propsTramsform(currentSelectState.schemaConfig)}
        />
      </div>
    </div>
  );
};

export default RightPanel;
