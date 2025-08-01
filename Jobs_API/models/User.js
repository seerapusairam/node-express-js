const mongooes = require('mongoose')

const model = mongooes.Schema({
    name:{
        type:String,
        required:[true,"Please provide the name"],
        minlength: 3,
        maxlength: 50
    },
    email:{
        type:String,
        required:[true,"Please provide the name"],
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide valid email"
        ],
        unique: true
    },
    password:{
        type:String,
        required:[true,"Please provide the name"],
        minlength: 6,
        maxlength: 12
    },
})

module.exports = mongooes.model("User",model)