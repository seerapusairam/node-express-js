const mongooes = require('mongoose')

const jobSchema = new mongooes.Schema({
     company:{
        type:String,
        required:[true,'Please provide company name'],
        maxlength:50
     },
    position:{
        type:String,
        required:[true,'Please provide position name'],
        maxlength:100
     },
    status:{
        type:String,
        enum:['interview','declined','pending'],
        default:'pending'
    },
    createdBy:{
        type:mongooes.Types.ObjectId,
        ref:'User',
        required:[true,'Please provide user'],
    }
},{timestamps:true})

module.exports = mongooes.model('job',jobSchema)