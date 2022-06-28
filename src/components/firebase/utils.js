import { firebaseConfig } from './config';
import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
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
    .then(async (userCredentials) => {
      const user = userCredentials.user;
      data = user;

      const dataRef = await checkUserDB('users', user);
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
    const { email } = userObj;

    try {
      await setDoc(userRef, { email });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};
