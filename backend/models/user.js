const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: {
        type: String,
        required: true,
        minlength: 3,
        unique: true
    },
    lname: {
        type: String,
        required: true,
        minlength: 3,
        unique: true
    },
    sex: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    mode: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });

const User = mongoose.model('User', userSchema);
module.exports = User;