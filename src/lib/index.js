// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword } from 'firebase/auth';
import { async } from 'regenerator-runtime';
import login from './Views/login';
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
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
connectAuthEmulator(auth, 'http://localhost:5173');
// function for when user taps on the login button
const loginEmailPassword = async () => {
  // to sign the user in, i need to fetch thier credentials by reading the value of the email and
  // password input fields of the login form
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  // calls the signInWithEmailAndPassword funtion (takes 3 parameters:
  // the firebaseAuth instance, the email address, and the password)
  // the return value is a promise, so i can use await to call it and then assign
  // the return value to a new local variable.
  // when calling an async function using await, the promise will be unwrapped
  // so this variable is of type user credential
  // usar credential has 3 attributes, one of them is the user itself
  const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  console.log(userCredential.user);
};

// it hooks up to the click event listener of the login button on the login form

const x = 'fdfs';
// const btn = x.getElementById('title');
console.log(x);
