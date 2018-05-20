const mongoose = require('mongoose');

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true, //makes the value required if set to true. The default of this property is false
        minlength: 1, //sets the minium length of text/string to 1 character
        trim: true //removes any whitespace at the beginging and end of text
    },
    completed: {
        type: Boolean,
        default: false, //If completed is not given a value of true or false then it will be false by default
        required: true
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {
    Todo
}