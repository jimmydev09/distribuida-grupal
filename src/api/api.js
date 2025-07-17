import axios from "axios";




// ——— Instancias baseURL ———
export const authorsApi  = axios.create({ baseURL: '/api/authors' });
export const booksApi    = axios.create({ baseURL: '/api/books' });
export const customersApi= axios.create({ baseURL: '/api/customers' });
export const ordersApi   = axios.create({ baseURL: '/api/orders' });
// ——— AUTHORS ———
export const fetchAuthors = () =>
  authorsApi.get("/").then((r) => r.data);
export const fetchAuthor = (id) =>
  authorsApi.get(`/${id}`).then((r) => r.data);
export const createAuthor = (data) =>
  authorsApi.post("/", data).then((r) => r.data);
export const updateAuthor = (id, data) =>
  authorsApi.put(`/${id}`, data).then((r) => r.data);
export const deleteAuthor = (id) =>
  authorsApi.delete(`/${id}`);

// ——— BOOKS ———
export const fetchBooks = () =>
  booksApi.get("/").then((r) => r.data);
export const fetchBook = (isbn) =>
  booksApi.get(`/${isbn}`).then((r) => r.data);
export const createBook = (data) =>
  booksApi.post("/", data).then((r) => r.data);
export const updateBook = (isbn, data) =>
  booksApi.put(`/${isbn}`, data).then((r) => r.data);
export const deleteBook = (isbn) =>
  booksApi.delete(`/${isbn}`);

// ——— CUSTOMERS ———
export const fetchCustomers = () =>
  customersApi.get("/").then((r) => r.data);
export const fetchCustomer = (id) =>
  customersApi.get(`/${id}`).then((r) => r.data);
export const createCustomer = (data) =>
  customersApi.post("/", data).then((r) => r.data);
export const updateCustomer = (id, data) =>
  customersApi.put(`/${id}`, data).then((r) => r.data);
export const deleteCustomer = (id) =>
  customersApi.delete(`/${id}`);

// ——— ORDERS ———
export const fetchOrders = () =>
  ordersApi.get("/").then((r) => r.data);
export const fetchOrder = (id) =>
  ordersApi.get(`/${id}`).then((r) => r.data);
export const createOrder = (data) =>
  ordersApi.post("/", data).then((r) => r.data);
export const updateOrder = (id, data) =>
  ordersApi.put(`/${id}`, data).then((r) => r.data);
export const deleteOrder = (id) =>
  ordersApi.delete(`/${id}`);
