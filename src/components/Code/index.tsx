import { uiTree } from '@/store';
import { parse } from '@/utils';
import { useRecoilValue } from 'recoil';
import * as monaco from 'monaco-editor';
import { useEffect, useRef } from 'react';

const Code = () => {
  const uiTreeState = useRecoilValue(uiTree);
  const ref = useRef<any>();
  const ref2 = useRef<any>();
  
  useEffect(() => {
    ref2.current = monaco.editor.create(ref.current, {
      value:'',
      theme: 'vs-dark',
      language:'javascript',
        readOnly: true // 编辑器不可编辑
    });
  }, []);

  useEffect(() => {
    if (ref2.current) {
      ref2.current.setValue((parse(uiTreeState)));
    }
  }, [uiTreeState]);

  return <div ref={ref} className="overflow-auto flex-1 break-words" />;
};

export default Code;
