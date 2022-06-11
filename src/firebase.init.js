// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtceKVz0uzKdg-pq4oLP-zDuhc-fOAU6M",
    authDomain: "education-care-7769b.firebaseapp.com",
    projectId: "education-care-7769b",
    storageBucket: "education-care-7769b.appspot.com",
    messagingSenderId: "999009023961",
    appId: "1:999009023961:web:539ae5a17f681991690bc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;