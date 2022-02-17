import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB8q9crYo5GpcekRVvxejzFumzJ7aazuxU',
  authDomain: 'house-marketplace-app-2022.firebaseapp.com',
  projectId: 'house-marketplace-app-2022',
  storageBucket: 'house-marketplace-app-2022.appspot.com',
  messagingSenderId: '380876693810',
  appId: '1:380876693810:web:11452fc2b2372fc5cd772b',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
