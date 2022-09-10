import FormRender, { useForm } from '@/components/FormRender';
import { currentSelect } from '@/store';
import { propsTramsform } from '@/utils/propsTramsform';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

const RightPanel = () => {
  // const [Form] = useForm();

  const currentSelectState = useRecoilValue(currentSelect);

  console.log(propsTramsform(currentSelectState.schemaConfig), 'currentSelectState');

  return (
    <div className="w-1/5  border-brand-line ">
      <div className="flex h-8 w-full bg-white b-brand-grey border-b-1 justify-end items-center p-x2 m-b5">
        {/* 属性 */}
      </div>
      <div className="p-5">
        <FormRender fields={propsTramsform(currentSelectState.schemaConfig)} />
      </div>
    </div>
  );
};

export default RightPanel;
