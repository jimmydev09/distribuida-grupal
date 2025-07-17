<template>
  <div>
    <h2>Authors</h2>
    <router-link to="/authors/new" class="btn btn-primary mb-3">
      + New Author
    </router-link>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in authors" :key="a.id">
          <td>{{ a.id }}</td>
          <td>
            <router-link :to="`/authors/${a.id}`">{{ a.name }}</router-link>
          </td>
          <td>
            <router-link
              :to="`/authors/${a.id}/edit`"
              class="btn btn-sm btn-warning"
            >Edit</router-link>
            <button @click="del(a.id)" class="btn btn-sm btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { fetchAuthors, deleteAuthor } from '../../api/api';

export default {
  name: 'AuthorListView',
  data() {
    return { authors: [] };
  },
  methods: {
    load() {
      fetchAuthors().then(data => (this.authors = data));
    },
    del(id) {
      if (!confirm('Are you sure you want to delete this author?')) return;
      deleteAuthor(id).then(this.load);
    }
  },
  mounted() {
    this.load();
  }
};
</script>
