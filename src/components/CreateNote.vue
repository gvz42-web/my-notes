<script>
import Modal from '@/components/base/Modal.vue'
import Input from '@/components/base/Input.vue'
import Button from '@/components/base/Button.vue'
import { mapStores } from 'pinia'
import { useModalStore } from '@/stores/modalService'
import { useNotesStore } from '@/stores/notes'

export default {
  name: 'CreateNote',
  components: { Button, Input, Modal },
  data() {
    return {
      title: '',
      text: '',
      error: '',
    }
  },
  computed: {
    ...mapStores(useModalStore, useNotesStore),
  },
  methods: {
    createNote: async function () {
      const result = await this.notesStore.createNote({
        title: this.title,
        content: this.text,
      })
      if (result.success) {
        this.modalStore.toggleCreate()
        this.notesStore.fetchNotes()
      } else {
        this.error = result.message
      }
    },
  },
}
</script>

<template>
  <Modal :error="error" title="Добавление заметки" @close="modalStore.toggleCreate">
    <template #body>
      <Input v-model="title" :limit="100" label="Название заметки" placeholder="Введите название" type="text" />
      <Input v-model="text" :limit="500" label="Текст заметки" placeholder="Введите текст" type="textarea" />
    </template>
    <template #footer>
      <div></div>
      <Button @click="createNote">Добавить</Button>
    </template>
  </Modal>
</template>

<style lang="sass" scoped></style>
