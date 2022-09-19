import type { SFC } from '@/components/Schema';
import { atom } from 'recoil';


export type IdMap = Record<string, string>

export const idMap = atom<IdMap>({
  key: 'idMap',
  default: {},
});
