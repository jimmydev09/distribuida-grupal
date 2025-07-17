<template>
  <div>
    <h1>Dashboard</h1>

    <section>
      <h2>Autores</h2>
      <AuthorsList />
    </section>

    <section>
      <h2>Libros</h2>
      <BooksList />
    </section>

    <section>
      <h2>Clientes</h2>
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
section {
  margin-bottom: 2rem;
}
section h2 {
  margin-bottom: 0.5rem;
  color: #35495e;
}
</style>
