<template>
  <div>
    <h2 class="h4 mb-3">{{ isEdit ? 'Editar' : 'Nuevo' }} Libro</h2>
    <form @submit.prevent="save">
      <div class="mb-3">
        <label class="form-label" for="isbn">ISBN:</label>
        <input class="form-control" id="isbn" v-model="book.isbn" :disabled="isEdit" required />
      </div>
      <div class="mb-3">
        <label class="form-label" for="title">Título:</label>
        <input class="form-control" id="title" v-model="book.title" required />
      </div>
      <div class="mb-3">
        <label class="form-label" for="publisher">Publisher:</label>
        <input class="form-control" id="publisher" v-model="book.publisher" />
      </div>
      <!-- añade más campos según tu BookDto -->
      <button class="btn btn-primary" type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
import svc from '@/services/BooksService'
export default {
  name: 'BookForm',
  props: ['isbn'],
  data: () => ({ book: { isbn: '', title: '', publisher: '' /* ... */ } }),
  computed: {
    isEdit() { return !!this.isbn }
  },
  mounted() {
    if (this.isEdit) {
      svc.get(this.isbn).then(r => this.book = r.data)
    }
  },
  methods: {
    save() {
      const op = this.isEdit
        ? svc.update(this.isbn, this.book)
        : svc.create(this.book)
      op.then(() => this.$router.push('/books'))
        .catch(e => alert('Error al guardar: ' + e.response?.data || e.message))
    }
  }
}
</script>
