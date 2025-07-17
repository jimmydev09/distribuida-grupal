<template>
  <div>
    <h2>Order #{{ order.id }}</h2>
    <p><strong>Customer:</strong> {{ order.customer.name }}</p>
    <p><strong>Total:</strong> {{ order.total }}</p>
    <h3>Line Items</h3>
    <ul>
      <li v-for="li in order.lineItems" :key="li.id">
        {{ li.quantity }} × {{ li.isbn }}
      </li>
    </ul>
    <router-link to="/orders" class="btn btn-secondary">Back</router-link>
  </div>
</template>

<script>
import { fetchOrder } from '../../api/api';

export default {
  name: 'OrderDetailView',
  props: ['id'],
  data() {
    return { order: { lineItems: [] } };
  },
  mounted() {
    fetchOrder(this.id).then(data => (this.order = data));
  }
};
</script>
