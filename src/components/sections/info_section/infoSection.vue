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
  data() {
    return {
      hover: false
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
    <v-row justify="center">
      <v-col cols="12" md="10">
        <h1 class="text-h3 text-center mb-2">Finn Massari</h1>
        <h2 class="text-h5 text-center grey--text">Information Systems Developer and Analyst</h2>
        <v-divider class="my-4"></v-divider>
        <v-row>
          <v-col cols="12" sm="6">
            <p><strong>Address:</strong> Cape Town, South Africa 7979</p>
            <p><strong>Phone:</strong> +27 786867785</p>
          </v-col>
          <v-col cols="12" sm="6">
            <p><strong>E-mail:</strong> finnmassari404@gmail.com</p>
            <p><strong>GitHub Username:</strong> WuTangLan1</p>
            <v-btn color="primary" class="ma-2" @mouseover="hover=true" @mouseleave="hover=false" :class="{ 'hover-effect': hover }">Download CV</v-btn>
            <v-btn color="secondary" class="ma-2" @click="sendEmail">Contact Me</v-btn>
          </v-col>
        </v-row>
        <p class="body-1">
          Accomplished in the field of Information Systems with a comprehensive academic foundation in Business Science from the University of Cape Town...
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.info-container {
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* Subtle shadow */
}

.contact-details p {
  margin: 10px 0; /* Increased spacing */
}

.hover-effect {
  box-shadow: 0 2px 4px rgba(0,0,0,0.2); /* Hover effect for button */
}

.text-h3, .text-h5 {
  font-weight: 500; /* Adjust font weight for better hierarchy */
}

.body-1 {
  line-height: 1.6; /* Improved line spacing for readability */
}
</style>
