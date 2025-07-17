// src/main.js
import { createApp } from 'vue'
import App          from './App.vue'
import router       from './router'

createApp(App)
  .use(router)    // monta el router
  .mount('#app')
