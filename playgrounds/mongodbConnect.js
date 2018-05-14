/*const MongoClient = require("mongodb").MongoClient;*/
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost/TodoApp', (err, client) => {
    if(err){
        console.log('Cannot connect to the mongodb client' , err);
    }
    
    console.log('Connected to mongodb client');
    const db = client.db('TodoApp');
    
    /*db.collection('Todos').insertOne({
        text: 'Something',
        completed: false
    }, (err, result) => {
        if(err){
            console.log('unable to insert the Task');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });*/
      db.collection('User').insertOne({
          name: 'Kervens',
          age: '19',
          location: 'Queens New York'
      }, (err, result) => {
          if(err){
              console.log('Unable to add Task');
          }
          
          console.log(JSON.stringify(result.ops, undefined, 2));
      });
    client.close();
});