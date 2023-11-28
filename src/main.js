import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {createPinia, PiniaVuePlugin} from 'pinia'
import index from '@/pages/index.vue'

Vue.use(PiniaVuePlugin)
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: index }
]

const pinia = createPinia()
const router = new VueRouter({
  base: '/',
  routes
})

const app = new Vue({
  render: h => h(App),
  router,
  pinia
}).$mount('#app')
