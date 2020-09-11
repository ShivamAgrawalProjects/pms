const firebase = require("firebase/app");
require("firebase/firestore"); //if using firebase dataabase
require("firebase/storage");
//require("firebase/messaging");
require("firebase/auth");
//your web app's firebase configuration

if (!firebase.apps.length){
    const config = {
            apiKey: "AIzaSyAE01-dQHhQE_JS9jWVxhXjYYm6TsJ1boE",
            authDomain: "project-management-d6607.firebaseapp.com",
            databaseURL: "https://project-management-d6607.firebaseio.com",
            projectId: "project-management-d6607",
            storageBucket: "project-management-d6607.appspot.com",
            messagingSenderId: "886016954377",
            appId: "1:886016954377:web:3052b7486d5cc579ae28d8"
        
    };
    firebase.initializeApp(config);
}
export const db= firebase.firestore();
export const storage= firebase.storage();
export const auth= firebase.auth();
