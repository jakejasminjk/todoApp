const {ObjectID} = require('mongodb'); 
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require("./../server/models/todo");

let id = '5b022e954a787e07992ff7fe';

if (ObjectID.isValid(id)) {
    console.log('Not a vaiid id');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos: ', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo: ', todo);
});

Todo.findById(id).then((todo) => {
    if(todo === null && !todo){
       return console.log('Todo does not exist');
    }else{
     console.log('Todo by Id: ', todo);
    }
}).catch((e) => {
    console.log('ERROR CANNOT FIND ID', e);
});
