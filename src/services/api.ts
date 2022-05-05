import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import configFirebase from "../firebase/firebase.config";
import Cookies from "js-cookie";

// verificando app esta iniliaclizado na firebase

if (!firebase.apps.length) {
  firebase.initializeApp(configFirebase);
  /*  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID, */
}
export async function loginGoogle() {
  try {
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    gerenciaCookei(true);
    return normalizeUser(response);
  } finally {
  }
}

export function normalizeUser({ user }: firebase.auth.UserCredential) {
  console.log("user", user);
  return {
    id: user?.uid || null,
    name: user?.displayName || null,
    email: user?.email || null,
    avatar: user?.photoURL || null,
  };
}

export async function loginFacebook() {
  try {
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.FacebookAuthProvider());
    gerenciaCookei(true);
    return normalizeUser(response);
  } finally {
  }
}

export function gerenciaCookei(logaod: boolean) {
  if (logaod) {
    Cookies.set("whatsappclone-auth", logaod, {
      expires: 6,
    });
  } else {
    Cookies.remove("whatsappclone-auth");
  }
}

export { firebase };
