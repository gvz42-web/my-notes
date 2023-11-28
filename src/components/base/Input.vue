<script>
import offPasswordIcon from '@/assets/icons/off-password-icon.svg'
import onPasswordIcon from '@/assets/icons/on-password-icon.svg'
export default {
  name: 'Input',
  data() {
    return {
      isHidden: true
    }
  },
  props: {
    value: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'Введите значение'
    },
    limit: {
      type: Number,
      default: 100
    },
    label: {
      type: String,
      default: 'Введите значение'
    }
  },
  emits: ['input'],
  computed: {
    length() {
      return this.value.length
    },
    inputType() {
      return this.type === 'password' ? (this.isHidden ? 'password' : 'text') : 'password'
    },
    passwordIcon() {
      return this.isHidden ? onPasswordIcon : offPasswordIcon
    },
    error() {
      if (this.value.length > this.limit) {
        return `Максимальная длина: ${this.limit} символов`
      } else {
        return ''
      }
    }
  }
}
</script>

<template>
  <div class='wrapper'>
    <div class='label'>{{ label }}</div>
    <div class='input'>
      <input :type='inputType' :placeholder='placeholder' :value='value' @input="$emit('input', $event.target.value)">
      <img :src='passwordIcon' alt='' v-if='type === "password"' @click='isHidden = !isHidden'>
    </div>
    <div class='footer'>
      <div class='error-message'>{{ error }}</div>
      <div class='limit'>{{ length + '/' + limit }}</div>
    </div>
  </div>
</template>

<style scoped lang='sass'>
.wrapper
  color: $gray
  display: flex
  flex-direction: column
  gap: 8px

  .label, .footer
    padding: 0 24px

  .footer
    display: flex
    justify-content: space-between

    .error-message
      color: $error

  .input
    border: 2px solid $white
    background-color: $white
    border-radius: 36px
    padding:  28px
    height: 72px
    display: flex
    align-items: center

    input
      @extend .text-small
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
      color: $dark
      outline: none
      border: none
      flex: 1 0 0

    &:hover
      border: 2px solid $green-light

      &::placeholder
        color: $gray

</style>