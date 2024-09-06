<!-- src/components/header/Navbar.vue -->
<script>
import { ref, inject, nextTick } from 'vue';
import 'primeicons/primeicons.css'; 

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

    const icons = ['pi pi-home', 'pi pi-book', 'pi pi-briefcase', 'pi pi-folder-open', 'pi pi-envelope'];
    const isRotated = ref(false);

    const expandToggled = ref(false); 

    const handleExpandToggle = () => {
      expandToggled.value = !expandToggled.value;
    };

    const handleToggle = async () => {
      await nextTick();
      toggleDark();
    };

    const handleSelectSection = (index) => {
      emit('change-section', index);
    };

    const isCurrent = (index) => {
      return index === props.currentSection;
    };

    return { handleToggle, handleSelectSection, isCurrent, isRotated, icons, expandToggled, handleExpandToggle };
  }
};
</script>

<template>
  <header class="floating-navbar">
    <nav>
      <ul>
        <li
          v-for="(icon, index) in [
            ...icons, 
            isRotated ? 'pi pi-sun' : 'pi pi-moon', 
            expandToggled ? 'pi pi-angle-left' : 'pi pi-angle-right'
          ]"
          :key="icon"
          @click="index === icons.length 
                    ? handleToggle() 
                    : index === icons.length + 1 
                    ? handleExpandToggle() 
                    : handleSelectSection(index)"
          :class="{ 
            'active': isCurrent(index) && index !== icons.length, 
            'expand-active': index === icons.length + 1 && expandToggled 
          }"
        >
          <i :class="icon"></i>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.floating-navbar {
  position: fixed;
  top: 10px;
  align-self: center;
  height: 50px;
  background-color: rgba(138, 189, 240, 0.95);
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  border-radius: 25px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.5s ease, color 0.5s ease;
  z-index: 100;
}
.dark header {
  background-color: #2c3e50;
  color: white;
}

nav {
  flex-grow: 1;
  display: flex;
  justify-content: center; 
  align-items: center; 
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

nav li.expand-active {
  background-color: #34495e; 
  transform: translateY(-2px);
  color: white;
}

nav li:hover, nav li.active, nav li.expand-active:hover {
  background-color: #34495e;
  transform: translateY(-2px);
  color: white;
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
  nav ul {
    gap: 8px;
  }

  nav li {
    font-size: 12px;
  }
}

@media(max-width:350px)
 {
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

</style>
