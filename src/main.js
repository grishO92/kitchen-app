import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCcnJFhwotDkvOAm2qYrMdxxTBt-QRQIOU',
  authDomain: 'kitchen-app-81d78.firebaseapp.com',
  projectId: 'kitchen-app-81d78',
  storageBucket: 'kitchen-app-81d78.appspot.com',
  messagingSenderId: '438100497231',
  appId: '1:438100497231:web:04906222c0347fbf62eb3a',
  measurementId: 'G-YE7KGM17QK',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount('#app');
  }
});

// createApp(App)
//       .use(router)
//       .mount('#app');
