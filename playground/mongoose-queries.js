var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {ObjectID} = require('mongodb');
var id = '5b6a98fbd7e8a802c0e5e3fa';

//Todo.findById(id).then((todo) => {
//    if(!todo){
//      return console.log('Id not found');
//    }
//    console.log('Todo By Id', todo);
//   }).catch((e) => console.log(e));
if(!ObjectID.isValid(id)){
   return console.log('Id not valid');
}

Todo.findById({
    _id: id
}).then((todo) => {
    console.log("Todo", todo);
},(e) => {
    console.log("I'm the one who knocks")
})