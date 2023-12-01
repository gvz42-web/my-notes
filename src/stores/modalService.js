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
      this.toggleBodyScroll()
    },
    toggleCreate() {
      this.create = !this.create
      this.toggleBodyScroll()
    },
    toggleBodyScroll() {
      if (this.login || this.create) {
        document.body.classList.add('scroll-off')
      } else {
        document.body.classList.remove('scroll-off')
      }
    },
  },
})
