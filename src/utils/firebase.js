import * as firebase from 'firebase'

class FirebaseInstance {
    constructor() {
        if (!FirebaseInstance.instance) {
            this.firebase = firebase.initializeApp({
                apiKey: process.env.FB_API_KEY,
                authDomain: process.env.FB_AUTH_DOMAIN,
                databaseURL: process.env.FB_DATABASE_URL,
                storageBucket: process.env.FB_STORAGE_BUCKET,
                messagingSenderId: process.env.FB_MESSAGING_SENDER_ID
            })
        }
        return FirebaseInstance.instance
    }
}

const instance = new FirebaseInstance();
Object.freeze(instance);

export default instance