<template>
  <div>
    <h2>Customers</h2>
    <router-link to="/customers/new" class="btn btn-primary mb-3">
      + New Customer
    </router-link>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in customers" :key="c.id">
          <td>{{ c.id }}</td>
          <td>
            <router-link :to="`/customers/${c.id}`">{{ c.name }}</router-link>
          </td>
          <td>{{ c.email }}</td>
          <td>
            <router-link
              :to="`/customers/${c.id}/edit`"
              class="btn btn-sm btn-warning"
            >Edit</router-link>
            <button @click="del(c.id)" class="btn btn-sm btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { fetchCustomers, deleteCustomer } from '../../api/api';

export default {
  name: 'CustomerListView',
  data() {
    return { customers: [] };
  },
  methods: {
    load() {
      fetchCustomers().then(data => (this.customers = data));
    },
    del(id) {
      if (!confirm('Delete this customer?')) return;
      deleteCustomer(id).then(this.load);
    }
  },
  mounted() {
    this.load();
  }
};
</script>
