import AntButton from './AntButton';
import AntInput from './AntInput';
import AntTabs from './AntTabs';
import AntResult from './AntResult';
import AntTable from './AntTable';
import type { FC } from 'react';
import type { PropsConfigArray } from '@/utils/propsTramsform';

export type SFC<Props> = FC<Props> & {
  propsConfigArray: PropsConfigArray;
  importDeclaration: {
    source: string;
    importDefault?: string;
    import?: string;
  };
};

export const componentsInstall = {
  AntButton,
  AntInput,
  AntTabs,
  AntResult,
  AntTable,
};

export type ComponentName = keyof typeof componentsInstall;
