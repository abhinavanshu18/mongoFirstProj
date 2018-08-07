const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if(err){
        return console.log("Not able to connect to Mongo server");
    }
    const db = client.db('TodoApp');
    db.collection('TodoApp').findOneAndUpdate({
        _id: new ObjectID("5b69446797a1d74228951d3d")
    },{
//        $set: {
//            counterNo: 55
//        },
        $inc: {counterNo: 5,"model.orders": 2}
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
});
