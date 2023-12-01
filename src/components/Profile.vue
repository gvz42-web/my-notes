<script>
import { mapStores } from 'pinia'
import { useAuthStore } from '@/stores/auth'

export default {
  name: 'Profile',
  computed: {
    ...mapStores(useAuthStore),
  },
}
</script>

<template>
  <div class="profile">
    <div class="username">
      {{ authStore.getUsername }}
    </div>
    <div class="photo">
      <img alt="" src="@/assets/icons/user-icon.svg" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.profile
  display: flex
  align-items: center
  gap: 12px

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
</style>
