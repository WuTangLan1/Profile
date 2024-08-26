<!-- src\components\sections\info_section\techSection.vue -->
  
<script>
  export default {
    data() {
      return {
        languages: [
          { name: 'JavaScript', src: require('@/assets/images/known tech/javascript_icon.png') },
          { name: 'TypeScript', src: require('@/assets/images/known tech/typescript_icon.png') },
          { name: 'Python', src: require('@/assets/images/known tech/python_icon.png') }
        ],
        frameworks: [
          { name: 'Vue.js', src: require('@/assets/images/known tech/vue_icon.png') },
          { name: 'Vuetify', src: require('@/assets/images/known tech/vuetify_icon.png') },
          { name: 'Tailwind CSS', src: require('@/assets/images/known tech/tailwind_icon.png') },
          { name: 'PrimeVue', src: require('@/assets/images/known tech/primevue_icon.png') },
          { name: 'Blazor', src: require('@/assets/images/known tech/blazor_icon.png') }
        ],
        dataManagement: [
          { name: 'Firebase', src: require('@/assets/images/known tech/firebase_icon.png') },
          { name: 'MongoDB', src: require('@/assets/images/known tech/mongodb_icon.png') }
        ],
        deployment: [
          { name: 'Heroku', src: require('@/assets/images/known tech/heroku_icon.png') },
          { name: 'Firebase hosting', src: require('@/assets/images/known tech/firebase_icon.png') },
        ]
      };
    }
  };
</script>

<template>
    <v-container class="tech-container py-10">
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="tech-card languages">
            <v-card-title class="card-title">
              Languages
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <div class="tech-grid">
                <v-img v-for="tech in languages" :key="tech.name" :src="tech.src" :alt="tech.name" class="tech-icon"></v-img>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
  
        <v-col cols="12" md="6">
          <v-card class="tech-card frameworks">
            <v-card-title class="card-title">
              Frameworks
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <div class="tech-grid">
                <v-img v-for="tech in frameworks" :key="tech.name" :src="tech.src" :alt="tech.name" class="tech-icon"></v-img>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  
      <v-row class="mt-5">
        <v-col cols="12" md="6">
          <v-card class="tech-card data-management">
            <v-card-title class="card-title">
              Data Management
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <div class="tech-grid">
                <v-img v-for="tech in dataManagement" :key="tech.name" :src="tech.src" :alt="tech.name" class="tech-icon"></v-img>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
  
        <v-col cols="12" md="6">
          <v-card class="tech-card deployment">
            <v-card-title class="card-title">
              Deployment & Hosting
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <div class="tech-grid">
                <v-img v-for="tech in deployment" :key="tech.name" :src="tech.src" :alt="tech.name" class="tech-icon"></v-img>
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
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

@keyframes dropIn {
  from {
    transform: translateY(-30px);
    opacity: 0;
    visibility: hidden; /* Hide initially */
  }
  to {
    transform: translateY(0);
    opacity: 1;
    visibility: visible; /* Show when animation starts */
  }
}

.tech-card.languages {
  animation: dropIn 0.6s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;
  visibility: hidden; 
  will-change: transform, opacity;
}

.tech-card.frameworks {
  animation: dropIn 0.6s ease-out forwards;
  animation-delay: 0.6s;
  opacity: 0;
  visibility: hidden;
  will-change: transform, opacity;
}

.tech-card.data-management {
  animation: dropIn 0.6s ease-out forwards;
  animation-delay: 1s;
  opacity: 0;
  visibility: hidden;
  will-change: transform, opacity;
}

.tech-card.deployment {
  animation: dropIn 0.6s ease-out forwards;
  animation-delay: 1.4s;
  opacity: 0;
  visibility: hidden;
  will-change: transform, opacity;
}


.card-title {
  font-weight: bold;
  font-size: 22px;
  text-align: center;
  margin-bottom: 12px;
  color: #333;
}

.tech-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 10px;
}

.tech-icon {
  width: 50px;
  height: 50px;
  margin: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tech-icon:hover {
  transform: scale(1.15);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
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
  </style>
  