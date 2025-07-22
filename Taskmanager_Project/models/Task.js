const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
name:{
        type:String,
        required: [true, 'Provide Name'],
        trim: true,// remove white space
        maxlength:20
    },
    completed:{
        type:Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task',taskSchema) 