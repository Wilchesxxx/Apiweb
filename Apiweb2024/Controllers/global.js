import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js'
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'

import { 
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
  //sing
  
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'

import {
  getFirestore,
  collection,
  addDoc

} from 'https://www.gstatic.com/firebasejs/10.9.0/firebas-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyDrrSpREGjAaVTzrAfMCHmOL-gaIQojI7w",
  authDomain: "api2024-b568b.firebaseapp.com",
  projectId: "api2024-b568b",
  storageBucket: "api2024-b568b.appspot.com",
  messagingSenderId: "26726093552",
  appId: "1:26726093552:web:9329993151e91d25f92835",
  measurementId: "G-Q401V0L3BG"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const db = getFirestore();


document.addEventListener('DOMContentLoaded', function() {
  const Login = document.getElementById('Login');
  if (Login) {
      Login.addEventListener('click', function(e) {
        signInWithRedirect(auth, provider);

        getRedirectResult(auth)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access Google APIs.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
      
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
      });
  }
});

  
//metodo de inicio de sesion
export const loginvalidation =(email, password)=>
  signInWithEmailAndPassword(auth, email, password)


  export const logout=()=>signOut(auth)

export function observador(){
onAuthStateChanged(auth, (user) => {
  if (user) {
      const uid = user.uid;
      console.log(uid)
    
    } else {
     window.location.href='../index.html'
    }
  });
}
///////Servicios de firestore
////Registrar una coleccion de datos
export const AddData=(first,last,born)=> 
 addDoc(collection(db, "users"),{
    first,
    last,
    born
  });

 

  
