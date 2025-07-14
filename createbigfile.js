const fs = require('fs')

for(let i=0;i<100000;i++){
    fs.writeFileSync('./sample/big.txt',`Hello there ${i}\n`, { flag : 'a' })
}