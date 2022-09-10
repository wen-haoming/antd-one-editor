import FormRender from '@/components/FormRender';
import type { Field } from '@/components/FormRender/types';

export type PropsConfigArray = {
  valueType: Field['type'];
  label: string;
  name: string;
  valueEnum?: Record<string, any>;
  defaultValue?: any;
}[];

export const propsTramsform = (propsArray: PropsConfigArray) => {
  return propsArray.map((item) => {

    const obj =  {
      type: item.valueType,
      props: {
        name: item.name,
        label: item.label,
       
      },
    };
    
    if(item.valueEnum){
      obj.props.fieldProps = {
        valueEnum:item.valueEnum
      }
    }
   
    return obj
  });
};
