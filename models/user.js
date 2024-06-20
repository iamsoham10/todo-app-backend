const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userschema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});

userschema.pre('save', async function () {
    try {
        var user = this;
        const salt = await (bcrypt.genSalt(11));
        const hashpassword = await bcrypt.hash(user.password, salt);
        user.password = hashpassword;
    } catch (error) {

    }
})

module.exports = mongoose.model("User", userschema);