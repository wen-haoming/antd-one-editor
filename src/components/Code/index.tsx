import CodeMirror from '@uiw/react-codemirror';
import { tsxLanguage } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { idMap, ids } from '@/store';
import { parse } from '@/utils';
import { selector, useRecoilValue } from 'recoil';

const s = selector({
  key: 'createCodeKey',
  get: ({ get }) => ({
    idsState: get(ids),
    idMapState: get(idMap),
  }),
});

const Code = () => {
  const { idsState, idMapState } = useRecoilValue(s);

  return (
    <CodeMirror
      value={parse(idsState, idMapState)}
      className="h-full"
      theme={dracula}
      extensions={[tsxLanguage]}
    />
  );
};

export default Code;
