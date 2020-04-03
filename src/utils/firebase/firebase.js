import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA_AQVxsSjqXgsVQgUIIOyNGvXpXY-9FtY",
    authDomain: "main-street-project-qa.firebaseapp.com",
    databaseURL: "https://main-street-project-qa.firebaseio.com",
    projectId: "main-street-project-qa",
    storageBucket: "main-street-project-qa.appspot.com",
    messagingSenderId: "941395738080",
    appId: "1:941395738080:web:694c42266e474dd2553f85",
    measurementId: "G-F0J5X7MPXP"
};

let provider, auth, db;

if (process.env.NODE_ENV !== 'test') {
    firebase.initializeApp(firebaseConfig);

    if (typeof window === 'object' && window.location.hostname === 'localhost') {
        console.log('Using emulated firestore.');
        firebase.firestore().settings({
            host: 'localhost:8081',
            ssl: false,
        });
    }

    provider = new firebase.auth.GoogleAuthProvider();
    auth = new firebase.auth();
    db = firebase.firestore();
}

export {
    auth,
    db,
    provider,
};

export const create = async (collection, data) => {
    return await db.collection(collection).doc().set(data);
};

export const update = async (collection, id, data) => {
    return await db.collection(collection).doc(id).update(data);
};

export const get = async (collection, id) => {
    return await db.collection(collection).doc(id).get();
};

export const getAll = async (collection) => {
    const documents = await db.collection(collection).get();

    let response = [];
    documents.forEach(doc => {
        response = [
            ...response,
            doc.data(),
        ]
    });

    return response;
};

export const deleteOne = async (collection, id) => {
    return await db.collection(collection).doc(id).delete();
};
