<!-- src\components\sections\info_section\infoSection.vue -->
<script>
  import { VContainer, VCol, VRow, VDivider, VBtn } from 'vuetify/lib/components';

  export default {
    components: {
      VContainer,
      VCol,
      VRow,
      VDivider,
      VBtn
    },
    methods: {
      sendEmail() {
        window.location.href = `mailto:finnmassari404@gmail.com`;
      }
    }
  }
</script>

<template>
  <v-container class="info-container">
    <v-row class="info-row">
      <v-col cols="12" sm="10" md="8" class="d-flex flex-column align-center">
        <div class="text-container">
          <h1 class="text-h3 mb-2">Finn Massari</h1>
          <h2 class="text-h5 grey--text">Information Systems Developer and Analyst</h2>
        </div>
        <v-divider class="my-4"></v-divider>
        <v-row>
          <v-col cols="12" sm="6">
            <p><strong>Address:</strong> Cape Town, South Africa 7979</p>
            <p><strong>Phone:</strong> +27 786867785</p>
          </v-col>
          <v-col cols="12" sm="6">
            <p><strong>E-mail:</strong> finnmassari404@gmail.com</p>
            <p><strong>GitHub Username:</strong> WuTangLan1</p>
          </v-col>
        </v-row>
        <div class="buttons-container">
          <v-btn color="primary" class="ma-2" @mouseover="hover=true" @mouseleave="hover=false" :class="{ 'hover-effect': hover }">Download CV</v-btn>
          <v-btn color="secondary" class="ma-2" @click="sendEmail">Contact Me</v-btn>
        </div>
        <p class="body-1">
          Accomplished in the field of Information Systems with a comprehensive academic foundation in Business Science from the University of Cape Town. Background in studies is inclusive of business and management courses, encompassing in-depth knowledge in macro and microeconomics, financial accounting, and business law. Demonstrated versatility through roles in business analysis, systems analysis, and software development across diverse environments. A strong proclivity for emerging technologies, highlighted by a dissertation focused on the development of the Metaverse.  
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.info-container {
  padding: 60px 30px 30px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  position: relative;
  border-radius: 10px; 
}
.info-row {
  align-items: start;
  justify-content: center;
}

.floating-images {
  position: fixed; 
  width: 100%;
  top: -15px; 
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  z-index: 1000;
}
.float-img {
  width: 70px;
  height: 70px;
  border-radius: 10%;
  margin-right: 15px;
  animation: floatImage 30s linear infinite;
}

@keyframes floatImage {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

.text-container, .buttons-container, .body-1 {
  z-index: 1;
  position: relative;
}

.text-container {
  text-align: center;
}

.buttons-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.hover-effect {
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
}

.text-h3 {
  font-weight: 600;
  font-size: 28px; /* Slightly larger for better readability */
  color: #333; /* Darker color for better contrast */
}

.text-h5 {
  font-weight: 500;
  color: #666; /* Slightly lighter for a smoother look */
  margin-bottom: 20px; /* Added margin for spacing */
}

.body-1 {
  line-height: 1.8; /* Increased line height for better readability */
  font-size: 16px; /* Slightly larger for better readability */
  color: #555; /* Medium color for readability */
  text-align: justify; /* Justify text for a clean look */
  padding: 0 20px; /* Added padding for better spacing */
}

@media (max-width: 500px) {
  .text-h3 {
    font-size: 24px;
  }

  .text-h5 {
    font-size: 18px;
  }

  .body-1 {
    font-size: 14px;
  }
}
</style>
