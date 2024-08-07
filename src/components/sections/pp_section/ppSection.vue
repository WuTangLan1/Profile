<!-- src\components\sections\pp_section\ppSection.vue -->
<script>
import { VContainer, VRow, VCol, VCard, VCardTitle, VCardText, VIcon, VBtn } from 'vuetify/lib/components';

export default {
  components: {
    VContainer,
    VRow,
    VCol,
    VCard,
    VCardTitle,
    VCardText,
    VIcon,
    VBtn 
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
          title: "This website",
          subtitle: "Profile Website",
          description: "I created a profile website for myself to show a level of capability i am currently at in terms of short term projects",
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
          <v-card-title>
            <v-row justify="space-between" class="px-3">
              <h3 class="text-h6">{{ project.title }}</h3>
              <h3 class="text-h6 grey--text">{{ project.subtitle }}</h3>
            </v-row>
          </v-card-title>
          <v-card-text>
            <p class="subtitle-1 mb-3">{{ project.description }}</p>
            <div class="details" v-for="detail in project.details" :key="detail.key">
              <v-icon left>{{ detail.icon }}</v-icon>
              <span>{{ detail.text }}</span>
            </div>
            <div class="tech-stack">
              <img v-for="tech in project.techStack" :key="tech.name" :src="tech.src" :alt="tech.name" class="tech-icon">
            </div>
          </v-card-text>
        </v-card>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-btn @click="prevPage" :disabled="currentPage <= 1">Previous</v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn @click="nextPage" :disabled="currentPage >= totalPages">Next</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-card {
  margin-bottom: 20px;
  transition: box-shadow .3s;
  overflow: hidden;
  padding-top: 10px;
  border: none;
  background-color: transparent;
}

.dark .v-btn {
  color: black;
}

.v-card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
}

.details, .tech-stack {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
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
  margin-bottom: 20px; 
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.bounce {
  animation: bounce 1s ease;
}

.tech-icon {
  width: 40px;
  height: 40px;
}

.dark .v-card, .dark .v-card-title, .dark .v-card-text {
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

.text-h6 {
  font-size: 20px; 
}

.grey--text {
  font-size: 14px; 
}

.v-card-title {
  margin-bottom: 20px; 
}

.v-btn {
  transition: color 0.3s, background-color 0.3s;
}

.v-btn:not(.v-btn--disabled):hover,
.v-btn:not(.v-btn--disabled):focus {
  color: #FFFFFF; 
  background-color: #1976D2; 
}

.dark .v-btn:not(.v-btn--disabled):hover,
.v-btn:not(.v-btn--disabled):focus {
  color: #FFFFFF; 
  background-color: #1976D2; 
}


.v-btn--disabled {
  color: #B0BEC5; 
}

.dark .v-btn--disabled {
  color: #B0BEC5; 
}

@media (max-height: 780px) {
  .v-card {
    padding-top: 5px;
    margin-bottom: 10px; 
  }

  .tech-stack, .details {
    margin-bottom: 5px; 
  }

  .text-h6 {
    font-size: 18px; 
  }

  .grey--text {
    font-size: 12px; 
  }

  .subtitle-1 {
    margin-bottom: 5px; 
  }

  .tech-icon {
    width: 30px; 
    height: 30px;
  }
}
</style>


