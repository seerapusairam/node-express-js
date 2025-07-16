const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
//    const text = fs.readFileSync('./sample/big.txt','utf-8');
//     res.end(text)
    const file = fs.createReadStream('./sample/big.txt','utf-8');
    file.on("open",()=>{
        file.pipe(res) // as we read in stream we can send in stream so by using pipe we can send in stream.
    })
    file.on("error",(err)=>{
        res.end(err)
    })
}).listen(5000)