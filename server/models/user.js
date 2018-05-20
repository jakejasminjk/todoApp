const mongoose = require('mongoose');

let User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    email:{
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

module.exports = {
    User
}