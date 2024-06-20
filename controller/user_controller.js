const userService = require('../services/user_service');

exports.register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const successResponse = await userService.registerUser(email, password);
        res.json({ status: true, success: "User Registered Successfully" });
    } catch (error) {
        throw error;
    }
}