<template>
  <div>
    <h2 class="h4 mb-3">Libros</h2>
    <router-link class="btn btn-sm btn-primary mb-3" to="/books/new">+ Nuevo libro</router-link>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ISBN</th>
          <th>Título</th>
          <th>Editores</th>
          <th class="text-end">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="b in items" :key="b.isbn">
          <td>{{ b.isbn }}</td>
          <td>{{ b.title }}</td>
          <td>{{ b.publisher || '–' }}</td>
          <td class="text-end">
            <router-link class="btn btn-sm btn-link" :to="`/books/${b.isbn}/edit`">Editar</router-link>
            <button class="btn btn-sm btn-link text-danger" @click="del(b.isbn)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import svc from '@/services/BooksService'
export default {
  name: 'BooksList',
  data: () => ({ items: [] }),
  mounted() { this.fetch() },
  methods: {
    fetch() {
      svc.list().then(r => this.items = r.data)
    },
    del(isbn) {
      if (!confirm('¿Eliminar libro?')) return
      svc.remove(isbn)
         .then(this.fetch)
         .catch(e => alert('Error al eliminar: ' + e.response?.data || e.message))
    }
  }
}
</script>
