<script>
import VClamp from 'vue-clamp'

export default {
  name: 'Note',
  components: {
    VClamp,
  },
  props: {
    title: {
      type: String,
      default: 'Заголовок',
    },
    text: {
      type: String,
    },
  },
}
</script>

<template>
  <div class="note">
    <h4 class="title">{{ title }}</h4>
    <div class="text text-normal">
      <v-clamp autoresize class="text-inner" tag="span">{{ text }}</v-clamp>
    </div>
    <div class="footer">
      <div class="delete"><img alt="" src="@/assets/icons/close-icon.svg" />Удалить</div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.note
  border-radius: 12px
  background-color: $green-light

  .title, .text
    padding: 20px 28px

  .title
    border-bottom: 1px solid $green

  .text
    border-bottom: 28px

    .text-inner
      max-height: 288px
      @include tablet
        max-height: 128px
      @include phone
        max-height: 294px

  .footer
    display: flex
    justify-content: flex-end
    padding: 8px

    .delete
      height: 56px
      padding: 0 24px
      display: flex
      align-items: center
      gap: 12px
</style>
