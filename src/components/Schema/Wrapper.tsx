import { useCallback } from 'react';
import type { FC, ReactNode } from 'react';
import { currentSelect } from '@/store';
import { useRecoilState } from 'recoil';
import type { PropsConfigArray } from '@/utils/propsTramsform';

interface WrapperProps {
  children: ReactNode;
  block?: boolean;
  componentId: string;
  propsConfigArray: PropsConfigArray;
}

const Wrapper: FC<WrapperProps> = (props) => {
  const { block = true, componentId, propsConfigArray } = props;
  const [currentSelectState, setCurrentSelectState] = useRecoilState(currentSelect);

  const handleClick = useCallback(() => {
    setCurrentSelectState({
      id: componentId,
      propsConfigArray,
    });
  }, [componentId, propsConfigArray]);

  return (
    <div
      onClick={handleClick}
      className={`hover:editor-hover z-10 m-b1 m-r1 ${
        componentId === currentSelectState.id && 'editor-hover'
      }`}
      style={{ display: block ? 'block' : 'inline-block' }}
    >
      {props?.children}
    </div>
  );
};

export default Wrapper;
