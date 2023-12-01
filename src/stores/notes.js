import { defineStore } from 'pinia'
import api from '@/services/api'
import { useAuthStore } from '@/stores/auth'
import errorMessage from '@/utils/errorMessage'

const resource = 'notes'
export const useNotesStore = defineStore('notes', {
  state: () => {
    return {
      notes: [],
    }
  },
  getters: {
    getAll() {
      return this.notes
    },
  },
  actions: {
    async fetchNotes() {
      const auth = useAuthStore()
      return await api.get(resource, auth.config).then((data) => (this.notes = data.data))
    },
    async createNote(note) {
      const auth = useAuthStore()
      return await api
        .post(resource, note, auth.config)
        .then(() => {
          return {
            success: true,
          }
        })
        .catch((err) => {
          return {
            success: false,
            message: errorMessage(err),
          }
        })
    },
    async deleteNote(id) {
      const auth = useAuthStore()
      await api.delete(`${resource}/${id}`, auth.config)
    },
  },
})
