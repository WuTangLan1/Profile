<!-- src\components\sections\info_section\infoSection.vue -->
<script>
import { VContainer, VCol, VRow, VDivider, VBtn } from 'vuetify/lib/components';
import profileImage from '@/assets/images/profile.jpg'; // Ensure the path is correct

export default {
  components: {
    VContainer,
    VCol,
    VRow,
    VDivider,
    VBtn
  },
  data() {
    return {
      hover: false,
      profileImage
    };
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
    <!-- Modified the row alignment to start at the top -->
    <v-row class="info-row">
      <v-col cols="12" sm="10" md="8" class="d-flex flex-column align-center">
        <img :src="profileImage" alt="Finn Massari" class="profile-image"/>
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
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.info-row {
  align-items: start; /* Aligns items to the top of the row */
  justify-content: center;
}

.profile-image {
  width: 180px;
  height: 180px;
  border-radius: 15%;
  object-fit: cover;
  margin-bottom: 20px;
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
  font-size: 24px;
}

.text-h5 {
  font-weight: 500;
  color: #555;
}

.body-1 {
  line-height: 1.6;
  font-size: 14px;
}

@media (max-width: 500px) {
  .profile-image {
    width: 120px;
    height: 120px;
  }

  .text-h3 {
    font-size: 20px;
  }

  .text-h5 {
    font-size: 16px;
  }

  .body-1 {
    font-size: 12px;
  }
}
</style>