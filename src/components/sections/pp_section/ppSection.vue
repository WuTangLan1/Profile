<!-- src\components\sections\pp_section\ppSection.vue -->
<script>
import { VContainer, VRow, VCol, VCard, VCardTitle, VCardText, VIcon } from 'vuetify/lib/components';

export default {
  components: {
    VContainer,
    VRow,
    VCol,
    VCard,
    VCardTitle,
    VCardText,
    VIcon
  },
  data() {
    return {
      currentPage: 1,
      projectsPerPage: 2,
      bounceIndex1: null,
      bounceIndex2: null,
      projects: [
        {
          title: "CoPlaylist",
          subtitle: "Music/Playlist Generation",
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
          description: "Mapple is a geography game providing users with sets of information about countries which the user has to guess.",
          details: [
            { icon: "", text: "The user can set streaks and challenge themselves to recognise more countries across the world." }
          ],
          techStack: [
          { name: "Vue.js", src: require("@/assets/images/tech stack/vueicon.png") },
            { name: "Firebase", src: require("@/assets/images/tech stack/firebaseicon.png") },
            { name: "Pinia", src: require("@/assets/images/tech stack/piniaicon.png") },
            { name: "Vuetify", src: require("@/assets/images/tech stack/vuetifyicon.png") },
          ]
        },
        {
          title: "Your Project",
          subtitle: "Your Project Description",
          description: "Description of your project goes here.",
          details: [],
          techStack: [
            { name: "Vue.js", src: require("@/assets/images/tech stack/vueicon.png") },
            { name: "PrimeVue", src: require("@/assets/images/tech stack/primevueicon.png") },
            { name: "Tailwind", src: require("@/assets/images/tech stack/tailwindicon.png") },
          ]
        }
      ]
    };
  },
  mounted() {
    this.startRandomBounce();
  },
  computed: {
      totalPages() {
        return Math.ceil(this.projects.length / this.projectsPerPage);
      },
      paginatedProjects() {
        const start = (this.currentPage - 1) * this.projectsPerPage;
        const end = start + this.projectsPerPage;
        return this.projects.slice(start, end);
      }
    },
  methods: {
    startRandomBounce() {
      setInterval(() => {
        this.bounceIndex1 = null;
        this.bounceIndex2 = null;
        
        setTimeout(() => {
          this.bounceIndex1 = Math.floor(Math.random() * 4);
          do {
            this.bounceIndex2 = Math.floor(Math.random() * 4);
          } while (this.bounceIndex1 === this.bounceIndex2);
        }, 500);
      }, 4000); 
    },
    nextPage() {
    this.currentPage++;
    },
    prevPage() {
      this.currentPage--;
    },
  }
}
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card v-for="(project, index) in paginatedProjects" :key="index" class="mb-5" elevation="2">
          <v-card-title class="text-h4 blue-grey darken-3 white--text">{{ project.title }}</v-card-title>
          <v-card-text>
            <p class="subtitle-1 mb-3">{{ project.subtitle }}</p>
            <p>{{ project.description }}</p>
            <div class="details" v-for="detail in project.details" :key="detail.key">
              <v-icon left>{{ detail.icon }}</v-icon>
              <span>{{ detail.text }}</span>
            </div>
            <div class="tech-stack">
              <img v-for="tech in project.techStack" :key="tech.name" :src="tech.src" :alt="tech.name" class="tech-icon">
            </div>
          </v-card-text>
        </v-card>
        <v-btn @click="prevPage" :disabled="currentPage <= 1">Previous</v-btn>
        <v-btn @click="nextPage" :disabled="currentPage >= totalPages">Next</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>


<style scoped>
.v-card {
  margin-bottom: 20px;
  transition: box-shadow .3s;
}

.v-card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.details, .tech-stack {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 5px;
}

.details > .v-icon {
  margin-right: 8px; 
}

.details > span {
  text-align: left; 
  flex: 1; 
}

.tech-stack {
  justify-content: space-around; 
  width: 100%; 
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25px); 
  }
}

.bounce {
  animation: bounce 1s ease;
}

.tech-icon {
  width: 40px;
  height: 40px;
  display: inline-block; 
}

.dark .v-card-title, .dark .v-card-text {
  background-color: #424242;
  color: #ffffff;
}

.dark .v-icon {
  color: #90CAF9;
}

.dark .subtitle-1 {
  color: #CFD8DC;
}

.dark .tech-icon {
  filter: invert(100%) grayscale(0);
}
</style>
