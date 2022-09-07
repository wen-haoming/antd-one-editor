import { Input, InputProps } from 'antd'
import { FC } from 'react'


interface AntInputProps extends InputProps {

}

const AntInput: FC<AntInputProps> = (props) => {

  const {} = props

  return <Input {...props} />
}

export default AntInput
