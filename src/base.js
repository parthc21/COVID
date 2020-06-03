import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey:"AIzaSyBzUuCyjZ0FNhDWuJUz9zKeaO9CTsZQ2GA",
    authDomain:"covid-8d474.firebaseapp.com",
    databaseURL:"https://covid-8d474.firebaseio.com",
    projectId:"covid-8d474",
    storageBucket:"covid-8d474.appspot.com",
    messagingSenderId:398767735541
});

export default app;