
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-agent-9c57a.firebaseapp.com",
  projectId: "interview-agent-9c57a",
  storageBucket: "interview-agent-9c57a.firebasestorage.app",
  messagingSenderId: "477257314165",
  appId: "1:477257314165:web:eb4a21b06d2d85f7f72d3c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}