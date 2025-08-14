import { create } from 'zustand';

const useTimerStore = create((set) => ({
  isRunning: false,
  startedAt: null,
  durationMins: 60,
  start: (durationMins = 60) =>
    set({ startedAt: Date.now(), durationMins, isRunning: true }),
  setIsRunning: (value) => set({ isRunning: value }),
  reset: () => set({ isRunning: false, startedAt: null }),
}));

export default useTimerStore;
