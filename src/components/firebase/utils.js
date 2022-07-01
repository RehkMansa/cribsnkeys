import { firebaseConfig } from './config';
import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export const emailSignUp = async (email, password) => {
  let data = null;
  let errors = null;
  await createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredentials) => {
      const user = userCredentials.user;
      data = await checkUserDB('users', user);
    })
    .catch((err) => {
      errors = {
        code: err.code,
        message: err.message,
      };
    });

  return { data, errors };
};
export const checkUserDB = async (dbLocation, userObj) => {
  const { uid } = userObj;

  const userRef = doc(db, dbLocation, uid);

  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const { email, displayName } = userObj;

    try {
      await setDoc(userRef, { email, displayName });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};

export const emailSingIn = async (email, password) => {
  let data = null;
  let errors = null;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      data = userCredentials.user;
    })
    .catch((err) => {
      errors = {
        code: err.code,
        message: err.message,
      };
    });

  return { data, errors };
};
