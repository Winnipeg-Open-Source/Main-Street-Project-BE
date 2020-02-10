export default class Users {
   constructor( usersModel ) {
      this.usersModel = usersModel;
  }

   async getAll() {
      const users = await this.usersModel.getAll();
      return users;
   };
}