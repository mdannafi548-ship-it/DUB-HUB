import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK8ShsstYvifbwmHSzhI2N0I8beB6mjCo",
  authDomain: "dub-hub-95de5.firebaseapp.com",
  projectId: "dub-hub-95de5",
  storageBucket: "dub-hub-95de5.firebasestorage.app",
  messagingSenderId: "703653915496",
  appId: "1:703653915496:web:6b4351ef6f5d17caf444dd",
  measurementId: "G-2YY5DLNC1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;