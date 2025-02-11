import { create } from 'zustand';

export default create((set) => ({
  serviceComponents: {},
  setServiceComponents: (serviceComponents) => set({ serviceComponents: serviceComponents }),
}));
