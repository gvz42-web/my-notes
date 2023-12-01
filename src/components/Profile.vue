<script>
import { mapStores } from 'pinia'
import { useAuthStore } from '@/stores/auth'

export default {
  name: 'Profile',
  data() {
    return {
      showMenu: false,
    }
  },
  computed: {
    ...mapStores(useAuthStore),
  },
  methods: {
    async logout() {
      await this.authStore.logout()
      this.$router.push('/')
    },
  },
}
</script>

<template>
  <div class="profile">
    <div class="username">
      {{ authStore.getUsername }}
    </div>
    <div class="photo" @click="showMenu = !showMenu">
      <img alt="" src="@/assets/icons/user-icon.svg" />
    </div>
    <div v-if="showMenu" class="menu">
      <div class="link" @click="logout">Выйти</div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.profile
  display: flex
  align-items: center
  gap: 12px
  position: relative

  .username
    @include phone
      display: none

  .photo
    width: 56px
    height: 56px
    background: $dark-middle
    border-radius: 50%
    display: flex
    justify-content: center
    align-items: center

  .menu
    position: absolute
    top: calc(100% + 12px)
    right: 0
    padding: 40px
    background-color: $dark-middle
    box-shadow: 0 15px 15px -10px rgba(0, 0, 0, 0.40)
    border-radius: 12px
    z-index: 3

    &:after
      content: ""
      position: absolute
      top: -7px
      right: 20px
      width: 0
      height: 0
      border-left: 8px solid transparent
      border-right: 8px solid transparent
      border-bottom: 8px solid $dark-middle
</style>
