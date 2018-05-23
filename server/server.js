const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb'); 

const {mongoose} = require('./db/mongoose.js');
const {Todo} = require('./models/todo.js');
const {User} = require('./models/user.js');

let app = express();
var port = process.env.DATABASEURL || 'mongodb://localhost/TodoApp'
app.use(bodyParser.json());

app.post('/todos', (req, res) => { //Resource creation endpoint 
    let todo = new Todo({
        text: req.body.text
    });
    
    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req,res) => {
    Todo.find({}).then((todos) => {
        res.send({todos}); //setting the todos as an object rather than an array(without the brackets it's an array)
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
     if(!ObjectID.isValid(id)){
         return res.status(404).send();
     }
         Todo.findById(id).then((todo) => {
        if(!todo){
         return res.status(404).send();
        }else{
        res.send({todo});
        }
    }).catch((e) => {
        res.status(400).send();
    });
        
});

app.listen(port, function(){
   console.log("Todo app started");
});

module.exports = {
    app
};
