<!-- src\components\sections\info_section\techSection.vue -->
  
<script>
  export default {
    data() {
      return {
        languages: [
          { name: 'JavaScript', src: require('@/assets/images/known tech/javascript_icon.png'), rating : 5 },
          { name: 'TypeScript', src: require('@/assets/images/known tech/typescript_icon.png'), rating : 4 },
          { name: 'Python', src: require('@/assets/images/known tech/python_icon.png'), rating : 3 }
        ],
        frameworks: [
          { name: 'Vue.js', src: require('@/assets/images/known tech/vue_icon.png'), rating : 5 },
          { name: 'Vuetify', src: require('@/assets/images/known tech/vuetify_icon.png'), rating : 5 },
          { name: 'Tailwind CSS', src: require('@/assets/images/known tech/tailwind_icon.png'), rating : 4 },
          { name: 'PrimeVue', src: require('@/assets/images/known tech/primevue_icon.png'), rating : 3 },
          { name: 'Blazor', src: require('@/assets/images/known tech/blazor_icon.png'), rating : 3 }
        ],
        dataManagement: [
          { name: 'Firebase', src: require('@/assets/images/known tech/firebase_icon.png'), rating : 5 },
          { name: 'MongoDB', src: require('@/assets/images/known tech/mongodb_icon.png'), rating : 3 }
        ],
        deployment: [
          { name: 'Heroku', src: require('@/assets/images/known tech/heroku_icon.png'), rating : 4 },
          { name: 'Firebase hosting', src: require('@/assets/images/known tech/firebase_icon.png'), rating : 4 },
        ],
        sectionInView: false,
    };
  },
  mounted() {
        const options = {
        root: null,
        threshold: 0.2,
        };

        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            this.sectionInView = true;
            observer.unobserve(entry.target);
            }
        });
        }, options);

        observer.observe(this.$el);
    },
 };
</script>

<template>
  <v-container :class="['tech-container', { 'in-view': sectionInView }]" py-10>
    <v-row class="tech-grid">
      <v-col cols="12" md="6" lg="4">
        <!-- Languages Section -->
        <v-card class="tech-card languages" :style="sectionInView ? 'animation-delay: 0.5s' : ''">
          <v-card-title class="card-title">Languages</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div v-for="tech in languages" :key="tech.name" class="tech-row">
              <span class="tech-name">{{ tech.name }}</span>
              <v-img :src="tech.src" :alt="tech.name" class="tech-icon"></v-img>
              <div class="tech-rating">
                <v-icon
                  v-for="i in 5"
                  :key="i"
                  :class="{ 'star-filled': i <= tech.rating, 'star-empty': i > tech.rating }"
                  class="star-icon"
                >mdi-star</v-icon>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="4">
        <!-- Frameworks Section -->
        <v-card class="tech-card frameworks" :style="sectionInView ? 'animation-delay: 1s' : ''">
          <v-card-title class="card-title">Frameworks</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div v-for="tech in frameworks" :key="tech.name" class="tech-row">
              <span class="tech-name">{{ tech.name }}</span>
              <v-img :src="tech.src" :alt="tech.name" class="tech-icon"></v-img>
              <div class="tech-rating">
                <v-icon
                  v-for="i in 5"
                  :key="i"
                  :class="{ 'star-filled': i <= tech.rating, 'star-empty': i > tech.rating }"
                  class="star-icon"
                >mdi-star</v-icon>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="4">
        <!-- Data Management Section -->
        <v-card class="tech-card data-management" :style="sectionInView ? 'animation-delay: 1.5s' : ''">
          <v-card-title class="card-title">Data Management</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div v-for="tech in dataManagement" :key="tech.name" class="tech-row">
              <span class="tech-name">{{ tech.name }}</span>
              <v-img :src="tech.src" :alt="tech.name" class="tech-icon"></v-img>
              <div class="tech-rating">
                <v-icon
                  v-for="i in 5"
                  :key="i"
                  :class="{ 'star-filled': i <= tech.rating, 'star-empty': i > tech.rating }"
                  class="star-icon"
                >mdi-star</v-icon>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="4">
        <!-- Deployment & Hosting Section -->
        <v-card class="tech-card deployment" :style="sectionInView ? 'animation-delay: 2s' : ''">
          <v-card-title class="card-title">Deployment & Hosting</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div v-for="tech in deployment" :key="tech.name" class="tech-row">
              <span class="tech-name">{{ tech.name }}</span>
              <v-img :src="tech.src" :alt="tech.name" class="tech-icon"></v-img>
              <div class="tech-rating">
                <v-icon
                  v-for="i in 5"
                  :key="i"
                  :class="{ 'star-filled': i <= tech.rating, 'star-empty': i > tech.rating }"
                  class="star-icon"
                >mdi-star</v-icon>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<style scoped>
