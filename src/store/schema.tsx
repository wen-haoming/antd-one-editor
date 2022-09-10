import type { RenderProps } from '@/components/Render';
import { atom } from 'recoil'

export const schema = atom<RenderProps['schema']>({
  key: 'schema', 
  default: [],
});
