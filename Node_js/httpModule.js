//http module

const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end(`<h1>Home Page</h1>`)
    }else if(req.url === '/about'){
        res.end("About page")
    }else{ 
        res.end(`
        <h1>Oops!</h1>
        <p>Cant find the page your looking </p>
        <a href="/">Go Back</a>
        `)
}
})

server.listen(5000)