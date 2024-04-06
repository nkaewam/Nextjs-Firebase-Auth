import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

export { AuthErrorCodes, linkWithCredential } from "firebase/auth";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

auth.useDeviceLanguage();

type OAuthSignIn = {
  method: "GOOGLE";
};

type SignIn = OAuthSignIn;

export const signIn = async (param: SignIn) => {
  switch (param.method) {
    case "GOOGLE":
      return signInWithRedirect(auth, new GoogleAuthProvider());
    default:
      throw new Error("Unsupported sign-in method");
  }
};

// export const signOut = async () => {
//   await auth.signOut();
//   window.location.replace(ROUTES.HOME);
// };

// export const createUser = async (email: string, password: string) => {
//   try {
//     await createUserWithEmailAndPassword(auth, email, password);
//   } catch (e) {
//     throw new Error("Error creating user");
//   }
// };
