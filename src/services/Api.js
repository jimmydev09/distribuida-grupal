import axios from 'axios'

export default axios.create({
  baseURL: '/api',      // todas las llamadas partirán de aquí
  headers: { 'Content-Type': 'application/json' }
})
