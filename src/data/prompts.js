/**
 * @typedef {Object} Prompt
 * @property {string} id
 * @property {string} text
 */

/**
 * @typedef {Object} Task
 * @property {string} key
 * @property {string} name
 * @property {number} durationMins
 * @property {Prompt[]} prompts
 */

/** @type {Record<string, Task>} */
export const tasks = {
  task1: {
    key: 'task1',
    name: 'Task 1',
    durationMins: 20,
    prompts: [
      { id: 't1p1', text: 'Describe the main features of the provided chart.' },
    ],
  },
  task2: {
    key: 'task2',
    name: 'Task 2',
    durationMins: 40,
    prompts: [
      {
        id: 't2p1',
        text:
          'Discuss the advantages and disadvantages of using public transportation.',
      },
    ],
  },
};

