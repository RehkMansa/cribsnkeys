import { firebaseConfig } from './config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
