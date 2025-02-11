import { create } from 'zustand';

export default create((set) => ({
  statusPage: {},
  setStatusPage: (statusPage) => set({ statusPage: statusPage }),
}));
