import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage"

const firebaseConfig = {

    apiKey: "AIzaSyCLFX3gwbv7G_cKYOLcRV23vKzjkMTB2Kc",

    authDomain: "booking-ticket-e8702.firebaseapp.com",

    projectId: "booking-ticket-e8702",

    storageBucket: "booking-ticket-e8702.appspot.com",

    messagingSenderId: "904613268719",

    appId: "1:904613268719:web:f674945212ed309b159f1a",

    measurementId: "G-4GPTTYK7Y9"

};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const storage = getStorage(app)
