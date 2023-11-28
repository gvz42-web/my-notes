<script>
import Button from '@/components/base/Button.vue'
import Input from '@/components/base/Input.vue'

export default {
  name: 'index',
  components: { Input, Button },
  data() {
    return {
      text: 'dfg'
    }
  }
}
</script>

<template>
  <div>
    <h1>Index here</h1>
    <Button>Войти</Button>
    <Input v-model='text' type='password'/>
    <router-link to='/'>Зарегистрируйтесь</router-link>
  </div>

</template>

<style scoped lang='sass'>

</style>