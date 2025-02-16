import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeApp } from 'firebase/app'
import './index.css'
import App from './App.jsx'
import { ShoppingCartProvider } from './context/ShoppingCartContext.jsx'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1v1xH7JYLI92MsLvbLmpZflFzFjXcL34",
  authDomain: "proyectoreact-7735c.firebaseapp.com",
  projectId: "proyectoreact-7735c",
  storageBucket: "proyectoreact-7735c.firebasestorage.app",
  messagingSenderId: "847172432730",
  appId: "1:847172432730:web:cf4b1fc3aa8ea52f5a3963"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <App />
  </StrictMode>
  ,
)
