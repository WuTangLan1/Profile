<!-- src\components\sections\info_section\infoSection.vue -->
<script>
export default {
  data() {
    return {
      animationEnabled: true, 
      animationCompleted: false,
      messages: [
        { text: "", fullText: "Where are you located?", delay: 0 },
        { text: "", fullText: "Cape Town, South Africa 7979", delay: 2000 },
        { text: "", fullText: "What is your cell number?", delay: 4000 },
        { text: "", fullText: "+27 786867785", delay: 6000 },
        { text: "", fullText: "What's your email address?", delay: 8000 },
        { text: "", fullText: "finnmassari404@gmail.com", delay: 10000 },
        { text: "", fullText: "Can I see your GitHub profile?", delay: 12000 },
        { text: "", fullText: "WuTangLan1", delay: 14000 },
      ],
    };
  },
  watch: {
    animationEnabled(newVal) {
      if (!newVal) {
        this.revealAllMessages();
      } else if (!this.animationCompleted) {
        this.revealMessages();
      }
    },
  },
  mounted() {
    if (this.animationEnabled && !this.animationCompleted) {
      this.revealMessages();
    } else {
      this.revealAllMessages(); 
    }
  },
  methods: {
    revealMessages() {
      this.messages.forEach((message) => {
        setTimeout(() => {
          if (!this.animationEnabled || this.animationCompleted) return; 
          message.text = "typing...";
        }, message.delay);

        setTimeout(() => {
          if (!this.animationEnabled || this.animationCompleted) return;
          message.text = message.fullText;
          if (message === this.messages[this.messages.length - 1]) {
            this.animationCompleted = true; 
          }
        }, message.delay + 2000);
      });
    },
    revealAllMessages() {
      this.messages.forEach((message) => {
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
      <h2 class="section-heading">Contact Me</h2>
      <div class="switch-container d-flex align-center">
        <v-switch
          v-model="animationEnabled"
          inset
          color="primary"
          size="small"
          class="switch-control"
        />
      </div>
    </div>
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <div class="message-container left">
          <v-avatar size="32" class="avatar">
            <v-icon>mdi-account-circle</v-icon> You
          </v-avatar>
          <div class="message-bubble left">
            <span>{{ messages[0].text }}</span>
          </div>
        </div>
        <div class="message-container right">
          <v-avatar size="32" class="avatar">
            <v-icon>mdi-account-circle</v-icon> Me
          </v-avatar>
          <div class="message-bubble right">
            <v-icon left>mdi-map-marker</v-icon>
            <span>{{ messages[1].text }}</span>
          </div>
        </div>

        <div class="message-container left">
          <v-avatar size="32" class="avatar">
            <v-icon>mdi-account-circle</v-icon> You
          </v-avatar>
          <div class="message-bubble left">
            <span>{{ messages[2].text }}</span>
          </div>
        </div>
        <div class="message-container right">
          <v-avatar size="32" class="avatar">
            <v-icon>mdi-account-circle</v-icon> Me
          </v-avatar>
          <div class="message-bubble right">
            <v-icon left>mdi-phone</v-icon>
            <span>{{ messages[3].text }}</span>
          </div>
        </div>

        <div class="message-container left">
          <v-avatar size="32" class="avatar">
            <v-icon>mdi-account-circle</v-icon> You
          </v-avatar>
          <div class="message-bubble left">
            <span>{{ messages[4].text }}</span>
          </div>
        </div>
        <div class="message-container right">
          <v-avatar size="32" class="avatar">
            <v-icon>mdi-account-circle</v-icon> Me
          </v-avatar>
          <div class="message-bubble right">
            <v-icon left>mdi-email</v-icon>
            <a :href="'mailto:' + messages[5].text">{{ messages[5].text }}</a>
          </div>
        </div>

        <div class="message-container left">
          <v-avatar size="32" class="avatar">
            <v-icon>mdi-account-circle</v-icon> You
          </v-avatar>
          <div class="message-bubble left">
            <span>{{ messages[6].text }}</span>
          </div>
        </div>
        <div class="message-container right">
          <v-avatar size="32" class="avatar">
            <v-icon>mdi-account-circle</v-icon> Me
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
  padding: 20px;
  margin: auto;
  max-width: 100%;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-out;
  position: relative;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-heading {
  font-weight: 700;
  font-size: clamp(24px, 5vw, 32px);
  color: #333;
  margin: 0;
  align-self: center; 
  line-height: 1;
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
  margin-bottom: 20px;
  height: 2px;
  background-color: #ddd;
}

.dark .v-divider {
  background-color: #555;
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
  margin-right: 10px;
  border-radius: 10px;
  padding: 6px; 
  background-color: #e0e0e0;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  min-width: 50px; 
}

.message-bubble {
  max-width: 85%; 
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
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

.dark .left .message-bubble {
  background-color: #37474f;
}

.dark .right .message-bubble {
  background-color: #4caf50;
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
    padding-left: 5px; 
    padding-right: 5px; 
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
