import { idMap } from '@/store';
import type { FC } from 'react';
import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import AddComponent from '../AddComponent';
import Wrapper from '../Schema/Wrapper';

export interface RenderProps {
  ids: string[] | string[][];
}

const Render: FC<RenderProps> = (props) => {
  const { ids } = props;
  const idMapState = useRecoilValue(idMap);

  const Comp = useCallback(
    (id: string) => {
      if(!idMapState[id]){
        console.error(`id：${id}未找到对应的组件！`)
          return <></>
      }
      const RenderComponent = idMapState[id].component;
      const RenderComponentProps = idMapState[id].props;
      return <RenderComponent {...RenderComponentProps} />;
    },
    [idMapState],
  );

  return (
    <>
      {ids.map((id, key) => {
        if (typeof id === 'string') {
          return (
            <Wrapper key={id} id={id}>
              {Comp(id)}
            </Wrapper>
          );
        } else {
          return <Render key={key} ids={id} />;
        }
      })}
        <AddComponent />
    </>
  );
};

export default Render;
