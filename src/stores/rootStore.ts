import createSelectors from '@utils/createSelector';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createTreeSlice, TreeSlice } from './treeSlice';

export type RootStore = TreeSlice;

const useRootStore = createSelectors(
  create<RootStore>()(
    devtools((...args) => ({
      ...createTreeSlice(...args),
    })),
  ),
);

export default useRootStore;
