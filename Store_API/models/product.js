const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please provide name"]
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    price:{
        type:Number,
        required:[true, "Please provide price"]
    },
    company:{
        type:String,
        enum:{
            values:['ikea','liddy','caressa','marcos'],
            message:'{VALUE} is not supported'
        }
        //enum:['ikea','liddy','caressa','marcos']
    }
})

module.exports = mongoose.model('Product',productSchema)