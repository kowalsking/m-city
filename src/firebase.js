import firebase from 'firebase/app';
import 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyCwQCOYnf0hPG1ATql0HiInIw-5HHbIqR8",
    authDomain: "m-city-547c7.firebaseapp.com",
    databaseURL: "https://m-city-547c7.firebaseio.com",
    projectId: "m-city-547c7",
    storageBucket: "m-city-547c7.appspot.com",
    messagingSenderId: "817996808705"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();

  firebaseDB.ref('matches').once('value').then( (snapshot) => {
    console.log(snapshot.val());
  })
