<script>
import Button from '@/components/base/Button.vue'

export default {
  name: 'notes',
  components: { Button },
  data() {
    return {
      notes: [
        {
          title: '',
          text: '',
        },
        {
          title: '',
          text: '',
        },
        {
          title: '',
          text: '',
        },
        {
          title: '',
          text: '',
        },
        {
          title: '',
          text: '',
        },
      ],
    }
  },
}
</script>

<template>
  <div class="container">
    <Button class="add-button" icon="add" />
  </div>
</template>

<style lang="sass" scoped>
.add-button
  position: fixed
  right: 40px
  bottom: 40px

  @include laptop
    right: 12px

  @include tablet
    right: 8px
</style>
