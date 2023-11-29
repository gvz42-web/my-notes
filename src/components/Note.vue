<script>
export default {
  name: 'Note',
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    }
  }
}
</script>

<template>
  <div class='note'>
    <h4 class='title'>{{title}}</h4>
    <div class='text text-normal'>{{ text }}</div>
    <div class='footer'>
      <div class='delete'>
        <img src='@/assets/icons/close-icon.svg' alt=''>Удалить
      </div>
    </div>
  </div>
</template>

<style scoped lang='sass'>
.note
  border-radius: 12px
  background-color: $green-light

  .title, .text
    padding: 20px 28px

  .title
    border-bottom: 1px solid $green

  .text
    border-bottom: 28px

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