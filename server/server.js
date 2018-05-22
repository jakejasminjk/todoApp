const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb'); 

const {mongoose} = require('./db/mongoose.js');
const {Todo} = require('./models/todo.js');
const {User} = require('./models/user.js');

let app = express();

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
     if(ObjectID.isValid(req.params.id)){
         return res.status(400).send('This is not a vail id');
     }
         Todo.findById(req.params.id).then((todo) => {
        if(!req.params.id){
            res.status(400).send('Id does not match a todo');
        }else{
        res.send(todo);
        }
    }).catch((e) => {
        console.log('ERROR WARNING', e);
    });
        
});
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Todo app started");
});

module.exports = {
    app
};
