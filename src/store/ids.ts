import { atom } from 'recoil'

export const ids = atom<(string[] | string[][])>({
  key: 'ids',
  default: [],
});
