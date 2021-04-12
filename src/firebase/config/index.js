import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCM0J3TTLl7xhn4R-4sIFB47nME_umZ7mc',
  authDomain: 'portfolio-87bfa.firebaseapp.com',
  projectId: 'portfolio-87bfa',
  storageBucket: 'portfolio-87bfa.appspot.com',
  messagingSenderId: '453754440679',
  appId: '1:453754440679:web:ac4576c4e1a915e2380b42',
  measurementId: 'G-XJYQDDZCEY',
});

const db = firebaseApp.firestore();

export { db };
