<template>
  <div>
    <h1>Libros</h1>
    <router-link to="/books/new">+ Nuevo libro</router-link>
    <table>
      <thead>
        <tr>
          <th>ISBN</th>
          <th>Título</th>
          <th>Editores</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="b in items" :key="b.isbn">
          <td>{{ b.isbn }}</td>
          <td>{{ b.title }}</td>
          <td>{{ b.publisher || '–' }}</td> <!-- o b.type, o b.price, según tu DTO -->
          <td>
            <router-link :to="`/books/${b.isbn}/edit`">Editar</router-link> |
            <button @click="del(b.isbn)">Eliminar</button>
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
