import { idMap, ids } from '@/store';
import { createCode, parse } from '@/utils/createCode';
import { selector, useRecoilValue } from 'recoil';

const s = selector({
  key: 'createCode',
  get: ({ get }) => ({
    ids: get(ids),
    idMap: get(idMap),
  }),
});

const Header = () => {
  const { ids, idMap } = useRecoilValue(s);

  return (
    <>
      <div className="h-10 flex items-center px-4 justify-between border-b-1	 border-brand-grey">
        <span className="text-sm text-brand-primary font-semibold">Antd-one-editor</span>
        <div
          className="btn"
          onClick={() => {
            createCode(parse(ids, idMap), 'index.tsx');
          }}
        >
          出码
        </div>
      </div>
    </>
  );
};

export default Header;
