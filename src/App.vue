<!-- src\App.vue -->
<template>
  <div id="app">
    <Navbar />
    <HomeView />
  </div>
</template>

// src/App.vue
<script>
import Navbar from './components/header/navbar.vue'
import HomeView from './views/HomeView.vue'
import { useDark, useToggle } from '@vueuse/core';
import { provide, onMounted } from 'vue';

export default {
  name: 'App',
  components: {
    Navbar,
    HomeView
  },
  setup() {
    const isDark = useDark({
      selector: 'body',  
      attribute: 'class',
      valueDark: 'dark',
      valueLight: 'light',
      storageKey: 'dark-mode',
      storage: window.localStorage
    });

    const toggleDark = useToggle(isDark);
    provide('toggleDark', toggleDark);

    onMounted(() => {
      if (isDark.value) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    });

    return { isDark, toggleDark };
  }
}
</script>


<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background-color 0.3s, color 0.3s;
}

body:not(.dark) #app {
  background-color: #f3f4f6; 
  color: #2c3e50;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f3f4f6; 
  color: #2c3e50;
  transition: background-color 0.3s, color 0.3s;
}

.dark #app {
  background-color: #111827; 
  color: #f9fafb;
}
</style>

