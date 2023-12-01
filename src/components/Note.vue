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
  computed: {
    textMaxHeight() {
      const width = window.innerWidth
      if (width < 400) {
        return 294
      } else if (width < 800) {
        return 128
      } else {
        return 288
      }
    },
  },
}
</script>

<template>
  <div class="note">
    <h4 class="title">{{ title }}</h4>
    <div class="text text-normal">
      <div class="inner-text">
        <v-clamp v-cloak :max-height="textMaxHeight" autoresize tag="div">
          {{ text }}
        </v-clamp>
      </div>
    </div>
    <div class="footer">
      <div class="delete" @click="$emit('delete')"><img alt="" src="@/assets/icons/close-icon.svg" />Удалить</div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.note
  border-radius: 12px
  background-color: $green-light
  box-shadow: 0 15px 15px -10px rgba(0, 0, 0, 0.40)
  position: relative
  z-index: 1

  &:before
    content: ""
    position: absolute
    top: 0
    right: 0
    border-width: 0 40px 40px 0
    border-radius: 0 0 0 12px
    border-style: solid
    border-color: $dark $dark $green $green
    display: block
    width: 0

  .title, .text
    padding: 20px 28px

  .title
    border-bottom: 1px solid $green

  .text
    padding-bottom: 28px

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
      cursor: pointer
      transition: background-color 0.2s ease
      border-radius: 30px

      &:hover
        background-color: $green-dark
</style>
