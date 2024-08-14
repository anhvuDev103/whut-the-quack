import { StateCreator } from 'zustand';

import { RootStore } from './rootStore';

export interface TreeSlice {
  abc: string;
}

export const createTreeSlice: StateCreator<RootStore, [], [], TreeSlice> = (
  set,
  get,
) => {
  //read form LocalStorage
  return {
    abc: '',
  };
};
