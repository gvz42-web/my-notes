<script>
import Button from '@/components/base/Button.vue'
import Input from '@/components/base/Input.vue'
import Note from '@/components/Note.vue'
import Login from '@/components/Login.vue'
import CreateNote from '@/components/CreateNote.vue'

export default {
  name: 'index',
  components: { CreateNote, Login, Note, Input, Button },
  data() {
    return {
      text: 'dfg',
    }
  },
}
</script>

<template>
  <main>
    <div class="container">
      <div class="index">
        <div class="text">
          <h1>Мои заметки</h1>
          <h3>Не забывай о важном, храни его в облаке.</h3>
        </div>
        <img alt="" src="@/assets/index-image.svg" />
      </div>
    </div>
  </main>
</template>

<style lang="sass" scoped>
main
  height: calc(100vh - 136px)
  @include laptop
    height: calc(100vh - 96px)

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
      @include laptop
        flex-shrink: 2
        width: 100%
</style>
