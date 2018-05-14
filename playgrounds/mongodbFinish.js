/*const MongoClient = require("mongodb").MongoClient;*/
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost/TodoApp', (err, client) => {
    if(err){
        console.log('Cannot connect to the mongodb client' , err);
    }
    
    console.log('Connected to mongodb client');
    const db = client.db('TodoApp');
   /* db.collection('Task').insertMany([{
          name: 'Run',
          location: 'Space',
          completed: true
      },{
          name: 'Jump',
          location: 'Space',
          completed: false
      },{
          name: 'Hop',
          location: 'Park',
          completed: true
      },{
          name: 'Dab',
          location: 'Park',
          completed: false
      }], (err, result) => {
          if(err){
              console.log('Unable to add Task');
          }
          
          console.log(JSON.stringify(result.ops, undefined, 2));
      });*/
   /*db.collection('Task').find().toArray().then((docs) => {
       console.log('Task');
       console.log(JSON.stringify(docs, undefined, 2));
   }, (err) => {
       if(err){
           console.log('We have an error');
       }
   })*/
  /* db.collection('Task').find( {completed: true, location: 'Space'} ).toArray().then((docs) => {
       console.log('Task');
       console.log(JSON.stringify(docs, undefined, 2));
   }, (err) => {
       if(err){
           console.log('We have an error', err);
       }
   })*/
   db.collection('Task').find().count().then((count) => {
       console.log(`Task count: ${count}`);
       
   }, (err) => {
       if(err){
           console.log('We have an error', err);
       }
   })
    //client.close();
});