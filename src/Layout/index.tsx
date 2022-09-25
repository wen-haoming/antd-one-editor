import { RecoilRoot } from 'recoil';
import Header from './Header';
import LeftPanel from './LeftPanel';
import RenderPanel from './RenderPanel';
import RightPanel from './RightPanel';

const Layout = () => {
  return (
    <RecoilRoot>
      <div className="flex flex-col relative very-cool w-full	h-full">
        <Header />
        <div className="flex flex-1">
          {/* <LeftPanel /> */}
          <RenderPanel />
          <RightPanel />
        </div>
      </div>
    </RecoilRoot>
  );
};

export default Layout;
