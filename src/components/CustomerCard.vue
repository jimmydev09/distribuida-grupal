<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">{{ customer.name }}</h5>
      <p class="card-text">
        <strong>ID:</strong> {{ customer.id }}<br>
        <strong>Email:</strong> {{ customer.email }}
      </p>
      <router-link
        :to="`/customers/${customer.id}`"
        class="btn btn-sm btn-info me-2"
      >
        Ver
      </router-link>
      <router-link
        :to="`/customers/${customer.id}/edit`"
        class="btn btn-sm btn-warning me-2"
      >
        Editar
      </router-link>
      <button
        @click="$emit('delete', customer.id)"
        class="btn btn-sm btn-danger"
      >
        Borrar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerCard",
  props: {
    customer: {
      type: Object,
      required: true
    }
  }
};
</script>
