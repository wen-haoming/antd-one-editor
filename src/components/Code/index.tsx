import { uiTree } from '@/store';
import { parse } from '@/utils';
import { useRecoilValue } from 'recoil';

const Code = () => {
  const uiTreeState = useRecoilValue(uiTree);

  return (
    <div className='overflow-auto flex-1 break-words'>
      <pre>
        <code className='overflow-auto flex-1 break-words'>{parse(uiTreeState)}</code>
      </pre>
    </div>
  );
};

export default Code;
