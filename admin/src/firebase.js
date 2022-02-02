import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDtbZDjscSIZD5G13T1eylO2-BSKKARy7U",
  authDomain: "netflix-eb3a9.firebaseapp.com",
  projectId: "netflix-eb3a9",
  storageBucket: "netflix-eb3a9.appspot.com",
  messagingSenderId: "696188048604",
  appId: "1:696188048604:web:759755478ef43aa8ec9019",
  measurementId: "G-HHDSS2JY5M",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
