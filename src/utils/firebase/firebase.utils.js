import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnGL3RkoCyPGfad995cvhY7l1TpeXZfng",
  authDomain: "crwn-clothing-db-44d08.firebaseapp.com",
  projectId: "crwn-clothing-db-44d08",
  storageBucket: "crwn-clothing-db-44d08.appspot.com",
  messagingSenderId: "824002122529",
  appId: "1:824002122529:web:62bc198e6c57abc2076460",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, googleProvider);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const getCategoriesAndDocuments = async () => {
  const querySnapshot = await getDocs(collection(db, "collection"));
  return querySnapshot.docs.map((docSnapShot) => docSnapShot.data());
};
