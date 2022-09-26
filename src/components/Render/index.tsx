import type { UiTree } from '@/store';
import type { FC } from 'react';
import AddComponent from '../AddComponent';
import Wrapper from '../Schema/Wrapper';
import {ConfigProvider} from 'antd'

export interface RenderProps {
  uiTree: UiTree;
}

const inlineBlock = ['Button'];

export const Render: FC<RenderProps> = (props) => {
  const { uiTree } = props;

  return (
    <ConfigProvider >
      {uiTree.map(({ id, UiComponent, props }, key) => {
        // 识别是否 jsx 函数（箭头，匿名，调用）
        // props.xxx === ()=> <div>123</div>
        // props.xxx === <div>123</div>
        // if (props.xxx) {
        //       return <Render uiTree={uiItem.props.xxx} />
        //   }
        return (
          <Wrapper
            key={id}
            id={id}
            inlineBlock={inlineBlock.includes(
              UiComponent.importDeclaration.import ||
                (UiComponent.importDeclaration.importDefault as string),
            )}
          >
            <UiComponent {...props} />
          </Wrapper>
        );
      })}
      <AddComponent />
    </ConfigProvider>
  );
};

export default Render;
