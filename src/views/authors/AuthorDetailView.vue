<template>
  <div>
    <h2>Author #{{ author.id }}</h2>
    <p><strong>Name:</strong> {{ author.name }}</p>
    <router-link to="/authors" class="btn btn-secondary">Back</router-link>
  </div>
</template>

<script>
import { fetchAuthor } from '../../api/api';

export default {
  name: 'AuthorDetailView',
  props: ['id'],
  data() {
    return { author: {} };
  },
  mounted() {
    fetchAuthor(this.id).then(data => (this.author = data));
  }
};
</script>
