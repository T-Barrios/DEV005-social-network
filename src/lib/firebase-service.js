import {
// eslint-disable-next-line max-len
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword, signInWithPopup as firebaseSignInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword as firebasecreateUserWithEmailAndPassword,
} from 'firebase/auth';

import { auth } from './index';

// login with email and password
export const signInWithEmailAndPassword = (email, password) => firebaseSignInWithEmailAndPassword(
  auth,
  email,
  password,
);

// login with google
export const provider = new GoogleAuthProvider();

export const signInWithPopup = () => firebaseSignInWithPopup(
  auth,
  provider,
);

// create user with Email and Password
// eslint-disable-next-line max-len
export const createUserWithEmailAndPassword = (email, password) => firebasecreateUserWithEmailAndPassword(
  auth,
  email,
  password,
);
