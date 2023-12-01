<script>
import { defineComponent } from 'vue'
import Button from '@/components/base/Button.vue'
import Modal from '@/components/base/Modal.vue'
import Login from '@/components/Login.vue'
import { mapStores } from 'pinia'
import { useModalStore } from '@/stores/modalService'
import { useAuthStore } from '@/stores/auth'
import Profile from '@/components/Profile.vue'

export default defineComponent({
  name: 'App',
  components: {
    Profile,
    Login,
    Modal,
    Button,
  },
  data() {
    return {
      isLogin: false,
    }
  },
  computed: {
    ...mapStores(useModalStore, useAuthStore),
  },
  async mounted() {
    this.isLogin = await this.authStore.isLogin
    if (this.isLogin) {
      this.$router.push('/notes')
    } else {
      this.$router.push('/')
    }
  },
})
</script>

<template>
  <div id="app">
    <Login v-if="modalStore.isLoginOpen" />
    <header class="container">
      <div class="header">
        <img alt="" class="logo" src="@/assets/logo.svg" />
        <div v-if="!isLogin" class="login">
          <Button icon="login" @click="modalStore.toggleLogin()">Вход</Button>
        </div>
        <Profile v-else />
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<style lang="sass">
#app
  background-color: $dark
  font-family: 'Montserrat', sans-serif
  color: $white
  min-height: 100vh

  .header
    display: flex
    justify-content: space-between
    padding: 40px 0
    @include laptop
      padding: 20px 0

    .logo
      @include phone
        width: 154px
</style>
