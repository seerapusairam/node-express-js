//path module -

const path = require('path')

console.log(path.sep);

const filePath = path.join('./sample','sub-folder', 'test.txt')
console.log(filePath);

const base = path.basename(filePath);
console.log(base) 

const abs = path.resolve(__dirname,'./sample','sub-folder', 'test.txt')
console.log(abs);