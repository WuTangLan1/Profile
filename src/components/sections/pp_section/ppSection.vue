<!-- src\components\sections\pp_section\ppSection.vue -->
<script>

export default {
  data() {
    return {
      projects: [
        {
          title: "CoPlaylist",
          subtitle: "Music/Playlist Generation",
          url: "https://coplaylist-5ec2820dd416.herokuapp.com/",
          description: "CoPlaylist is a playlist generation website designed to deliver deeply personalized playlists tailored to the unique tastes and situational preferences of its users.",
          details: [
            { icon: "mdi-account-music", text: "Generate playlists based on options for tone, style, and similar music using the OpenAI API key." },
            { icon: "mdi-spotify", text: "Spotify Playlist Integration for enhanced musical exploration." }
          ],
          techStack: [
          { name: "Vue.js", src: require("@/assets/images/tech stack/vueicon.png") },
          { name: "Firebase", src: require("@/assets/images/tech stack/firebaseicon.png") },
          { name: "OpenAI", src: require("@/assets/images/tech stack/gpticon.png") },
          { name: "Vuetify", src: require("@/assets/images/tech stack/vuetifyicon.png") },
          ]
        },
        {
          title: "The Big Picture",
          subtitle: "Daily Puzzle Game",
          url: "https://fullcircle-4856e527cad2.herokuapp.com/",
          description: "A daily puzzle game that challenges users to find connections between various terms to promote logical thinking and cognitive skills.",
          details: [
            { icon: "mdi-image-area", text: "Daily puzzles with a unique set of terms every day." },
            { icon: "mdi-school", text: "Account registration to track efforts." },
            { icon: "mdi-share-variant", text: "Social Sharing to engage with a community of players." }
          ],
          techStack: [
            { name: "Vue.js", src: require("@/assets/images/tech stack/vueicon.png") },
            { name: "Firebase", src: require("@/assets/images/tech stack/firebaseicon.png") },
            { name: "PrimeVue", src: require("@/assets/images/tech stack/primevueicon.png") },
            { name: "Vuetify", src: require("@/assets/images/tech stack/vuetifyicon.png") },
          ]
        },
        {
          title: "Mapple",
          subtitle: "Geography Game",
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
          subtitle: "Profile Website",
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
    handleTechIconClick(src) {
      console.log('Tech icon clicked:', src);
    }
  }
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(project, index) in projects"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="d-flex align-stretch"
      >
        <v-card :color="getRandomColor()" dark elevation="2" class="ma-2" @click="goToProject(project.url)">
          <v-card-title class="d-flex justify-space-between align-center">
            <span>{{ project.title }}</span>
            <span class="subtitle">{{ project.subtitle }}</span>
          </v-card-title>
          <v-card-text>
            {{ project.description }}
            <v-list dense>
              <v-list-item v-for="detail in project.details" :key="detail.text" class="detail-item">
                <v-icon left>{{ detail.icon }}</v-icon>
                <span class="detail-text">{{ detail.text }}</span>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions class="justify-space-between">
            <div>
              <v-btn 
                v-for="tech in project.techStack" 
                :key="tech.name" 
                icon 
                @click.stop="handleTechIconClick(tech.src)"
              >
                <v-img :src="tech.src" :alt="tech.name" class="tech-icon"></v-img>
              </v-btn>
            </div>
            <a :href="project.url" target="_blank" class="white--text">Visit</a>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-container {
  overflow-y: auto;
}

.v-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}

.v-card-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.subtitle {
  font-size: 0.9rem; /* Smaller font size for subtitle */
  color: rgba(34, 33, 33, 0.7); /* Lighter text color for contrast */
}

.detail-item {
  margin-top: 5px;
  padding: 5px;
  background-color: transparent;
}

.detail-text {
  margin-left: 10px; 
  font-size: 0.9rem; 
  text-align: left;
}

.tech-icon {
  width: 40px;
  height: 40px;
}
</style>
