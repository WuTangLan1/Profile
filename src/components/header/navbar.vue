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

    const icons = [
      { class: 'pi pi-home', label: 'Home' },
      { class: 'pi pi-book', label: 'Docs' },
      { class: 'pi pi-briefcase', label: 'Portfolio' },
      { class: 'pi pi-folder-open', label: 'Projects' },
      { class: 'pi pi-envelope', label: 'Contact' },
    ];

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
  <header :class="['floating-navbar', { expanded: expandToggled }]">
    <nav>
      <ul>
        <li
          v-for="(icon, index) in [
            ...icons, 
            isRotated ? { class: 'pi pi-sun', label: 'Light Mode' } : { class: 'pi pi-moon', label: 'Dark Mode' }, 
            expandToggled ? { class: 'pi pi-angle-left expand-toggle', label: 'Minimize' } : { class: 'pi pi-angle-right expand-toggle', label: 'Expand' }
          ]"
          :key="icon.class"
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
          <i :class="icon.class"></i>
          <span v-if="expandToggled" class="icon-label">{{ icon.label }}</span>
        </li>

      </ul>
    </nav>
  </header>
</template>

<style scoped>
.floating-navbar {
  position: fixed;
  top: 20px; 
  left: 50%;
  transform: translateX(-50%); 
  height: 50px;
  background-color: rgba(138, 189, 240, 0.95);
  color: black;
  display: flex;
  align-items: center;
  justify-content: center; 
  padding: 0 15px;
  border-radius: 25px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.5s ease, color 0.5s ease, height 0.3s, padding 0.3s;
  z-index: 100;
}

.dark .floating-navbar {
  background-color: #2c3e50;
  color: white;
}

.icon-label {
  margin-top: 4px; 
  font-size: 12px;
  text-align: center;
  white-space: nowrap; 
  transition: opacity 0.3s ease;
}

.floating-navbar.expanded {
  padding: 10px 25px; 
  height: auto; 
  opacity: 0.6;
  gap: 15px; 
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
  display: flex;
  flex-direction: column;
  align-items: center; /* Center icons and labels */
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

.expand-toggle {
  display: none;
}

@media (min-width: 650px) {
  .expand-toggle {
    display: inline-flex;
  }
}

@media (max-width: 649px) {
  nav ul {
    justify-content: space-between; 
    gap: 0; 
    padding-left: 25px;
  }
}


@media(max-width: 1000px)
{
  .floating-navbar {
    background-color: rgba(138, 189, 240, 0.75); 
    backdrop-filter: blur(5px); 
    opacity: 0.75; 
    transition: background-color 0.3s ease, opacity 0.3s ease; 
  }

  .dark .floating-navbar {
    opacity: 0.6; 
  }
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
