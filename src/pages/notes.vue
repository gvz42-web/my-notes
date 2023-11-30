<script>
import Button from '@/components/base/Button.vue'
import Note from '@/components/Note.vue'

export default {
  name: 'notes',
  components: { Note, Button },
  data() {
    return {
      notes: [
        {
          title: 'Заголовок',
          text: 'А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных.',
        },
        {
          title: 'Заголовок',
          text: 'Не следует, однако, забывать, что базовый вектор развития предопределяет высокую востребованность позиций, занимаемых участниками в отношении поставленных задач. Вот вам яркий пример современных тенденций — повышение уровня гражданского сознания требует анализа переосмысления внешнеэкономических политик.',
        },
        {
          title: 'Заголовок',
          text: 'А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных.',
        },
        {
          title: 'Пример заголовока заметки в две строчки',
          text: 'А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных.',
        },
        {
          title: 'Заголовок',
          text: 'А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных.',
        },
      ],
    }
  },
}
</script>

<template>
  <main>
    <div class="container p-vertical">
      <div class="notes-list">
        <Note v-for="item of notes" :text="item.text | truncate(295)" :title="item.title" />
      </div>

      <Button class="add-button" icon="add" />
    </div>
  </main>
</template>

<style lang="sass" scoped>
main
  min-height: calc(100vh - 136px)
  @include laptop
    min-height: calc(100vh - 96px)

  .notes-list
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    gap: 40px
    align-items: start
    @include laptop
      gap: 20px

    @include tablet
      grid-template-columns: 1fr

  .add-button
    position: fixed
    right: 40px
    bottom: 40px

    @include laptop
      right: 12px

    @include tablet
      right: 8px
</style>
