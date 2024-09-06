<!-- src\components\sections\studies_section\studiesSection.vue -->
<script>
import { VContainer, VCol, VRow, VDivider, VProgressCircular } from 'vuetify/lib/components';
import UCTImage from '@/assets/images/studies/UCT.png';
import WBHSImage from '@/assets/images/studies/wbhs.png';

export default {
  components: {
    VContainer,
    VCol,
    VRow,
    VDivider,
    VProgressCircular
  },
  data() {
    return {
      education: [
        {
          period: 'Mar 2020 - Mar 2024',
          degree: 'Honours in Bachelor of Business Science: Management Information Systems',
          institution: 'University of Cape Town',
          location: 'Cape Town, South Africa',
          average: '76% average',
          image: UCTImage
        },
        {
          period: 'Feb 2015 - Feb 2019',
          degree: 'High School Diploma',
          institution: 'Wynberg Boys High School',
          location: 'Cape Town',
          average: '82% average',
          image: WBHSImage
        }
      ],
      loadingState: [true, true] 
    };
  },
  methods: {
    handleImageLoaded(index) {
      this.loadingState[index] = false;
    }
  }
}
</script>


<template>
  <v-container class="studies-container">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <h1 class="display-1 text-center mb-4">Education</h1>
        <v-divider class="my-4"></v-divider>
        <v-row v-for="(item, index) in education" :key="index" class="education-item">
          <v-col cols="12" md="3" class="d-flex justify-center">
            <v-progress-circular
              v-if="loadingState[index]"
              indeterminate
              color="primary"
              size="64"
            ></v-progress-circular>
            <img :src="item.image"
             @load="handleImageLoaded(index)"
              v-show="!loadingState[index]"
             class="education-image" />
          </v-col>
          <v-col cols="12" md="9">
            <h2 class="text-h5">{{ item.period }}</h2>
            <h3 class="text-h6">{{ item.degree }}</h3>
            <p class="institution"><strong>{{ item.institution }}</strong> - {{ item.location }}</p>
            <p class="average"><strong>Average:</strong> {{ item.average }}</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<style scoped>
.studies-container {
  padding: 40px;
  overflow-y: auto;
}


@media (max-width: 1000px) {
  .studies-container{ 
    padding-top: 80px; 
  }
}

.education-item {
  margin-bottom: 40px;
  align-items: center;
}

.education-text {
  padding-left: 20px;
}

.display-1 {
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 20px;
}

.text-h5 {
  font-weight: 600;
  font-size: 20px;
}

.text-h6 {
  font-weight: 500;
  font-size: 18px;
  color: #666;
}

.institution, .average {
  font-size: 16px;
  margin-top: 5px;
}

.education-image {
  max-width: 80%;
  height: auto;
  border-radius: 0.5rem;
  animation: fadeIn 1s ease-out forwards; 
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>
