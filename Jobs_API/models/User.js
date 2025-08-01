const mongooes = require('mongoose')
const bcrypt = require('bcryptjs')

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
    },
})
// here we can remove next if we want to cuz in mongooes 5.x by default to next as we are using async/await
model.pre('save',async function(){
    const salt = await bcrypt.genSalt(10)// Generate a random salt (10 = cost factor, higher is more secure but slower)
    this.password = await bcrypt.hash(this.password,salt)// now we will combine salt hash + password and will hash the string
})

module.exports = mongooes.model("User",model)