// src/services/AuthorsService.js
import api from './Api'
export default {
  list:    () => api.get('/authors'),
  get:     id => api.get(`/authors/${id}`),
  create:  data => api.post('/authors', data),
  update:  (id, data) => api.put(`/authors/${id}`, data),
  remove:  id => api.delete(`/authors/${id}`)
}
