import { useCallback } from 'react';
import type { FC } from 'react';

interface WrapperProps {
  block?: boolean;
  componentId: string;
}

const Wrapper: FC<WrapperProps> = (props) => {
  const { block = true, componentId } = props;

  const handleClick = useCallback(() => {
    console.log(componentId);
  }, [componentId]);

  return (
    <div
      onClick={handleClick}
      className="hover:editor-hover"
      style={{ display: block ? 'block' : 'inline-block' }}
    >
      {props.children}
    </div>
  );
};

export default Wrapper;
