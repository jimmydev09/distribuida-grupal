<!-- src/App.vue -->
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <div class="container">
      <router-link class="navbar-brand" to="/">Dashboard</router-link>
      <div class="navbar-nav">
        <router-link class="nav-link" to="/books">Libros</router-link>
        <router-link class="nav-link" to="/customers">Clientes</router-link>
      </div>
    </div>
  </nav>
  <div class="container">
    <router-view/>
  </div>
</template>
