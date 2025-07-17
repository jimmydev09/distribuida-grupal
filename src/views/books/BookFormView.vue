<template>
  <div>
    <h2>{{ isEdit ? 'Edit' : 'New' }} Book</h2>
    <form @submit.prevent="save">
      <div class="mb-3">
        <label>ISBN</label>
        <input
          v-model="form.isbn"
          class="form-control"
          :disabled="isEdit"
          required
        />
      </div>
      <div class="mb-3">
        <label>Title</label>
        <input v-model="form.title" class="form-control" required />
      </div>
      <div class="mb-3">
        <label>Price</label>
        <input
          type="number"
          v-model.number="form.price"
          class="form-control"
          required
        />
      </div>
      <button class="btn btn-primary">{{ isEdit ? 'Update' : 'Create' }}</button>
      <router-link
        :to="isEdit ? `/books/${isbn}` : '/books'"
        class="btn btn-secondary ms-2"
      >Cancel</router-link>
    </form>
  </div>
</template>

<script>
import { fetchBook, createBook, updateBook } from '../../api/api';

export default {
  name: 'BookFormView',
  props: ['isbn'],
  data() {
    return {
      form: { isbn: '', title: '', price: 0 }
    };
  },
  computed: {
    isEdit() {
      return !!this.isbn;
    }
  },
  mounted() {
    if (this.isEdit) {
      fetchBook(this.isbn).then(b => {
        this.form = { isbn: b.isbn, title: b.title, price: b.price };
      });
    }
  },
  methods: {
    save() {
      const action = this.isEdit
        ? updateBook(this.isbn, this.form)
        : createBook(this.form);
      action.then(() => this.$router.push('/books'));
    }
  }
};
</script>
