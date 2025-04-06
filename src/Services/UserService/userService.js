// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBF9KrKsoPvUPC1NX5wEiWWkfUs3Y9zlqk",
    authDomain: "movie-website-2083b.firebaseapp.com",
    projectId: "movie-website-2083b",
    storageBucket: "movie-website-2083b.firebasestorage.app",
    messagingSenderId: "140412647045",
    appId: "1:140412647045:web:c1660c102b1ada08e41bec",
    measurementId: "G-50VMKSRP22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);