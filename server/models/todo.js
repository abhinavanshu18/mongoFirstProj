var {mongoose} = require('./../db/mongoose.js')

var Todo = mongoose.model('Todo', {
   text: {
       type: String,
       required : true,
       default:"I'm default text",
       trim: true,
       minlength: 1
   },
    completed: {
        type: Boolean,
        default: null
    },
    completeAt: {
        type: Number,
        default: 0
    },
    email: {
        type:String,
        default: "email@email.com"
    }
});

module.exports = {
    Todo
};