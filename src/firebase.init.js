// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAc-egt-85Tw8RbdUpITYKEuhi4gJ6YTgI",
    authDomain: "markdown-the-thought.firebaseapp.com",
    projectId: "markdown-the-thought",
    storageBucket: "markdown-the-thought.appspot.com",
    messagingSenderId: "377823077456",
    appId: "1:377823077456:web:2740013ffd38481ddadd55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;