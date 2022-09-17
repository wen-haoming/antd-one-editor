import { atom } from 'recoil';

export type Mode =  'render'| 'code'

export const renderMode = atom<Mode>({
  key: 'renderMode',
  default: 'render'
});
