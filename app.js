const fs = require('fs')

//default buffer size 64kb
//169kb file
//highWaterMark used to increase the buffer
const stream = fs.createReadStream('./sample/big.txt', {highWaterMark : 90000, encoding: 'utf-8'})
stream.on('data', (result)=>{
    console.log(result)
})

stream.on('error', (err)=>{
    console.log(err)
})