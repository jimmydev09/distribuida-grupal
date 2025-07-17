<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">Orden #{{ order.id }}</h5>
      <p class="card-text">
        <strong>Cliente:</strong> {{ order.customer.name }}<br>
        <strong>Total:</strong> {{ order.total }}
      </p>
      <router-link
        :to="`/orders/${order.id}`"
        class="btn btn-sm btn-info me-2"
      >
        Ver
      </router-link>
      <router-link
        :to="`/orders/${order.id}/edit`"
        class="btn btn-sm btn-warning me-2"
      >
        Editar
      </router-link>
      <button
        @click="$emit('delete', order.id)"
        class="btn btn-sm btn-danger"
      >
        Borrar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderCard",
  props: {
    order: {
      type: Object,
      required: true
    }
  }
};
</script>
