// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAF-3mjemO44AIf70D7JQ8gVwQGMdS67ag',
  authDomain: 'social-network-05-e6e95.firebaseapp.com',
  projectId: 'social-network-05-e6e95',
  storageBucket: 'social-network-05-e6e95.appspot.com',
  messagingSenderId: '624975340622',
  appId: '1:624975340622:web:fa39eef9c17e33ff4c4f1f',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
