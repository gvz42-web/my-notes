<script>
import Button from '@/components/base/Button.vue'

export default {
  name: 'Modal',
  components: { Button },
  props: {
    title: {
      type: String,
    },
    error: {
      type: String,
    },
  },
}
</script>

<template>
  <div class="wrapper">
    <div class="bg" @click="$emit('close')"></div>
    <div class="modal">
      <Button class="close" icon="close" @click="$emit('close')"></Button>
      <h2>{{ title }}</h2>
      <div class="body">
        <slot name="body"></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
      <div v-if="error" class="error text-small">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.wrapper
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  overflow: scroll
  z-index: 4
  @include phone
    padding: 4px

  @include little-height
    align-items: flex-start


  .bg
    position: fixed
    width: 100%
    height: 100vh
    background-color: $dark
    opacity: 0.7

  .modal
    background-color: $dark-middle
    width: 780px
    padding: 80px
    border-radius: 40px
    z-index: 2
    display: flex
    flex-direction: column
    gap: 40px
    position: relative

    @include laptop
      width: 594px
      padding: 56px

    @include tablet
      width: 688px

    @include phone
      padding: 24px 16px
      gap: 28px
      height: 100%
      justify-content: center

      .footer
        flex-direction: column-reverse
        gap: 12px

    .close
      position: absolute
      top: 20px
      right: 20px

    .body
      display: flex
      flex-direction: column
      gap: 24px

      @include phone
        gap: 16px

    .footer
      display: flex
      justify-content: space-between
      align-items: center

      @include phone
        align-items: stretch

    .error
      padding: 8px 20px
      background-color: $error-bg
      color: $error
      border-radius: 24px
</style>
