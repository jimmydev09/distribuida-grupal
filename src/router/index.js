import { createRouter, createWebHistory } from "vue-router";

// AUTHORS
import AuthorList   from "../views/authors/AuthorListView.vue";
import AuthorForm   from "../views/authors/AuthorFormView.vue";
import AuthorDetail from "../views/authors/AuthorDetailView.vue";
// BOOKS
import BookList     from "../views/books/BookListView.vue";
import BookForm     from "../views/books/BookFormView.vue";
import BookDetail   from "../views/books/BookDetailView.vue";
// CUSTOMERS
import CustomerList   from "../views/customers/CustomerListView.vue";
import CustomerForm   from "../views/customers/CustomerFormView.vue";
import CustomerDetail from "../views/customers/CustomerDetailView.vue";
// ORDERS
import OrderList   from "../views/orders/OrderListView.vue";
import OrderForm   from "../views/orders/OrderFormView.vue";
import OrderDetail from "../views/orders/OrderDetailView.vue";

const routes = [
  // Authors
  { path: "/authors",         component: AuthorList },
  { path: "/authors/new",     component: AuthorForm },
  { path: "/authors/:id",     component: AuthorDetail, props: true },
  { path: "/authors/:id/edit",component: AuthorForm,   props: true },
  // Books
  { path: "/books",         component: BookList },
  { path: "/books/new",     component: BookForm },
  { path: "/books/:isbn",   component: BookDetail, props: true },
  { path: "/books/:isbn/edit",component: BookForm,   props: true },
  // Customers
  { path: "/customers",         component: CustomerList },
  { path: "/customers/new",     component: CustomerForm },
  { path: "/customers/:id",     component: CustomerDetail, props: true },
  { path: "/customers/:id/edit",component: CustomerForm,   props: true },
  // Orders
  { path: "/orders",         component: OrderList },
  { path: "/orders/new",     component: OrderForm },
  { path: "/orders/:id",     component: OrderDetail, props: true },
  { path: "/orders/:id/edit",component: OrderForm,   props: true },
  // redirect default
  { path: "/", redirect: "/books" }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
