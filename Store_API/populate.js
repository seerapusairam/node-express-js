/**
 * This file is to upload all our json data to the database
 */

require('dotenv').config()

const connectDB = require('./db/connect')
const model = require('./models/product')

const product = require('./products.json')

const start = async () =>{
    try {
        await connectDB(process.env.URL)
        await model.deleteMany()
        await model.create(product)
        console.log("Success")
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

start()