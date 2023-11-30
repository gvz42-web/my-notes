import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => {
    return {
      notes: [],
    }
  },
  getters: {
    getAll() {
      return notes
    },
  },
  actions: {
    async fetchNotes() {},
  },
})
