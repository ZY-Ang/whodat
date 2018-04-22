import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDqPp8uT7Owr8x-lbfe8MV71xaoE5rHHNQ",
    authDomain: "who-was-dat.firebaseapp.com",
    databaseURL: "https://who-was-dat.firebaseio.com",
    projectId: "who-was-dat",
    storageBucket: "who-was-dat.appspot.com",
    messagingSenderId: "371244557426"
};

/** 2. Initialize application using the provided {@see config} */
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

/** 3. Retrieve and make available
 * {@code firebase.auth()} module,
 * {@code firebase.database()} module,
 * {@code firebase.database} namespace,
 *  to other modules in application */
const auth = firebase.auth();
const dbase = firebase.database();
const authServices = firebase.auth;
const databaseServices = firebase.database;

export {
    auth,
    dbase,
    authServices,
    databaseServices
};
