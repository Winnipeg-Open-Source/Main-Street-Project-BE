export default class Donations {
    constructor( donationsModel ) {
       this.donationsModel = donationsModel;
   }
 
    async getAll() {
       const users = await this.donationsModel.getAll();
       return users;
    };
 }