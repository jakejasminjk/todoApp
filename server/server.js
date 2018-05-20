const express = require('express');
const bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose.js');
let {Todo} = require('./models/todo.js');
let {User} = require('./models/user.js');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => { //Resource creatio endpoint 
    let todo = new Todo({
        text: req.body.text
    });
    
    todo.save().then((doc) => {
        res.send(doc);
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
