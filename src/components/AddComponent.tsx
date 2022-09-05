import { Modal } from "antd"
import { memo } from "react"
import { useBoolean } from 'ahooks'

const components = [{
  type: ''
}]

const AddComponent = () => {
  const [visible, { setTrue, setFalse }] = useBoolean()
  return <>
    <Modal visible={visible} onOk={setTrue} bodyStyle={{
      borderRadius: '0.375rem',
    }} onCancel={setFalse} wrapClassName="rounded-md" className="rounded-md">
      <div className="rounded-md text-brand-sub-txt">
        <span className="">普通组件</span>
        <div className="p-2 grid grid-cols-3 gap-4">
          <div className="compBtn">
            按钮
          </div>
          <div className="compBtn">
            列表
          </div>
          <div className="compBtn">
            标签
          </div>
          <div className="compBtn">
            结果页
          </div>
          <div className="compBtn">
            页头
          </div>
          <div className="compBtn">
            布局
          </div>
        </div>
        <span className="">表单组件</span>
        <div className="p-2 grid grid-cols-3 gap-4">
          <div className="compBtn">
            查询表单
          </div>
          <div className="compBtn">
            按钮表单
          </div>
        </div>
      </div>
    </Modal>
    <div className="btn-block" onClick={setTrue}>+</div>
  </>

}

export default memo(AddComponent)
