import { firebaseConfig } from './config';
import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();

export const storage = getStorage();

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
      await setDoc(userRef, { email, displayName, role: 'user' });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};

export const saveWithID = async (dbLocation, uid, data) => {
  const dataRef = doc(db, dbLocation, uid);

  let postData;
  typeof data === 'object' && data != null
    ? (postData = { ...data })
    : (postData = data);

  await setDoc(dataRef, postData);
};

export const saveWithAutoID = async (dbLocation, data) => {
  const dataRef = collection(db, dbLocation);

  const postData = serializeData(data);

  const docRef = await addDoc(dataRef, postData);

  return docRef.id;
};

const serializeData = (data) =>
  typeof data === 'object' && data != null ? { ...data } : data;

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

export const uploadImage = async (location, imageName, image) => {
  if (image === null) return;
  const dataRef = (location + '/' + imageName + '-' + v4()).toString();
  const imageRef = ref(storage, dataRef);

  const imageUpload = await uploadBytes(imageRef, image);

  const imageURL = await getDownloadURL(imageRef);

  const filePath = imageUpload.metadata.fullPath;

  return { imageURL, filePath, dataRef };
};

export const updateDocument = async (location, uid, dataObj) => {
  const dataRef = doc(db, location, uid);
  const update = await updateDoc(dataRef, { ...dataObj });

  return { ...update, dataRef };
};
export const fetchAll = async (dbLocation) => {
  const colRef = collection(db, dbLocation);
  let dataResponse = [];
  await getDocs(colRef).then((snapshot) => {
    const fetchedData = snapshot.docs.map((snap, n) => {
      return { ...snap.data(), snapID: snap.id };
    });

    dataResponse = fetchedData;
  });

  return dataResponse;
};

export const queryDB = async (dbLocation, queryLocation, queryParams) => {
  const colRef = collection(db, dbLocation);
  const queryRef = where(queryLocation, '==', queryParams);
  const q = query(colRef, queryRef);

  const querySnapShot = await getDocs(q);

  querySnapShot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
};
