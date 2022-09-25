import AddComponent from '@/components/AddComponent';
import Render from '@/components/Render';
import Code from '@/components/Code';
import { Mode, uiTree } from '@/store';
import { renderMode } from '@/store';
import { useRecoilState, useRecoilValue } from 'recoil';

const modeList: {
  type: Mode;
  icon: string;
}[] = [
  {
    type: 'render',
    icon: 'i-ic-baseline-width-normal',
  },
  {
    type: 'code',
    icon: 'i-material-symbols-code-blocks-outline',
  },
];
const RenderPanel = () => {
  const [currentMode, setCurrentMode] = useRecoilState(renderMode);
  const uiTreeState = useRecoilValue(uiTree);

  return (
    <div className="flex flex-col flex-1 bg-brand-grey p-t-0">
      <div className="flex h-8 w-full bg-white b-brand-grey border-l-1 border-r-1 justify-end items-center p-x2">
        {modeList.map((item) => {
          return (
            <span
              key={item.type}
              onClick={() => setCurrentMode(item.type)}
              className={`hover:bg-brand-grey p-1 hover:text-brand-primary cursor-pointer f-center ${
                currentMode === item.type ? 'text-brand-primary' : ''
              }`}
            >
              <span className={`${item.icon} inline-block text-size-xl `} />
            </span>
          );
        })}
      </div>
      <div className="flex flex-col h-[calc(100vh-5rem)] bg-white overflow-y-auto m-2 p-1 flex-col">
        {currentMode === 'render' ? (
          <Render uiTree={uiTreeState} />
        ) : currentMode === 'code' ? (
          <Code />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default RenderPanel;
