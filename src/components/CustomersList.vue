<!-- CustomersList.vue -->
<template>
  <div>
    <h2 class="h4 mb-3">Clientes</h2>
    <router-link class="btn btn-sm btn-primary mb-3" to="/customers/new">+ Nuevo cliente</router-link>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th class="text-end">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in items" :key="c.id">
          <td>{{ c.fullName }}</td>
          <td>{{ c.email }}</td>
          <td class="text-end">
            <router-link class="btn btn-sm btn-link" :to="`/customers/${c.id}/edit`">Editar</router-link>
            <button class="btn btn-sm btn-link text-danger" @click="del(c.id)">Eliminar</button>
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
</style>
