import { idMap, ids } from '@/store';
import { createCode, parse } from '@/utils';
import { selector, useRecoilValue } from 'recoil';

const s = selector({
  key: 'createCodeKey',
  get: ({ get }) => ({
    idsState: get(ids),
    idMapState: get(idMap),
  }),
});

const Header = () => {
  const { idsState, idMapState } = useRecoilValue(s);

  return (
    <>
      <div className="h-10 flex items-center px-4 justify-between border-b-1	 border-brand-grey">
        <span className="text-sm text-brand-primary font-semibold">Antd-one-editor</span>
        <div className='flex items-center'>
          <div
            className="btn m-r1"
            onClick={() => {
              createCode(parse(idsState, idMapState), 'index.tsx');
            }}
          >
            出码
          </div>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/wen-haoming/antd-one-editor'   className='i-mdi-github text-black text-size-2xl cursor-pointer hover:text-brand-primary'  />
        </div>
      </div>
    </>
  );
};

export default Header;
