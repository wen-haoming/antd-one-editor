import AntButton from './AntButton';
import AntInput from './AntInput';
import AntPageHeader from './AntPageHeader';
import AntTabs from './AntTabs';
import AntResult from './AntResult';
import AntTable from './AntTable';
import type { FC } from 'react';
import type { PropsConfigArray } from '@/utils/propsTramsform';

export type SFC<Props> = FC<Props> & { propsConfigArray: PropsConfigArray };

export const componentsInstall = {
  AntButton,
  AntInput,
  AntPageHeader,
  AntTabs,
  AntResult,
  AntTable,
};

