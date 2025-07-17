<template>
  <div>
    <nav class="navbar navbar-expand bg-light p-2">
      <ul class="navbar-nav">
        <li class="nav-item"><router-link class="nav-link" to="/books">Books</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/authors">Authors</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/customers">Customers</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/orders">Orders</router-link></li>
      </ul>
    </nav>
    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>
