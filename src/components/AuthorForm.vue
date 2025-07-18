<template>
  <div>
    <h2 class="h4 mb-3">{{ isEdit ? 'Editar' : 'Nuevo' }} Autor</h2>
    <form @submit.prevent="save">
      <div class="mb-3">
        <label class="form-label">Nombre</label>
        <input class="form-control" v-model="author.name" placeholder="Nombre" />
      </div>
      <button class="btn btn-primary" type="submit">Guardar</button>
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
