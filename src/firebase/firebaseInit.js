import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'
import firebaseConfig from './firebaseConfig'

firebase.initializeApp(firebaseConfig)

// firebase utils
const database = firebase.database()
const auth = firebase.auth()
const currentUser = auth.currentUser


export { 
    database,
    auth,
    currentUser,
}

