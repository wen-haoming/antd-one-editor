import { Modal } from "antd"
import { FC, memo } from "react"
import { useBoolean } from 'ahooks'
import { Atom } from '@/components/Render'

interface AddComponentProps {
  onChange: (atom: Atom) => void
}


const AddComponent: FC<AddComponentProps> = (props) => {
  const [visible, { setTrue, setFalse }] = useBoolean()
  const { onChange } = props;

  const handleChange = () => {
    onChange({
      type: 'Ant-Button',
      props: {
        children: '按钮',
        type: 'primary'
      }
    })
    setFalse();
  }

  return <>
    {/* <Modal visible={visible} onOk={setTrue} bodyStyle={{
      borderRadius: '0.375rem',
    }} onCancel={setFalse} wrapClassName="rounded-md" className="rounded-md">
    </Modal> */}
    <div className="btn-block my-1" onClick={() => {
      Modal.info({
        icon: null,
        closable: true,
        width: 550,
        bodyStyle:{padding:10},
        content: <div className="rounded-md text-brand-sub-txt bg-white p-4 z-auto">
          <span className="">普通组件</span>
          <div className="p-2 grid grid-cols-3 gap-4">
            <div className="compBtn" onClick={handleChange}>
              按钮
            </div>
            <div className="compBtn" onClick={handleChange}>
              列表
            </div>
            <div className="compBtn" onClick={handleChange}>
              标签
            </div>
            <div className="compBtn" onClick={handleChange}>
              结果页
            </div>
            <div className="compBtn" onClick={handleChange}>
              页头
            </div>
            <div className="compBtn" onClick={handleChange}>
              布局
            </div>
          </div>
          <span className="">表单组件</span>
          <div className="p-2 grid grid-cols-3 gap-4">
            <div className="compBtn" onClick={handleChange}>
              查询表单
            </div>
            <div className="compBtn" onClick={handleChange}>
              按钮表单
            </div>
          </div>
        </div>

      })
    }}>+</div>
  </>

}

export default memo(AddComponent)
