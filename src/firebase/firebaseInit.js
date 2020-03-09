import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import firebaseConfig from './firebaseConfig'

firebase.initializeApp(firebaseConfig)

const database = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// firebase collections
const usersCollection = database.collection('users')
const bookingCollection = database.collection('booking')
const hostelCollection = database.collection('hostel')

export { 
    database,
    auth,
    currentUser,
    usersCollection,
    bookingCollection,
    hostelCollection
}

