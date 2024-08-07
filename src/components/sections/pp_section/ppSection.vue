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
      bounceIndex1: null, // Index for the first tech stack
      bounceIndex2: null, // Index for the second tech stack
    };
  },
  mounted() {
    this.startRandomBounce();
  },
  methods: {
    startRandomBounce() {
      setInterval(() => {
        // Reset bounce effect
        this.bounceIndex1 = null;
        this.bounceIndex2 = null;
        
        setTimeout(() => {
          this.bounceIndex1 = Math.floor(Math.random() * 4);
          do {
            this.bounceIndex2 = Math.floor(Math.random() * 4);
          } while (this.bounceIndex1 === this.bounceIndex2);
        }, 500);
      }, 4000); 
    }
  }
}
</script>


<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <v-card class="mb-5" elevation="2">
            <v-card-title class="text-h4 blue-grey darken-3 white--text">CoPlaylist</v-card-title>
            <v-card-text>
              <p class="subtitle-1 mb-3">Revolutionizing the Music Discovery Experience</p>
              <p>CoPlaylist is a groundbreaking music streaming platform designed to deliver deeply personalized playlists tailored to the unique tastes and situational preferences of its users.</p>
              <div class="details">
                <v-icon left>mdi-account-music</v-icon>
                <span>User Profiles, Dynamic Playlist Creation, Vibes and Tone selection.</span>
              </div>
              <div class="details">
                <v-icon left>mdi-star-circle</v-icon>
                <span>Interactive Rating System and Social Integration.</span>
              </div>
              <div class="details">
                <v-icon left>mdi-spotify</v-icon>
                <span>Spotify Playlist Integration for enhanced musical exploration.</span>
              </div>
              <div class="tech-stack">
                <img :class="{ bounce: bounceIndex1 === 0 }" src="@/assets/images/tech stack/vueicon.png" alt="Vue.js" class="tech-icon">
                <img :class="{ bounce: bounceIndex1 === 1 }" src="@/assets/images/tech stack/firebaseicon.png" alt="Firebase" class="tech-icon">
                <img :class="{ bounce: bounceIndex1 === 2 }" src="@/assets/images/tech stack/gpticon.png" alt="OpenAI" class="tech-icon">
                <img :class="{ bounce: bounceIndex1 === 3 }" src="@/assets/images/tech stack/vuetifyicon.png" alt="Vuetify" class="tech-icon">
              </div>
            </v-card-text>
          </v-card>
  
          <v-card elevation="2">
            <v-card-title class="text-h4 blue-grey darken-3 white--text">The Big Picture</v-card-title>
            <v-card-text>
              <p class="subtitle-1 mb-3">Engaging Daily Puzzle Game</p>
              <p>A daily puzzle game that challenges users to find connections between various images to promote logical thinking and cognitive skills.</p>
              <div class="details">
                <v-icon left>mdi-image-area</v-icon>
                <span>Daily puzzles with a unique set of images every day.</span>
              </div>
              <div class="details">
                <v-icon left>mdi-school</v-icon>
                <span>Educational insights after puzzle completion.</span>
              </div>
              <div class="details">
                <v-icon left>mdi-share-variant</v-icon>
                <span>Social Sharing to engage with a community of players.</span>
              </div>
              <div class="tech-stack">
              <img :class="{ bounce: bounceIndex1 ===3 }" src="@/assets/images/tech stack/vuetifyicon.png" alt="Vuetify" class="tech-icon">
              <img :class="{ bounce: bounceIndex1 === 0 }" src="@/assets/images/tech stack/vueicon.png" alt="Vue.js" class="tech-icon">
              <img :class="{ bounce: bounceIndex1 === 2 }" src="@/assets/images/tech stack/primevueicon.png" alt="PrimeVue" class="tech-icon">
              <img :class="{ bounce: bounceIndex1 ===1 }" src="@/assets/images/tech stack/firebaseicon.png" alt="Firebase" class="tech-icon">
            </div>
            </v-card-text>
          </v-card>
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
  }
  
  .tech-stack {
    justify-content: space-around; /* This will distribute space around each icon */
    width: 100%; /* Ensure the tech-stack div takes full width */
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
    display: inline-block; /* Keep inline-block but remove margin-right */
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
  