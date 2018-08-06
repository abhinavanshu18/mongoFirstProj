const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if(err){
        console.log('Unable to connect to the server');
    }
    
    const db = client.db('TodoApp');
    
    db.collection('TodoApp').find().count().then((count) => {
        console.log('Todos Count',JSON.stringify(count, undefined, 2));
    },(err) => {
        console.log("Unable to fetch todosApp" , err);
    })
})