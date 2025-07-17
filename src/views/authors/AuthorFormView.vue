<template>
  <div>
    <h2>{{ isEdit ? 'Edit' : 'New' }} Author</h2>
    <form @submit.prevent="save">
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input v-model="form.name" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">
        {{ isEdit ? 'Update' : 'Create' }}
      </button>
      <router-link to="/authors" class="btn btn-secondary ms-2">Cancel</router-link>
    </form>
  </div>
</template>

<script>
import { fetchAuthor, createAuthor, updateAuthor } from '../../api/api';

export default {
  name: 'AuthorFormView',
  props: ['id'],
  data() {
    return { form: { name: '' } };
  },
  computed: {
    isEdit() {
      return !!this.id;
    }
  },
  mounted() {
    if (this.isEdit) {
      fetchAuthor(this.id).then(a => {
        this.form.name = a.name;
      });
    }
  },
  methods: {
    save() {
      const action = this.isEdit
        ? updateAuthor(this.id, this.form)
        : createAuthor(this.form);
      action.then(() => this.$router.push('/authors'));
    }
  }
};
</script>
