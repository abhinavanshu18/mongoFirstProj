const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    const db = client.db('TodoApp');
    
    db.collection('TodoApp').findOneAndDelete({_id:new ObjectID("5b692b8897a1d7422895140e")}).then((result) => {
        console.log("Result : ",result);
    },(err,result) => {
        console.log("Unexpected error");
    })
    
})