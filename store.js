import create from 'zustand';

const useStore = create((set) => ({
  newWinner: '',
  setNewWinner: (newWinner) => set({ newWinner })
}));

export default useStore;