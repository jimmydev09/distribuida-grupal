<template>
  <div>
    <h2>Book {{ book.isbn }}</h2>
    <p><strong>Title:</strong> {{ book.title }}</p>
    <p><strong>Price:</strong> {{ book.price }}</p>
    <p><strong>Sold:</strong> {{ book.inventory?.sold }}</p>
    <p><strong>Supplied:</strong> {{ book.inventory?.supplied }}</p>
    <router-link to="/books" class="btn btn-secondary">Back</router-link>
  </div>
</template>

<script>
import { fetchBook } from '../../api/api';

export default {
  name: 'BookDetailView',
  props: ['isbn'],
  data() {
    return { book: {} };
  },
  mounted() {
    fetchBook(this.isbn).then(data => (this.book = data));
  }
};
</script>
