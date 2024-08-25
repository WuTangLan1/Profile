// src/stores/animationStore.js
import { defineStore } from 'pinia';

export const useAnimationStore = defineStore('animationStore', {
  state: () => ({
    animationEnabled: true,  
  }),
  actions: {
    toggleAnimation() {
      this.animationEnabled = !this.animationEnabled;
    },
    setAnimation(state) {
      this.animationEnabled = state;
    }
  },
  persist: true,  
});
