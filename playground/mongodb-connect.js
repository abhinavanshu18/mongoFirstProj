const {MongoClient,ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
     if(err){
         return console.log("Unable to connect, connection failed");
     }
     const db = client.db('TodoApp');
     db.collection('Todos').insertOne({
         text:'My name is Ema',
         completed: false
     },(err,result) => {
         if(err){
             console.log('Error in inserting value to the db');
         }
         console.log(JSON.stringify(result.ops, undefined,2));
         client.close();
     })
 })
