import Firebase from 'firebase'
import firebaseInstance from '../utils/firebase'
const firebase = firebaseInstance.firebase;

const clientRef = firebase.database().ref(`${process.env.CLIENT_KEY}/`)

export const initDb = (cb) => {
	firebase.auth().onAuthStateChanged(function (user) {
		cb(user)
	})
}

export const currentFirebaseUser = () => {
	return firebase.auth().currentUser
}

export const signout = () => {
	firebase.auth().signOut()
}