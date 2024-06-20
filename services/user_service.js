const userModel = require('../models/user')
class UserServices {
    static async registerUser(email, password) {
        try {
            const createUser = new userModel({ email, password });
            return await createUser.save();
        } catch (error) {
            throw error
        }
    }
}

module.exports = UserServices;