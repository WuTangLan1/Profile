<!-- src\components\sections\pp_section\ppSection.vue -->

<script>
import vueIcon from "@/assets/images/known tech/vue_icon.png";
import viteIcon from "@/assets/images/known tech/vite_icon.png"
import piniaIcon from "@/assets/images/known tech/pinia_icon.png";
import firebaseIcon from "@/assets/images/known tech/firebase_icon.png";
import gptIcon from "@/assets/images/known tech/gpt_icon.png";
import vuetifyIcon from "@/assets/images/known tech/vuetify_icon.png";
import herokuIcon from "@/assets/images/known tech/heroku_icon.png";
import primevueIcon from "@/assets/images/known tech/primevue_icon.png";
import tailwindIcon from "@/assets/images/known tech/tailwind_icon.png";
import typescriptIcon from "@/assets/images/known tech/typescript_icon.png";
import vercelIcon from "@/assets/images/known tech/vercel_icon.png"

import coplaylist_preview from "@/assets/videos/coplaylist_preview.mp4"
import mapple_preview from "@/assets/videos/mapple_preview.mp4"
import bigpicture_preview from "@/assets/videos/bigpicture_preview.mp4"


export default {
  data() {
    return {
      sectionInView: false,
      videoRefs: [],
      projects: [
        {
          title: "CoPlaylist",
          isCurrent: false,
          subtitle: "Playlist Generation",
          isPlaying: false,
          loading: true, 
          description:
            "CoPlaylist is a playlist generation website designed to deliver deeply personalized playlists tailored to the unique tastes and situational preferences of its users.",
          details: [
            {
              icon: "mdi-account-music",
              text: "Generate playlists based on options for tone, style, and similar music using the OpenAI API key.",
            },
            {
              icon: "mdi-music-note",
              text: "Fetch and play snippets of songs using Spotify's preview song",
            },
            {
              icon: "mdi-spotify",
              text: "Spotify Playlist Integration for enhanced musical exploration.",
            },
          ],
          link: "https://coplaylist-5ec2820dd416.herokuapp.com/",
          techStack: [
            { title: "Vue.js", img: vueIcon },
            { title: "Pinia", img: piniaIcon },
            { title: "Firebase", img: firebaseIcon },
            { title: "OpenAI", img: gptIcon },
            { title: "Vuetify", img: vuetifyIcon },
            { title: "Heroku", img: herokuIcon },
          ],
          video: coplaylist_preview,
          imageUrl: require("@/assets/images/projects/coplaylist_logo.png"),
        },
        {
          title: "The Big Picture",
          subtitle: "Game site",
          isCurrent: false,
          video: bigpicture_preview,
          loading: true, 
          description:
            "A daily puzzle game that challenges users to find connections between various terms to promote logical thinking and cognitive skills.",
          details: [
            {
              icon: "mdi-image-area",
              text: "Daily puzzles with a unique set of terms every day.",
            },
            {
              icon: "mdi-school",
              text: "Account registration to track efforts and provide insights.",
            },
            {
              icon: "mdi-share-variant",
              text: "Social Sharing to engage with a community of players.",
            },
          ],
          link: "https://fullcircle-4856e527cad2.herokuapp.com/",
          Githublink: "https://github.com/WuTangLan1/TheBigPicture",
          techStack: [
            { title: "Vue.js", img: vueIcon },
            { title: "Pinia", img: piniaIcon },
            { title: "Firebase", img: firebaseIcon },
            { title: "PrimeVue", img: primevueIcon },
            { title: "Tailwind", img: tailwindIcon },
            { title: "Heroku", img: herokuIcon },
          ],
          imageUrl: require("@/assets/images/projects/fullcircle_logo.png"),
        },
        {
          title: "Mapple",
          subtitle: "Game site",
          isCurrent: false,
          video: mapple_preview,
          isPlaying: false,
          loading: true, 
          description:
            "Mapple is a geography game providing users with sets of information about countries which the user has to guess.",
          details: [
            {
              icon: "mdi-tooltip-check",
              text: "Three difficulty levels to customise the challenge the game provides to users.",
            },
            {
              icon: "mdi-earth",
              text: "Interactive selection map to allow users to select countries across the globe.",
            },
            {
              icon: "mdi-list-status",
              text: "Efforts tracking and management for high scores to allow users to improve.",
            },
          ],
          link: "https://mapple-15f9c29f3ed1.herokuapp.com/",
          Githublink: "https://github.com/WuTangLan1/Mapple",
          techStack: [
            { title: "Vue.js", img: vueIcon },
            { title: "Firebase", img: firebaseIcon },
            { title: "Pinia", img: piniaIcon },
            { title: "Vuetify", img: vuetifyIcon },
            { title: "Heroku", img: herokuIcon },
          ],
          imageUrl: require("@/assets/images/projects/mapple_logo.png"),
        },
        {
          title: "This website",
          subtitle: "Profile site",
          isCurrent: false,
          description:
            "I created a profile website for myself to show a level of capability I am currently at in terms of short-term projects.",
          details: [
            {
              icon: "mdi-web",
              text: "The website leverages my preferred technology stack for developing and styling small-to-medium sized projects.",
            },
            {
              icon: "mdi-directions",
              text: "Serves as a directory to different passion projects I have developed this year.",
            },
          ],
          Githublink: "https://github.com/WuTangLan1/Profile",
          techStack: [
            { title: "Vue.js", img: vueIcon },
            { title: "PrimeVue", img: primevueIcon },
            { title: "Vuetify", img: vuetifyIcon },
            { title: "Heroku", img: herokuIcon },
          ],
          imageUrl: require("@/assets/images/projects/profileweb_logo.png"),
        },
        {
          title: "Strapp Platform",
          subtitle: "Marketplace",
          isCurrent: false,
          description:
            "Welcome to Strapp-Newer-Hope Platform, a dynamic peer-to-peer marketplace built using Vue 3 and Firebase. This platform provides users with an immersive experience to buy and sell secondhand products across various categories, fostering a vibrant and sustainable community-driven marketplace.",
          details: [
            {
              icon: "mdi-basket",
              text: "Seamless product upload and listing across Adventure, Technology, and Creative categories.",
            },
            {
              icon: "mdi-compass",
              text: "Intuitive user interface for easy navigation and product discovery.",
            },
            {
              icon: "mdi-shield-account",
              text: "Secure authentication and user profile management.",
            },
            {
              icon: "mdi-chat-processing",
              text: "Real-time transaction management and communication features.",
            },
            {
              icon: "mdi-account-group",
              text: "Community engagement tools, including comments and messaging functionalities.",
            },
          ],
          Githublink: "https://github.com/WuTangLan1/Vue3.js_Firebase_SampleMarketplace",
          techStack: [
            { title: "Vue.js", img: vueIcon },
            { title: "Pinia", img: piniaIcon },
            { title: "Firebase", img: firebaseIcon },
            { title: "Vercel", img: vercelIcon },
          ],

          imageUrl: require("@/assets/images/projects/strapp_logo.png"),
        },
        {
           title: "Judge Tony Platform",
          subtitle: "Interactive Web Platform",
          isCurrent: true,
          description: "Welcome to Judge Tony, an interactive web platform dedicated to the Kill Tony live podcast. This platform enables fans to rate, review, and analyze various elements of each episode, creating a community-driven space that enhances engagement and provides insights into audience preferences and episode highlights.",
          details: [
            {
              icon: "mdi-movie-open-star",
              text: "Detailed episode pages featuring episode numbers, titles, lengths, air dates, associated personalities, and community-driven ratings and reviews."
            },
            {
              icon: "mdi-text-box-multiple",
              text: "Minute-by-minute transcript viewing and rating system, allowing users to provide granular feedback on specific segments of the episodes."
            },
            {
              icon: "mdi-chart-bell-curve",
              text: "Data analytics features displaying aggregated ratings, top-rated moments, and user engagement statistics."
            },
            {
              icon: "mdi-human-greeting",
              text: "Community engagement tools that include a dynamic ranking system for hosts, guests, regulars, and comedians based on user ratings."
            }
          ],
          link: "https://judgetony-8a5b58dae866.herokuapp.com/",
          techStack: [
            { title: "Vue.js", img: vueIcon },
            { title: "Typescript", img: typescriptIcon },
            { title: "VITE", img: viteIcon },
            { title: "Pinia", img: piniaIcon },
            { title: "Firebase", img: firebaseIcon },
            { title: "Heroku", img: herokuIcon },
          ],

          imageUrl: require("@/assets/images/projects/ratetony_logo.png"),
        },
      ],
    };
  },
  mounted() {
    const options = {
    root: null,
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.sectionInView = true;
      } 
    });
  }, options);

  observer.observe(this.$el);
  },
  methods: {
    getRandomColor() {
      const colors = [
        "rgba(255, 193, 7, 0.2)",
        "rgba(76, 175, 80, 0.2)",
        "rgba(33, 150, 243, 0.2)",
        "rgba(156, 39, 176, 0.2)",
        "rgba(255, 87, 34, 0.2)",
        "rgba(96, 125, 139, 0.2)",
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    },
    goToProject(url) {
      if (url) {
        window.open(url, "_blank");
      }
    },
    toggleVideoPlay(index) {
      const video = this.$refs[`projectVideo_${index}`];
      if (video && video[0]) {
        if (this.projects[index].isPlaying) {
          video[0].pause();
        } else {
          video[0].play();
        }
        this.projects[index].isPlaying = !this.projects[index].isPlaying;
      }
    },
    videoLoaded(index) {
     this.projects[index].loading = false; 
    }
  },
};
</script>

