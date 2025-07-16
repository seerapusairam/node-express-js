//Sync method - execute step by step - nect step needs to wait until the current tast was completed
const fs = require('fs')

// const first = fs.readFileSync('./sample/first.txt','utf-8')
// const second = fs.readFileSync('./sample/second.txt','utf-8')

// console.log(first,second)

// fs.writeFileSync('./sample/write-file.txt',`hello from write file ${first}, ${second}`,"utf-8");

//async method - can run without stopping - use callback to get the data 

fs.readFile('./sample/first.txt', 'utf-8', (err,first)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(first);

    fs.readFile('./sample/second.txt', 'utf-8', (err,second)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(second);
    
    const data = `hello this is write file: ${first}, ${second}`
    fs.writeFile('./sample/write-async.txt', data, (err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("write completed")
    fs.readFile('./sample/write-async.txt', 'utf-8', (err,write)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(write);

})
})
})
})

//creadreadstream is used to take large files as chunks
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

//example to understand event-loop
// console.log("starting")
// fs.readFile('./sample/first.txt', 'utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(result)
//     }
// })
// console.log("ending")