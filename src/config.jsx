
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyCGlgcRGAXhjUWqMD8X-jAZLv6ui8K0DNM",
    authDomain: "candyshop-98f54.firebaseapp.com",
    projectId: "candyshop-98f54",
    storageBucket: "candyshop-98f54.appspot.com",
    messagingSenderId: "232068840820",
    appId: "1:232068840820:web:dcbe3c7c8eddf83b724021"
};


const app = initializeApp(firebaseConfig);
export const datab = getFirestore(app)