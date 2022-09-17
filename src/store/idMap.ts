import type { SFC } from '@/components/Schema';
import { atom } from 'recoil';


export type IdMap = Record<string, {
  component: SFC<any>
  props: Record<string, any>
}>

export const idMap = atom<IdMap>({
  key: 'idMap',
  default: {
  },
});
