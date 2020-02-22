const UserModel = require('./model');

module.exports = {
    /**
     * @exports
     * @method findAll
     * @param {}
     * @summary get list of all users
     * @returns Promise<UserModel[]>
     */
    async findAll() {
        return await UserModel.find({});
    }, 
    async findUsers(query) {
        return await UserModel.find(query);
    },
    async createUser(email, fullName) {
        return await UserModel.create({email, fullName});
    },
    async updateUser(email, fullName) {
        return await UserModel.updateMany({email}, {$set: {fullName}});
    }, 
    async deleteUser(body) {
        return await UserModel.deleteMany(body);
    }
};
