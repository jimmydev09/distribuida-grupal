import { createRouter, createWebHistory } from 'vue-router'
import Home           from '@/components/Home.vue'
import AuthorForm     from '@/components/AuthorForm.vue'
import BooksList      from '@/components/BooksList.vue'
import BookForm       from '@/components/BookForm.vue'
import CustomersList  from '@/components/CustomersList.vue'
import CustomerForm   from '@/components/CustomerForm.vue'

const routes = [
  // Dashboard
  { path: '/',                component: Home },

  // Authors
  { path: '/authors/new',     component: AuthorForm },
  { path: '/authors/:id/edit',component: AuthorForm, props: true },

  // Books
  { path: '/books',           component: BooksList },
  { path: '/books/new',       component: BookForm },
  { path: '/books/:isbn/edit', component: BookForm, props: { default: true } },

  // Customers
  { path: '/customers',         component: CustomersList },
  { path: '/customers/new',     component: CustomerForm },
  { path: '/customers/:id/edit',component: CustomerForm, props: true }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
