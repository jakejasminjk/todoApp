const express = require('express');
const bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose.js');
let {Todo} = require('./models/todo.js');
let {User} = require('./models/user.js');

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
    })
});

app.get('/todos', (req,res) => {
    Todo.find({}).then((todos) => {
        res.send({todos}); //setting the todos as an object rather than an array(without the brackets it's an array)
    }, (err) => {
        res.status(400).send(err);
    })
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Todo app started");
});

module.exports = {
    app
};
