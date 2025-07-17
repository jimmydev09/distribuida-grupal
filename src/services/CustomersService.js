// src/services/CustomersService.js
import api from './Api'
export default {
  list:   () => api.get('/customers'),
  get:    id => api.get(`/customers/${id}`),
  create: data => api.post('/customers', data),
  update: (id, data) => api.put(`/customers/${id}`, data),
  remove: id => api.delete(`/customers/${id}`)
}
