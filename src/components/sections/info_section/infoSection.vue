<!-- src\components\sections\info_section\infoSection.vue -->
<script>
  import { inject } from 'vue';
  import PictureSection from '@/components/sections/info_section/pictureSection.vue';
  import TechSection from '@/components/sections/info_section/techSection.vue'; 

  export default {
    components: {
      TechSection,
      PictureSection
    },
    setup() {
      const handleChangeSection = inject('handleChangeSection');
      if (!handleChangeSection) {
        throw new Error('handleChangeSection not provided!');
      }

      const contact = () => {
        handleChangeSection(4); 
      };

      const resumeLink = process.env.BASE_URL + 'cv/finnm_resume.pdf'

      return {
        contact,
        resumeLink
      };
    },
    methods: {
    downloadResume() {
      try {
        const link = document.createElement('a');
        console.log(this.resumeLink); 
        link.href = this.resumeLink;
        link.setAttribute('download', 'finnm_resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Failed to download the file:", error);
      }
    }
  }
}
</script>

<template>
  <v-container class="info-container">
    <v-row class="info-row">
      <PictureSection />
      <v-col cols="12" md="6" class="d-flex flex-column justify-center align-center">
        <div class="text-container">
          <h1 class="text-h3 mb-2">Finn Massari</h1>
          <h2 class="text-h5 grey--text">Information Systems Developer and Analyst</h2>
        </div>
        <v-divider class="my-4"></v-divider>
        <p class="body-1">
          Accomplished in the field of Information Systems with a comprehensive academic foundation 
          in Business Science from the University of Cape Town. Background in studies is inclusive 
          of business and management courses, encompassing in-depth knowledge in macro and microeconomics,
           financial accounting, and business law. Demonstrated versatility through roles in business 
           analysis, systems analysis, and software development across diverse environments. A strong 
           proclivity for emerging technologies, highlighted by a dissertation focused on the development
           of the Metaverse.  
        </p>
        <div class="buttons-container">
          <v-btn color="primary" large class="ma-2" :href="resumeLink" download="finnm_resume.pdf">Download CV</v-btn>
          <v-btn color="secondary" large class="ma-2" @click="contact">Contact Me</v-btn>
        </div>
      </v-col>
      <TechSection class="mt-10 tech-section" />
    </v-row>
  </v-container>
</template>


<style scoped>
.info-container {
  padding: 60px 30px 30px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  position: relative;
  border-radius: 10px; 
  overflow-y: auto;
}

.dark .text-h3 {
  color: white;
}

@media(min-width: 1000px)
{
  
  .info-container {
    overflow-y: hidden;
    padding: 80px 40px 40px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    position: relative;
    border-radius: 15px; 
    flex-direction: column;
  }
  .profile-image {
  width: 80%; 
  border-radius: 15px;
  }

  .tech-section {
    width: 100%;
    margin-top: 40px; 
  }

  .buttons-container v-btn {
    padding: 10px 30px;
    font-size: 18px;
    transition: box-shadow 0.3s ease;
  }

  .buttons-container v-btn:hover {
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }

  .text-h3 {
    font-weight: bold;
    font-size: 32px; 
  }

  .text-h5 {
    font-weight: 500;
    font-size: 22px; 
    color: #444; 
    margin-bottom: 24px; 
  }

  .body-1 {
    font-size: 18px;
    color: #333; 
    text-align: justify; 
    padding: 0 25px; 
  }
}

.info-row {
  align-items: start;
  justify-content: center;
}

.profile-row {
  align-items: center; 
}

.text-container, .buttons-container, .body-1 {
  z-index: 1;
  position: relative;
}

.text-container {
  text-align: center;
}

.profile-image {
  width: 100%; 
  max-width: 500px;
  border-radius: 10px;
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
  font-size: 28px; 
  color: #333; 
}

.text-h5 {
  font-weight: 500;
  color: #666; 
  margin-bottom: 20px; 
}

.body-1 {
  line-height: 1.8;
  font-size: 16px;
  color: #555; 
  text-align: justify; 
  padding: 0 20px; 
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.profile-image {
  width: 100%; 
  border-radius: 10px;
  animation: fadeIn 1s ease-out forwards; 
}

.tech-section {
  margin-top: 40px; 
  width: 100%;
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