import FormRender, { useForm } from '@/components/FormRender';
import { currentSelect, idMap } from '@/store';
import { propsTramsform } from '@/utils/propsTramsform';
import { useCallback, useEffect } from 'react';
import { selector, useRecoilState, useRecoilValue } from 'recoil';

const currentSelectMapSeletor = selector({
  key: 'currentSelectMap',
  get: ({ get }) => ({
    currentMap: get(idMap)[get(currentSelect).id],
    id: get(currentSelect).id,
  }),
  set: ({ set, get }, newVal) => {
    const map = get(idMap);
    const id = get(currentSelect).id;
    return set(idMap, {
      ...map,
      [id]: {
        ...map[id],
        props: newVal,
      },
    });
  },
});

const RightPanel = () => {
  const [form] = useForm();
  const [{ currentMap, id }, setCurrentMap] = useRecoilState(currentSelectMapSeletor);

  // 每次切换组件就需要清空
  useEffect(() => {
    if (currentMap && currentMap.props) {
      form.resetFields();
      form.setFieldsValue(currentMap.props);
    }
  }, [id]);

  const onValuesChange = useCallback((_: any, formValues: any) => {
    setCurrentMap(formValues);
  }, []);

  return (
    <div className="w-1/5  border-brand-line ">
      <div className="flex h-8 w-full bg-white b-brand-grey border-b-1 justify-end items-center p-x2 m-b5">
        {/* 属性 */}
      </div>
      <div className="p-5">
        {currentMap?.component?.propsConfigArray && (
          <FormRender
            form={form}
            onValuesChange={onValuesChange}
            fields={propsTramsform(currentMap.component.propsConfigArray)}
          />
        )}
      </div>
    </div>
  );
};

export default RightPanel;
