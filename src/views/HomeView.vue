<!-- src\views\HomeView.vue -->
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
          default: return InfoSection; 
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
        el.style.transform = this.transitionName === 'slide-up' ? 'translateY(100%)' : 'translateY(-100%)';
      },
      enter(el, done) {
        if (!el) {
          done();
          return;
        }
        el.style.transition = 'transform 0.5s ease-in-out';
        el.style.transform = 'translateY(0)'; 
        setTimeout(done, 500); 
      },
      leave(el, done) {
        if (!el) {
          done();
          return;
        }
        el.style.transition = 'transform 0.5s ease-in-out';
        el.style.transform = this.transitionName === 'slide-down' ? 'translateY(100%)' : 'translateY(-100%)';
        setTimeout(done, 500); 
      }
    }

}
</script>

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

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  height: 100%;
  justify-content: center;
}

.info-section, .studies-section, .work-section, .pp-section, .contact-section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute; 
}

.slide-down-enter-active, .slide-up-enter-active {
  transition: transform 0.5s ease-in-out;
}
.slide-down-leave-active, .slide-up-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-down-enter, .slide-up-leave-to {
  transform: translateY(-100%); 
}
.slide-down-leave-to, .slide-up-enter {
  transform: translateY(100%); 
}

</style>
