<!-- CustomersList.vue -->
<template>
  <div>
    <h1>Clientes</h1>
    <router-link to="/customers/new">+ Nuevo cliente</router-link>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in items" :key="c.id">
          <td>{{ c.fullName }}</td>
          <td>{{ c.email }}</td>
          <td>
            <router-link :to="`/customers/${c.id}/edit`">Editar</router-link> |
            <button @click="del(c.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import svc from '@/services/CustomersService'
export default {
  name: 'CustomersList',
  data: () => ({ items: [] }),
  mounted() { this.fetch() },
  methods: {
    fetch() {
      svc.list().then(r => this.items = r.data)
    },
    del(id) {
      if (!confirm('¿Eliminar cliente?')) return
      svc.remove(id).then(this.fetch)
    }
  }
}
</script>

<style scoped>
table { width: 100%; border-collapse: collapse; }
th, td { padding: 8px; border: 1px solid #ddd; }
button { background: none; border: none; color: #42b983; cursor: pointer; }
</style>
