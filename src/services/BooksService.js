// src/services/BooksService.js
import api from './Api'

export default {
  list:   () => api.get('/books'),
  get:    isbn => api.get(`/books/${encodeURIComponent(isbn)}`),
  create: data => api.post('/books', data),
  update: (isbn, data) => api.put(`/books/${encodeURIComponent(isbn)}`, data),
  remove: isbn => api.delete(`/books/${encodeURIComponent(isbn)}`)
}
