import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWe9IwBJxvVSvBdHcKPxwsBoU0wH14B0M",
  authDomain: "andika-blog.firebaseapp.com",
  projectId: "andika-blog",
  storageBucket: "andika-blog.appspot.com",
  messagingSenderId: "1044449790831",
  appId: "1:1044449790831:web:b3bf25339e8d37c392f69a",
  measurementId: "G-D293YM34YH",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
