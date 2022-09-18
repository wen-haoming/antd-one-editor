import { Modal } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';
import { useBoolean } from 'ahooks';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { idMap, ids } from '@/store';
import type { ComponentName } from '../Schema';
import { componentsInstall } from '../Schema';

interface AddComponentProps {}

const components = {
  normal: [
    {
      type: 'AntButton',
      text: '按钮',
    },
    {
      type: 'AntInput',
      text: '输入框',
    },
    {
      type: 'AntPageHeader',
      text: '页头',
    },
    {
      type: 'AntResult',
      text: '结果页',
    },
    {
      type: 'AntTable',
      text: '列表',
    },
    {
      type: 'AntTabs',
      text: '标签页',
    },
  ],
};

const AddComponent: FC<AddComponentProps> = () => {
  const [visible, { setTrue, setFalse }] = useBoolean();
  const setIdsState = useSetRecoilState(ids);
  const [idMapState, setIdMapState] = useRecoilState(idMap);

  const handleChange = (componentName: ComponentName) => () => {
    const id = Math.floor(Math.random() * 100000).toString(16);

    setIdMapState({
      ...idMapState,
      [id]: {
        component: componentsInstall[componentName],
        props: componentsInstall[componentName].propsConfigArray
          ? (componentsInstall[componentName].defaultProps as Record<string, any>)
          : {},
      },
    });

    setIdsState((preIds: any) => {
      return [...preIds, id];
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
            {components.normal.map((item, key) => {
              return (
                <div
                  className="compBtn"
                  key={key}
                  onClick={handleChange(item.type as ComponentName)}
                >
                  {item.text}
                </div>
              );
            })}
          </div>
          <span className="">表单组件</span>
          <div className="p-2 grid grid-cols-3 gap-4">
            <div className="compBtn" onClick={handleChange('AntInput')}>
              查询表单
            </div>
            <div className="compBtn" onClick={handleChange('AntInput')}>
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
