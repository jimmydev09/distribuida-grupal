<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">{{ author.name }}</h5>
      <p class="card-text">
        <strong>ID:</strong> {{ author.id }}
      </p>
      <router-link
        :to="`/authors/${author.id}`"
        class="btn btn-sm btn-info me-2"
      >
        Ver
      </router-link>
      <router-link
        :to="`/authors/${author.id}/edit`"
        class="btn btn-sm btn-warning me-2"
      >
        Editar
      </router-link>
      <button
        @click="$emit('delete', author.id)"
        class="btn btn-sm btn-danger"
      >
        Borrar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorCard",
  props: {
    author: {
      type: Object,
      required: true
    }
  }
};
</script>
