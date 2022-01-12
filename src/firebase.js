import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app =  initializeApp({
  apiKey: "AIzaSyBdmov3w1VstRMOOx3apg4S9Q_EVkDtYWw",
  authDomain: "project1-addf0.firebaseapp.com",
  databaseURL: "https://project1-addf0-default-rtdb.firebaseio.com",
  projectId: "project1-addf0",
  storageBucket: "project1-addf0.appspot.com",
  messagingSenderId: "190737307461",
  appId: "1:190737307461:web:77c78bcf7eafb71642902c",
  measurementId: "G-ZHG1FTPZWR"
});

// Initialize Firebase
export default  app ;
export const auth = getAuth(app);

