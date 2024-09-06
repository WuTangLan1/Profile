<!-- src\components\sections\info_section\infoSection.vue -->
<script>
import { useAnimationStore } from '@/stores/animationStore';

export default {
  data() {
    return {
      animationEnabled: true, 
      animationCompleted: false,
      messages: [
        { text: "", fullText: "Where are you located?", delay: 0, visible: false },
        { text: "", fullText: "Cape Town, South Africa 7979", delay: 2000, visible: false },
        { text: "", fullText: "What is your cell number?", delay: 4000, visible: false },
        { text: "", fullText: "+27 786867785", delay: 6000 , visible: false},
        { text: "", fullText: "What's your email address?", delay: 8000 , visible: false},
        { text: "", fullText: "finnmassari404@gmail.com", delay: 10000 , visible: false},
        { text: "", fullText: "Can I see your GitHub profile?", delay: 12000, visible: false },
        { text: "", fullText: "WuTangLan1", delay: 14000 , visible: false},
      ],
    };
  },
  setup() {
    const animationStore = useAnimationStore();
    return { animationStore };
  },
  watch: {
    'animationStore.animationEnabled'(newVal) {
      if (!newVal) {
        this.revealAllMessages();
      } else if (!this.animationCompleted) {
        this.revealMessages();
      }
    },
  },
  mounted() {
    if (this.animationStore.animationEnabled && !this.animationCompleted) {
      this.revealMessages();
    } else {
      this.revealAllMessages(); 
    }
  },
  methods: {
    revealMessages() {
        this.messages.forEach((message, index) => {
            setTimeout(() => {
                if (!this.animationStore.animationEnabled || this.animationCompleted) return;
                message.visible = true; 
                message.text = "typing...";
            }, message.delay);

            setTimeout(() => {
                if (!this.animationStore.animationEnabled || this.animationCompleted) return;
                message.text = message.fullText;
                if (index === this.messages.length - 1) {
                    this.animationCompleted = true;
                }
            }, message.delay + 2000);
        });
    },
    revealAllMessages() {
        this.messages.forEach(message => {
            message.visible = true;
            message.text = message.fullText;
        });
        this.animationCompleted = true;
    },
},


};

</script>

<template>
  <v-container class="contact-container">
    <div class="header d-flex justify-space-between align-center">
      <h2 class="section-heading heading-text">Contact Me</h2>
      <div class="switch-container d-flex align-center">
        <v-switch
          v-model="animationStore.animationEnabled"
          inset
          class="switch-control"
          color="warning"
        />
      </div>
    </div>
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <div v-if="messages[0].visible" class="message-container left">
          <v-avatar class="avatar" size="32">
            <v-icon>mdi-account-circle</v-icon>
            <span>You</span>
          </v-avatar>
          <div class="message-bubble left">
            <span>{{ messages[0].text }}</span>
          </div>
        </div>
        <div v-if="messages[1].visible" class="message-container right">
          <v-avatar class="avatar" size="32">
            <img src="@/assets/personal photos/me1.jpg" alt="Me">
            <span>Me</span>
          </v-avatar>
          <div class="message-bubble right">
            <v-icon left>mdi-map-marker</v-icon>
            <span>{{ messages[1].text }}</span>
          </div>
        </div>
        <div v-if="messages[2].visible" class="message-container left">
          <v-avatar class="avatar" size="32">
            <v-icon>mdi-account-circle</v-icon>
            <span>You</span>
          </v-avatar>
          <div class="message-bubble left">
            <span>{{ messages[2].text }}</span>
          </div>
        </div>
        <div v-if="messages[3].visible" class="message-container right">
          <v-avatar class="avatar" size="32">
            <img src="@/assets/personal photos/me1.jpg" alt="Me">
            <span>Me</span>
          </v-avatar>
          <div class="message-bubble right">
            <v-icon left>mdi-phone</v-icon>
            <span>{{ messages[3].text }}</span>
          </div>
        </div>
        <div v-if="messages[4].visible" class="message-container left">
          <v-avatar class="avatar" size="32">
            <v-icon>mdi-account-circle</v-icon>
            <span>You</span>
          </v-avatar>
          <div class="message-bubble left">
            <span>{{ messages[4].text }}</span>
          </div>
        </div>
        <div v-if="messages[5].visible" class="message-container right">
          <v-avatar class="avatar" size="32">
            <img src="@/assets/personal photos/me1.jpg" alt="Me">
            <span>Me</span>
          </v-avatar>
          <div class="message-bubble right">
            <v-icon left>mdi-email</v-icon>
            <a :href="'mailto:' + messages[5].text">{{ messages[5].text }}</a>
          </div>
        </div>
        <div v-if="messages[6].visible" class="message-container left">
          <v-avatar class="avatar" size="32">
            <v-icon>mdi-account-circle</v-icon>
            <span>You</span>
          </v-avatar>
          <div class="message-bubble left">
            <span>{{ messages[6].text }}</span>
          </div>
        </div>
        <div v-if="messages[7].visible" class="message-container right">
          <v-avatar class="avatar" size="32">
            <img src="@/assets/personal photos/me1.jpg" alt="Me">
            <span>Me</span>
          </v-avatar>
          <div class="message-bubble right">
            <v-icon left>mdi-github</v-icon>
            <a :href="'https://github.com/' + messages[7].text" target="_blank">{{ messages[7].text }}</a>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>



