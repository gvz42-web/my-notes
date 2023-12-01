<script>
import Button from '@/components/base/Button.vue'
import Note from '@/components/Note.vue'
import CreateNote from '@/components/CreateNote.vue'
import { mapStores } from 'pinia'
import { useModalStore } from '@/stores/modalService'
import { useNotesStore } from '@/stores/notes'

export default {
  name: 'notes',
  components: { CreateNote, Note, Button },
  data() {
    return {
      status: 0,
      // notes: [
      //   {
      //     title: 'Заголовок',
      //     text: 'А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных.',
      //   },
      //   {
      //     title: 'Заголовок',
      //     text: 'Не следует, однако, забывать, что базовый вектор развития предопределяет высокую востребованность позиций, занимаемых участниками в отношении поставленных задач. Вот вам яркий пример современных тенденций — повышение уровня гражданского сознания требует анализа переосмысления внешнеэкономических политик.',
      //   },
      //   {
      //     title: 'Заголовок',
      //     text: 'А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных.',
      //   },
      //   {
      //     title: 'Пример заголовока заметки в две строчки',
      //     text: 'А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных.',
      //   },
      //   {
      //     title: 'Заголовок',
      //     text: 'А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных.',
      //   },
      // ],
    }
  },
  computed: {
    ...mapStores(useModalStore, useNotesStore),
  },
  async mounted() {
    await this.notesStore.fetchNotes()
  },
  methods: {
    async deleteNote(id) {
      await this.notesStore.deleteNote(id)
      this.notesStore.fetchNotes()
    },
  },
}
</script>

<template>
  <main>
    <CreateNote v-if="modalStore.isCreateOpen" />
    <div class="container p-vertical">
      <div class="notes-list">
        <Note
          v-for="item of this.notesStore.getAll"
          :key="item.id"
          :text="item.content"
          :title="item.title"
          @delete="deleteNote(item.id)"
        />
      </div>
      <Button class="add-button" icon="add" @click="modalStore.toggleCreate" />
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
