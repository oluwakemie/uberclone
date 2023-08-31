import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg-G98FrxnLL6dQmx-_olvpmcrW28kKjI",
  authDomain: "uber-next-clone-live-8ba37.firebaseapp.com",
  projectId: "uber-next-clone-live-8ba37",
  storageBucket: "uber-next-clone-live-8ba37.appspot.com",
  messagingSenderId: "558817811218",
  appId: "1:558817811218:web:49ba28496372687477f1cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

























// import { initializeApp } from "firebase/app";
// import {GoogleAuthProvider, getAuth} from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: "AIzaSyBg-G98FrxnLL6dQmx-_olvpmcrW28kKjI",
//   authDomain: "uber-next-clone-live-8ba37.firebaseapp.com",
//   projectId: "uber-next-clone-live-8ba37",
//   storageBucket: "uber-next-clone-live-8ba37.appspot.com",
//   messagingSenderId: "558817811218",
//   appId: "1:558817811218:web:49ba28496372687477f1cb"
// }; 

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const provider = new GoogleAuthProvider()
// const auth = getAuth()

// export { app, provider, auth}







