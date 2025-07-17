<!-- CustomerForm.vue -->
<template>
  <div>
    <h2 class="h4 mb-3">{{ isEdit ? 'Editar' : 'Nuevo' }} Cliente</h2>
    <form @submit.prevent="save">
      <div class="mb-3">
        <label class="form-label" for="fullName">Nombre completo:</label>
        <input class="form-control" id="fullName" v-model="item.fullName" required />
      </div>
      <div class="mb-3">
        <label class="form-label" for="email">Email:</label>
        <input class="form-control" id="email" type="email" v-model="item.email" required />
      </div>
      <button class="btn btn-primary" type="submit">Guardar</button>
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
</style>