<style scoped>
.contact-container {
  margin: auto;
  max-width: 100%;
  min-height: 600px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-out;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  padding: 0;
  margin: 0;
  border-radius: 15px;
}

@media (max-width: 1000px) {
  .contact-container {
    padding-top: 90px !important; 
  }
}


.dark .contact-container {
  box-shadow: 0 4px 12px rgba(198, 57, 213, 0.333);
  border: 1px solid #ddd;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
  padding: 20px; 
  color: black;
}

.dark .header {
  background-color: #3a4971; 
  color: #e0e0e0;
}

.section-heading {
  font-weight: 700;
  font-size: clamp(24px, 5vw, 32px);
  margin: 0;
  align-self: center; 
  line-height: 1;
}

.heading-text {
  position: relative;
  display: inline-block;
}

.heading-text::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px; 
  width: 100%;
  height: 4px; 
  background-color: currentColor; 
  transition: all 0.3s ease-in-out;
}

.heading-text:hover::after {
  width: 0;
  left: 50%;
  background-color: currentColor;
}

.switch-container {
  display: flex;
  align-items: center; 
  margin-right: 20px;
}

.switch-control {
  display: flex;
  align-items: center;
  padding: 0;
}

.switch-control .v-input__control {
  display: flex;
  align-items: center;
  padding: 0 !important;
}

.v-switch .v-input__control {
  display: flex;
  align-items: center;
  font-size: clamp(10px, 1.5vw, 14px); 
  padding: 0;
}

.v-divider {
  height: 2px;
  background-color: #ddd;
}

.dark .v-divider {
  background-color: #555;
}

.v-row {
  background: linear-gradient(to bottom right, #0f574e, #126e5b, #145e4d, #093d31);
  background-size: 200% 200%; 
  animation: gradientAnimation 8s ease infinite; 
  width: 100%; 
  height: 100%; 
  min-height: 550px;
  padding: 0; 
  margin: 0; 
  display: flex; 
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: center; 
  border-radius: 0 0 15px 15px; 
}

.dark .v-row {
  background: linear-gradient(to bottom right, #8aade5, #4d72ae, #3c5a8a, #8aade5);
}


@keyframes gradientAnimation {
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

.v-col {
  background-color: transparent; 
  width: 100%;
  padding: 10px; 
}
@media(max-width: 600px)
{
  .v-row {
    min-height: 850px;
  }
}

.message-container {
  display: flex;
  align-items: flex-end;
  margin: 20px 0;
}

.message-container.left {
  justify-content: flex-start;
  flex-direction: row;
}

.message-container.right {
  justify-content: flex-end;
  text-align: right;
}

.avatar {
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 10px;
  background-color: #e0e0e0;
  font-size: 12px; 
  font-weight: bold;
  text-align: center;
  min-width: 70px; 
}

.avatar img {
  width: 50%; 
  height: 80%;
  object-fit: cover; 
  border-radius: 10px; 
}

.avatar .v-icon {
  font-size: 28px 
}

.message-bubble {
  max-width: 85%; 
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  font-size: 12px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  animation: fadeInBubble 0.5s ease-out forwards; 
}

.message-container.left .avatar {
  margin-right: 10px;
}

.message-container.right .avatar {
  margin-left: 10px;
}


@keyframes fadeInBubble {
  from {
    opacity: 0;
    transform: translateY(-10px); 
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.message-bubble:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.left .message-bubble {
  background-color: #e1f5fe;
}

.right .message-bubble {
  background-color: #c8e6c9;
}

.message-bubble v-icon {
  margin-right: 10px;
  margin-left: 10px;
  color: #666;
}

a {
  color: #1976D2;
  text-decoration: none;
  font-weight: 500;
}

a:hover {
  text-decoration: underline;
}

.dark .section-heading {
color: white;
}

.dark .left .message-bubble {
  background-color: #37474f;
}

.dark .right .message-bubble {
  background-color: #236525;
}

.dark a {
  color: #90CAF9;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 600px) {
  .contact-container{
    border-radius: 0px;
  }
  .message-container {
    flex-direction: column;
    align-items: center;
  }
  .message-container.left {
    flex-direction: column; 
    align-items: flex-start;
  }
  .message-container.right {
    align-items: flex-end;
  }
  .message-bubble {
    max-width: 90%;
    font-size: 14px;
    margin-top: 10px;
    padding: 10px;
  }
}


@media (min-width: 600px) {
  .contact-container {
    width: 90%; 
    border: 2px solid black; 
    max-width: 600px;
  }

  .section-heading {
    margin-left: 50px;
  }

  .message-container.left {
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
  }

  .message-container.right {
    justify-content: flex-end;
    text-align: right;
    align-items: flex-end;
  }

  .message-container.right .avatar {
    order: 1; 
    margin-left: 10px; 
    margin-right: 0;
  }

  .message-container.right .message-bubble {
    order: 0; 
  }

  .message-container.left,
  .message-container.right {
    padding: 0 10px;
  }


  .message-container {
    margin: 20px 0;
  }

  .message-bubble {
    max-width: 65%;
  }
}
</style>