<template>
  <v-container :class="{ sectionInView }" fluid class="pt-8">
    <v-row dense>
      <v-col
        v-for="(project, index) in projects"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="4"
        class="d-flex"
      >
        <v-card
          :style="{
            backgroundColor: getRandomColor(),
            animationDelay: sectionInView ? `${0.5 * (index + 1)}s` : '0s'
          }"
          class="pa-4 mb-4 elevation-3 project-card"
        >
        <div v-if="project.isCurrent" class="in-progress-tag">In Progress</div>
          <div class="card-content">
            <div class="header-section d-flex">
              <v-img
                :src="project.imageUrl"
                alt="Project Logo"
                class="project-image-header"
                aspect-ratio="1"
                contain
              ></v-img>
              <div class="header-text">
                <v-card-title class="v-card-title">{{ project.title }}</v-card-title>
                <v-card-subtitle class="text-muted">{{ project.subtitle }}</v-card-subtitle>
              </div>
            </div>
            <v-card-text class="project-description mt-3">
              <p class="description-text">{{ project.description }}</p>
              <ul class="details-list">
                <li
                  v-for="(detail, dIndex) in project.details"
                  :key="dIndex"
                  class="d-flex align-center detail-item"
                >
                  <v-icon left size="20" class="detail-icon">{{ detail.icon }}</v-icon>
                  <span class="detail-text">{{ detail.text }}</span>
                </li>
              </ul>
            </v-card-text>
            <div v-if="project.video">
              <div class="video-container">
                <video
                    :ref="`projectVideo_${index}`"
                    :src="project.video"
                    class="project-video"
                    muted
                    loop
                    playsinline
                    @click="toggleVideoPlay(index)"
                    @loadeddata="videoLoaded(index)"
                ></video>

                <div v-if="project.loading" class="video-loading-spinner">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                </div>

                <div class="video-overlay" @click="toggleVideoPlay(index)">
                    <v-icon v-if="!project.isPlaying" class="video-control-icon">mdi-play-circle-outline</v-icon>
                    <v-icon v-else class="video-control-icon">mdi-pause-circle-outline</v-icon>
                </div>
              </div>
          </div>
            <v-card-actions class="button-group">
              <v-btn
                v-if="project.link"
                color="primary"
                class="visit-project-btn"
                @click="goToProject(project.link)"
              >
                Visit Project
              </v-btn>
              <v-btn
                v-if="project.Githublink"
                color="secondary"
                class="visit-github-btn"
                @click="goToProject(project.Githublink)"
              >
                Visit GitHub
              </v-btn>
            </v-card-actions>

            <v-card-text class="tech-stack mt-4">
              <div class="d-flex justify-space-between tech-icons-container">
                <v-avatar
                  v-for="(tech, tIndex) in project.techStack"
                  :key="tIndex"
                  :title="tech.title"
                  size="36"
                  class="ma-1 tech-icon"
                >
                  <img
                    :src="tech.img"
                    :alt="tech.title"
                    class="tech-icon-img"
                  />
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
  position: relative;
  border-radius: 16px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2), var(--unique-color);
  background-blend-mode: multiply;
  opacity: 0;
  transform: translateY(-20px);
  visibility: hidden;
  animation: dropIn 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; 
}

