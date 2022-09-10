import FormRender, { useForm } from "@/components/FormRender"
import { propsTramsform } from "@/utils/propsTramsform"
import { useEffect } from "react"

const RightPanel = () => {
  const [Form] = useForm()

  useEffect(() => {
    //  切换tab 的时候才设置表单的默认值，
    // Form.setFieldsValue()
  }, [])

  return <div className="w-1/5  border-brand-line">
   <div className='flex h-8 w-full bg-white b-brand-grey border-b-1 justify-end items-center p-x2 m-b5'>
      {/* 属性 */}
    </div>
    <FormRender form={Form} onValuesChange={(v1, v2, v3) => {
      // 每次更新都会更新 schema 的 字段值
    }} fields={[{
      type: 'FormInput',
      props: {
        name: 'abc',
        label: '输入框'
      }
    },
    {
      type: 'FormInput',
      props: {
        name: 'abc2',
        label: '输入框2'
      }
    },
    {
      type: 'FormInput',
      props: {
        name: 'abc3',
        label: '输入框3'
      }
    }]} />
  </div>
}

export default RightPanel
