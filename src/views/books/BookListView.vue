<template>
  <div>
    <h2>Books</h2>
    <router-link to="/books/new" class="btn btn-primary mb-3">
      + New Book
    </router-link>
    <table class="table">
      <thead>
        <tr>
          <th>ISBN</th>
          <th>Title</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="b in books" :key="b.isbn">
          <td>{{ b.isbn }}</td>
          <td>
            <router-link :to="`/books/${b.isbn}`">{{ b.title }}</router-link>
          </td>
          <td>{{ b.price }}</td>
          <td>
            <router-link
              :to="`/books/${b.isbn}/edit`"
              class="btn btn-sm btn-warning"
            >Edit</router-link>
            <button @click="del(b.isbn)" class="btn btn-sm btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { fetchBooks, deleteBook } from '../../api/api';

export default {
  name: 'BookListView',
  data() {
    return { books: [] };
  },
  methods: {
    load() {
      fetchBooks().then(data => (this.books = data));
    },
    del(isbn) {
      if (!confirm('Delete this book?')) return;
      deleteBook(isbn).then(this.load);
    }
  },
  mounted() {
    this.load();
  }
};
</script>
