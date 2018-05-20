const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //Alows us to use the built in promise system
mongoose.connect('mongodb://localhost/TodoApp');

module.exports = {
    mongoose
}