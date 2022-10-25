import firebase from "firebase";

const firebaseConfig = {
  /**
   * PASTE FIREBASE API CREDENTIALS HERE
   * */
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
