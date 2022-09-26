import { uiTree } from '@/store';
import { parse } from '@/utils';
import { useRecoilValue } from 'recoil';
import { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker();
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker();
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker();
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

export const Code = () => {
  const uiTreeState = useRecoilValue(uiTree);
  const ref = useRef<any>();
  const monacoRef = useRef<any>();

  useEffect(() => {
    if (!monacoRef.current) {
      monacoRef.current = monaco.editor.create(ref.current, {
        value: '',
        theme: 'vs-dark',
        language: 'javascript',
        readOnly: true, // 编辑器不可编辑
      });
    }
  }, []);

  useEffect(() => {
    if (monacoRef.current) {
      monacoRef.current.setValue(parse(uiTreeState));
    }
  }, [uiTreeState]);

  return <div ref={ref} className="overflow-auto flex-1 break-words" />;
};

export default Code;
