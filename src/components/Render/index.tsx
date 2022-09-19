import { UiTree, uiTree } from '@/store';
import type { FC } from 'react';
import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import AddComponent from '../AddComponent';
import Wrapper from '../Schema/Wrapper';

export interface RenderProps {
  uiTree: UiTree;
}

const Render: FC<RenderProps> = (props) => {
  const { uiTree } = props;

  // const Comp = useCallback(
  //   (id: string) => {
  //     const RenderComponent = uiTree[id].component;
  //     const RenderComponentProps = uiTree[id].props;
  //     return <RenderComponent {...RenderComponentProps} />;
  //   },
  //   [uiTree],
  // );

  return (
    <>
      {uiTree.map(({id,UiComponent,props}, key) => {
          // 识别是否 jsx 函数（箭头，匿名，调用）
          // props.xxx === ()=> <div>123</div>
          // props.xxx === <div>123</div>
          // if (props.xxx) {
          //       return <Render uiTree={uiItem.props.xxx} />
          //   }
          return (
            <Wrapper key={id} id={id}>
              <UiComponent {...props} />
            </Wrapper>
          );
      })}
      <AddComponent />
    </>
  );
};

export default Render;
