import { firebaseConfig } from './config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export const emailSignUp = async (email, password) => {
  let data = null;
  let errors = null;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;

      data = user;
    })
    .catch((err) => {
      errors = {
        code: err.code,
        message: err.message,
      };
    });

  return { data, errors };
};
