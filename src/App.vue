<!-- src/App.vue -->
<template>
  <nav>
    <router-link to="/">Dashboard</router-link> |
    <router-link to="/books">Libros</router-link> |
    <router-link to="/customers">Clientes</router-link>
  </nav>
  <router-view/>
</template>
