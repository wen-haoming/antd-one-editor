import { List, ListProps } from 'antd'
import { FC } from 'react'


interface AntListProps extends ListProps<any> {

}

const AntList: FC<AntListProps> = (props) => {

  const {} = props

  return <List {...props}/>
}

export default AntList
