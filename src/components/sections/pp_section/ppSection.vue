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
                <img src="@/assets/images/tech stack/vueicon.png" alt="Vue.js" class="tech-icon">
                <img src="@/assets/images/tech stack/firebaseicon.png" alt="Firebase" class="tech-icon">
                <img src="@/assets/images/tech stack/gpticon.jpg" alt="OpenAI" class="tech-icon">
                <img src="@/assets/images/tech stack/vuetifyicon.png" alt="Vuetify" class="tech-icon">
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
                <img src="@/assets/images/tech stack/vueicon.png" alt="Vue.js" class="tech-icon">
                <img src="@/assets/images/tech stack/firebaseicon.png" alt="Firebase" class="tech-icon">
                <img src="@/assets/images/tech stack/typescripticon.png" alt="TypeScript" class="tech-icon">
                <img src="@/assets/images/tech stack/vuetifyicon.png" alt="Vuetify" class="tech-icon">
                <img src="@/assets/images/tech stack/primevueicon.png" alt="PrimeVue" class="tech-icon">
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
    justify-content: start;
  }
  
  .tech-stack {
    justify-content: center; /* Center the tech stack icons */
  }
  
  .tech-icon {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    filter: grayscale(100%); /* Optional: Adds a nice effect for the icons */
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
  