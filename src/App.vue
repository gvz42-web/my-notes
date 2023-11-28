<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
  },
})
</script>

<template>
  <div id="app">
    <h1>Hellooo!</h1>
    <router-view></router-view>
  </div>

</template>

<style lang='sass'>
#app
  background-color: $dark
  font-family: 'Montserrat', sans-serif
</style>
