const http = require('http')
const fs = require('fs')

//read the html file 
const homePage = fs.readFileSync('./web/index.html')
const homeStyle = fs.readFileSync('./web/style.css')

const server = http.createServer((req,res)=>{
    const url = req.url;
    //Home
    if(url == '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    //style
    }else if(url == '/style.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyle)
        res.end()
    //About page
    }else if(url == '/about'){
        res.writeHead(200,{'content-type':'application/json'})
        res.write(JSON.stringify({ "name":"About Page",x: 5, y: 6 }))
        res.end()
    //Error
    }else{
        res.writeHead(404,{'content-type':'application/json'})
        res.write(JSON.stringify({"Error":"Page Not Found"}))
        res.end()
    }
})

server.listen(5000, ()=>{
    console.log("Server was starting at 5000...")
})