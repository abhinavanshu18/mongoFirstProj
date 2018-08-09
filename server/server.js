var express = require('express');
var bodyParse = require('body-parser');

var { mongoose } = require('./db/mongoose.js');
var { Todo } = require('./models/todo.js');
var { User } = require('./models/user.js');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParse.json());

app.post('/todos',(req , res) => {
    var todo = new Todo({
        text:req.body.text
    });
   
    todo.save().then((doc) => {
        res.send(doc);
        console.log(req.body);
    },(e) => {
        res.status(400).send(e);
    });
    
});
//app.get('/todos',(req,res) => {
//    Todo.find().then((todos) => {
//        res.send({todos})
//    },(e) => {
//        res.status(400).send(e);
//    })
//})
app.get('/todos',(req,res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    },(e) => {
        res.status(400).send(e);
    })
})
app.get('/todos/:id', (req,res) => {
//    res.send(req.params);
    var id = req.params.id;
    Todo.findById({
        _id:id
    }).then((result) => {
        res.send(result);
    },(e) => {
        res.status(400).send(e);
    })
})
app.listen(port,() => {
    console.log(`Started on port ${port}`);
});