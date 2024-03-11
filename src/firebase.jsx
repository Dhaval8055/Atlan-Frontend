import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVJj8z72k8pdXoA78zD2uvqbKO8-ewMME",
  authDomain: "frontendatlan.firebaseapp.com",
  projectId: "frontendatlan",
  storageBucket: "frontendatlan.appspot.com",
  messagingSenderId: "57983661322",
  appId: "1:57983661322:web:efcaed96709c08ca2936f3",
  measurementId: "G-KRK9DR67G1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};