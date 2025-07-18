<template>
  <div>
    <h2 class="h4 mb-3">Autores</h2>
    <router-link class="btn btn-sm btn-primary mb-3" to="/authors/new">+ Nuevo autor</router-link>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th class="text-end">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in items" :key="a.id">
          <td>{{ a.name }}</td>
          <td class="text-end">
            <router-link class="btn btn-sm btn-link" :to="`/authors/${a.id}/edit`">Editar</router-link>
            <button class="btn btn-sm btn-link text-danger" @click="del(a.id)">Eliminar</button>
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
