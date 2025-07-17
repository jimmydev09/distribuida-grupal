<template>
  <div>
    <h2>Orders</h2>
    <router-link to="/orders/new" class="btn btn-primary mb-3">
      + New Order
    </router-link>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="o in orders" :key="o.id">
          <td>{{ o.id }}</td>
          <td>{{ o.customer.name }}</td>
          <td>{{ o.total }}</td>
          <td>
            <router-link
              :to="`/orders/${o.id}`"
              class="btn btn-sm btn-info"
            >View</router-link>
            <router-link
              :to="`/orders/${o.id}/edit`"
              class="btn btn-sm btn-warning"
            >Edit</router-link>
            <button @click="del(o.id)" class="btn btn-sm btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { fetchOrders, deleteOrder } from '../../api/api';

export default {
  name: 'OrderListView',
  data() {
    return { orders: [] };
  },
  methods: {
    load() {
      fetchOrders().then(data => (this.orders = data));
    },
    del(id) {
      if (!confirm('Delete this order?')) return;
      deleteOrder(id).then(this.load);
    }
  },
  mounted() {
    this.load();
  }
};
</script>
