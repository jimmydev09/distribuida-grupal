<template>
  <div>
    <h1>{{ isEdit ? 'Editar' : 'Nuevo' }} Libro</h1>
    <form @submit.prevent="save">
      <div>
        <label for="isbn">ISBN:</label>
        <input id="isbn" v-model="book.isbn" :disabled="isEdit" required />
      </div>
      <div>
        <label for="title">Título:</label>
        <input id="title" v-model="book.title" required />
      </div>
      <div>
        <label for="publisher">Publisher:</label>
        <input id="publisher" v-model="book.publisher" />
      </div>
      <!-- añade más campos según tu BookDto -->
      <button type="submit">Guardar</button>
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
