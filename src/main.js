import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { createPinia, PiniaVuePlugin } from 'pinia'
import index from '@/pages/index.vue'
import notes from '@/pages/notes.vue'
import truncate from '@/utils/truncate'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

Vue.use(PiniaVuePlugin)
Vue.use(VueRouter)
Vue.filter('truncate', truncate)

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

const routes = [
  { path: '/', name: 'home', component: index },
  { path: '/notes', name: 'notes', component: notes },
]
const router = new VueRouter({
  base: '/',
  routes,
})

const app = new Vue({
  render: (h) => h(App),
  router,
  pinia,
}).$mount('#app')
