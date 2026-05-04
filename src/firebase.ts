import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAK8ShsstYvifbwmHSzhI2N0I8beB6mjCo",
  authDomain: "dub-hub-95de5.firebaseapp.com",
  projectId: "dub-hub-95de5",
  storageBucket: "dub-hub-95de5.firebasestorage.app",
  messagingSenderId: "703653915496",
  appId: "1:703653915496:web:6b4351ef6f5d17caf444dd",
  measurementId: "G-2YY5DLNC1D"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;

export const uploadToCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'dubhub_preset');

  const response = await fetch('https://api.cloudinary.com/v1_1/dxnp0qmon/upload', {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  return data.secure_url;
};