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

    if (process.env.NODE_ENV === 'dev' || true) {
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
    const doc = await db.collection(collection).add({
        ...data,
        created: firebase.firestore.FieldValue.serverTimestamp(),
        updated: firebase.firestore.FieldValue.serverTimestamp(),
    });
    return {
        id: doc.id,
        ...data,
    };
};

export const update = async (collection, id, data) => {
    await db.collection(collection).doc(id).update({
        ...data,
        updated: firebase.firestore.FieldValue.serverTimestamp(),
    });
    return {
        id,
        ...data,
    };
};

export const get = async (collection, id) => {
    const doc = await db.collection(collection).doc(id).get();
    return doc.exists
        ? {
            id: doc.id,
            ...doc.data(),
        }
        : null;
};

export const getAll = async (collection, filters = []) => {
    const documentRef = db.collection(collection);
    const filteredRef = filters.reduce((ref, { key, check, value }) => {
        return ref.where(key, check, value);
    }, documentRef);

    const documents = await filteredRef.get();
    let response = [];
    documents.forEach(doc => {
        response = [
            ...response,
            {
                id: doc.id,
                ...doc.data(),
            },
        ]
    });

    return response;
};

export const deleteOne = async (collection, id) => {
    return await db.collection(collection).doc(id).delete();
};
