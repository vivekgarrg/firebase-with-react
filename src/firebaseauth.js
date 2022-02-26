import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAG4prq6jY1U5CdKcuukRXC5U6LCoUEmkU",
  authDomain: "yt-demo-e3d52.firebaseapp.com",
  projectId: "yt-demo-e3d52",
  storageBucket: "yt-demo-e3d52.appspot.com",
  messagingSenderId: "797243935912",
  appId: "1:797243935912:web:52f042d8bb97ca7031469d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();