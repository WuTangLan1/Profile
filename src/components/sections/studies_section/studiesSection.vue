<!-- src\components\sections\studies_section\studiesSection.vue -->
<script>
import { VContainer, VCol, VRow, VDivider, VImg } from 'vuetify/lib/components';
import UCTImage from '@/assets/images/UCT.png';
import WBHSImage from '@/assets/images/wbhs.png';

export default {
  components: {
    VContainer,
    VCol,
    VRow,
    VDivider,
    VImg
  },
  data() {
    return {
      education: [
        {
          period: 'Mar 2020 - Mar 2024',
          degree: 'Honours in Bachelor of Business Science: Management Information Systems',
          institution: 'University of Cape Town',
          location: 'Cape Town, South Africa',
          average: '73% average',
          image: UCTImage
        },
        {
          period: 'Feb 2015 - Feb 2019',
          degree: 'High School Diploma',
          institution: 'Wynberg Boys High School',
          location: 'Cape Town',
          average: '80% average',
          image: WBHSImage
        }
      ]
    };
  }
}
</script>

<template>
  <v-container class="studies-container">
    <v-row align="center" justify="center" class="studies-row">
      <v-col cols="12" sm="10" md="8" class="d-flex flex-column align-center justify-center">
        <h1 class="text-h3 mb-4">Education</h1>
        <v-divider class="my-4"></v-divider>
        <v-row v-for="(item, index) in education" :key="index" class="education-item">
          <v-col cols="12" md="4" class="d-flex align-center justify-center">
            <v-img :src="item.image" class="education-image" contain />
          </v-col>
          <v-col cols="12" md="8" class="education-text">
            <div>
              <h2 class="text-h5">{{ item.period }}</h2>
              <h3 class="text-h6">{{ item.degree }}</h3>
              <p><strong>{{ item.institution }}</strong> - {{ item.location }}</p>
              <p><strong>Average:</strong> {{ item.average }}</p>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.studies-container {
  padding: 20px; 
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.studies-row {
  align-items: center; 
  justify-content: center;
}

.education-item {
  margin-bottom: 30px;
  align-items: center;  
}

.education-image {
  width: 150px;  
  height: 150px;
  border-radius: 0.5rem;
  object-fit: cover;
}

.education-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding: 10px;
}

.text-h3, .text-h5, .text-h6, p {
  margin: 0;  
}

.text-h3 {
  font-weight: 600; 
  font-size: 22px;
}

.text-h5 {
  font-weight: 500;
  color: #555; 
}

.text-h6 {
  font-weight: 500;
  font-size: 18px;
  color: #777;
}

@media (max-width: 500px) {
  .education-image {
    width: 100px;
    height: 100px;
  }

  .text-h3 {
    font-size: 20px;
  }

  .text-h5 {
    font-size: 16px;
  }

  .text-h6 {
    font-size: 14px;
  }
}

@media (max-height: 850px) {
  .studies-container {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .education-item {
    margin-bottom: 5px;
  }

  .education-image {
    width: 120px; 
    height: 120px;
  }

  .text-h3 {
    font-size: 16px; 
  }

  .text-h5, .text-h6, p {
    font-size: 12px; 
  }
}

@media (max-height: 730px) {
  .studies-container {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .education-item {
    margin-bottom: 2px; /* Further reduce the space between items */
  }
  
  .education-image {
    width: 70px; /* Further reduce the image size */
    height: 70px;
  }

  .text-h3, .text-h5, .text-h6, p {
    font-size: 10px; /* Further reduce font sizes for more compact text display */
  }
}


</style>
