import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCqBj0Grn-zud-wJOWffViu_17d0DcB7zk",
  authDomain: "dialog-cc1.firebaseapp.com",
  projectId: "dialog-cc1",
  storageBucket: "dialog-cc1.firebasestorage.app",
  messagingSenderId: "152628459233",
  appId: "1:152628459233:web:dc3b9d04fbe99b7be7a9a0",
  measurementId: "G-MD2DCMT8LL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
