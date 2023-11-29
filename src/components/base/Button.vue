<script>
export default {
  name: 'Button',
  computed: {
    isSlotPassed() {
      return !!this.$slots.default
    }
  },
  props: {
    disabled: {
      type: Boolean
    }
  }
}
</script>

<template>
  <button class='no-text' :disabled='disabled'>
    <img src='@/assets/icons/login-icon.svg' alt='' class='icon'>
    <span class='text-normal'>
      <slot></slot>
    </span>
  </button>
</template>

<style scoped lang='sass'>
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

  .icon
    width: 32px

  //&.no-text
  //  padding: 20px

  &:hover
    background-color: $green-middle

  &:active
    background-color: $green-dark

  &:disabled
    background-color: $gray




</style>