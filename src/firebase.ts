// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC9lVCaa1c1bj4DHs0NT3f3IOYMQ9SrzIU",
  authDomain: "web-app-ddc11.firebaseapp.com",
  projectId: "web-app-ddc11",
  storageBucket: "web-app-ddc11.appspot.com",
  messagingSenderId: "748103671711",
  appId: "1:748103671711:web:7393539e78ce7506a767aa",
  measurementId: "G-2SPXPVJTLF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
