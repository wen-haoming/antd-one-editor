import { Dropdown } from 'antd'
import AddComponent from '@/components/AddComponent'
import Render, { RenderProps } from '@/components/Render'
import { useState } from 'react'

const RightPanel = () => {
  const [schema, setSchema] = useState<RenderProps['schema']>([]);

  return <div className="flex-1 mt-1 bg-white">
    <Render schema={schema} />
    <AddComponent onChange={(atom) => {
      setSchema((previos) => {
        return [...previos, atom]
      })
    }} />
  </div>
}

export default RightPanel
