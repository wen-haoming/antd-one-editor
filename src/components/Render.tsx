import { FC, cloneElement } from "react"
import { schemaInstall } from './Schema'
import {ConfigProvider, Space} from 'antd'
export interface Atom {
  type: keyof typeof schemaInstall
  props: {

  }
}

export interface RenderProps {
  schema: Atom[]
}

const Render: FC<RenderProps> = (props) => {

  const { schema } = props;

  return <Space wrap>
    {
      schema.map((item, idx) => {

        const Component = schemaInstall[item.type]
       
        return <Component className="s" key={idx} {...item.props} />
      })
    }</Space>
}

export default Render
