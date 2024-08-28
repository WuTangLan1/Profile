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
      intervalId = setInterval(cycleImages, 5000);
    });

    onBeforeUnmount(() => {
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
  perspective: 1500px;
}

@media(max-width: 600px)
{
    .image-stack-container {
        width: 80%;
    }
}

.image-card {
  position: absolute;
  transition: transform 1s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.5s ease, z-index 0.5s, filter 0.5s ease; 
  cursor: pointer;
  transform-origin: center center;
  width: 80%;
  opacity: 0.2;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  filter: blur(5px);
}

.image-card:nth-child(1) {
  transform: rotateY(-20deg) rotate(-10deg) translateX(-50px); 
  z-index: 1;
}

.image-card:nth-child(2) {
  transform: rotateY(0deg) rotate(0deg) translateX(0);
  z-index: 1;
}

.image-card:nth-child(3) {
  transform: rotateY(20deg) rotate(10deg) translateX(50px); 
  z-index: 1;
}

.image-card-active {
  transform: scale(1.2) rotateY(0deg) rotate(0deg) translateX(0);
  opacity: 1;
  z-index: 5;
  box-shadow: 0 16px 32px rgba(206, 110, 201, 0.3), 0 0 0 4px rgba(255, 255, 255, 0.2);
  filter: none; 
  transition: transform 1s ease-in-out, opacity 0.8s ease, z-index 0.5s, filter 0.5s ease; 
  animation: flipIn 1s ease forwards; 
}

@keyframes flipIn {
  0% {
    transform: rotateY(90deg); 
    opacity: 0;
  }
  50% {
    transform: rotateY(0deg); 
    opacity: 0.5;
  }
  100% {
    transform: rotateY(0deg) scale(1.2);
    opacity: 1;
  }
}

.image-card-content {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.image-card-active-enter-active, .image-card-active-leave-active {
  transition: all 0.8s ease;
}

.image-card-active-enter, .image-card-active-leave-to {
  opacity: 0;
}


.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px; 
  transition: transform 0.3s ease; 
}

</style>
