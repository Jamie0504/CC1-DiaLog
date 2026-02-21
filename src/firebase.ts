import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDPLOK_FXai4mBLZmqFIMTnOIlrsb1kGOk",
  authDomain: "dialog-cc1.firebaseapp.com",
  projectId: "dialog-cc1",
  storageBucket: "dialog-cc1.firebasestorage.app",
  messagingSenderId: "648498337257",
  appId: "1:648498337257:web:e36b4a573bd92c5cd30e5e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
