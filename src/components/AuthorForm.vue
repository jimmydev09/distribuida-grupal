<template>
  <div>
    <h1>{{ isEdit ? 'Editar' : 'Nuevo' }} Autor</h1>
    <form @submit.prevent="save">
      <input v-model="author.name" placeholder="Nombre" />
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
import api from '@/services/Api'
export default {
  props: ['id'],
  data: () => ({ author: { name: '' } }),
  computed: {
    isEdit() { return !!this.id }
  },
  created() {
    if (this.isEdit) {
      api.get(`/authors/${this.id}`)
         .then(r => this.author = r.data)
    }
  },
  methods: {
    save() {
      const op = this.isEdit
        ? api.put(`/authors/${this.id}`, this.author)
        : api.post('/authors', this.author)
      op.then(() => this.$router.push('/'))
    }
  }
}
</script>
