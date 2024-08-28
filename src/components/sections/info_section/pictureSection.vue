<!-- src/components/sections/info_section/pictureSection.vue -->
<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import image1 from '@/assets/personal photos/me1.jpg';
import image2 from '@/assets/personal photos/me2.jpg';
import image3 from '@/assets/personal photos/me3.jpg';

export default {
  name: 'PictureSection',
  setup() {
    const images = [image1, image2, image3];
    const activeImageIndex = ref(0);
    let intervalId;

    const setActiveImage = (index) => {
      activeImageIndex.value = index;
    };

    const cycleImages = () => {
      activeImageIndex.value = (activeImageIndex.value + 1) % images.length;
    };

    onMounted(() => {
      // Start cycling images every 5 seconds
      intervalId = setInterval(cycleImages, 5000);
    });

    onBeforeUnmount(() => {
      // Clear the interval when component is destroyed
      clearInterval(intervalId);
    });

    return {
      images,
      activeImageIndex,
      setActiveImage,
    };
  },
};
</script>

<template>
  <v-col cols="12" md="6" class="d-flex justify-center align-center">
    <div class="image-stack-container">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="['image-card', { 'image-card-active': activeImageIndex === index }]"
        @click="setActiveImage(index)"
        :style="{ zIndex: activeImageIndex === index ? 3 : index + 1 }" 
      >
      <v-card class="image-card-content" elevation="6">
        <v-img
            :src="image"
            alt="Profile Image"
            class="profile-image"
            contain
            width="100%"
            height="100%"
        ></v-img>
        </v-card>
      </div>
    </div>
  </v-col>
</template>

<style scoped>
.image-stack-container {
  position: relative;
  width: 90%;
  max-width: 500px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}

.image-card {
  position: absolute;
  transition: transform 0.5s ease, opacity 0.5s ease, z-index 0.5s, filter 0.5s ease; 
  cursor: pointer;
  transform-origin: center center;
  width: 80%;
  opacity: 0.3; 
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  filter: blur(5px);
}

.image-card:nth-child(1) {
  transform: rotate(-10deg) translateX(-50px);
  z-index: 1;
}

.image-card:nth-child(2) {
  transform: rotate(0deg) translateX(0);
  z-index: 1;
}

.image-card:nth-child(3) {
  transform: rotate(10deg) translateX(50px);
  z-index: 1;
}

.image-card-active {
  transform: scale(1.15) rotate(0deg) translateX(0);
  opacity: 1;
  z-index: 5;
  box-shadow: 0 16px 32px rgba(206, 110, 201, 0.3); 
  filter: none; 
}

.image-card-content {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px; 
  transition: transform 0.3s ease; 
}

</style>
