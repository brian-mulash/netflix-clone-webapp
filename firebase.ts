// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb2BQHZpoCCEX-0-0mFBCg7fr1nXJZI_c",
  authDomain: "netflix-clone-001-e4141.firebaseapp.com",
  projectId: "netflix-clone-001-e4141",
  storageBucket: "netflix-clone-001-e4141.appspot.com",
  messagingSenderId: "632385467660",
  appId: "1:632385467660:web:79ca1d35eee8d2b24e8529"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }