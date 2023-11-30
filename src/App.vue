<script>
import { defineComponent } from 'vue'
import Button from '@/components/base/Button.vue'
import Modal from '@/components/base/Modal.vue'

export default defineComponent({
  name: 'App',
  components: {
    Modal,
    Button,
  },
})
</script>

<template>
  <div id="app">
    <header class="container">
      <div class="header">
        <img alt="" class="logo" src="@/assets/logo.svg" />
        <div class="login">
          <Button icon="login">Вход</Button>
        </div>
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
