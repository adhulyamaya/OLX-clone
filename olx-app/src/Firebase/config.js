// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9Dffl-zdliVQkncLBnYIe7ORYz-qo5KM",
  authDomain: "olxclone-7dfb8.firebaseapp.com",
  projectId: "olxclone-7dfb8",
  storageBucket: "olxclone-7dfb8.appspot.com",
  messagingSenderId: "129797287708",
  appId: "1:129797287708:web:6716bc735da2653bc154d9",
  measurementId: "G-4G76S25NRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);


export default app;