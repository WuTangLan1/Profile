<!-- src\components\sections\info_section\infoSection.vue -->
<script>
import { VContainer, VRow, VCol, VCard, VCardTitle, VCardText, VCardActions, VBtn, VIcon } from 'vuetify/lib/components';

export default {
  components: {
    VContainer,
    VRow,
    VCol,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VBtn,
    VIcon
  },
  methods: {
    onContactMe() {
      console.log("Contact Me button clicked");
    }
  }
}
</script>

<template>
  <v-container class="contact-container">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-2">
          <v-card-title class="headline">Contact Information</v-card-title>
          <v-card-text>
            <div class="contact-detail">
              <v-icon left>mdi-map-marker</v-icon>
              Cape Town, South Africa 7979
            </div>
            <div class="contact-detail">
              <v-icon left>mdi-phone</v-icon>
              +27 786867785
            </div>
            <div class="contact-detail">
              <v-icon left>mdi-email</v-icon>
              <a href="mailto:finnmassari404@gmail.com">finnmassari404@gmail.com</a>
            </div>
            <div class="contact-detail">
              <v-icon left>mdi-github</v-icon>
              <a href="https://github.com/WuTangLan1" target="_blank">WuTangLan1</a>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="onContactMe">Contact Me</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  

<style scoped>
.contact-container {
  padding: 20px;
  background-color: #FFFFFF;  
  color: #333;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: background-color 0.3s, color 0.3s;  
  border-radius: 10px; 
}

.contact-detail {
  display: flex;
  align-items: center;
  margin-bottom: 10px;  
}

.v-icon {
  color: #666;  
}

a {
  color: #1976D2; 
  text-decoration: none;  
}

a:hover {
  text-decoration: underline; 
}

.v-card {
  background-color: transparent;  
  border: none;  
}

.dark .v-card-title {
  color:white;
  }

.v-card-title {
  font-weight: 500;  
  font-size: 20px;  
}

.v-card-text {
  font-size: 16px;  
}

.dark .v-card-text {
color: white;
}

.v-btn {
  border-radius: 5px;  
  text-transform: none;  
  font-weight: normal; 
}

.dark .contact-container {
  background-color: #424242;  
  color: #fff;
}

.dark a {
  color: #90CAF9;  
}

.dark .v-btn {
  color: #90CAF9;  
  border: 1px solid #90CAF9;  
}

.dark .v-icon {
  color: #90CAF9;  
}
</style>
