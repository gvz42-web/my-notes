<script>
import Modal from '@/components/base/Modal.vue'
import Input from '@/components/base/Input.vue'
import Button from '@/components/base/Button.vue'
import { mapStores } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { useModalStore } from '@/stores/modalService'

export default {
  name: 'Login',
  components: { Button, Input, Modal },
  data() {
    return {
      email: '',
      password: '',
      passwordRepeat: '',
      isLogin: true,
      error: '',
    }
  },
  computed: {
    title() {
      return this.isLogin ? 'Вход в ваш аккаунт' : 'Регистрация'
    },
    ...mapStores(useAuthStore, useModalStore),
  },
  methods: {
    submit: async function () {
      const result = await this.authStore.login(this.email, this.password)
      if (result.success) {
        this.$router.push('/notes')
        this.modalStore.toggleLogin()
      } else {
        this.error = result.message
      }
    },
  },
}
</script>

<template>
  <Modal :error="error" :title="title" @close="modalStore.toggleLogin">
    <template #body>
      <Input v-model="email" label="Email" placeholder="Введите Email" type="email" />
      <Input v-model="password" label="Пароль" placeholder="Введите пароль" type="password" />
      <Input
        v-if="!isLogin"
        v-model="passwordRepeat"
        label="Пароль ещё раз"
        placeholder="Введите пароль ещё раз"
        type="password"
      />
    </template>
    <template #footer>
      <div class="switch">
        <div class="text-small">{{ isLogin ? 'У вас нет аккаунта?' : 'У вас есть аккаунт?' }}</div>
        <div class="link" @click="isLogin = !isLogin">{{ isLogin ? 'Зарегистрируйтесь' : 'Войдите' }}</div>
      </div>
      <Button @click="submit">Войти</Button>
    </template>
  </Modal>
</template>

<style lang="sass" scoped>
.switch
  display: flex
  gap: 4px
  color: $gray
  @include laptop
    flex-direction: column
    gap: 0
  @include phone
    flex-direction: row
    flex-wrap: wrap
    gap: 4px
    justify-content: center
</style>
