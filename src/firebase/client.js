import {initializeApp} from "firebase/app"
import {getFirestore, collection, getDocs } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBYCIL64QmTKsGzE0SdllqxoWc6HGgMrug",
    authDomain: "proyectoreact-10954.firebaseapp.com",
    projectId: "proyectoreact-10954",
    storageBucket: "proyectoreact-10954.appspot.com",
    messagingSenderId: "322415596104",
    appId: "1:322415596104:web:2edf4e43104d84b28cbe7d"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { collection, getDocs, db };