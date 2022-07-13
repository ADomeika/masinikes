import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBa5PAdGwROtDQpT8f97TQJ3EECU4reO5g",
    authDomain: "masinikes-f64ea.firebaseapp.com",
    databaseURL:
        "https://masinikes-f64ea-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "masinikes-f64ea",
    storageBucket: "masinikes-f64ea.appspot.com",
    messagingSenderId: "289894429877",
    appId: "1:289894429877:web:5bff1bf9cdc60932ca3afc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
