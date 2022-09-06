import { Button, ButtonProps } from 'antd'
import { FC } from 'react'


interface AntButtonProps extends ButtonProps {

}

const AntButton: FC<AntButtonProps> = (props) => {

  const {} = props

  return <Button {...props}>{props.children}</Button>
}

export default AntButton
