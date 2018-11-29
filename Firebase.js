
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyDHfJ51iSjljlypmgo9vuiO8TwoBGa9Xlw",
  authDomain: "songlist-pro.firebaseapp.com",
  databaseURL: "https://songlist-pro.firebaseio.com",
  projectId: "songlist-pro",
  storageBucket: "songlist-pro.appspot.com",
  messagingSenderId: "347513600134"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
