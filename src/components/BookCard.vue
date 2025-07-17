<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">{{ book.title }}</h5>
      <p class="card-text">
        <strong>ISBN:</strong> {{ book.isbn }}<br>
        <strong>Precio:</strong> {{ book.price }}
      </p>
      <router-link
        :to="`/books/${book.isbn}`"
        class="btn btn-sm btn-info me-2"
      >
        Ver
      </router-link>
      <router-link
        :to="`/books/${book.isbn}/edit`"
        class="btn btn-sm btn-warning me-2"
      >
        Editar
      </router-link>
      <button
        @click="$emit('delete', book.isbn)"
        class="btn btn-sm btn-danger"
      >
        Borrar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookCard",
  props: {
    book: {
      type: Object,
      required: true
    }
  }
};
</script>
