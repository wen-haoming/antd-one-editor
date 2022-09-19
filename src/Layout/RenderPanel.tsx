import AddComponent from '@/components/AddComponent';
import Render from '@/components/Render';
import Code from '@/components/Code';
import { Mode, uiTree } from '@/store';
import { ids, renderMode } from '@/store';
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
    <div className="flex-1 bg-brand-grey p-t-0">
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
      <div className="bg-white h-full overflow-y-auto m-2 p-1">
        <div>
          {currentMode === 'render' ? (
            <Render uiTree={uiTreeState} />
          ) : currentMode === 'code' ? (
            <Code />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default RenderPanel;
