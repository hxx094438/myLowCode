import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => {
    return {
      counter: 0,
      useGrid: true,
      name: 'we-grid-system',
      splitLimit: {
        row: 2,
        column: 4
      }
    }
  }
})