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

    const handleToggle = () => {
      console.log('Toggling Dark Mode');
      toggleDark();
    }

    return { handleToggle };
  }
}
</script>

<template>
  <header>
    <h1>Navbar</h1>
    <div @click="handleToggle" class="dark-mode-icon">
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

.dark-mode-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

@media(max-width:420px)
{
  .dark-mode-icon {
    width: 34px;
    height: 34px;
  }
  .dark-mode-icon img {
    max-width: 20px; 
    max-height: 20px;
  }
}

@media(max-width:350px)
{
  .dark-mode-icon {
    width: 30px;
    height: 30px;
  }
  .dark-mode-icon img {
    max-width: 15px; 
    max-height: 15px;
  }
}

.dark-mode-icon:hover {
  transform: scale(1.1);
  background-color: #ac89c9;
}

.active-icon {
  transform: scale(1.1);
  background-color: #ac89c9;
}

.dark .active-icon {
  background-color: #ac89c9;
}

.dark .navbar-icon:hover,
.dark .dark-mode-icon:hover {
  background-color: #ac89c9;
}
</style>
