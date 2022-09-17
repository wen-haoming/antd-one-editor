import type { componentsInstall } from '@/components/Schema';
import { atom } from 'recoil';

export const currentSelect = atom<{
  id: string;
}>({
  key: 'currentSelect',
  default: {
    id:''
  },
});
