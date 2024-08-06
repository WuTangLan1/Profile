// src/plugins/vuetify.js
import 'vuetify/styles';
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'; 

const vuetify = createVuetify({
  icons: {
    iconfont: 'mdi',  
  },
  theme: {
    themes: {
      light: {
        primary: '#4A90E2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
});

export default vuetify;

