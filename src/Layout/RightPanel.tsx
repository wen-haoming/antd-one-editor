import FormRender, { useForm } from '@/components/FormRender';
import { currentSelect, idMap, UiItem, uiTree } from '@/store';
import { propsTramsform } from '@/utils/propsTramsform';
import { useCallback, useEffect } from 'react';
import { selector, useRecoilState } from 'recoil';
import getVal from 'lodash.get';
import setVal from 'lodash.set';
import produce from 'immer';

const currentSelectMapSeletor = selector({
  key: 'currentSelectMap',
  get: ({ get }) => {
    return {
      currentUiItem: getVal(get(uiTree), get(idMap)[get(currentSelect).id]) as UiItem,
      id: get(currentSelect).id,
    };
  },
  set: ({ set, get }, newVal) => {
    const uiTreepath = get(idMap)[get(currentSelect).id];
    const uiTreeState = get(uiTree);
    // 数组开头添加元素
    const addedTodosArray = produce(uiTreeState, (draft) => {
      setVal(draft, `${uiTreepath}.props`, newVal);
    });
    return set(uiTree, addedTodosArray);
  },
});

const RightPanel = () => {
  const [form] = useForm();
  const [{ currentUiItem, id }, setcurrentUiItem] = useRecoilState(currentSelectMapSeletor);

  // 每次切换组件就需要清空
  useEffect(() => {
    if (currentUiItem && currentUiItem.props) {
      form.resetFields();
      form.setFieldsValue(currentUiItem.props);
    }
  }, [id]);

  const onValuesChange = useCallback((_: any, formValues: any) => {
    setcurrentUiItem(formValues);
  }, []);

  return (
    <div className="w-1/5  border-brand-line ">
      <div className="flex h-8 w-full bg-white b-brand-grey border-b-1 justify-end items-center p-x2 m-b5">
        {/* 属性 */}
      </div>
      <div className="p-5">
        {currentUiItem?.UiComponent?.propsConfigArray && (
          <FormRender
            form={form}
            onValuesChange={onValuesChange}
            fields={propsTramsform(currentUiItem.UiComponent.propsConfigArray)}
          />
        )}
      </div>
    </div>
  );
};

export default RightPanel;
