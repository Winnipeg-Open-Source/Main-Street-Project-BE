import { Firestore as GoogleFirestore } from '@google-cloud/firestore';

export default class Firestore {
    constructor(){
        this.instance = new GoogleFirestore();
    }

    getCollection = async (collection) => {
        let result;
        await this.instance.collection(collection).get()
        .then(snapshot => {
            result = snapshot.docs.map(doc => {
                return Object.assign({}, { id: doc.id }, { ...doc.data() })
            })
        }).catch(err => {
            console.log('Error getting documents for collection ' + collection, err);
        });
        return result;
    }
}