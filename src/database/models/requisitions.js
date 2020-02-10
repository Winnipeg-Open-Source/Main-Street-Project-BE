export default class Requisitions {
    constructor(dbService, collectionName) {
        this.dbService = dbService;
        this.collectionName = collectionName;
    }

    getAll = async () => {
        const collection = await this.dbService.getCollection(this.collectionName);
        return collection;
    };
};