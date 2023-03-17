import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    onAuthStateChanged,
    createUserWithEmailAndPassword,   
    signInWithEmailAndPassword,
    sendEmailVerification, 
    //read data from Firebase    
} from "firebase/auth"
//ref = reference to a "collection"
import { 
    getDatabase, 
    ref as firebaseDatabaseRef, 
    set as firebaseSet,
    child,
    get,
    onValue,
} from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBl5sEpTVGuA6ZAPyr_Ry2AGArxpkX8pSM",
    authDomain: "felp-f0c68.firebaseapp.com",
    databaseURL: "https://felp-f0c68-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "felp-f0c68",
    storageBucket: "felp-f0c68.appspot.com",
    appId: "1:182345423012:android:92c264e59f15d2a105ae31",
    messagingSenderId: "182345423012",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const firebaseDatabase = getDatabase()

export {
    auth,
    firebaseDatabase,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    firebaseSet,
    firebaseDatabaseRef,
    sendEmailVerification,
    child,
    get,
    onValue, //reload when online DB changed
    signInWithEmailAndPassword,
}
