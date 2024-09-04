<!-- src\components\header\Navbar.vue -->
<script>
import { ref, inject, nextTick } from 'vue';

export default {
  name: 'Navbar-View',
  props: {
    currentSection: Number
  },
  setup(props, { emit }) {
    const toggleDark = inject('toggleDark');
    if (!toggleDark) {
      throw new Error('toggleDark not provided!');
    }

    const isRotated = ref(false);

    const handleToggle = async () => {
      isRotated.value = !isRotated.value;
      await nextTick(); 
      toggleDark();
    };


    const handleSelectSection = (index) => {
      emit('change-section', index);
  };

    const isCurrent = (index) => {
      return index === props.currentSection;
    };

    return { handleToggle, handleSelectSection, isCurrent, isRotated };
  }
}
</script>

<template>
  <header>
    <nav>
      <ul>
        <li v-for="(section, index) in ['Info', 'Studies', 'Work', 'Projects', 'Contact']"
            :key="section"
            @click="handleSelectSection(index)" 
            :class="{ 'active': isCurrent(index) }">  
          {{ section }}
        </li>
      </ul>
    </nav>
    <div @click="handleToggle" class="dark-mode-icon">
      <img :class="{ rotated: isRotated }" src="@/assets/images/extra/dark-mode.png" alt="Toggle Dark Mode" />
    </div>
  </header>
</template>

<style scoped>
header {
  height: 50px; 
  background-color: #8abdf0;
  color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 0 5px;
}

.dark header {
  background-color: #2c3e50;
  color: white;
}

nav {
  flex-grow: 1; 
  display: flex;
}

nav ul {
  list-style-type: none;
  display: flex;
  gap: 20px;
  margin: 0; 
  padding: 0; 
}

nav li {
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.2s;
}

nav li:hover, nav li.active {
  background-color: #34495e;
  transform: translateY(-2px);
  color: white;
}

.dark nav li:hover, nav li.active {
  background-color: #99b0c8;
  transform: translateY(-2px);
  color: black;
}

.dark-mode-icon {
  cursor: pointer;
  transition: transform 0.5s ease; 
}

.dark-mode-icon img {
  width: 30px; 
  height: auto;
  transition: transform 0.5s ease;
}

.rotated {
  transform: rotate(180deg); 
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

@media(max-width:650px)
{
  nav li {
    font-size: 16px;
  }
}

@media(max-width:550px)
{
  nav li {
    font-size: 14px;
  }
}

@media(max-width:450px)
{
  .dark-mode-icon {
    width: 32px;
    height: 32px;
  }
  .dark-mode-icon img {
    max-width: 20px; 
    max-height: 20px;
  }

  nav ul {
    gap: 8px;
  }

  nav li {
    font-size: 12px;
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
  nav ul {
    gap: 4px;
  }
}

@media(max-width: 350px)
{
  nav li {
    font-size: 10px;
  }
}

.dark .navbar-icon:hover,
.dark .dark-mode-icon:hover {
  background-color: #ac89c9;
}
</style>
