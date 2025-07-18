<template>
  <div>
    <h1 class="mb-4">Dashboard</h1>

    <section class="mb-5">
      <h2 class="h4 mb-3">Autores</h2>
      <AuthorsList />
    </section>

    <section class="mb-5">
      <h2 class="h4 mb-3">Libros</h2>
      <BooksList />
    </section>

    <section class="mb-5">
      <h2 class="h4 mb-3">Clientes</h2>
      <CustomersList />
    </section>
  </div>
</template>

<script>
import AuthorsList   from '@/components/AuthorsList.vue'
import BooksList     from '@/components/BooksList.vue'
import CustomersList from '@/components/CustomersList.vue'

export default {
  name: 'Home',
  components: {
    AuthorsList,
    BooksList,
    CustomersList
  }
}
</script>

<style scoped>
</style>