.tech-container {
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: background-color 0.3s ease;
}

.tech-card {
  padding: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  opacity: 0;
  visibility: hidden;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.tech-container.in-view .tech-card {
  animation: dropIn 0.6s ease-out forwards;
}

@keyframes dropIn {
  from {
    transform: translateY(-30px);
    opacity: 0;
    visibility: hidden;
  }
  to {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
}

.tech-card.languages {
  animation-delay: 0.2s;
}

.tech-card.frameworks {
  animation-delay: 0.6s;
}

.tech-card.data-management {
  animation-delay: 1s;
}

.tech-card.deployment {
  animation-delay: 1.4s;
}

.card-title {
  font-weight: bold;
  font-size: 22px;
  text-align: center;
  margin-bottom: 12px;
  color: #333;
}

.tech-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 15px;
  width: 100%;
}

.tech-name {
  font-size: clamp(10px, 3.5vw, 18px); 
  font-weight: bold;
  color: #333;
  flex: 1;
  order: 1;
  text-align: left;
  margin-right: 10px; 
}

.tech-icon {
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: flex-start;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  order: 2; 
}

.tech-rating {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  order: 3;
}


.star-icon {
  font-size: 24px;
  margin-left: 5px;
}

.star-filled {
  color: #FFD700; 
}

.star-empty {
  color: #ccc; 
}

.dark .tech-name {
  color: #d3d3d3;
}


.dark .tech-container {
  border-radius: 12px;
  padding: 20px;
}

.dark .tech-card {
  padding: 20px;
  background-color: #2a2d34;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.dark .tech-card.languages {
  background-color: #3b2a35; 
}

.dark .tech-card.frameworks {
  background-color: #2a3b2a; 
}

.dark .tech-card.data-management {
  background-color: #2a3b4b; 
}

.dark .tech-card.deployment {
  background-color: #3b2a3a; 
}

.dark .card-title {
  color: #d3d3d3;
}

.dark .tech-icon {
  filter: brightness(1);
  transition: filter 0.3s ease, box-shadow 0.3s ease;
}

.dark .tech-icon:hover {
  filter: brightness(1.2); 
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.3); 
}

  
@media (max-width: 768px) {
    .tech-container {
      padding: 10px;
    }
  
    .tech-card {
      padding: 15px;
    }
  
    .card-title {
      font-size: 18px;
    }
  
    .tech-icon {
      width: 40px;
      height: 40px;
      margin: 8px;
    }
}

@media (max-width: 550px) {
  .tech-icon {
    width: 30px;
    height: 30px;
  }

  .star-icon {
    font-size: 18px;
    margin-left: 3px;
  }

  .tech-row {
    margin-bottom: 10px; 
  }
}

@media (max-width: 450px) {
  .tech-icon {
    width: 25px;
    height: 25px;
  }

  .star-icon {
    font-size: 16px;
    margin-left: 2px;
  }
}

@media (max-width: 430px) {
  .star-icon {
    font-size: 14px;
    margin-left: 2px;
  }

  .tech-name {
    font-size: clamp(8px, 3vw, 16px); 
  }
}

@media (max-width: 350px) {
  .tech-icon {
    width: 20px;
    height: 20px;
  }

  .star-icon {
    font-size: 12px;
    margin-left: 1px;
  }
}
  </style>
  