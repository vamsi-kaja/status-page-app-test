import { create } from 'zustand';

export default create((set) => ({
  user: {},
  setUser: (user) => set({ user: user }),
}));
