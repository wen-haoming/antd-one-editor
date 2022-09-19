import { SFC } from '@/components/Schema';
import { atom } from 'recoil';

export type UiItem = {
  id: string;
  props: Record<string, any>;
  UiComponent: SFC<any>;
}

export type UiTree = (UiItem)[]

export const uiTree = atom<UiTree>({
  key: 'uiTree',
  default: []
});
