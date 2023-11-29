<script>
import offPasswordIcon from '@/assets/icons/off-password-icon.svg'
import onPasswordIcon from '@/assets/icons/on-password-icon.svg'

export default {
  name: 'Input',
  data() {
    return {
      isVisible: false,
    }
  },
  props: {
    value: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: 'Введите значение',
    },
    limit: {
      type: Number,
    },
    label: {
      type: String,
      default: 'Введите значение',
    },
  },
  emits: ['input'],
  computed: {
    length() {
      return this.value.length
    },
    isTextarea() {
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
    },
  },
}
</script>

<template>
  <div class="input-wrapper">
    <div class="label">{{ label }}</div>
    <div :class="type" class="input">
      <input
        v-if="!isTextarea"
        :placeholder="placeholder"
        :type="inputType"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
      <textarea
        v-else
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
      ></textarea>
      <img v-if="type === 'password'" :src="passwordIcon" alt="" @click="isVisible = !isVisible" />
    </div>
    <div class="footer">
      <div class="error-message">{{ error }}</div>
      <div v-if="limit" class="limit">{{ length + '/' + limit }}</div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.input-wrapper
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

      @include laptop
        height: 168px

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
