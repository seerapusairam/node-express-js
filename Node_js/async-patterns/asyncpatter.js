// const fs = require('fs')


//to make way more simpler we can directly add the promise in requried
const fs = require('fs').promises

const start = async () =>{
    try{
    const first = await fs.readFile('./sample/first.txt', 'utf-8') // Wait until the file is read, then assign it to first
    const second = await fs.readFile('./sample/second.txt', 'utf-8')
    await fs.writeFile('./sample/write.txt', `This is from:${first},${second}`,'utf-8')

    console.log(`${first}, ${second}`)
    }catch(error){
        console.log(error)
    }
}

start()

//using promise but by bulid in funtions 
// async/await was used to simplify
//this way is more cleaned without any callback or nested funtions 
// const start = async () =>{
//     try{
//     const first = await fs.promises.readFile('./sample/first.txt', 'utf-8') // Wait until the file is read, then assign it to first
//     const second = await fs.promises.readFile('./sample/second.txt', 'utf-8')
//     await fs.promises.writeFile('./sample/write.txt', `This is from:${first},${second}`,'utf-8')
//     }catch(error){
//         console.log(error)
//     }
// }

// start()

// promise on top of callback
// const first = () =>{
//     return new Promise((resolve, reject) => {
//         fs.readFile('./sample/first.txt', 'utf-8', (err,data)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// first()
//   .then((first) => console.log(first))
//   .catch(err => {
//     console.error(err);
//   });
