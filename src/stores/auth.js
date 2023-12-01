import { defineStore } from 'pinia'
import api from '@/services/api'
import errorMessage from '@/utils/errorMessage'

const resource = 'auth'
export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: '',
      email: '',
      isLogin: false,
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
    isAuthorized() {
      return this.isLogin
    },
  },
  actions: {
    async checkLogin() {
      await api
        .get(resource, this.config)
        .then((data) => {
          this.email = data.data.email
          this.isLogin = true
        })
        .catch((err) => {
          this.token = ''
          this.email = ''
          this.isLogin = false
        })
    },
    async login(email, password) {
      return await api
        .post(resource, { email, password })
        .then((data) => {
          this.token = data.data.accessToken
          this.email = email
          this.isLogin = true
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
    async logout() {
      await api.delete(resource, this.config)
      this.token = ''
      this.email = ''
      this.isLogin = false
    },
    async registration(email, password, confirm_password) {
      return await api
        .post('reg', { email, password, confirm_password })
        .then((data) => {
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
