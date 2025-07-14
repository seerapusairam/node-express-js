const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.end("Homr page")
    }else if(req.url === '/about'){
        //blocking the code - until this block of code got executed we cant able to access remaining resources("/")
        for(let i=0;i<10;i++){
            for(let j=0;j<10;j++){
                console.log(`${i},${j}`)
            }
        }
        res.end("About page")
    }else{
        res.end(`
            <a href="/">"Go Back"</a>
            `)
    }
})

server.listen(5000)