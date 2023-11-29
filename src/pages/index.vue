<script>
import Button from '@/components/base/Button.vue'
import Input from '@/components/base/Input.vue'
import Note from '@/components/Note.vue'

export default {
  name: 'index',
  components: { Note, Input, Button },
  data() {
    return {
      text: 'dfg',
    }
  },
}
</script>

<template>
  <div class="container">
    <div class="index">
      <div class="text">
        <h1>Мои заметки</h1>
        <h3>Не забывай о важном, храни его в облаке.</h3>
      </div>
      <img alt="" src="@/assets/index-image.svg" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.index
  display: flex
  justify-content: space-between
  align-items: center
  height: 100%
  @include tablet
    padding-top: 40px
    flex-direction: column

  .text
    width: 488px
    display: flex
    flex-direction: column
    gap: 40px
    padding-bottom: 48px
    @include tablet
      align-items: center
      text-align: center
      padding-bottom: 0
      width: 100%
      gap: 20px

    h3
      width: 394px
      color: $gray
      @include tablet
        width: 100%
  img
    height: 100%
</style>
