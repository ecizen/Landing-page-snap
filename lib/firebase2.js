import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAe6mb4bEMXeDTpCHQdw5z2SGa3966bjPs",
    authDomain: "pixel-snap-d4d2f.firebaseapp.com",
    projectId: "pixel-snap-d4d2f",
    storageBucket: "pixel-snap-d4d2f.appspot.com",
    messagingSenderId: "198455534135",
    appId: "1:198455534135:web:cd87b74578b64214c1d5b2",
    measurementId: "G-XEEKSP60SK"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

export {auth};
