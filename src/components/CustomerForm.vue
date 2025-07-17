<!-- CustomerForm.vue -->
<template>
  <div>
    <h1>{{ isEdit ? 'Editar' : 'Nuevo' }} Cliente</h1>
    <form @submit.prevent="save">
      <div>
        <label for="fullName">Nombre completo:</label>
        <input id="fullName" v-model="item.fullName" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="item.email" required />
      </div>
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
import svc from '@/services/CustomersService'
export default {
  name: 'CustomerForm',
  props: ['id'],
  data: () => ({ item: { fullName: '', email: '' } }),
  computed: {
    isEdit() { return !!this.id }
  },
  mounted() {
    if (this.isEdit) svc.get(this.id).then(r => this.item = r.data)
  },
  methods: {
    save() {
      const op = this.isEdit
        ? svc.update(this.id, this.item)
        : svc.create(this.item)
      op.then(() => this.$router.push('/customers'))
    }
  }
}
</script>

<style scoped>
form div { margin-bottom: 12px; }
label { display: block; margin-bottom: 4px; }
input { width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px; }
button { padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; }
</style>
