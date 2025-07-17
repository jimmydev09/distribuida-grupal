// src/main.js
import { createApp } from 'vue'
import App          from './App.vue'
import router       from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/main.css'

createApp(App)
  .use(router)    // monta el router
  .mount('#app')
