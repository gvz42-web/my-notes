<script>
import { defineComponent } from 'vue'
import Button from '@/components/base/Button.vue'

export default defineComponent({
  name: 'App',
  components: {
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
          <Button>Вход</Button>
        </div>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
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

  main
    height: calc(100vh - 136px)
    @include laptop
      height: calc(100vh - 96px)
</style>
