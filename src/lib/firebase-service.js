import {
// eslint-disable-next-line max-len
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword, signInWithPopup as firebaseSignInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword as firebasecreateUserWithEmailAndPassword,
  signOut as firebasesignOut,
} from 'firebase/auth';

import { auth, db } from './index';

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

// SignOut
export const signOut = () => firebasesignOut(
  auth,
);
