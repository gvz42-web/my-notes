<script>
import Modal from '@/components/base/Modal.vue'
import Input from '@/components/base/Input.vue'
import Button from '@/components/base/Button.vue'

export default {
  name: 'CreateNote',
  components: { Button, Input, Modal },
  data() {
    return {
      title: '',
      text: '',
    }
  },
}
</script>

<template>
  <Modal error="" title="Добавление заметки">
    <template #body>
      <Input v-model="title" label="Название заметки" limit="100" placeholder="Введите название" type="text" />
      <Input v-model="text" label="Текст заметки" limit="500" placeholder="Введите текст" type="textarea" />
    </template>
    <template #footer>
      <div></div>
      <Button>Добавить</Button>
    </template>
  </Modal>
</template>

<style lang="sass" scoped></style>
