<!-- src\components\header\Navbar.vue -->
<script>
import { inject } from 'vue';

export default {
  name: 'Navbar-View',
  setup() {
    const toggleDark = inject('toggleDark');

    if (!toggleDark) {
      throw new Error('toggleDark not provided!');
    }

    return { toggleDark };
  }
}
</script>

<template>
  <header>
    <h1>Navbar</h1>
    <div @click="toggleDark" class="dark-mode-icon">
      <img src="@/assets/images/dark-mode.png" alt="Toggle Dark Mode" />
    </div>
  </header>
</template>

<style scoped>
header {
  height: 50px; 
  background-color: #2c3e50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.dark-mode-icon {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.dark-mode-icon img {
  width: 30px; 
  height: auto;
}

.dark-mode-icon:hover {
  transform: scale(1.1);
}
</style>
