import {Dropdown,Button,Menu} from 'antd';

const Header = ()=>{

  return <div className="h-8 bg-brand-dark flex items-center px-4 justify-between">
      <span className="text-sm">Visual-Page</span>
      <span>
        <Button size="small">出码</Button>
      </span>
  </div>
}

export default Header
