'use client'

import { create } from 'zustand'

interface BearsState {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (b: number) => void;
}

export const useBears = create<BearsState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))
