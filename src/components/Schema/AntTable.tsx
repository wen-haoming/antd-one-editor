import { Table, TableProps } from 'antd'
import { FC } from 'react'


interface AntTableProps extends TableProps<any> {

}

const AntTable: FC<AntTableProps> = (props) => {

  const {} = props

  return <Table {...props} />
}

export default AntTable
