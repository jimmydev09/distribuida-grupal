<template>
  <div>
    <h2>{{ isEdit ? 'Edit' : 'New' }} Customer</h2>
    <form @submit.prevent="save">
      <div class="mb-3">
        <label>Name</label>
        <input v-model="form.name" class="form-control" required />
      </div>
      <div class="mb-3">
        <label>Email</label>
        <input
          type="email"
          v-model="form.email"
          class="form-control"
          required
        />
      </div>
      <button class="btn btn-primary">
        {{ isEdit ? 'Update' : 'Create' }}
      </button>
      <router-link to="/customers" class="btn btn-secondary ms-2">Cancel</router-link>
    </form>
  </div>
</template>

<script>
import {
  fetchCustomer,
  createCustomer,
  updateCustomer
} from '../../api/api';

export default {
  name: 'CustomerFormView',
  props: ['id'],
  data() {
    return { form: { name: '', email: '' } };
  },
  computed: {
    isEdit() {
      return !!this.id;
    }
  },
  mounted() {
    if (this.isEdit) {
      fetchCustomer(this.id).then(c => {
        this.form = { name: c.name, email: c.email };
      });
    }
  },
  methods: {
    save() {
      const action = this.isEdit
        ? updateCustomer(this.id, this.form)
        : createCustomer(this.form);
      action.then(() => this.$router.push('/customers'));
    }
  }
};
</script>
