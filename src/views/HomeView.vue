<!-- src\views\HomeView.vue -->
<template>
    <div class="home-view">
      <h1>Home View</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView'
  }
  </script>
  
  <style scoped>
  .home-view {
    flex: 1; /* Takes the remaining space */
    overflow-y: auto; /* Adds scroll if content overflows */
  }
  </style>
  