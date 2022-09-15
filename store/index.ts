import create, {StateCreator} from 'zustand';
import {createUserSlice, UserSlice} from './userSlice';

interface FishSlice {
  fishes: number;
  addFish: () => void;
}
const createFishSlice: StateCreator<
  BearSlice & FishSlice,
  [],
  [],
  FishSlice
> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({fishes: state.fishes + 1})),
});

export const useStore = create<UserSlice & FishSlice>()((...a) => ({
  ...createUserSlice(...a),
  ...createFishSlice(...a),
}));