.in-progress-tag {
  position: absolute;
  right: -8px;
  top: 15px;
  background-color: #FFC107; 
  color: #000000;
  padding: 4px 12px;
  font-size: 0.75rem;
  font-weight: bold;
  transform: rotate(35deg);
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.dark .in-progress-tag {
  background-color: #771cac; 
  color: #ffffff;
}

.pt-8 {
    padding-top: 90px !important; 
  }

.sectionInView .project-card {
  visibility: visible;
}

@keyframes dropIn {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-card:hover {
  transform: translateY(-5px) scale(1.01) !important;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15) !important;
}

.card-content {
  animation: smoothFadeSlideIn 0.8s ease-out both;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  height: 100%;
}

.sectionInView .project-card:nth-child(1) {
  transition-delay: 0.1s, 0.1s, 0s;
}

.sectionInView .project-card:nth-child(2) {
  transition-delay: 0.3s, 0.3s, 0s;
}

.sectionInView .project-card:nth-child(3) {
  transition-delay: 0.5s, 0.5s, 0s;
}

.sectionInView .project-card:nth-child(4) {
  transition-delay: 0.7s, 0.7s, 0s;
}


@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.project-video {
  width: 100%;
  height: 200px; 
  border-radius: 16px; 
  object-fit: cover;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
.video-container {
    position: relative;
}
.video-loading-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    padding: 10px;
}
.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  transition: opacity 0.3s ease;
  opacity: 0;
}
.video-container:hover .video-overlay {
  opacity: 1;
}
.video-control-icon {
  font-size: 48px;
}


