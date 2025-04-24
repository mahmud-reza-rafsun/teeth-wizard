import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUdPZByakfmQslGbvMcK0ApVXoCyFQsY4",
  authDomain: "simple-firebase-pra.firebaseapp.com",
  projectId: "simple-firebase-pra",
  storageBucket: "simple-firebase-pra.firebasestorage.app",
  messagingSenderId: "199879606377",
  appId: "1:199879606377:web:461d53fc11f87c73b822f8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);