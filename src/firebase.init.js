// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

// dotenv script

// REACT_APP_apiKey=AIzaSyD21-rtu9nDtoCCsJfLa010-O5xPzRcRGs
// REACT_APP_authDomain=simple-firebase-authenti-79bea.firebaseapp.com
// REACT_APP_projectId=simple-firebase-authenti-79bea
// REACT_APP_storageBucket=simple-firebase-authenti-79bea.appspot.com
// REACT_APP_messagingSenderId=311598678520
// REACT_APP_appId=1:311598678520:web:7ca780c21c50daa1b7d60d
