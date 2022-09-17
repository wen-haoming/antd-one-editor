import { memo, useCallback } from 'react';
import type { FC, ReactNode } from 'react';
import { currentSelect } from '@/store';
import { useRecoilState } from 'recoil';

interface ComponentProps {
  id: string;
  children: ReactNode;
}

const Wrapper: FC<ComponentProps> = (props) => {
  const { id } = props;
  
  const [currentSelectState, setCurrentSelectState] = useRecoilState(currentSelect);

  const handleClick = useCallback(() => {
    setCurrentSelectState({
      id,
    });
  }, [id]);

  return (
    <div
      onClick={handleClick}
      className={`hover:editor-hover z-10 m-b1 m-r1 ${
        id === currentSelectState.id && 'editor-hover'
      }`}
    >
      {props.children}
    </div>
  );
};

export default memo(Wrapper);
