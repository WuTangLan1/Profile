<!-- src\views\HomeView.vue -->

<script>
import InfoSection from '@/components/sections/info_section/infoSection.vue'
import StudiesSection from '@/components/sections/studies_section/studiesSection.vue'
import WorkSection from '@/components/sections/work_section/workSection.vue'

export default {
  name: 'HomeView',
  components: {
    InfoSection,
    StudiesSection,
    WorkSection
  },
  data() {
    return {
      currentSection: 0 
    };
  },
  methods: {
    handleScroll(event) {
      const { deltaY } = event;
      if (deltaY > 0) {
        if (this.currentSection < 2) this.currentSection++;
      } else { 
        if (this.currentSection > 0) this.currentSection--;
      }
    }
  },
  mounted() {
    window.addEventListener('wheel', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('wheel', this.handleScroll);
  }
}
</script>

<template>
  <div class="home-view">
    <info-section v-show="currentSection === 0" />
    <studies-section v-show="currentSection === 1" />
    <work-section v-show="currentSection === 2" />
  </div>
</template>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  height: 100vh; 
  overflow-y: hidden; 
  align-items: center;
  justify-content: center;
}

.info-section, .studies-section, .work-section {
  width: 100%;
  height: 100vh; 
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