.header-section {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 4px; 
  border: 1px solid #dcdcdc;
  border-radius: 12px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.project-image-header {
  flex: 1;
  width: 110px; 
  height: 110px;
}

.project-image-header:hover {
  animation: bounce 1.5s;
}

.header-text {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 8px; 
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.project-card:hover .header-text {
  transform: translateX(10px);
  opacity: 1;
}

.header-text .v-card-title {
  font-size: 1.6rem; 
  font-weight: 700; 
  color: #2b2b2b; 
  margin: 0; 
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

.v-avatar:hover {
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
  transform: scale(1.15);
  transform: translateY(-5px);
}

.v-card-actions {
  margin-top: auto; 
  justify-content: center;
}


.tech-stack {
  margin-top: auto; 
  margin-bottom: 16px; 
}

.button-group {
  display: flex;
  gap: 10px; 
  justify-content: center; 
}

.visit-project-btn {
  text-transform: none;
  font-weight: bold;
  color: #1e88e5;
}

.visit-github-btn {
  text-transform: none;
  font-weight: bold;
  color: #f4511e;
}

.visit-project-btn:hover {
  transform: translateY(-5px);
}

.visit-github-btn:hover {
  transform: translateY(-5px);
}


.dark .project-card {
  background: linear-gradient(135deg, #2e3b4e, #1c2833), var(--unique-color);
  background-blend-mode: multiply;
  border: 1px solid rgba(255, 255, 255, 0.1); 
  color: #e0e0e0; 
}

.dark .header-section {
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.dark .header-text .v-card-title {
  color: #e6e6e6; 
}

.dark .v-card-subtitle {
  color: #b0bec5; 
}

.dark .project-description {
  color: #cfd8dc; 
}

.dark .detail-text{
  color: #c9d7dd; 
}

.dark .detail-icon {
  color: #90a4ae; 
}

.dark .visit-btn {
  color: #42a5f5; 
}

.dark .visit-btn:hover {
  background-color: rgba(66, 165, 245, 0.2); 
}

.dark .tech-icon-img {
  filter: brightness(1.2); 
}

.dark .v-avatar:hover {
  box-shadow: 0 0 12px rgba(66, 165, 245, 0.5); 
}


</style>

