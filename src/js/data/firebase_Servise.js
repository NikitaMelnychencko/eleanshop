import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set, get, child, push } from 'firebase/database';
import { preloaderIsHided, preloaderDisable } from '../layout/static/preloader/preloader_bar.js';

const firebaseConfig = {
  apiKey: 'AIzaSyC1qUSZYYp9JGXkqmhapdC3qhIxtQY25m0',
  authDomain: 'eleanshop-e03b5.firebaseapp.com',
  databaseURL: 'https://eleanshop-e03b5-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'eleanshop-e03b5',
  storageBucket: 'eleanshop-e03b5.appspot.com',
  messagingSenderId: '1079286816195',
  appId: '1: 1079286816195: web: 61ebf3670b32e79893f176',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const dbRef = ref(getDatabase());
const auth = getAuth();
export const user = auth.currentUser;
export let userId = sessionStorage.getItem('userId');
const email = 'test@gmail.com';
const password = 'tesdadt1';

// Aut User
export function signInUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      swetchClass();
      addClass();
      if (localStorage.getItem('idFilm') !== null) {
        updateButton(localStorage.getItem('idFilm'));
      }
      return userCredential.user;
    })
    .catch(error => {
      const errorMessage = error.message;
    });
}
signInUser(email, password);

// State User
export async function AuthState(user) {
  return await onAuthStateChanged(auth, user => {
    if (user) {
      userId = user.uid;
      return sessionStorage.setItem('userId', `${userId}`);
    } else {
      return;
    }
  });
}

window.onload = function () {
  setTimeout(preloaderIsHided, 1500);
  setTimeout(preloaderDisable, 2000);
  AuthState(user);
};

//getSection
export async function getSection(nextFolder) {
  return await get(child(dbRef, 'database/' + nextFolder))
    .then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    })
    .catch(error => {
      console.error(error);
    });
}

//Post;
export async function postUserData(userId, folder, data, baseFolder) {
  if (userId === null) {
    return;
  }
  const postListRef = ref(db, baseFolder + folder);
  const newPostRef = push(postListRef);
  return await set(newPostRef, {
    data,
  });
}
