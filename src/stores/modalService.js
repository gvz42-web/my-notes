import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => {
    return {
      login: false,
      create: false,
    }
  },
  getters: {
    isLoginOpen() {
      return this.login
    },
    isCreateOpen() {
      return this.create
    },
  },
  actions: {
    toggleLogin() {
      this.login = !this.login
    },
    toggleCreate() {
      console.log(this.create)
      this.create = !this.create
    },
  },
})
