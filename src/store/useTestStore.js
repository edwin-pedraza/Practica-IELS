import { create } from 'zustand';

/**
 * @typedef {Object} Prompt
 * @property {string} id
 * @property {string} text
 */

/**
 * @typedef {Object} TestState
 * @property {string|null} taskKey
 * @property {string|null} promptId
 * @property {string|null} promptText
 * @property {string} response
 * @property {number|null} startedAt
 * @property {number} durationMins
 * @property {boolean} isRunning
 * @property {(taskKey:string, prompt:Prompt, durationMins:number) => void} start
 * @property {(response:string) => void} setResponse
 * @property {() => void} stop
 * @property {() => void} reset

 */

/** @type {import('zustand').UseBoundStore<import('zustand').StoreApi<TestState>>} */
export const useTestStore = create((set) => ({
  taskKey: null,
  promptId: null,
  promptText: null,
  response: '',
  startedAt: null,
  durationMins: 0,
  isRunning: false,
  start: (taskKey, prompt, durationMins) =>
    set({
      taskKey,
      promptId: prompt.id,
      promptText: prompt.text,
      response: '',
      startedAt: Date.now(),
      durationMins,
      isRunning: true,
    }),
  setResponse: (response) => set({ response }),
  stop: () => set({ isRunning: false }),

}));

