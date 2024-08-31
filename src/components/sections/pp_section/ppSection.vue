<!-- src\components\sections\pp_section\ppSection.vue -->
<script>

export default {
  data() {
    return {
      projects: [
        {
          title: "CoPlaylist",
          subtitle: "Playlist Generation",
          url: "https://coplaylist-5ec2820dd416.herokuapp.com/",
          description: "CoPlaylist is a playlist generation website designed to deliver deeply personalized playlists tailored to the unique tastes and situational preferences of its users.",
          details: [
            { icon: "mdi-account-music", text: "Generate playlists based on options for tone, style, and similar music using the OpenAI API key." },
            { icon: "mdi-spotify", text: "Spotify Playlist Integration for enhanced musical exploration." }
          ],
          techStack: [
          { name: "Vue.js", src: require("@/assets/images/tech stack/vueicon.png") },
          { name: "Pinia", src: require("@/assets/images/tech stack/piniaicon.png") },
          { name: "Firebase", src: require("@/assets/images/tech stack/firebaseicon.png") },
          { name: "OpenAI", src: require("@/assets/images/tech stack/gpticon.png") },
          { name: "Vuetify", src: require("@/assets/images/tech stack/vuetifyicon.png") },
          ]
        },
        {
          title: "The Big Picture",
          subtitle: "Game site",
          url: "https://fullcircle-4856e527cad2.herokuapp.com/",
          description: "A daily puzzle game that challenges users to find connections between various terms to promote logical thinking and cognitive skills.",
          details: [
            { icon: "mdi-image-area", text: "Daily puzzles with a unique set of terms every day." },
            { icon: "mdi-school", text: "Account registration to track efforts." },
            { icon: "mdi-share-variant", text: "Social Sharing to engage with a community of players." }
          ],
          techStack: [
            { name: "Vue.js", src: require("@/assets/images/tech stack/vueicon.png") },
            { name: "Pinia", src: require("@/assets/images/tech stack/piniaicon.png") },
            { name: "Firebase", src: require("@/assets/images/tech stack/firebaseicon.png") },
            { name: "PrimeVue", src: require("@/assets/images/tech stack/primevueicon.png") },
            { name: "Vuetify", src: require("@/assets/images/tech stack/vuetifyicon.png") },
          ]
        },
        {
          title: "Mapple",
          subtitle: "Game site",
          url: "https://mapple-15f9c29f3ed1.herokuapp.com/",
          description: "Mapple is a geography game providing users with sets of information about countries which the user has to guess.",
          details: [
            { icon: "mdi-tooltip-check", text: "The user can choose between different levels of difficulty depending on their skill" }  ,
            { icon: "mdi-earth", text: "The user can set streaks and challenge themselves to recognise more countries across the world." }
          ],
          techStack: [
          { name: "Vue.js", src: require("@/assets/images/tech stack/vueicon.png") },
            { name: "Firebase", src: require("@/assets/images/tech stack/firebaseicon.png") },
            { name: "Pinia", src: require("@/assets/images/tech stack/piniaicon.png") },
            { name: "Vuetify", src: require("@/assets/images/tech stack/vuetifyicon.png") },
          ]
        },
        {
          title: "This website",
          subtitle: "Profile site",
          description: "I created a profile website for myself to show a level of capability i am currently at in terms of short term projects",
          details: [
          { icon: "mdi-web", text: "The website leverages my prefered technology stack for developing and styling small-to-medium sized projects" },
          { icon: "mdi-directions", text: "Serves as a directory to different passion projects I have developed this year" }
          ],
          techStack: [
            { name: "Vue.js", src: require("@/assets/images/tech stack/vueicon.png") },
            { name: "PrimeVue", src: require("@/assets/images/tech stack/primevueicon.png") },
            { name: "Tailwind", src: require("@/assets/images/tech stack/tailwindicon.png") },
          ]
        }
      ]
    };
  },
  methods: {
    getRandomColor() {
      const colors = [
        'rgba(255, 193, 7, 0.2)',   
        'rgba(76, 175, 80, 0.2)',   
        'rgba(33, 150, 243, 0.2)', 
        'rgba(156, 39, 176, 0.2)',  
        'rgba(255, 87, 34, 0.2)',  
        'rgba(96, 125, 139, 0.2)'   
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    },
    goToProject(url) {
      window.open(url, '_blank');
    },
    getImageUrl(projectTitle) {
      const imageMap = {
        CoPlaylist: require('@/assets/images/projects/coplaylist_logo.png'),
        'The Big Picture': require('@/assets/images/projects/fullcircle_logo.png'),
        Mapple: require('@/assets/images/projects/mapple_logo.png'),
        'This website': require('@/assets/images/projects/profileweb_logo.png'),
      };
      return imageMap[projectTitle] || '';
    }
  }
}
</script>

<template>
<v-container fluid class="pt-8">
  <v-row dense>
    <v-col
      v-for="(project, index) in projects"
      :key="index"
      cols="12"
      sm="6"
      md="4"
      lg="3"
      class="d-flex"
    >
      <v-card :style="{ backgroundColor: getRandomColor() }" class="pa-4 mb-4 elevation-3 project-card">
          <div class="card-content">
            <div class="header-section d-flex">
                <v-img
                  :src="getImageUrl(project.title)"
                  alt="Project Logo"
                  class="project-image-header"
                  aspect-ratio="1"
                  contain
                ></v-img>
                <div class="header-text">
                  <v-card-title class="headline font-weight-bold">{{ project.title }}</v-card-title>
                  <v-card-subtitle class="text-muted">{{ project.subtitle }}</v-card-subtitle>
                </div>
              </div>
            <v-card-text class="project-description mt-3">
              <p class="description-text">{{ project.description }}</p>
              <ul class="details-list">
                <li
                  v-for="(detail, detailIndex) in project.details"
                  :key="detailIndex"
                  class="d-flex align-center detail-item"
                >
                  <v-icon left size="20" class="detail-icon">{{ detail.icon }}</v-icon>
                  <span class="detail-text">{{ detail.text }}</span>
                </li>
              </ul>
            </v-card-text>

            <v-card-actions v-if="project.title !== 'This website'">
              <v-btn color="primary" class="visit-btn" @click="goToProject(project.url)">Visit Project</v-btn>
            </v-card-actions>
            <v-card-actions v-else style="visibility: hidden; height: 48px;"></v-card-actions>

            <v-card-text class="tech-stack mt-4">
              <div class="d-flex justify-space-between tech-icons-container">
                <v-avatar
                  v-for="(tech, techIndex) in project.techStack"
                  :key="techIndex"
                  size="36"
                  :title="tech.name"
                  class="ma-1 tech-icon"
                >
                  <img :src="tech.src" :alt="tech.name" class="tech-icon-img" />
                </v-avatar>
              </div>
            </v-card-text>
          </div>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<style scoped>
.project-card {
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: rgba(255, 255, 255, 0.85); 
}

.project-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
}
.card-content {
  animation: smoothFadeSlideIn 0.8s ease-out both; 
}

