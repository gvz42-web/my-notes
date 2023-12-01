import { defineStore } from 'pinia'
import api from '@/services/api'
import errorMessage from '@/utils/errorMessage'

const resource = 'auth'
export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: '',
      email: '',
    }
  },
  getters: {
    getUsername() {
      return this.email
    },
    config() {
      return {
        headers: {
          Authorization: 'Bearer ' + this.token,
        },
      }
    },
    async isLogin() {
      return await api
        .get(resource, this.config)
        .then((data) => {
          this.email = data.data.email
          return true
        })
        .catch((err) => false)
    },
  },
  actions: {
    async login(email, password) {
      return await api
        .post(resource, { email, password })
        .then((data) => {
          this.token = data.data.accessToken
          this.email = email
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
  },
  persist: true,
})
