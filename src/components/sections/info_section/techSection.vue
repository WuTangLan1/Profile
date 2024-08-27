<!-- src\components\sections\info_section\techSection.vue -->
  
<script>
  export default {
    data() {
      return {
        languages: [
          { name: 'JavaScript', src: require('@/assets/images/known tech/javascript_icon.png'), rating : 5 },
          { name: 'TypeScript', src: require('@/assets/images/known tech/typescript_icon.png'), rating : 4 },
          { name: 'C Sharp', src: require('@/assets/images/known tech/csharp_icon.png'), rating : 4 },
          { name: 'Python', src: require('@/assets/images/known tech/python_icon.png'), rating : 3 }
        ],
        frameworks: [
          { name: 'Vue.js', src: require('@/assets/images/known tech/vue_icon.png'), rating : 5 },
          { name: 'Vuetify', src: require('@/assets/images/known tech/vuetify_icon.png'), rating : 5 },
          { name: 'Tailwind CSS', src: require('@/assets/images/known tech/tailwind_icon.png'), rating : 4 },
          { name: 'PrimeVue', src: require('@/assets/images/known tech/primevue_icon.png'), rating : 3 },
          { name: 'Blazor', src: require('@/assets/images/known tech/blazor_icon.png'), rating : 3 }
        ],
        backend: [
          { name: 'Express.js', src: require('@/assets/images/known tech/expressjs_icon.png'), rating : 5 },
          { name: 'ASP.NET', src: require('@/assets/images/known tech/aspnet_icon.png'), rating : 4 },
        ],
        dataManagement: [
          { name: 'Firebase', src: require('@/assets/images/known tech/firebase_icon.png'), rating : 5 },
          { name: 'MySQL', src: require('@/assets/images/known tech/mysql_icon.png'), rating : 3 },
          { name: 'MongoDB', src: require('@/assets/images/known tech/mongodb_icon.png'), rating : 3 }
        ],
        deployment: [
          { name: 'Heroku', src: require('@/assets/images/known tech/heroku_icon.png'), rating : 4 },
          { name: 'Firebase hosting', src: require('@/assets/images/known tech/firebase_icon.png'), rating : 4 },
        ],
        management: [
          { name: 'Github', src: require('@/assets/images/known tech/github_icon.png'), rating : 5 },
          { name: 'DevOpps', src: require('@/assets/images/known tech/devopps_icon.png'), rating : 4 },
          { name: 'Discord', src: require('@/assets/images/known tech/discord_icon.png'), rating : 4 },
        ],
        sectionInView: false,
    };
  },
  computed: {
      starAnimationDelay() {
        return (cardDelay, index) => {
          return this.sectionInView ? `${2 + cardDelay + 0.3 * index}s` : '0s';
        };
      }
    },
  mounted() {
        const options = {
        root: null,
        threshold: 0.3,
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
        <v-card class="tech-card languages" :style="sectionInView ? 'animation-delay: 0.5s' : ''">
          <v-card-title class="card-title">Languages</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div v-for="tech in languages" :key="tech.name" class="tech-row">
              <span class="tech-name">{{ tech.name }}</span>
              <v-img :src="tech.src" :alt="tech.name" class="tech-icon"></v-img>
              <div class="tech-rating">
                <v-icon
                  v-for="(i, index) in 5"
                  :key="index"
                  :class="[
                    'star-icon', 
                    { 
                      'star-visible': sectionInView && i <= tech.rating,
                      'star-filled': sectionInView && i <= tech.rating,
                      'star-empty': sectionInView && i > tech.rating
                    }
                  ]"
                  :style="{ 'animation-delay': starAnimationDelay(0.2, index) }"
                >mdi-star</v-icon>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="4">
        <v-card class="tech-card frameworks" :style="sectionInView ? 'animation-delay: 1s' : ''">
          <v-card-title class="card-title">Frontend Frameworks</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div v-for="tech in frameworks" :key="tech.name" class="tech-row">
              <span class="tech-name">{{ tech.name }}</span>
              <v-img :src="tech.src" :alt="tech.name" class="tech-icon"></v-img>
              <div class="tech-rating">
                <v-icon
                  v-for="(i, index) in 5"
                  :key="index"
                  :class="[
                    'star-icon', 
                    { 
                      'star-visible': sectionInView && i <= tech.rating,
                      'star-filled': sectionInView && i <= tech.rating,
                      'star-empty': sectionInView && i > tech.rating
                    }
                  ]"
                  :style="{ 'animation-delay': starAnimationDelay(0.6, index) }"
                >mdi-star</v-icon>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="4">
        <v-card class="tech-card backend" :style="sectionInView ? 'animation-delay: 1.5s' : ''">
          <v-card-title class="card-title">Backend Frameworks</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div v-for="tech in backend" :key="tech.name" class="tech-row">
              <span class="tech-name">{{ tech.name }}</span>
              <v-img :src="tech.src" :alt="tech.name" class="tech-icon"></v-img>
              <div class="tech-rating">
                <v-icon
                  v-for="(i, index) in 5"
                  :key="index"
                  :class="[
                    'star-icon', 
                    { 
                      'star-visible': sectionInView && i <= tech.rating,
                      'star-filled': sectionInView && i <= tech.rating,
                      'star-empty': sectionInView && i > tech.rating
                    }
                  ]"
                  :style="{ 'animation-delay': starAnimationDelay(1, index) }"
                >mdi-star</v-icon>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="4">
        <v-card class="tech-card data-management" :style="sectionInView ? 'animation-delay: 2s' : ''">
          <v-card-title class="card-title">Data Management</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div v-for="tech in dataManagement" :key="tech.name" class="tech-row">
              <span class="tech-name">{{ tech.name }}</span>
              <v-img :src="tech.src" :alt="tech.name" class="tech-icon"></v-img>
              <div class="tech-rating">
              <v-icon
                  v-for="(i, index) in 5"
                  :key="index"
                  :class="[
                    'star-icon', 
                    { 
                      'star-visible': sectionInView && i <= tech.rating,
                      'star-filled': sectionInView && i <= tech.rating,
                      'star-empty': sectionInView && i > tech.rating
                    }
                  ]"
                  :style="{ 'animation-delay': starAnimationDelay(1.4, index) }"
                >mdi-star</v-icon>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="4">
        <v-card class="tech-card deployment" :style="sectionInView ? 'animation-delay: 2.5s' : ''">
          <v-card-title class="card-title">Deployment & Hosting</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div v-for="tech in deployment" :key="tech.name" class="tech-row">
              <span class="tech-name">{{ tech.name }}</span>
              <v-img :src="tech.src" :alt="tech.name" class="tech-icon"></v-img>
              <div class="tech-rating">
                <v-icon
                  v-for="(i, index) in 5"
                  :key="index"
                  :class="[
                    'star-icon', 
                    { 
                      'star-visible': sectionInView && i <= tech.rating,
                      'star-filled': sectionInView && i <= tech.rating,
                      'star-empty': sectionInView && i > tech.rating
                    }
                  ]"
                  :style="{ 'animation-delay': starAnimationDelay(1.8, index) }"
                >mdi-star</v-icon>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="4">
        <v-card class="tech-card management" :style="sectionInView ? 'animation-delay: 2.5s' : ''">
          <v-card-title class="card-title">Project Management</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div v-for="tech in management" :key="tech.name" class="tech-row">
              <span class="tech-name">{{ tech.name }}</span>
              <v-img :src="tech.src" :alt="tech.name" class="tech-icon"></v-img>
              <div class="tech-rating">
                <v-icon
                  v-for="(i, index) in 5"
                  :key="index"
                  :class="[
                    'star-icon', 
                    { 
                      'star-visible': sectionInView && i <= tech.rating,
                      'star-filled': sectionInView && i <= tech.rating,
                      'star-empty': sectionInView && i > tech.rating
                    }
                  ]"
                  :style="{ 'animation-delay': starAnimationDelay(1.8, index) }"
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

.tech-card.management {
  animation-delay: 1.8s;
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

.tech-rating .star-icon {
  opacity: 0;
  transform: scale(0.8);
  animation: flashIn 0.6s forwards ease-in-out;
  color: black; 
}

@keyframes flashIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.tech-rating .star-icon.star-filled {
  color: #FFD700; 
}

.tech-rating .star-icon.star-empty {
  color: black; 
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

.dark .tech-card.management {
  background-color: #2a3b36; 
}

.dark .card-title {
  color: #d3d3d3;
}

.dark .tech-icon {
  filter: brightness(1);
  transition: filter 0.3s ease, box-shadow 0.3s ease;
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
  