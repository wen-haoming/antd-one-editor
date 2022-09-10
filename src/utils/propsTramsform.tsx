import FormRender from '@/components/FormRender';
import { Field } from '@/components/FormRender/types';

export type PropsArray = Field[];

//
export const propsTramsform = (propsArray: PropsArray) => {
  return <FormRender fields={propsArray} />;
};
