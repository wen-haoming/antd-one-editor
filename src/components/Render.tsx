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

  return <>
    {
      schema.map((item, idx) => {

        const Component = schemaInstall[item.type]
       
        return <Component key={idx} {...item.props} />
      })
    }</>
}

export default Render
