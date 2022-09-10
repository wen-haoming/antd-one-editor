import type { PropsConfigArray } from '@/utils/propsTramsform';
import { atom } from 'recoil';

export const currentSelect = atom<{
  id: string;
  schemaConfig: PropsConfigArray;
}>({
  key: 'currentSelect',
  default: {
    id: '',
    schemaConfig: [],
  },
});
