export default class Requisitions {
    constructor( requisitionsModel ) {
       this.requisitionsModel = requisitionsModel;
   }
 
    async getAll() {
       const users = await this.requisitionsModel.getAll();
       return users;
    };
 }