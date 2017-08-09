'use strict';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDlKdhWYC_yMg-5HXiVgg283uQCRILxBXo",
    authDomain: "bootcamp-devs.firebaseapp.com",
    databaseURL: "https://bootcamp-devs.firebaseio.com",
    projectId: "bootcamp-devs",
    storageBucket: "bootcamp-devs.appspot.com",
    messagingSenderId: "1010753981981"
  };

firebase.initializeApp(config);

export default firebase;
