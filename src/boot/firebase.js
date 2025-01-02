// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const apiKey = process.env.FIREBASE_API_KEY;
let app, analytics;

if (apiKey) {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "personal-web-634c1.firebaseapp.com",
    projectId: "personal-web-634c1",
    storageBucket: "personal-web-634c1.appspot.com",
    messagingSenderId: "125534217272",
    appId: "1:125534217272:web:5df6c71954a11613cbb2cd",
    measurementId: "G-PCV6PVTCRR",
  };

  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
}

export { app, analytics };
