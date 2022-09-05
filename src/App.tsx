import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button, Input, ConfigProvider, Table } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.compact.less'; // 引入官方提供的紧凑 less 样式入口文件

import Header from './Header';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import RenderPanel from './RenderPanel';


function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className='flex flex-col text-gray-100 relative very-cool w-full	h-full bg-brand-dark-content'>
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
