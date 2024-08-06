<!-- src\views\HomeView.vue -->
<template>
  <div class="home-view">
    <transition
      :name="transitionName"
      mode="out-in"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave">
      <component :is="currentComponent" :key="currentSection" />
    </transition>
  </div>
</template>

<script>
import InfoSection from '@/components/sections/info_section/infoSection.vue';
import StudiesSection from '@/components/sections/studies_section/studiesSection.vue';
import WorkSection from '@/components/sections/work_section/workSection.vue';
import PPSection from '@/components/sections/pp_section/ppSection.vue';
import ContactSection from '@/components/sections/contact_section/contactSection.vue';

export default {
  name: 'HomeView',
  components: {
    InfoSection,
    StudiesSection,
    WorkSection,
    PPSection,
    ContactSection
  },
  props: {
    currentSection: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      lastSection: 0
    };
  },
  computed: {
    currentComponent() {
      switch (this.currentSection) {
        case 0: return InfoSection;
        case 1: return StudiesSection;
        case 2: return WorkSection;
        case 3: return PPSection;
        case 4: return ContactSection;
        default: return InfoSection; // Ensures a return value is always available
      }
    },
    transitionName() {
      return this.lastSection < this.currentSection ? 'slide-up' : 'slide-down';
    }
  },
  watch: {
    currentSection(newVal, oldVal) {
      this.lastSection = oldVal;
    }
  },
  methods: {
  beforeEnter(el) {
    if (!el) return;
    el.style.transform = 'translateY(100vh)';
  },
  enter(el, done) {
    if (!el) {
      done();
      return;
    }
    el.style.transition = 'transform 0.5s ease-in-out';
    el.style.transform = 'translateY(0)';
    setTimeout(done, 500); // Ensure done is called after the animation
  },
  leave(el, done) {
    if (!el) {
      done();
      return;
    }
    el.style.transition = 'transform 0.5s ease-in-out';
    el.style.transform = 'translateY(-100vh)';
    setTimeout(done, 500); // Ensure done is called after the animation
  }
}

}
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  align-items: center;
  justify-content: center;
}

.info-section, .studies-section, .work-section, .pp-section, .contact-section {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute; 
}
</style>
