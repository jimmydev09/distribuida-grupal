<template>
  <div>
    <h2>{{ isEdit ? 'Edit' : 'New' }} Order</h2>
    <form @submit.prevent="save">
      <div class="mb-3">
        <label>Customer</label>
        <select v-model.number="form.customerId" class="form-select" required>
          <option v-for="c in customers" :key="c.id" :value="c.id">
            {{ c.name }}
          </option>
        </select>
      </div>

      <h3>Line Items</h3>
      <div
        v-for="(li, idx) in form.lineItems"
        :key="idx"
        class="row mb-2 align-items-center"
      >
        <div class="col">
          <input
            v-model="li.isbn"
            placeholder="ISBN"
            class="form-control"
            required
          />
        </div>
        <div class="col">
          <input
            type="number"
            v-model.number="li.quantity"
            placeholder="Qty"
            class="form-control"
            required
          />
        </div>
        <div class="col-auto">
          <button
            @click.prevent="removeLine(idx)"
            class="btn btn-sm btn-danger"
          >–</button>
        </div>
      </div>
      <button @click.prevent="addLine" class="btn btn-link">+ Add Line</button>

      <div class="mt-3">
        <button class="btn btn-primary">
          {{ isEdit ? 'Update' : 'Create' }}
        </button>
        <router-link to="/orders" class="btn btn-secondary ms-2">
          Cancel
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { fetchOrder, createOrder, updateOrder, fetchCustomers } from '../../api/api';

export default {
  name: 'OrderFormView',
  props: ['id'],
  data() {
    return {
      customers: [],
      form: {
        customerId: null,
        lineItems: [{ isbn: '', quantity: 1 }]
      }
    };
  },
  computed: {
    isEdit() {
      return !!this.id;
    }
  },
  mounted() {
    fetchCustomers().then(data => (this.customers = data));
    if (this.isEdit) {
      fetchOrder(this.id).then(o => {
        this.form.customerId = o.customer.id;
        this.form.lineItems = o.lineItems.map(li => ({
          isbn: li.isbn,
          quantity: li.quantity
        }));
      });
    }
  },
  methods: {
    addLine() {
      this.form.lineItems.push({ isbn: '', quantity: 1 });
    },
    removeLine(idx) {
      this.form.lineItems.splice(idx, 1);
    },
    save() {
      const payload = {
        customerId: this.form.customerId,
        lineItems: this.form.lineItems
      };
      const action = this.isEdit
        ? updateOrder(this.id, payload)
        : createOrder(payload);
      action.then(() => this.$router.push('/orders'));
    }
  }
};
</script>
