import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.compact.less'; // 引入官方提供的紧凑 less 样式入口文件

import Header from './layout/Header';
import LeftPanel from './layout/LeftPanel';
import RightPanel from './layout/RightPanel';
import RenderPanel from './layout/RenderPanel';


function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className='flex flex-col relative very-cool w-full	h-full'>
          <Header/>
          <div className='flex flex-1'>
               <LeftPanel/> 
               <RenderPanel/>
               <RightPanel/>
          </div>
      </div>
    </ConfigProvider>

  )
}

export default App
