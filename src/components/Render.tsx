import type { FC } from 'react';
import { cloneElement } from 'react';
import { schemaInstall } from './Schema';
import { ConfigProvider, Space } from 'antd';
import Wrapper from './Schema/Wrapper';
export interface Atom {
  type: keyof typeof schemaInstall;
  id: string;
  props: {};
}

export interface RenderProps {
  schema: Atom[];
}

const Render: FC<RenderProps> = (props) => {
  const { schema } = props;

  return (
    <>
      {schema.map((item, idx) => {
        const Component = schemaInstall[item.type];
        return (
          <Wrapper
            key={idx}
            componentId={item.id}
            block={item.type !== 'AntButton' && item.type !== 'AntInput'}
          >
            <Component {...item.props} />
          </Wrapper>
        );
      })}
    </>
  );
};

export default Render;
