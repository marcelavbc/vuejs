const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
         required: 'Username is required',
    },
    email: {
        type: String,
        required: 'Email address is required',
    },
    password: {
        type: String,
        required: 'Password is required',
    },
    recipes: [],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema);
