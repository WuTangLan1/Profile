<!-- src\components\sections\info_section\infoSection.vue -->
<template>
  <v-container class="contact-container">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <div class="message-container left">
          <v-avatar size="32" class="avatar">You</v-avatar>
          <div class="message-bubble left">
            <span>Where are you located?</span>
          </div>
        </div>
        <div class="message-container right">
          <v-avatar size="32" class="avatar">Me</v-avatar>
          <div class="message-bubble right">
            <v-icon left>mdi-map-marker</v-icon>
            <span>Cape Town, South Africa 7979</span>
          </div>
        </div>

        <div class="message-container left">
          <v-avatar size="32" class="avatar">You</v-avatar>
          <div class="message-bubble left">
            <span>What is your cell number?</span>
          </div>
        </div>
        <div class="message-container right">
          <v-avatar size="32" class="avatar">Me</v-avatar>
          <div class="message-bubble right">
            <v-icon left>mdi-phone</v-icon>
            <span>+27 786867785</span>
          </div>
        </div>

        <div class="message-container left">
          <v-avatar size="32" class="avatar">You</v-avatar>
          <div class="message-bubble left">
            <span>What's your email address?</span>
          </div>
        </div>
        <div class="message-container right">
          <v-avatar size="32" class="avatar">Me</v-avatar>
          <div class="message-bubble right">
            <v-icon left>mdi-email</v-icon>
            <a href="mailto:finnmassari404@gmail.com">finnmassari404@gmail.com</a>
          </div>
        </div>

        <div class="message-container left">
          <v-avatar size="32" class="avatar">You</v-avatar>
          <div class="message-bubble left">
            <span>Can I see your GitHub profile?</span>
          </div>
        </div>
        <div class="message-container right">
          <v-avatar size="32" class="avatar">Me</v-avatar>
          <div class="message-bubble right">
            <v-icon left>mdi-github</v-icon>
            <a href="https://github.com/WuTangLan1" target="_blank">WuTangLan1</a>
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
  background: linear-gradient(to bottom, #f7f8fa, #e8ebf0);
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-out;
  position: relative;
}

.message-container {
  display: flex;
  align-items: flex-end;
  margin: 30px 0;
}

.message-container.left {
  justify-content: flex-start;
}

.message-container.right {
  justify-content: flex-end;
  text-align: right;
}

.avatar {
  margin-right: 10px;
}

.message-bubble {
  max-width: 80%;
  padding: 15px;
  border-radius: 20px;
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

.dark .contact-container {
  background-color: #212121;
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
    align-items: flex-start;
  }
  .message-container.right {
    align-items: flex-end;
  }
  .message-bubble {
    max-width: 90%;
    font-size: 14px;
    padding: 10px;
  }
}
</style>
