import {Dropdown,Button,Menu} from 'antd';

const Header = ()=>{

  return <div className="h-10 flex items-center px-4 justify-between border-b-2	 border-brand-line">
      <span className="text-sm text-brand-primary font-semibold">Antd-one-editor</span>
      <span>
        <Button size="small">出码</Button>
      </span>
  </div>
}

export default Header
