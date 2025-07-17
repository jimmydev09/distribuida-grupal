<template>
  <div>
    <h2>Customer #{{ customer.id }}</h2>
    <p><strong>Name:</strong> {{ customer.name }}</p>
    <p><strong>Email:</strong> {{ customer.email }}</p>
    <router-link to="/customers" class="btn btn-secondary">Back</router-link>
  </div>
</template>

<script>
import { fetchCustomer } from '../../api/api';

export default {
  name: 'CustomerDetailView',
  props: ['id'],
  data() {
    return { customer: {} };
  },
  mounted() {
    fetchCustomer(this.id).then(data => (this.customer = data));
  }
};
</script>
