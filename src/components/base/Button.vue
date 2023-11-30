<script>
import CloseIcon from '@/assets/icons/close-icon.svg'
import LoginIcon from '@/assets/icons/login-icon.svg'
import AddIcon from '@/assets/icons/add-icon.svg'

export default {
  name: 'Button',
  computed: {
    isSlotPassed() {
      return !!this.$slots.default
    },
    getIcon() {
      if (this.icon === 'close') {
        return CloseIcon
      }
      if (this.icon === 'login') {
        return LoginIcon
      }
      if (this.icon === 'add') {
        return AddIcon
      }
    },
  },
  props: {
    disabled: {
      type: Boolean,
    },
    icon: {
      type: String,
    },
  },
}
</script>

<template>
  <button :class="{ 'no-text': !isSlotPassed }" :disabled="disabled" @click="$emit('click')">
    <img v-if="icon" :src="getIcon" alt="" class="icon" />
    <span v-if="isSlotPassed" class="text-normal">
      <slot></slot>
    </span>
  </button>
</template>

<style lang="sass" scoped>
button
  border: none
  outline: none
  border-radius: 32px
  height: 56px
  padding: 0 24px
  background-color: $green-light
  color: $white
  display: flex
  justify-content: center
  align-items: center
  gap: 12px
  cursor: pointer
  transition: background-color 0.2s ease

  .icon
    width: 32px

  &.no-text
    width: 56px
    padding: 0

    .icon
      width: 16px

  &:hover
    background-color: $green-middle

  &:active
    background-color: $green-dark

  &:disabled
    background-color: $gray
</style>
