import { initializeApp } from 'firebase/app';  // Use Firebase JS SDK
import { getAuth } from 'firebase/auth';  // Use Firebase Authentication JS SDK
import { getFirestore } from 'firebase/firestore';  // Use Firestore JS SDK

const firebaseConfig = {
  apiKey: "AIzaSyAEUvzCHs9Wc8bW010a6yEvg3aJQ5WPeJ8",
  authDomain: "mob-app-project-4a8ee.firebaseapp.com",
  projectId: "mob-app-project-4a8ee",
  storageBucket: "mob-app-project-4a8ee.firebasestorage.app",
  messagingSenderId: "237114503538",
  appId: "1:237114503538:web:9dffe0aab41e04cf41edeb",
  databaseURL: "https://mob-app-project-4a8ee.firebaseio.com", // Add this line to your configuration
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default app;
