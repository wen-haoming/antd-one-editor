import CodeMirror from '@uiw/react-codemirror';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { idMap, ids } from '@/store';
import { createCode, parse } from '@/utils/createCode';
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
      extensions={[loadLanguage('tsx')]}
    />
  );
};

export default Code;