.header-section {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 8px; 
  border: 1px solid #dcdcdc;
  border-radius: 12px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.project-image-header {
  flex: 1;
  width: 110px; 
  height: 110px;
}

.header-text {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 8px; 
}

.v-card-title {
  font-size: 1.4rem; 
  font-weight: 700;
  color: #2b2b2b; 
  margin: 0 0 4px 0; 
}

.v-card-subtitle {
  font-size: 1.1rem;
  color: #5f5f5f; 
  font-style: italic; 
}

.project-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #333; 
}

.description-text {
  margin-bottom: 12px; 
}

.details-list {
  padding-left: 0;
  list-style-type: none;
  margin: 0;
}

.detail-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.detail-icon {
  margin-right: 10px;
  color: #6c757d; 
}

.detail-text {
  font-size: 0.95rem;
  text-align: left;
  color: #444;
}

.v-card-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50; 
}

.v-card-subtitle {
  font-size: 1.1rem;
  color: #7f8c8d;
}

.tech-icon-img {
  width: 40px; 
  height: 40px;
  object-fit: contain; 
  border-radius: 50%; 
  padding: 5px;
  transition: transform 0.3s ease;
}

.tech-icon-img:hover {
  transform: scale(1.1);
}

.visit-btn {
  text-transform: none;
  font-weight: bold;
  color: #1e88e5; 
  background-color: transparent;
  box-shadow: none;
}

.visit-btn:hover {
  background-color: rgba(30, 136, 229, 0.1);
}

</style>

