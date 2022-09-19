import { uiTree } from '@/store';
import { parse } from '@/utils';
import { useRecoilValue } from 'recoil';

const Code = () => {
  const uiTreeState = useRecoilValue(uiTree);

  return (
    <div>
      <pre>
        <code>{parse(uiTreeState)}</code>
      </pre>
    </div>
  );
};

export default Code;
