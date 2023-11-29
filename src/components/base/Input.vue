<script>
import offPasswordIcon from '@/assets/icons/off-password-icon.svg'
import onPasswordIcon from '@/assets/icons/on-password-icon.svg'
export default {
  name: 'Input',
  data() {
    return {
      isVisible: false
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
    isTextarea (){
      return this.type === 'textarea'
    },
    inputType() {
      return this.type === 'password' ? (!this.isVisible ? 'password' : 'text') : this.type
    },
    passwordIcon() {
      return !this.isVisible ? onPasswordIcon : offPasswordIcon
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
    <div class='input' :class='type'>
      <input v-if='!isTextarea' :type='inputType' :placeholder='placeholder' :value='value' @input="$emit('input', $event.target.value)" >
      <textarea v-else :value='value' :placeholder='placeholder' @input="$emit('input', $event.target.value)"></textarea>
      <img :src='passwordIcon' alt='' v-if='type === "password"' @click='isVisible = !isVisible'>
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
    padding: 16px 28px
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

      &::placeholder
        color: $gray

    &.textarea
      height: 280px

      textarea
        @extend .text-small
        height: 100%
        resize: none
        outline: none
        border: none
        flex: 1 0 0
        font-family: inherit

        &::placeholder
          color: $gray

    &:hover
      border: 2px solid $green-light

</style>