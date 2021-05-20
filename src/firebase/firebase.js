import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyDSnA8dVoLVJp2ChPw5IvkfjgBLkz6O_cA',
  authDomain: 'mian-electronics.firebaseapp.com',
  projectId: 'mian-electronics',
  storageBucket: 'mian-electronics.appspot.com',
  messagingSenderId: '60625116842',
  appId: '1:60625116842:web:6d8cf0ec875b907d06bad3',
});

const db = firebaseConfig.firestore();

export default db;
