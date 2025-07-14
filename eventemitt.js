const evenEmitter = require('events')

const custom = new evenEmitter()

custom.on('done',()=>{
    console.log(`hey!!`)
})

custom.on('done',(name,age)=>{
    console.log(`hey!! ${name} and ${age}`)
})

custom.emit('done',"sai",32)