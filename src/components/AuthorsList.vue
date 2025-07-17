<template>
  <div>
    <h1>Autores</h1>
    <router-link to="/authors/new">+ Nuevo autor</router-link>
    <table>
      <thead><tr><th>Nombre</th><th>Acciones</th></tr></thead>
      <tbody>
        <tr v-for="a in items" :key="a.id">
          <td>{{ a.name }}</td>
          <td>
            <router-link :to="`/authors/${a.id}/edit`">Editar</router-link>
            |
            <button @click="del(a.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import svc from '@/services/AuthorsService'
export default {
  data: () => ({ items: [] }),
  mounted() { this.fetch() },
  methods: {
    fetch() {
      svc.list().then(r => this.items = r.data)
    },
    del(id) {
      if (!confirm('¿Eliminar autor?')) return
      svc.remove(id).then(this.fetch)
    }
  }
}
</script>
